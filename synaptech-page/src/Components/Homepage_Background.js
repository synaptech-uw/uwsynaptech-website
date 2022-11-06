import React, { Component } from "react";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Link from '../Components/BrainConnector.js';
import '../styles/Styles.css';
import StoreText from "../Components/StoreText";
import { Vector3 } from "three";
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

const HIGHLIGHTDELAY = 300;
const DRAWLINE_BLANK = 1;

class ThreeDBrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
                targets : props.targets, // Array of camera coordinates
                targetPOV : props.targets[0], // Which of the camera coordinates we have iterated to
                raycasts : props.rays, // Array of raycast coordinates (-1 to 1 on the screen in x and y)
                raycastXY : props.rays[0], // Which of the raycast coordinates we have iterated to.
                blurbCoords : props.blurbCoords, // Array of blurb coordinates (-1 to 1 on the screen in x and y)
                blurbXY : props.blurbCoords[0], // Which of the blurb coordinates (the pixel at the bottom left corner) we have iterated to.
                blurbs : props.blurb, // Array of StoreText blurbs.
                currBlurb : props.blurb[0], // Current StoreText blurb to load once within threshold.
                lookAtPoint : (new Vector3(0, 0, 0)), // Point for the camera to look at within 3JS coordinate system.
                height : 0, // Screen height (updated in componentDidMount)
                width : 0, // Screen width (updated in componentDidMount)
                thresholdCounter : 0, // Which threshold we have crossed last (starting from 0 and counting to the total number)
                animationCalled : false, // Unused
                tanFOV : Math.tan( ( ( Math.PI / 180 ) * 120 / 2 ) ), // Used by 3JS to create camera view. 55 here is the camera's FOV remember this
                ogWinHeight : window.innerHeight, // Tracks the original window height for initial FOV calculations
                ogWinWidth : window.innerWidth, // Tracks the original window width for initital FOV calculations
                drawLine : false // State used to tell drawLine to activate or not
              };
    this.lightTimer = []; // Used by the glowing light effect in 3JS
  };

// componentDidMount: Runs to initalize the component. Sets up the 3JS scene and adds EventListeners so we can tell where the user is on the page.
//                    The important part about this is that it sets up the initial position of the 3JS scene to be based on the top of the page.
  componentDidMount() {
      this.sceneSetup();
      this.populateScene();
      this.startAnimationLoop();
      window.addEventListener('resize', this.handleWindowResize);
      window.addEventListener('scroll', this.updateScrollPos);
      this.setState({
        width : window.innerWidth,
        height : window.innerHeight
      });
      window.addEventListener('pagehide', this.serializeCurrThresh)

      // Detects if there is a current threshold from the sessionStorage and loads it all into the current state.
      if (sessionStorage.getItem("currThreshold")) {
        const currThreshold = 0; // JSON.parse(sessionStorage.getItem("currThreshold"));
        this.setState({
          thresholdCounter : currThreshold,
          targetPOV : this.props.targets[currThreshold],
          raycastXY : this.props.rays[currThreshold],
          blurbXY : this.props.blurbCoords[currThreshold],
          currBlurb : this.props.blurb[currThreshold],
          drawLine : false
        });
        if (currThreshold % 2 === 1) {
          this.timer = setTimeout(() => {this.highlightPoint(this.state.raycastXY)}, HIGHLIGHTDELAY);
        }
        this.setState({drawLine : false})
      }
  }

  // componentWillUnmount: What is run when the component unmounts (which is called on page unload). Removes eventlisteners and saves the sessionstorage
  //                       so the user can return to the same scroll position after clicking off unless their session was restarted. Also cancels 3JS
  //                       animations
  componentWillUnmount() {
    sessionStorage.setItem("homeScroll", JSON.stringify(this.props.userScroll))
    window.removeEventListener("pagehide", this.serializeCurrThresh)
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener('scroll', this.updateScrollPos);
    window.cancelAnimationFrame(this.requestID);
  }

  // Component
  serializeCurrThresh = () => {
    sessionStorage.setItem("currThreshold", JSON.stringify(this.state.thresholdCounter));
  }

  updateScrollPos = () => {
    //console.log(this.props.userScroll);
    if (this.props.userScroll > this.props.thresholds[this.state.thresholdCounter] ) {
      const currThreshold = this.state.thresholdCounter;
      //console.log(this.props.thresholds[this.state.thresholdCounter]);
      this.setState({
        thresholdCounter : currThreshold + 1,
        targetPOV : this.props.targets[currThreshold + 1],
        raycastXY : this.props.rays[currThreshold + 1],
        blurbXY : this.props.blurbCoords[currThreshold + 1],
        currBlurb : this.props.blurb[currThreshold + 1],
        showLine : false
      });
      if(this.timer) {
        clearTimeout(this.timer);
      }

      if ( this.lightTimer.length !== 0 ) {
        //console.log(this.lightTimer);
        for ( let timeout = 0; timeout < this.lightTimer.length; timeout++ ) {
          clearTimeout(this.lightTimer[timeout]);
        }
        this.lightTimer = [];
      }

      this.rayLight.intensity = 0;
      if (this.state.thresholdCounter % 2 === 1) {
        this.timer = setTimeout(() => {this.highlightPoint(this.state.raycastXY)}, HIGHLIGHTDELAY);
      }
      this.setState({drawLine : false});

    } else if (this.props.userScroll < this.props.thresholds[this.state.thresholdCounter -1] ) {
      const currThreshold = this.state.thresholdCounter;
      //console.log(window.scrollY, this.props.thresholds[this.state.thresholdCounter]);
      this.setState({
        thresholdCounter : currThreshold - 1,
        targetPOV : this.props.targets[currThreshold - 1],
        raycastXY : this.props.rays[currThreshold - 1],
        blurbXY : this.props.blurbCoords[currThreshold - 1],
        currBlurb : this.props.blurb[currThreshold - 1],
        showLine : false
      });
      if(this.timer) {
        clearTimeout(this.timer);
      }
      if ( this.lightTimer.length !== 0 ) {
        //console.log(this.lightTimer);
        for ( let timeout = 0; timeout < this.lightTimer.length; timeout++ ) {
          clearTimeout(this.lightTimer[timeout]);
        }
        this.lightTimer = [];
      }
      this.rayLight.intensity = 0;
      if (this.state.thresholdCounter % 2 === 1) {
        this.timer = setTimeout(() => {this.highlightPoint(this.state.raycastXY)}, HIGHLIGHTDELAY);
      }
      this.setState({drawLine : false});
    }
    //console.log(this.props.thresholds[this.state.thresholdCounter])
  }

  handleWindowResize = () => {
    this.setState({
      width : window.innerWidth,
      height : window.innerHeight
    });
    this.camera.aspect = this.state.width / this.state.height;
    this.camera.fov = Math.min(50, ( 360 / Math.PI ) * Math.atan( this.state.tanFOV * ( this.state.ogWinWidth / this.state.ogWinHeight ) / ( window.innerWidth / this.state.ogWinWidth )));
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( this.state.width, this.state.height );
    this.reshapeTex(this.scene.background, this);
    // console.log(this.props.thresholds);
  };

  reshapeTex = (tex, reference) => {
    const canvasAspect = reference.camera.aspect;
    const imageAspect = tex.image ? tex.image.width / tex.image.height : 1;
    const aspect = imageAspect / canvasAspect;

    tex.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
    tex.repeat.x = aspect > 1 ? 1 / aspect : 1;

    tex.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
    tex.repeat.y = aspect > 1 ? 1 : aspect;
  }

  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({
      width : width,
      height : width
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
        Math.min(50, ( 360 / Math.PI ) * Math.atan( this.state.tanFOV * ( this.state.ogWinWidth / this.state.ogWinHeight ) / ( this.state.width / this.state.ogWinWidth ))), // fov = field of view
        width / height, // aspect ratio
        0.1, // near plane
        10 // far plane
    );

    // default camera position

    this.camera.z = 3;
    this.camera.y = 1;
    this.camera.z = 8;
    this.renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: true
      });
    this.renderer.setSize( width, height );
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.el.appendChild( this.renderer.domElement ); // mount using React ref

    //Load background texture
    function applyTex(tex, reference) {
      reference.reshapeTex(tex, reference);
      reference.scene.background = tex;
    };

    const loader = new THREE.TextureLoader();
    loader.load('./assets/background_without_logo.png' ,
    (texture) => applyTex(texture, this));
    this.raycaster = new THREE.Raycaster();
  };


  populateScene  = () => {
    const light = new THREE.AmbientLight(0x0E62AB, 2);
    light.position.set(0, -4, 0);
    this.scene.add(light);
    const light2 = new THREE.DirectionalLight(0x5599ff, 2);
    light2.position.set(0, 2, 0);
    this.scene.add(light2);
    const light3 = new THREE.DirectionalLight(0x5599ff, 2);
    light3.position.set(2, 0, 0);
    this.scene.add(light3);
    this.rayLight = new THREE.PointLight(0xFFFF00, 0, 0.2, 1.5);
    this.rayLight.position.set(0, 0, 0);
    this.scene.add(this.rayLight);

    // const raySphereGeo = new THREE.SphereBufferGeometry( 1/20, 16, 16 );
    // const raySphereMat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    // this.raySphere = new THREE.Mesh(raySphereGeo, raySphereMat);
    // this.raySphere.layers.set( 0 );
    // this.raySphere.position.set(0, 0, 0);
    // this.scene.add( this.raySphere );
    this.composer.addPass(new EffectPass(this.camera, new BloomEffect({
      //camera : this.camera,
      //lightSource : this.rayLight.position
    })));

    //Load brain object file
    var loader = new OBJLoader();

    //Create material for object
    const testMat = new THREE.MeshLambertMaterial({
      color: 0x5555555,
      //wireframe: true
      //flatShading: false,
      //emissive: 0x3399ff
      });

    //load Brain into directory
    function loadedBrain( brain, scene) {
      brain.traverse((node) => {
        if(node.isMesh) node.material = testMat;
      });
      const scaleFac = 0.01;
      brain.scale.set(scaleFac, scaleFac, scaleFac);
      brain.rotateY(4.5)
      brain.position.x = 0;
      brain.position.y = -1;
      brain.position.z = 0;
      brain.name = "Brain"
      scene.add(brain);
    }
    loader.load('./assets/Brain.obj',
      (out) => loadedBrain( out, this.scene ),
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function(error) {
        console.log("An error happened" + error);
      }
    );
    //this.composer.addPass(new EffectPass(this.camera, new GodRaysEffect(this.camera, this.raySphere)))
  };


  startAnimationLoop = () => {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.updateCamera();
    this.renderer.render( this.scene, this.camera );
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  updateCamera = () => {
    //console.log(this.state.targetPOV);
    const targetPos = this.state.targetPOV;;
    const lookAtCoord = this.state.lookAtPoint;

    // Right now this only runs once?
    this.camera.position.lerp(targetPos, 0.1);
    this.camera.lookAt(lookAtCoord);
  }

  highlightPoint = (coords) => {
    this.raycaster.setFromCamera(coords,  this.camera);
    var intersects = this.raycaster.intersectObjects(this.scene.children);
    //console.log(intersects);
    if (intersects.length !== 0) {
      const pointVec = intersects[0].point//.applyMatrix4(this.camera.matrixWorld);
      const camZVec = (new Vector3(0, 0, 0.10));
      camZVec.applyQuaternion(this.camera.quaternion);
      const vec = pointVec.add(camZVec);
      //console.log(vec);
      this.rayLight.position.set(vec.x, Math.floor(vec.y*1000)/1000, vec.z);
      //this.raySphere.position.set(vec.x, vec.y, vec.z);
      this.rayLight.intensity = 50*Math.sin(1/100);
      for( let v = 1; v <= 157; v++ ) {
        if (this.rayLight.intensity > 0) {
          this.lightTimer.push(setTimeout(() => {
            this.rayLight.intensity = ((20)*Math.sin(v/100));
            // this.raySphere.scale.set(v/157, v/157, v/157);
          }, (10*v)));
        }
        this.lightTimer.push(setTimeout(() => {
          this.setState({drawLine : true})
          // console.log(this.state.drawLine);
          // console.log(this.state.raycastXY);
        }, (DRAWLINE_BLANK)));
      }
    }
  }
  //Write event when user scrolls to certain points on the scrollbar. Have certain waypoints that
  //trigger specific camera movements at that point.

  render() {
      return(
        <>
          <div className = "ThreeScene" ref={ref => (this.el = ref)}>
            <div className = {(this.state.thresholdCounter %2 === 0 ) ? "blur-on" : "blur-off"}/>
          <StoreText showClass = {
              (this.state.drawLine) ? "storeText" : "storeText-hidden"
            } title={this.state.currBlurb[0]} coords = {this.state.blurbXY} elems={this.state.currBlurb[1]}></StoreText>
            {/* UNUSED DRAWLINE CODE REPURPOSE FOR LATER?? */}
          {/* { ( this.state.drawLine ) && <Link
            startX = { (this.state.width*this.state.blurbXY.x)/2 + this.state.width/2 }
            startY = { -((window.innerHeight*this.state.blurbXY.y/2) - window.innerHeight/2) }
            endX = { (this.state.width*this.state.raycastXY.x)/2 + this.state.width/2 }
            endY = { -((window.innerHeight*this.state.raycastXY.y/2) - window.innerHeight/2) }
          /> } */}
          </div>
        </>
      );
  }
}

// class ThreeScene extends Component {

//   constructor(props) {
//     super(props);
//   }

//   state = { isMounted: true };
//   render() {
//     const { isMounted = true } = this.state;
//     return (
//       <>
//         <button
//           onClick={() =>
//             this.setState(state => ({ isMounted: !state.isMounted }))
//           }
//         >
//           {isMounted ? "Unmount" : "Mount"}
//         </button>
//         {isMounted && <LoadBrain userScroll = {this.props.userScroll} targets = {this.props.targets} thresholds = {this.props.thresholds} rays = {this.props.rays} />}
//         {isMounted && <div>Scroll to zoom, drag to rotate</div>}
//       </>
//     );
//   }
// }

export default ThreeDBrain;
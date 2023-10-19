import React, { Component } from "react";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import '../styles/Styles.css';
import { Vector3 } from "three";
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

class ThreeDBrainBG extends Component {
  constructor(props) {
    super(props);
    this.state = {
                targetPOV : (new Vector3(0, 0, 8)),
                lookAtPoint : (new Vector3(0, 0, 0)),
                height : 0,
                width : 0,
                animationCalled : false,
                tanFOV : Math.tan( ( ( Math.PI / 180 ) * 120 / 2 ) ), //55 here is the camera's FOV remember this
                ogWinHeight : window.innerHeight,
                ogWinWidth : window.innerWidth,
              };
  };

  componentDidMount() {
      this.sceneSetup();
      this.populateScene();
      this.startAnimationLoop();
      window.addEventListener('resize', this.handleWindowResize);
      this.setState({
        width : window.innerWidth,
        height : window.innerHeight
      });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
  };

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
  };

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
      tex.colorSpace = THREE.SRGBColorSpace;
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
    this.camera.position.lerp(targetPos, 0.08);
    this.camera.lookAt(lookAtCoord);
  }

  //Write event when user scrolls to certain points on the scrollbar. Have certain waypoints that
  //trigger specific camera movements at that point.

  render() {
      return(
        <>
          <div className = "ThreeScene" ref={ref => (this.el = ref)}>
            <div className ={"blur-on"}>
            </div>
          </div>
        </>
      );
  }
}
export default ThreeDBrainBG;
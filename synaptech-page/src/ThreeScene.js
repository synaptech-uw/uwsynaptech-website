import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
//import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import './App.css';

class LoadBrain extends Component {
  super(props) {

  }

  componentDidMount() {
      this.sceneSetup();
      this.addCustomSceneObjects();
      this.startAnimationLoop();
      window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize( width, height );
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };
  
  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
        75, // fov = field of view
        width / height, // aspect ratio
        0.1, // near plane
        1000 // far plane
    );
    this.controls = new OrbitControls( this.camera, this.el);
  
    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    this.el.appendChild( this.renderer.domElement ); // mount using React ref
  };


  addCustomSceneObjects  = () => {
    
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this.scene.add(light);

    //Load brain object file
    var loader = new OBJLoader();
    
    //Create material for object
    const testMat = new THREE.MeshLambertMaterial({
      color: 0x5555555,
      // wireframe: true
      //flatShading: false,
      emissive: 0x3399ff
      });

    //const scene = this.scene;
    function loadedBrain( brain, scene) {

      brain.traverse((node) => {
        if(node.isMesh) node.material = testMat;
      });
      brain.scale.set(0.01, 0.01, 0.01);
      brain.rotateY(4.5)
      brain.position.x = 0;
      brain.position.y = 0;
      brain.position.z = 1;
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
  };

  startAnimationLoop = () => {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };
 
  render() {
      return <div className = "ThreeScene" ref={ref => (this.el = ref)} />;
  }
}

class ThreeScene extends React.Component {
  state = { isMounted: true };

  render() {
    const { isMounted = true } = this.state;
    return (
      <>
        <button
          onClick={() =>
            this.setState(state => ({ isMounted: !state.isMounted }))
          }
        >
          {isMounted ? "Unmount" : "Mount"}
        </button>
        {isMounted && <LoadBrain />}
        {isMounted && <div>Scroll to zoom, drag to rotate</div>}
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ThreeScene />, rootElement);

export default ThreeScene;
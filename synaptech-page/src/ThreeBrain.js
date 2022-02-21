import { useEffect, useRef } from "react";
import * as THREE from "three";
import './App.css';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
function ThreeBrain() {

  const mountRef = useRef(null);

  useEffect(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );

    mountRef.current.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // Default cube that appears before model is loaded
    function makeCube(geo, color, x) {
      const mat = new THREE.MeshPhongMaterial({color});
      const cube = new THREE.Mesh(geo, mat);
      cube.position.x = x;
      return cube;
    }
    const cube = makeCube(geometry, 0x0000ff, 0);
    //scene.add(cube)
    camera.position.z = 5;



    var loader = new OBJLoader();
    var isLoaded = false;

    const testMat = new THREE.MeshLambertMaterial({
      color: 0x5555555,
      // wireframe: true
      flatShading: false,
      emissive: 0x3399ff
      });
    var brain = cube;

    loader.load('./assets/Brain.obj',
      function(out) {
        brain = out;
        brain.traverse((node) => {
          if(node.isMesh) node.material = testMat;
        });
        brain.scale.set(0.01, 0.01, 0.01);
        console.log(brain);
        scene.add(brain);
        isLoaded = true;
        brain.material.needsUpdate = true;
      },
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function(error) {
        console.log("An error happened" + error);
      }
    );

      var animate = function () {
        requestAnimationFrame( animate );
        brain.rotation.x += -0.01;
        brain.rotation.y += 0.05;
        brain.rotation.z += -0.01;
        renderer.render( scene, camera );
      };

      animate();
    return () => mountRef.current.removeChild( renderer.domElement);
  }, []);

  return (
    <div ref={mountRef}>

    </div>
  );
}

export default ThreeBrain;
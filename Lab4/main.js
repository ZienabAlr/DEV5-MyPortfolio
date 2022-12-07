import './style.css'
import * as THREE from 'three';// importing three.js library
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
//creating a scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//creating a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//orbit controls
const controls = new OrbitControls( camera, renderer.domElement );// this is for orbit controls  this helps to move the camera around the scene 

// light
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

//ambient light
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight ); 


// creating sphere geometry
const loader = new THREE.TextureLoader();
const texture = loader.load('textures/fantasy.webp');
const geometry = new THREE.SphereGeometry( 80, 32, 32 ); //radius, width segments, height segments
const material = new THREE.MeshBasicMaterial( {color: 0xffffff } );
material.map = texture;
material.side = THREE.BackSide;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

//water ground

const loaderWater = new THREE.TextureLoader();
const textureWater = loaderWater.load('textures/water.webp');
const waterGeometry = new THREE.BoxGeometry( 50, 0.25, 50 );
const waterMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
waterMaterial.map = textureWater;
const water = new THREE.Mesh( waterGeometry, waterMaterial );
scene.add( water );
water.position.y = -4;


function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();

camera.position.z = 10;
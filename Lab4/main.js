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

//first floor
const loaderWood = new THREE.TextureLoader();
const textureWood = loaderWater.load('textures/wood.webp');
const houseGeometry = new THREE.BoxGeometry( 5, 3, 5 );
const houseMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
houseMaterial.map = textureWood;
const house = new THREE.Mesh( houseGeometry, houseMaterial );
scene.add( house );
house.position.y = 2.5;


//second floor
const houseGeometry2 = new THREE.BoxGeometry(4.5, 1.5, 4.5 );
const houseMaterial2 = new THREE.MeshBasicMaterial( { color: 0x00000 } );
const house2 = new THREE.Mesh( houseGeometry2, houseMaterial2 );
scene.add( house2 );
house2.position.y = 0.3;
 house2.rotation.y = 0.7;

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();

camera.position.z = 10;
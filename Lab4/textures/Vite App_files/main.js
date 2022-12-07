import '/style.css'
import * as THREE from '/node_modules/.vite/deps/three.js?v=a10cd00e';// importing three.js library
import { OrbitControls } from '/node_modules/.vite/deps/three_examples_jsm_controls_OrbitControls__js.js?v=a10cd00e'; 


//creating a scene
const scene = new THREE.Scene();

//creating a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//creating a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//orbit controls
const controls = new OrbitControls( camera, renderer.domElement );


// creating sphere geometry
const loader = new THREE.TextureLoader();
const texture = loader.load('textures/fantasy.webp');
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffffff } );

material.map = texture;
material.side = THREE.BackSide;

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

//water 

const loaderWater = new THREE.TextureLoader();
const textureWater = loaderWater.load('textures/fantasy-water.webp');
const waterGeometry = new THREE.BoxGeometry( 50, 0.25, 50 );
const waterMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
waterMaterial.map = textureWater;
const water = new THREE.Mesh( waterGeometry, waterMaterial );
scene.add( water );


//add box geometry
const loaderWood = new THREE.TextureLoader();
const textureWood = loaderWater.load('textures/wood.webp');
const houseGeometry = new THREE.BoxGeometry( 2, 1, 2 );
const houseMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
houseMaterial.map = textureWood;
const house = new THREE.Mesh( houseGeometry, houseMaterial );
scene.add( house );

//add box geometry
const houseGeometry2 = new THREE.BoxGeometry(1.5, 0.7, 1.5 );
const houseMaterial2 = new THREE.MeshBasicMaterial( { color: 0x00000 } );
const house2 = new THREE.Mesh( houseGeometry2, houseMaterial2 );
scene.add( house2 );

//add box geometry
const loaderWood2 = new THREE.TextureLoader();
const textureWood2 = loaderWater.load('textures/wood.webp');
const houseGeometry3 = new THREE.BoxGeometry( 2, 1, 2 );
const houseMaterial3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
houseMaterial3.map = textureWood2;
const house3 = new THREE.Mesh( houseGeometry3, houseMaterial3 );
scene.add( house3 );

// add plane geometry
const planeGeometry = new THREE.PlaneGeometry( 2, 2 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );

const planeGeometry2 = new THREE.PlaneGeometry( 2, 2 );
const planeMaterial2 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
scene.add( plane2 );





//animation loop
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  water.position.y = -4;
  house.position.y = -3.5;
  house2.position.y = -2.7;
  house2.rotation.y = 0.7;
  house3.position.y = -2;
  // plane.position.y = -1.5;
  plane.position.x = 1.5;
  plane.rotation.x = 0.7;
  plane2.rotation.x = -0.7;

  
  // sphere.rotation.x += 0.01;
  // sphere.rotation.y += 0.01;
  
}
animate();

camera.position.z = 10;





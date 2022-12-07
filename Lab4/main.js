import './style.css'
import * as THREE from 'three';// importing three.js library
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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

//third floor 
const loaderWood2 = new THREE.TextureLoader();
const textureWood2 = loaderWater.load('textures/wood.webp');
const houseGeometry3 = new THREE.BoxGeometry( 5, 3, 5); 
const houseMaterial3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
houseMaterial3.map = textureWood2;
const house3 = new THREE.Mesh( houseGeometry3, houseMaterial3 );
scene.add( house3 );
house3.position.y = -2;

// roof
const planeGeometry = new THREE.PlaneGeometry( 5, 5 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );
plane.rotation.x = 0.9;
plane.position.z = -1.93; 
plane.position.y = 4.5; 

const planeGeometry2 = new THREE.PlaneGeometry( 5, 5 );
const planeMaterial2 = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
scene.add( plane2 );
plane2.position.y = 4.5; 
plane2.rotation.x = -0.9;
plane2.position.z = 1.93;

//White board
const boardGeometry = new THREE.BoxGeometry( 0.1, 5, 5 );
const boardMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff } );
const BoardTexture = loader.load('textures/Zienab.webp');
const whiteBoard = new THREE.Mesh( boardGeometry, boardMaterial );
whiteBoard.material.map = BoardTexture;
scene.add( whiteBoard );
whiteBoard.position.y = -1.5;
whiteBoard.position.x = -1.5;
whiteBoard.position.z = -5.5;

const daimondTexture = new THREE.TextureLoader().load('textures/light2.webp');

// power diamonds 
const addDiamond = (x,y,z) => {

  const diamondGeometry = new THREE.IcosahedronGeometry( 1, 0 );
  const diamondMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  diamondMaterial.map = daimondTexture;
  const diamond= new THREE.Mesh( diamondGeometry, diamondMaterial );
  scene.add( diamond );
  diamond.position.set(x, y, z); // positie van de diamant

}

for (let i = 0; i < 20; i++) {
  //random sign for x and z
  let sign = Math.random() < 0.5 ? 1 : -1;
  const x = Math.random() * 30* sign; // 30 is the max distance from the center of the scene // random x position between -10 and 10

  sign = Math.random() < 0.5 ? 1 : 1.6;//random sign for y and z   < 0.5 ? 1 : -1; betekent dat er een 50% kans is dat het 1 is en een 50% kans dat het -1 is
  const y = Math.random() * 30* sign; // random y position between -10 and 10   
  
  sign = Math.random() < 0.5 ? 1 : -1; //diepte 
  const z = Math.random() * 30* sign;
  addDiamond(x, y, z);
}

let guardianBird; 
const gltfLoader = new GLTFLoader();// liever van boven defineren en dan pas aanroepen
      
  gltfLoader.load('models/my_animated_ho-oh/scene.gltf', (gltf) => {
    guardianBird= gltf.scene;
    console.log(gltf);
    scene.add(gltf.scene);
  });

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

  scene.children.forEach((child) => {
    if (child instanceof THREE.Mesh && child != sphere && child != water && child != house && child != house2 && child != house3 && child != plane && child != plane2 && child != whiteBoard) {
      child.rotation.y += 0.04;
      child.rotation.x += 0.04;
      child.rotation.z += 0.04;
    }
  });
}
animate();

camera.position.z = 10;
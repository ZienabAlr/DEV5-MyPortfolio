import './style.css'
import * as THREE from 'three';// importing three.js library

//creating a scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//creating a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// creating sphere geometry
const loader = new THREE.TextureLoader();
const texture = loader.load('textures/fantasy.webp');
const geometry = new THREE.SphereGeometry( 80, 32, 32 ); //radius, width segments, height segments
const material = new THREE.MeshBasicMaterial( {color: 0xffffff } );
material.map = texture;
material.side = THREE.BackSide;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );



import './style.css'
import * as THREE from 'three';// importing three.js library


// creating a scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add some geometry
// create earth
const geometry = new THREE.SphereGeometry( 1, 32, 32 ); // (vorm) radius, width segments, height segments
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); // (kleur) color
const earth = new THREE.Mesh( geometry, material ); // here we create the mesh (object) with the geometry and material 
scene.add( earth );
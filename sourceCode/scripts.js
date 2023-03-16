import * as THREE from '../node_modules/three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'


// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
camera.position.set(0, 10, 10);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
// making container to add renderer
container = document.getElementById("container");
container.appendChild(renderer.domElement);

const animate = function () {

    renderer.render( scene, camera );
};

renderer.setAnimationLoop(animate);

// making object 3d rotatable through orbit control
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// light
const light1 = new THREE.DirectionalLight(0xffffff, 1,100);
light1.position.set(0,10,10);
scene.add(light1);
const light2 = new THREE.DirectionalLight(0xffffff, 1,100);
light2.position.set(0,-10,-10);
scene.add(light2);


// creating sphere
const geometry = new THREE.SphereGeometry(3,64, 64);
const material = new THREE.MeshStandardMaterial( { color: 0x00ffff } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// color changes
document.getElementById("change").onclick = function()
{
    sphere.material.color.copy(new THREE.Color(document.getElementById("insertedColor").value));
}


document.getElementById('cyan').onclick = function() {
    sphere.material.color.setHex(0x00ffff);
}

document.getElementById('red').onclick = function() {
    sphere.material.color.setHex(0xff0000);
}



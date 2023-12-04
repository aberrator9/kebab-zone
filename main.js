import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const color = 0xFFFFFF;
const intensity = 30;
const light = new THREE.SpotLight(color, intensity);
light.position.set(0, 0, 5);
scene.add(light);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.05;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
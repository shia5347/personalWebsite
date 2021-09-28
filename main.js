import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,500/500,0.1,500);
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();
const light = new THREE.AmbientLight(0xffffff,0.8);
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );

light.position.set(50,50,50);

let gun; //model

let makeModel = class model {

constructor(modelPath, px, py, pz){
loader.load(modelPath, (gltf) => {
  gun = gltf.scene;
  scene.add(gun);
  gun.position.x = px;
  gun.position.y = py;
  gun.position.z= pz;
});
}
}

let Model = new makeModel("models/Sword.glb",0,-1.5,0);
const controls = new OrbitControls( camera, renderer.domElement );

controls.enableZoom = false;

renderer.setSize(500,500);
document.getElementById("container").appendChild(renderer.domElement);

camera.position.z = 5 

renderer.setClearColor( 0x262626, 1 );


//Scene add calls
scene.add(light);
scene.add(directionalLight);

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}



animate();


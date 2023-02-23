import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';

/**
 * Variables
 */

// Main Settings
const settings = {
  xThreshold: 8,
  yThreshold: 8,
  originalImagePath:
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/432eecef-c63a-4099-88b5-6626549046f5/elephant-defuse.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230223T091134Z&X-Amz-Expires=86400&X-Amz-Signature=d369311f5e53c0a98c1ec8ebc80f52ca20a0a1bcb71a95262d622c52f49a8ae7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22elephant-defuse.jpg%22&x-id=GetObject',
  depthImagePath:
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/af00448b-936c-443e-a5e5-76af0fc9ebb4/elephant-depth.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230223T090723Z&X-Amz-Expires=86400&X-Amz-Signature=9eecff7a6db433c892a177939e0e2d6450627b6934feba0331dfc1624caea9aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22elephant-depth.jpg%22&x-id=GetObject',
};

// Sizes
const sizes = {
  width: 1010,
  height: 736,
};

// Image Details
let originalImage = null;
let depthImage = null;
let stableImage = null;
const originalImageDetails = {
  width: 0,
  height: 0,
  aspectRatio: 0,
};

// Geometries and Material
let planeGeometry = null;
let planeMaterial = null;
let plane = null;

// Cursor Settings
const cursor = {
  x: 0,
  y: 0,
  lerpX: 0,
  lerpY: 0,
};

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0.7;
scene.add(camera);

const fovY = (camera.position.z * camera.getFilmHeight()) / camera.getFocalLength();

/**
 * Images
 */

const manager = new THREE.LoadingManager();

manager.onLoad = () => {
  localStorage.setItem('isTextureLoaded', JSON.stringify('true'));
  window.dispatchEvent(new Event('storage'));
};

const textureLoader = new THREE.TextureLoader(manager);

const loadImages = () => {
  if (originalImage !== null || depthImage !== null || stableImage !== null) {
    originalImage.dispose();
    depthImage.dispose();
    stableImage.dispose();
  }
  depthImage = textureLoader.load(settings.depthImagePath);
  stableImage = textureLoader.load(settings.stableImagePath);

  originalImage = textureLoader.load(settings.originalImagePath, (tex) => {
    originalImageDetails.width = tex.image.width;
    originalImageDetails.height = tex.image.height;
    originalImageDetails.aspectRatio = tex.image.height / tex.image.width;

    create3dImage();
    resize();
  });
};

loadImages();

/**
 * Create 3D Image
 */

const create3dImage = () => {
  // Cleanup Geometry for GUI
  if (plane !== null) {
    planeGeometry.dispose();
    planeMaterial.dispose();
    scene.remove(plane);
  }

  planeGeometry = new THREE.PlaneBufferGeometry(1, 1);

  planeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      originalTexture: { value: originalImage },
      depthTexture: { value: depthImage },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uThreshold: { value: new THREE.Vector2(settings.xThreshold, settings.yThreshold) },
    },
    fragmentShader: `
      precision mediump float;
      uniform sampler2D originalTexture; 
      uniform sampler2D depthTexture; 
      uniform vec2 uMouse;
      uniform vec2 uThreshold;

      varying vec2 vUv;

      vec2 mirrored(vec2 v) {
        vec2 m = mod(v,2.);
        return mix(m,2.0 - m, step(1.0 ,m));
      }

      void main() {
        vec4 depthMap = texture2D(depthTexture, mirrored(vUv));
        vec2 fake3d = vec2(vUv.x + (depthMap.r - 0.5) * uMouse.x / uThreshold.x, vUv.y + (depthMap.r - 0.5) * uMouse.y / uThreshold.y);

        gl_FragColor = texture2D(originalTexture,mirrored(fake3d));
      }
    `,
    vertexShader: `
      varying vec2 vUv; 

      void main() {
        vUv = uv; 

        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `,
  });

  plane = new THREE.Mesh(planeGeometry, planeMaterial);

  scene.add(plane);
};
create3dImage();

/**
 * Resize
 */

const resize = () => {
  // Update sizes
  // sizes.width = window.innerWidth;
  // sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update Image Size
  if (sizes.height / sizes.width < originalImageDetails.aspectRatio) {
    plane.scale.set(
      fovY * camera.aspect,
      (sizes.width / sizes.height) * originalImageDetails.aspectRatio,
      1
    );
  } else {
    plane.scale.set(fovY / originalImageDetails.aspectRatio, fovY, 1);
  }

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

window.addEventListener('resize', () => {
  resize();
});

/**
 * Cursor
 */

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

window.addEventListener('mouseout', () => {
  cursor.x = 0;
  cursor.y = 0;
});
window.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  cursor.x = touch.pageX / sizes.width - 0.5;
  cursor.y = touch.pageY / sizes.height - 0.5;
});

window.addEventListener('touchend', () => {
  cursor.x = 0;
  cursor.y = 0;
});

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xffffff, 0);

/**
 * Animate
 */

const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  // Set Cursor Variables
  const parallaxX = cursor.x * 0.5;
  const parallaxY = -cursor.y * 0.5;

  cursor.lerpX += (parallaxX - cursor.lerpX) * 5 * deltaTime;
  cursor.lerpY += (parallaxY - cursor.lerpY) * 5 * deltaTime;

  // Mouse Positioning Uniform Values
  planeMaterial.uniforms.uMouse.value = new THREE.Vector2(cursor.lerpX, cursor.lerpY);

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

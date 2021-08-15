import { Cartesian3, Viewer } from 'cesium';

let lastNow: number | null = null;
let eventHandler: () => void;

const doRotate = (viewer: Viewer, rotationSpeed: number) => {
  const now = Date.now();
  // Positiv: rotates from left to right
  const spinRate = rotationSpeed;
  const delta = (now - (lastNow ?? now)) / 1000;

  lastNow = now;

  viewer.scene.camera.rotate(Cartesian3.UNIT_Z, spinRate * delta);
};

const startRotation = (viewer: Viewer, rotationSpeed = 0.5) => {
  lastNow = Date.now();
  eventHandler = () => doRotate(viewer, rotationSpeed);

  viewer.scene.postRender.addEventListener(eventHandler);
};

const stopRotation = (viewer: Viewer) => {
  viewer.scene.postRender.removeEventListener(eventHandler);
};

export { startRotation, stopRotation };

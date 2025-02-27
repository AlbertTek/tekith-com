import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GeometricElementProps {
  type?: 'cube' | 'sphere';
  size?: number;
  wireframe?: boolean;
  color?: string;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  className?: string;
}

const GeometricElement: React.FC<GeometricElementProps> = ({
  type = 'cube',
  size = 2,
  wireframe = true,
  color = '#9013FE',
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0.01, y: 0.01, z: 0 },
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometry setup
    let geometry;
    if (type === 'cube') {
      geometry = new THREE.BoxGeometry(size, size, size);
    } else {
      geometry = new THREE.SphereGeometry(size, 32, 32);
    }

    // Material setup
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: wireframe,
    });

    // Mesh setup
    const object = new THREE.Mesh(geometry, material);
    object.position.set(position.x, position.y, position.z);
    scene.add(object);
    objectRef.current = object;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (objectRef.current) {
        objectRef.current.rotation.x += rotation.x;
        objectRef.current.rotation.y += rotation.y;
        objectRef.current.rotation.z += rotation.z;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (objectRef.current) {
        geometry.dispose();
        material.dispose();
        scene.remove(objectRef.current);
      }
    };
  }, [type, size, wireframe, color, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z]);

  return <div ref={mountRef} className={className} />;
};

export default GeometricElement;
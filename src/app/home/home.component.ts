import { Component, NgModule } from '@angular/core';
import * as THREE from 'three';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {


  private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private earth: THREE.Mesh = new THREE.Mesh();
  private planets: THREE.Mesh[] = [];

  circles: Circle[] = [];
  // Define an array of distinct colors
  circleColors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff", "#ffff00", "#f0f0f0", "#ff9900", "#9900ff", "#00cc00"];
labels = ["SQL", "Python", "numpy", "pandas", "scipy", "matplotlib", "cufflinks", "Kmeans Cluster", "Git"];



constructor(private router: Router,private activedRoute: ActivatedRoute) {
  const numCircles = 9;
  const radius = 250; // Adjust the radius as needed
  const centerX = 400; // X-coordinate of the "GO" circle
  const centerY = 300; // Y-coordinate of the "GO" circle

  for (let i = 0; i < numCircles; i++) {
      const angle = (i / numCircles) * 2 * Math.PI;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      this.circles.push({ x, y });
  }
}


handleCircleClick(circleIndex: number) {
  const clickedLabel = this.labels[circleIndex];
  if (clickedLabel === 'SQL') {
    // Redirect to the SQL Path screen
    this.router.navigate(['/sqlpath']);
  }
  // Add handling for other circles or labels as needed
}



  ngOnInit(): void {
    this.setupScene();
    this.createEarth();
    this.createPlanets();

    this.animate();
  }

  setupScene() {
    // Create a Three.js scene
    this.scene = new THREE.Scene();

    // Create a camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Create a WebGLRenderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Get the container element
    const container = document.getElementById('canvas-container');

    // Check if the container element exists
    if (container) {
      // Append the renderer's DOM element to the container
      container.appendChild(this.renderer.domElement);
    } else {
      console.error('Canvas container element not found.');
    }
  }



  createEarth() {
    // Create the Earth geometry and material
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/earth1.jpg');
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    this.earth = new THREE.Mesh(geometry, earthMaterial);
    this.scene.add(this.earth);
  }













  // ...

  createPlanets() {
    // Create the Milky Way geometry and material
    const radius = 1000; // Adjust the radius to make it fill the screen
    const geometry1 = new THREE.SphereGeometry(radius, 32, 32); // Increase the radius
    const material1 = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.7, color: 0x0000ff }); // Adjust opacity as needed
    const milkyWay = new THREE.Mesh(geometry1, material1);
    milkyWay.position.set(0, 0, 0); // Centered in the scene

    // Add Milky Way to the scene
    this.scene.add(milkyWay);

    // Create the first planet geometry and material
    const geometry2 = new THREE.SphereGeometry(1, 16, 16);
    const textureLoader2 = new THREE.TextureLoader();
    const planetTexture2 = textureLoader2.load('assets/milkyway.jpg'); // Replace with your image path
    const material2 = new THREE.MeshBasicMaterial({ map: planetTexture2 });
    const planet2 = new THREE.Mesh(geometry2, material2);
    planet2.position.set(4, 0, 0); // Adjust the position

    // Add planets to the scene
    this.scene.add(planet2);

    // Store the planets in your class array for further manipulation or animation
    // this.planets.push(planet2);
}



  // ...


  animate() {
    // Implement the animation loop to rotate the Earth and planets
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth
      if (this.earth) {
        this.earth.rotation.y += 0.002;
      }
      

      // Add rotation logic for other planets here

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }







}

interface Circle {
  x: number;
  y: number;
}


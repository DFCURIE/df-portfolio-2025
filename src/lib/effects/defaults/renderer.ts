import * as THREE from "three"

export class MeshRenderer {
    // Properti instance
    container: HTMLElement; 
    scene: THREE.Scene; 
    camera: THREE.PerspectiveCamera; 
    renderer: THREE.WebGLRenderer;

    constructor(container: HTMLElement) {
        this.container = container;
        this.scene = new THREE.Scene();
    }

    private get dimensions(): { width: number, height: number, aspect: number } {
        let width = window.innerWidth;
        let height = this.container.getBoundingClientRect().height;
        let aspect = width / height;
        return { width, height, aspect };
    }

    setup() {
        // Kamera perspektif
        const fov = (180 * (2 * Math.atan(this.dimensions.height / 2 / 1000))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.dimensions.aspect, 1, 1000)
        this.camera.position.set(0, 0, 1000); // Posisi kamera pada sumbu z

        // Set Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.dimensions.width, this.dimensions.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        window.addEventListener('resize', this.windowResize.bind(this), false);

        this.render();
    }

    windowResize() {
        // Sesuaikan aspect ratio dan fov ketika window diubah ukurannya
        this.camera.aspect = this.dimensions.aspect;
        this.camera.fov = (180 * (2 * Math.atan(this.dimensions.height / 2 / 1000))) / Math.PI;

        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.dimensions.width, this.dimensions.height);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}
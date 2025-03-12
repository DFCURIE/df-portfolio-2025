import * as THREE from "three";
import { workScrollSpeed } from "../../store";
import { ImageMesh } from "../defaults/image-mesh";
import { fragmentShader, vertexShader } from "./shaders";

export class SliderImageMesh extends ImageMesh {
    speed: number; 
    clock: THREE.Clock;

    constructor(element: HTMLImageElement, scene: THREE.Scene) {
        let shaders = {
            vertex: vertexShader,
            fragment: { 
                vertical: fragmentShader().vertical,
                horizontal: fragmentShader().horizontal
            }
        }

        let uniforms = {
            uTime: {
                value: 0.0
            },
            uOffset: { // Kekuatan distorsi
                value: new THREE.Vector2(0.0, 0.0)
            },
            uAlpha: { // Opasitas
                value: 0.7
            }
        }

        super(element, scene, shaders, element.parentElement!, uniforms);

        this.clock = new THREE.Clock();
        workScrollSpeed.subscribe(val => { // Dapatkan kecepatan slider dari svelte stores
            this.speed = val;
        });
    }

    createMesh(): void {
        super.createMesh();
        this.element.parentElement!.style.visibility = "hidden"; // Sembunyikan elemen gambar asli
    }

    render(): void {
        super.render();

        // Efek distorsi dan warping
        this.uniforms.uOffset!.value.set(this.speed * -0.0003, Math.abs(this.speed * 0.00005));
        this.uniforms.uTime!.value = this.clock.getElapsedTime() * 0.8;
    }
}
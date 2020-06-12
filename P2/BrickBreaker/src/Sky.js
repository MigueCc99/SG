/**
 * Class Sky
 * @description represents the sky, which is a sphere with a texture assigned
 * 
 * @author Miguel Ángel Campos Cubillas
 */

class Sky extends THREE.Object3D {

    constructor(parameters) {
        super();

        // Material (image) for the skybox
        this.background = (parameters.background === undefined ? new THREE.MeshBasicMaterial({ color: 0x000000 }) : parameters.background);
        
        // Sphere size
        this.sphereRadius = 500;
        this.add(this.createSkybox());
    }

    // Creates the sky sphere
    createSkybox() {
        var geometry = new THREE.SphereGeometry(this.sphereRadius, 32, 32);
        var sphere = new THREE.Mesh(geometry, this.background);

        sphere.scale.x = -1;
        sphere.scale.y = -1;
        sphere.scale.z = -1;
        sphere.rotation.y = Math.PI / 3.5;
        sphere.rotation.x = Math.PI;

        return sphere;
    }
}

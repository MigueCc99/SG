class Sphere extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();

    this.createGUI(gui,titleGui);

    var sphereGeom = new THREE.SphereGeometry(1,3,2);
    var sphereMat = new THREE.MeshNormalMaterial();

    this.sphere = new THREE.Mesh(sphereGeom, sphereMat);
    this.add(this.sphere);
    this.sphere.position.x = 7.0;
  }

  createGUI (gui,titleGui) {
    this.guiControls = new function (){
      this.radius = 1.0;
      this.widthSegments = 3;
      this.heightSegments = 2;
    }

    var folder = gui.addFolder (titleGui);

    folder.add (this.guiControls, 'radius', 1.0, 5.0, 0.1).name ('Radio : ').listen();
    folder.add (this.guiControls, 'widthSegments', 3, 20, 1).name ('Res. ecuador : ').listen();
    folder.add (this.guiControls, 'heightSegments', 2, 10, 1).name ('Res. meridiano : ').listen();
  }

  update (){
    this.sphere.geometry = new THREE.SphereGeometry(this.guiControls.radius, this.guiControls.widthSegments, this.guiControls.heightSegments);
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.01;
    this.sphere.rotation.z += 0.01;
  }
}

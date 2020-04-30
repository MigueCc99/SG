class Torus extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();

    this.createGUI(gui,titleGui);

    var torusGeom = new THREE.TorusGeometry(1,0.2,3,3);
    var torusMat = new THREE.MeshNormalMaterial();

    this.torus = new THREE.Mesh(torusGeom, torusMat);
    this.add(this.torus);
    this.torus.position.z = 7.0;
  }

  createGUI (gui,titleGui) {
    this.guiControls = new function (){
      this.radius = 1.0;
      this.tube = 0.2;
      this.radialSegments = 3;
      this.tubularSegments = 3;
    }

    var folder = gui.addFolder (titleGui);

    folder.add (this.guiControls, 'radius', 1.0, 5.0, 0.1).name ('Radio : ').listen();
    folder.add (this.guiControls, 'tube', 0.2, 1.0, 0.1).name ('Radio Tubo : ').listen();
    folder.add (this.guiControls, 'radialSegments', 3, 15, 1).name ('Res. Toro : ').listen();
    folder.add (this.guiControls, 'tubularSegments', 3, 15, 1).name ('Res. Tubo : ').listen();
  }

  update (){
    this.torus.geometry = new THREE.TorusGeometry(this.guiControls.radius, this.guiControls.tube, this.guiControls.radialSegments, this.guiControls.tubularSegments);
    this.torus.rotation.x += 0.01;
    this.torus.rotation.y += 0.01;
    this.torus.rotation.z += 0.01;
  }
}

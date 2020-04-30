class Icosahedron extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();

    this.createGUI(gui,titleGui);

    var icosahedronGeom = new THREE.IcosahedronGeometry(1,0);
    var icosahedronMat = new THREE.MeshNormalMaterial();

    this.icosahedron = new THREE.Mesh(icosahedronGeom, icosahedronMat);
    this.add(this.icosahedron);
    this.icosahedron.position.x = -7.0;
  }

  createGUI (gui,titleGui) {
    this.guiControls = new function (){
      this.radius = 1.0;
      this.detail = 0;
    }

    var folder = gui.addFolder (titleGui);

    folder.add (this.guiControls, 'radius', 1.0, 5.0, 0.1).name ('Radio : ').listen();
    folder.add (this.guiControls, 'detail', 0, 4, 1).name ('Subdivision : ').listen();
  }

  update (){
    this.icosahedron.geometry = new THREE.IcosahedronGeometry(this.guiControls.radius, this.guiControls.detail);
    this.icosahedron.rotation.x += 0.01;
    this.icosahedron.rotation.y += 0.01;
    this.icosahedron.rotation.z += 0.01;
  }
}

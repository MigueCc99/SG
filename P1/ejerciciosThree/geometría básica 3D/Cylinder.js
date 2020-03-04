class Cylinder extends THREE.Object3D {
 constructor(gui,titleGui) {
   super();

   this.createGUI(gui,titleGui);

   var cylinderGeom = new THREE.CylinderGeometry(1,1,1,3);
   var cylinderMat = new THREE.MeshNormalMaterial();

   this.cylinder = new THREE.Mesh(cylinderGeom, cylinderMat);
   this.add(this.cylinder);
   this.cylinder.position.y = 7.0;
 }

 createGUI (gui,titleGui) {
   this.guiControls = new function (){
     this.radiusTop = 1.0;
     this.radiusBottom = 1.0;
     this.height = 1.0;
     this.radialSegments = 3;
   }

   var folder = gui.addFolder (titleGui);

   folder.add (this.guiControls, 'radiusTop', 1.0, 5.0, 0.1).name ('Radio Superior : ').listen();
   folder.add (this.guiControls, 'radiusBottom', 1.0, 5.0, 0.1).name ('Radio Inferior : ').listen();
   folder.add (this.guiControls, 'height', 1.0, 5.0, 0.1).name ('Altura : ').listen();
   folder.add (this.guiControls, 'radialSegments', 3, 20, 1).name ('radialSegments : ').listen();
 }

 update (){
   this.cylinder.geometry = new THREE.CylinderGeometry(this.guiControls.radiusTop, this.guiControls.radiusBottom, this.guiControls.height, this.guiControls.radialSegments);
   this.cylinder.rotation.x += 0.01;
   this.cylinder.rotation.y += 0.01;
   this.cylinder.rotation.z += 0.01;
 }


}

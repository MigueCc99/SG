class Cone extends THREE.Object3D {
 constructor (gui,titleGui) {
   super();

   this.createGUI(gui,titleGui);

   // ConeGeometry(radius,height,resolution)
   var coneGeom = new THREE.ConeGeometry(1,1,3);
   var coneMat = new THREE.MeshNormalMaterial();

   this.cone = new THREE.Mesh(coneGeom, coneMat);
   this.add(this.cone);
   this.cone.position.x = 7.0;
   this.cone.position.y = 7.0;
 }

 createGUI (gui,titleGui) {
   this.guiControls = new function (){
     this.radius = 1.0;
     this.height = 1.0;
     this.radialSegments = 3;
   }

   var folder = gui.addFolder (titleGui);

   folder.add (this.guiControls, 'radius', 1.0, 5.0, 0.1).name ('Radio : ').listen();
   folder.add (this.guiControls, 'height', 1.0, 5.0, 0.1).name ('Altura : ').listen();
   folder.add (this.guiControls, 'radialSegments', 3, 20, 1).name ('Resolucion : ').listen();
 }

 update (){
   this.cone.geometry = new THREE.ConeGeometry(this.guiControls.radius, this.guiControls.height, this.guiControls.radialSegments);
   this.cone.rotation.x += 0.01;
   this.cone.rotation.y += 0.01;
   this.cone.rotation.z += 0.01;
 }

}

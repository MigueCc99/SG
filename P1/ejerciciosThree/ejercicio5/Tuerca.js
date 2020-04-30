class Tuerca extends THREE.Object3D {
    constructor() {
      super();

      var cylinderGeom1 = new THREE.CylinderGeometry(5, 5, 6, 6);
      var cylinderGeom2 = new THREE.CylinderGeometry(3,3,6,32);
      var torusGeom1 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom2 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom3 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom4 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom5 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom6 = new THREE.TorusGeometry(3, 0.5, 20, 20);
      var torusGeom7 = new THREE.TorusGeometry(3, 0.5, 20, 20);

      torusGeom1.rotateX(Math.PI/2);
      torusGeom1.translate(0,3,0);
      torusGeom2.rotateX(Math.PI/2);
      torusGeom2.translate(0,2,0);
      torusGeom3.rotateX(Math.PI/2);
      torusGeom3.translate(0,1,0);
      torusGeom4.rotateX(Math.PI/2);
      torusGeom5.rotateX(Math.PI/2);
      torusGeom5.translate(0,-1,0);
      torusGeom6.rotateX(Math.PI/2);
      torusGeom6.translate(0,-2,0);
      torusGeom7.rotateX(Math.PI/2);
      torusGeom7.translate(0,-3,0);

      var cylinder1bsp = new ThreeBSP (cylinderGeom1);
      var cylinder2bsp = new ThreeBSP (cylinderGeom2);
      var torus1bsp = new ThreeBSP (torusGeom1);
      var torus2bsp = new ThreeBSP (torusGeom2);
      var torus3bsp = new ThreeBSP (torusGeom3);
      var torus4bsp = new ThreeBSP (torusGeom4);
      var torus5bsp = new ThreeBSP (torusGeom5);
      var torus6bsp = new ThreeBSP (torusGeom6);
      var torus7bsp = new ThreeBSP (torusGeom7);


      var obj = cylinder2bsp.union(torus1bsp);
      var obj = obj.union(torus2bsp);
      var obj = obj.union(torus3bsp);  
      var obj = obj.union(torus4bsp);
      var obj = obj.union(torus5bsp);
      var obj = obj.union(torus6bsp);
      var obj = obj.union(torus7bsp);

      var modelo = cylinder1bsp.subtract(obj);

      var material = new THREE.MeshNormalMaterial();
      var result = modelo.toMesh (material);
      result.geometry.computeFaceNormals ();
      result.geometry.computeVertexNormals();
  
      this.add (result);
}
   
    update (){

    }
   
   
   }
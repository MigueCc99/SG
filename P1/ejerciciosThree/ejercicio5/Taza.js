class Taza extends THREE.Object3D {
    constructor() {
      super();
   
      var cylinderGeom1 = new THREE.CylinderGeometry(5, 5, 10, 32);
      var cylinderGeom2 = new THREE.CylinderGeometry(4.5, 4.5, 8, 32);
      var boxGeom = new THREE.BoxGeometry (6,7,3);
      var torusGeom = new THREE.TorusGeometry(3, 0.5, 20, 20);

      cylinderGeom2.translate(0,1,0);
      torusGeom.translate(-5,0,0);
      boxGeom.translate(-1.5,0,0);

      var cylinder1bsp = new ThreeBSP (cylinderGeom1);
      var cylinder2bsp = new ThreeBSP (cylinderGeom2);
      var torusbsp =  new ThreeBSP (torusGeom);
      var boxbsp = new ThreeBSP (boxGeom);
    
      var torusmid = torusbsp.subtract(boxbsp);
      var partialResult = cylinder1bsp.subtract (cylinder2bsp);
      var finalResult = partialResult.union (torusmid);

      var material = new THREE.MeshNormalMaterial();
      var result = finalResult.toMesh (material);
      result.geometry.computeFaceNormals ();
      result.geometry.computeVertexNormals();

      this.add (result);
    }
   
    update (){

    }
   
   
   }
   
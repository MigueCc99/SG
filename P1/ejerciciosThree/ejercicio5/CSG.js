class CSG extends THREE.Object3D {
    constructor() {
      super();
      
      this.taza = new Taza ();
      //this.tuerca = new Tuerca ();

      this.add (this.taza);
    }
   
    update (){

    }
   
   
   }
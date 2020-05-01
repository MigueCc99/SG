class CSG extends THREE.Object3D {
    constructor() {
      super();
      
      this.taza = new Taza ();
      this.tuerca = new Tuerca ();
      this.add (this.tuerca);
      this.add (this.taza);
      this.tuerca.position.set(-5,0,0)
      this.taza.position.set(10,0,0);
    }
   
    update (){

    }
   
   
   }
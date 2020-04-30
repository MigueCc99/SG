class CargaModelo extends THREE.Object3D {
    constructor(gui, titleGui) {
      super();

      this.createGUI(gui,titleGui);

      var that = this;
      var materialLoader = new THREE.MTLLoader();
      var objectLoader = new THREE.OBJLoader();
      materialLoader.load('../models/porsche911/911.mtl',
        function (materials){
            objectLoader.setMaterials (materials);
            objectLoader.load ('../models/porsche911/Porsche_911_GT2.obj',
                function (object) {
                    var modelo = object;
                    that.add (modelo);
                }, null, null);
        });
    }
   
    createGUI (gui,titleGui) {
        this.guiControls = new function (){
          this.rotate = false;
        }
        var folder = gui.addFolder (titleGui);
    
        folder.add (this.guiControls, 'rotate').name ('Controlar Rotación : ').listen();
      }
    
    update (){
        if(this.guiControls.rotate == true)
            this.rotation.y += 0.01;
    }
   
   
}

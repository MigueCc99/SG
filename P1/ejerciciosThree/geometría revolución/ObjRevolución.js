class ObjRevolución extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();

    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
   this.createGUI(gui,titleGui);

    var points = [];
    points.push(new THREE.Vector3(0,0,0));
    for ( var i = 0; i < 10; i ++ )
      points.push(new THREE.Vector3(10,i,0));
    points.push(new THREE.Vector3(10,10,0));
    points.push(new THREE.Vector3(0,10,0));
    var geometry = new THREE.LatheGeometry( points,3,0,Math.PI/2);
    var material = new THREE.MeshNormalMaterial();
    this.lathe = new THREE.Mesh( geometry, material );
    this.add(this.lathe);

    //LatheGeometry(points : Array, segments : Integer, phiStart : Float, phiLength : Float)

  }

  createGUI (gui,titleGui) {
    this.guiControls = new function (){
      this.segments = 3;
      this.phiLength = Math.PI/2;
    }
    var folder = gui.addFolder (titleGui);

    folder.add (this.guiControls, 'segments', 3, 40, 1).name ('Resolución : ').listen();
    folder.add (this.guiControls, 'phiLength', Math.PI/2, 2*Math.PI, 1/(8*Math.PI)).name ('Ángulo : ').listen();
  }

update () {
  var points = [];
  points.push(new THREE.Vector3(0,0,0));
  for ( var i = 0; i < 10; i ++ )
    points.push(new THREE.Vector3(10,i,0));
  points.push(new THREE.Vector3(10,10,0));
  points.push(new THREE.Vector3(0,10,0));
  this.lathe.geometry = new THREE.LatheGeometry(points,this.guiControls.segments,0,this.guiControls.phiLength);
}
}

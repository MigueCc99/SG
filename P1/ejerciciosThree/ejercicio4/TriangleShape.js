class TriangleShape extends THREE.Object3D {
  constructor(){
    super();
    var shape = new THREE.Shape ( ) ;
    //shape.moveTo(80,20);
    //shape.lineTo(40,80);
    //shape.lineTo(120,80);
    //shape.lineTo(80,20);
    shape.moveTo(10,10);
    shape.lineTo(20,40);
    shape.lineTo(60,40);
    shape.lineTo(10,10);
    
    var extrudeSettings = {
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1
    };    

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var material = new THREE.MeshNormalMaterial();

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = -10;
    this.add(mesh);
  }

  update () {
   
  }
}

class HeartShape extends THREE.Object3D {
  constructor(){
    super();
	var heartShape = new THREE.Shape()
	.moveTo( 60 + 25, 100 + 25)
	.bezierCurveTo( 60 + 25 , 100 + 25, 60 + 20, 100, 60, 100 )
	.bezierCurveTo( 60 - 30, 100, 60 - 30, 100 + 35, 60 - 30, 100 + 35 )
	.bezierCurveTo( 60 - 30, 100 + 55, 60 - 10, 100 + 77, 60 + 25, 100 + 95 )
	.bezierCurveTo( 60 + 60, 100 + 77, 60 + 80, 100 + 55, 60 + 80, 100 + 35 )
	.bezierCurveTo( 60 + 80, 100 + 35, 60 + 80, 100, 60 + 50, 100 )
	.bezierCurveTo( 60 + 35, 100, 60 + 25, 100 + 25, 60 + 25, 100 + 25 );

    var extrudeSettings = {
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1
    };    

    var geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    var material = new THREE.MeshNormalMaterial();

    var mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }

  update () {
   
  }
}

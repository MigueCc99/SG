class Linea extends THREE.Object3D {
  constructor() {
    super();
    /*
    var points = [];
    points.push(new THREE.Vector3(0,0,0));
    for ( var i = 0; i < 10; i ++ )
      points.push(new THREE.Vector3(10,i,0));
    points.push(new THREE.Vector3(10,10,0));
    points.push(new THREE.Vector3(0,10,0));
    var lineGeometry = new THREE.Geometry();
    lineGeometry.vertices = points;
    line = new THREE.Line (lineGeometry, material);
    this.add(lineGeometry);
    */
    var points = [];
    points.push(new THREE.Vector3(0,0,0));
    for ( var i = 0; i < 10; i ++ )
      points.push(new THREE.Vector3(10,i,0));
    points.push(new THREE.Vector3(10,10,0));
    points.push(new THREE.Vector3(0,10,0));
    var geometry = new THREE.LatheGeometry( points,10,0,0.1 );
    var material = new THREE.MeshNormalMaterial();
    this.lathe = new THREE.Mesh( geometry, material );
    this.add(this.lathe);
  }

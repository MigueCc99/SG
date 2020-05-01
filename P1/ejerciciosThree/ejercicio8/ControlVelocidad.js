class ControlVelocidad extends THREE.Object3D {
constructor(gui) {
    super();
    this.spline = this.generateSpline();
    //this.movil = this.generateMovil();
    //this.clock = this.generateClock();
    //this.add(this.clock);
    //this.add(this.movil);
    this.add(this.spline);
}

generateSphere (){
    var sphere = new THREE.Object3D ();
    var sphereGeom = new THREE.SphereGeometry( 1, 32, 32 );
    var sphereMat = new THREE.MeshNormalMaterial();

    sphere = new THREE.Mesh(sphereGeom, sphereMat);

    return sphere;
}

generateClock (){
    var clock = new THREE.Object3D ();

    var sphere1 = this.generateSphere();
    sphere1.position.set(15,0,0);
    clock.add(sphere1);
    var sphere2 = this.generateSphere();
    sphere2.position.set(-15,0,0);
    clock.add(sphere2);
    var sphere3 = this.generateSphere();
    sphere3.position.set(0,0,15);
    clock.add(sphere3);
    var sphere4 = this.generateSphere();
    sphere4.position.set(0,0,-15);
    clock.add(sphere4);
    var sphere5 = this.generateSphere();
    sphere5.position.set(10,0,10);
    clock.add(sphere5);
    var sphere6 = this.generateSphere();
    sphere6.position.set(-10,0,10);
    clock.add(sphere6);
    var sphere7 = this.generateSphere();
    sphere7.position.set(10,0,-10);
    clock.add(sphere7);
    var sphere8 = this.generateSphere();
    sphere8.position.set(-10,0,-10);
    clock.add(sphere8);

    return clock;
}

generateMovil (){
    var movil = this.generateSphere();
    movil.position.set(8,0,0);
    this.tiempoAnterior = Date.now();

    return movil;
}

generateSpline (){
    /*
    var spline = new THREE.CatmullRomCurve3 ([new THREE.Vector3(15,0,0), new THREE.Vector3(-15,0,0),
        new THREE.Vector3(0,0,15), new THREE.Vector3(0,0,-15), new THREE.Vector3(10,0,10), 
        new THREE.Vector3(-10,0,10), new THREE.Vector3(10,0,-10), new THREE.Vector3(-10,0,-10)]);
    */
    var spline = new THREE.CatmullRomCurve3 ([new THREE.Vector3(5,0,0), new THREE.Vector3(-5,0,0)]);
    var geometryLine = new THREE.Geometry();
    geometryLine.vertices = spline.getPoints(8);
    var material = new THREE.LineBasicMaterial ({color: 0xff0000});
    var visibleSpline = new THREE.Line (geometryLine, material);

    return spline;
}

movement (){

    
}

update (){

} 
       
}
       
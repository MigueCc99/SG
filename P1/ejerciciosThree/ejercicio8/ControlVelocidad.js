class ControlVelocidad extends THREE.Object3D {
constructor(gui) {
    super();
    
    this.sphere = this.generateSphere();

    this.add(this.sphere);

    this.sphere.position.set(15,0,0);

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


    return clock;
}
   
update (){

} 
       
}
       
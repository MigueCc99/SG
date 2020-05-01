class Pendulos extends THREE.Object3D {
constructor(gui) {
    super();

    this.createGUI(gui);

    this.p1 = this.generateFirstPendule();
    this.p2 = this.generateSecondPendule();

    this.add (this.p1);
    this.add (this.p2);
}

createGUI (gui){
    this.guiControls = new function () {
        this.rotation1 = 0;
        this.longitud1 = 1;
        this.rotation2 = 0;
        this.longitud2 = 1;
        this.position2 = 0;
    }

    var folder1 = gui.addFolder('Controles Primer Péndulo');
    var folder2 = gui.addFolder('Controles Segundo Péndulo');

    folder1.add (this.guiControls, 'rotation1', -0.8, 0.8, 0.01).name ('Rotar : ').listen();    
    folder1.add (this.guiControls, 'longitud1', 1, 2, 0.1).name ('Longitud').listen();
    folder2.add (this.guiControls, 'rotation2', -0.8, 0.8, 0.01).name ('Rotar : ').listen();    
    folder2.add (this.guiControls, 'longitud2', 1, 2, 0.1).name ('Longitud').listen();

}
   
generateFirstPendule () {
    var pendulo = new THREE.Object3D();

    var cylinderGeom = new THREE.CylinderGeometry(0.35, 0.35, 1.25, 32);
    var boxExtGeom = new THREE.BoxGeometry (1,4,1);
    var extensorP1Geom = new THREE.BoxGeometry(1,5,1);

    this.materialExt = new THREE.MeshPhongMaterial({color: 0xCF0000});
    this.materialBox = new THREE.MeshPhongMaterial({color: 0x5564EB});
    this.materialCyl = new THREE.MeshPhongMaterial({color: 0x0064EB});

    this.extensorP1 = new THREE.Mesh (extensorP1Geom, this.materialExt);
    this.boxExt1 = new THREE.Mesh (boxExtGeom, this.materialBox);
    this.boxExt2 = new THREE.Mesh (boxExtGeom, this.materialBox);
    this.cylinderRot = new THREE.Mesh (cylinderGeom, this.materialCyl);

    this.cylinderRot.rotation.x = Math.PI/2;
    this.extensorP1.position.set(0,-4.5,0)
    this.boxExt2.position.set(0,-9,0);

    pendulo.add(this.boxExt1);
    pendulo.add(this.cylinderRot);
    pendulo.add(this.extensorP1);
    pendulo.add(this.boxExt2);

    pendulo.rotation.z = this.guiControls.rotation1;

    return pendulo;
}

generateSecondPendule () {
    var pendulo = new THREE.Object3D();

    var cylinderGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 32);
    var extensorGeom = new THREE.BoxGeometry(0.5,5,0.25);

    this.materialExt = new THREE.MeshPhongMaterial({color: 0x5564EB});
    this.materialCyl = new THREE.MeshPhongMaterial({color: 0x0064EB});

    this.extensor  = new THREE.Mesh (extensorGeom,this.materialExt);
    this.cylinder = new THREE.Mesh(cylinderGeom, this.materialCyl);

    this.cylinder.rotation.x = Math.PI/2;
    this.cylinder.position.set(0,0,0);
    this.extensor.position.set(0,-2,0);

    pendulo.add(this.cylinder);
    pendulo.add(this.extensor);

    pendulo.rotation.z = this.guiControls.rotation2;
    pendulo.position.set(0,-2.5,0.65);

    return pendulo;
}

update (){
    this.rotation.z = this.guiControls.rotation1;
    //this.extensorP1.scale.set(1,this.guiControls.longitud1,1);
    this.p2.rotation.z = this.guiControls.rotation2;
    //this.extensor.scale.set(0.5,this.guiControls.longitud1,0.25);
} 
   
}
   
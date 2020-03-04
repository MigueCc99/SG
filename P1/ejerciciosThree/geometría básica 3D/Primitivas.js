class Primitivas extends THREE.Object3D {
  constructor(gui) {
    super();

    // Se crea la parte de la interfaz que corresponde a la grapadora
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz

    this.box = new Box(gui, "Controles de la Caja");
    this.cylinder = new Cylinder(gui, "Controles del Cilindro");
    this.cone = new Cone(gui, "Controles del Cono");
    this.sphere = new Sphere(gui, "Controles de la Esfera");
    this.torus = new Torus(gui, "Controles del Toro");
    this.icosahedron = new Icosahedron(gui, "Controles del Icosaedro");

    this.add(this.box);
    this.add(this.cylinder);
    this.add(this.cone);
    this.add(this.sphere);
    this.add(this.torus);
    this.add(this.icosahedron);
  }

  update (){
    this.box.update();
    this.cylinder.update();
    this.cone.update();
    this.sphere.update();
    this.torus.update();
    this.icosahedron.update();
  }

}

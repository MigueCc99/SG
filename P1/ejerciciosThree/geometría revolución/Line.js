class Line extends THREE.Object3D {
  constructor(gui) {
    // Puntos
    points = [];
    // Se añaden puntos al array
    points.push (new THREE.Vector3 (unX, unY, 0));
    // Para crear la figura por revolución
    latheObject = new THREE.Mesh (
      new THREE.LatheGeometry (points, ...), unMaterial);
      // Para crear una línea visible, como en el vídeo
      lineGeometry = new THREE.Geometry();
      lineGeometry.vertices = points;
l     ine = new THREE.Line (lineGeometry, unMaterial);
      this.add(latheObject);
  }

}


/**
 * Class GameField
 * @description represents the game field
 * 
 * @param fWidth - The width of the floor
 * @param fDeep - The deep of the floor
 * @param fMaterial - The material of the floor
 * @param wWidth - The width of the walls
 * @param wHeight - The height of the walls
 * @param wMaterial - The material of the walls
 * 
 * @author Miguel Ángel Campos Cubillas
 */

class GameField extends THREE.Object3D {

  constructor(fWidth, fDeep, fMaterial, wWidth, wHeight, wMaterial) {
    super();
    this.rightCollider = null;
    this.leftCollider = null;
    this.topCollider = null;
    this.add(this.createGameField(fWidth, fDeep, fMaterial, wWidth, wHeight, wMaterial));
  }

  createGameField(fWidth, fDeep, fMaterial, wWidth, wHeight, wMaterial) {
    var gameField = new THREE.Mesh(new THREE.BoxGeometry(fWidth, 0.2, fDeep, 1, 1, 1), fMaterial);
    gameField.applyMatrix(new THREE.Matrix4().makeTranslation(0, -0.1, 0));
    gameField.receiveShadow = true;
    gameField.autoUpdateMatrix = false;

    for (let pos = 0; pos < 3; pos++) {
      gameField.add(this.createWall(wWidth, wHeight, wMaterial, pos, fWidth, fDeep));
    }

    return gameField;
  }

  createWall(width, height, material, position, fWidth, fDeep) {
    var wall = null;
    switch (position) {
      case 0: // right wall
        wall = new THREE.Mesh(new THREE.BoxGeometry(width, height, fDeep, 1, 1, 1), material);
        wall.applyMatrix(new THREE.Matrix4().makeTranslation(fWidth / 2 + width / 2, height / 2, 0));
        this.rightCollider = new THREE.Box3().setFromObject(wall);
        this.rightCollider.expandByScalar(3);
        break;
      case 1: // left wall
        wall = new THREE.Mesh(new THREE.BoxGeometry(width, height, fDeep, 1, 1, 1), material);
        wall.applyMatrix(new THREE.Matrix4().makeTranslation(- fWidth / 2 - width / 2, height / 2, 0));
        this.leftCollider = new THREE.Box3().setFromObject(wall);
        this.leftCollider.expandByScalar(3);
        break;
      case 2: // top wall
        wall = new THREE.Mesh(new THREE.BoxGeometry(fDeep + 2*width, height, width, 1, 1, 1), material);
        wall.applyMatrix(new THREE.Matrix4().makeTranslation(0, height / 2, -fDeep / 2 - width / 2));
        this.topCollider = new THREE.Box3().setFromObject(wall);
        this.topCollider.expandByScalar(3);
        break;
    }

    wall.receiveShadow = true;
    wall.autoUpdateMatrix = false;

    return wall;
  }

  getCollider(position) {
    let collider;
    switch(position) {
      case 0: // right wall
        collider = this.rightCollider;
        break;
      case 1: // left wall
        collider = this.leftCollider;
        break;
      case 2: // top wall
        collider = this.topCollider;
        break;
    }

    return collider;
  }
}

/**
 * Script
 * It adds the listeners to the scene and controls the animation
 * 
 * @author Miguel Ángel Campos Cubillas
 */

// Several functions, including the main

// The scene graph
scene = null;
camera = null;
requestID = null;
time = null;
savedTime = null;

// The object for the statistics
stats = null;

// The current mode of the application
applicationMode = TheScene.NORMAL_CAMERA;

// It creates the GUI and, optionally, adds statistic information
/**
 * @param withStats - A boolean to show the statictics or not
 */
function createGUI(withStats) {
  var gui = new dat.GUI();

  // The method  listen()  allows the height attribute to be written, not only read

  if (withStats)
    stats = initStats();
}

// It adds statistics information to a previously created Div
/**
 * @return The statistics object
 */
function initStats() {

  var stats = new Stats();

  stats.setMode(0); // 0: fps, 1: ms

  // Align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  $("#Stats-output").append(stats.domElement);

  return stats;
}

// It shows a feed-back message for the user
/**
 * @param str - The message
 */
function setMessage(str) {
  let contElement = document.getElementById("messages-box");
  let msgElement = document.getElementById("messages");
  msgElement.innerHTML = str;
  contElement.style.display = "block";
}

// It processes the clic-down of the mouse
/**
 * @param event - Mouse information
 */
function onMouseDown(event) {
  scene.getCameraControls().enabled = true;
}

// It processes the wheel rolling of the mouse
/**
 * @param event - Mouse information
 */
function onMouseWheel(event) {
  scene.getCameraControls().enabled = true;
}

// It processes when the keys are pressed down
function onKeyDown(event) {
  switch (event.keyCode) {
    case 32: //spacebar
      if (requestID && scene.alive && scene.ballPaused)
        scene.throwBall();
      break;
    case 80:  //key p
      if (scene.alive)
        requestID ? stop() : start(true);
      break;
    case 37:  //left arrow
    case 65:  // key a
      if (requestID && scene.alive)
        scene.MOVE_LEFT = true;
      break;
    case 39:  //right arrow
    case 68:  //key d
      if (requestID && scene.alive)
        scene.MOVE_RIGHT = true;
      break;
  }
}

// It processes when the keys are pressed down
function onKeyUp(event) {
  switch (event.keyCode) {
    case 37:  //left arrow
    case 65:  //key a
      if (requestID && scene.alive)
        scene.MOVE_LEFT = false;
      break;
    case 39:  //right arrow
    case 68:  //key d
      if (requestID && scene.alive)
        scene.MOVE_RIGHT = false;
      break;
  }
}

// It processes the window size changes
function onWindowResize() {
  scene.setCameraAspect(window.innerWidth / window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// It creates and configures the WebGL renderer
/**
 * @return The renderer
 */
function createRenderer() {
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  return renderer;
}

// It renders every frame
function render() {
  requestID = undefined;

  //stats.update();
  scene.getCameraControls().update();
  scene.animate();

  renderer.render(scene, camera);

  if (this.scene.alive && !this.scene.victory){
    if (this.scene.endTime !== null){
      time = Date.now();
      if (time < this.scene.endTime){
        this.setMessage(Math.floor((this.scene.endTime - time)/1000) + " sec. left");
        start();
      } else {
        $("#screen-title").html("DEFEAT");
        $("#screen-subtitle").html("You ran out of time and obtained " + scene.playerPoints + " points<br><br>Reload the page to play again");
        $("#game-container").css("display", "none");
        $("button").css("display", "none");
        $("select").css("display", "none");
        $("#game-title-screen").css("display", "block");
        stop();
      }
    } else {
      start();
    }
  } else {
    if (this.scene.victory) {
      $("#screen-title").html("VICTORY");
      $("#screen-subtitle").html("You obtained " + scene.playerPoints + " points<br><br>Reload the page to play again");
      $("#game-container").css("display", "none");
      $("button").css("display", "none");
      $("select").css("display", "none");
      $("#game-title-screen").css("display", "block");
    } else {
      $("#screen-title").html("DEFEAT");
      $("#screen-subtitle").html("You obtained " + scene.playerPoints + " points<br><br>Reload the page to play again");
      $("#game-container").css("display", "none");
      $("button").css("display", "none");
      $("select").css("display", "none");
      $("#game-title-screen").css("display", "block");
    }
    stop();
  }
}

// It starts the render
function start(paused) {
  if (!requestID) {
    requestID = requestAnimationFrame(render);
  }
  if (paused && this.scene.endTime !== null) {
    this.scene.endTime += Date.now() - savedTime;
  }
}

// It stops the render
function stop() {
  if (requestID) {
    cancelAnimationFrame(requestID);
    requestID = undefined;
  }
  if (this.scene.endTime !== null) {
    savedTime = time;
  }
}

// The main function
$(function () {
  $("#button-play").click(function () {
    // create a render and set the size
    renderer = createRenderer();
    // add the output of the renderer to the html element
    $("#WebGL-output").append(renderer.domElement);
    // listeners
    window.addEventListener("mousedown", onMouseDown, true);
    window.addEventListener("mousewheel", onMouseWheel, true);      // For Chrome an others
    window.addEventListener("DOMMouseScroll", onMouseWheel, true);  // For Firefox
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);
    // Fetch selected difficulty
    let difficulty = $("#lvl-selection").val();
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new TheScene(renderer.domElement, difficulty);
    camera = scene.getCamera();
    requestID = undefined;
    //createGUI(true);
    // Hide start screen elements
    $("#info-text").css("display", "none");
    $("#game-title-screen").css("display", "none");
    start();
  });
});

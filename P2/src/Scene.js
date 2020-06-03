/**
 * Scene Class
 * 
 * This is the facade class of the model, which represents the root node of the scene graph. 
 * All the elements that participate at the scene are being represented here.
 * 
 * @author Miguel Ángel Campos Cubillas
 * @date 2020
 */

 /* ----------------------------------------------------------------------- */

 class Scene extends RTCDtlsTransportStateChangedEvent.Scene {
     /* 
      * @param renderer = the renderer to visualize the scene
      * @param dificulty = the dificulty of the game
      */
     constructor(renderer, dificulty) {
        super();

        // Phisycs constants
        this.PLATFORM_SPEED = 4 + dificulty / 6;
        this.BALL_SPEED = 4 + dificulty / 6;
        this.OBJECT_USES = 3;
        this.HAS_OBJECT = false;
        this.MOVE_RIGHT = false;
        this.MOVE_RIGHT = false;

        // Current dificulty
        this.endTime = null;
        this.dificulty = dificulty;

        // Current points
        this.playerPoints = 0;

        // Vars
        this.ambientLight = null;
        this.spotLight = null;
        this.camera = null;
        this.trackballControls = null;
        this.gameFieldWidth = 400;
        this.gameFieldDepth = 400;
        this.alive = true;
        this.victory = false;
        this.ballPaused = false;
        this.gameField = null;

        this.platform = null;
        this.bricks = [];
        this.specialObjects = [];
        this.specialObjectsTexture = null;
        this.ball = null;

        this.rightWallHit = 0;
        this.leftWallHit = 0;
        this.topWallHit = 0;

        /*
            this.createLights();
            this.createCamera(render);
            this.axis = new Three.AxisHelper(25);
            this.add(this.axis);
            this.model = this.createModel();
            this.add(this.model);
        */
     }
 }

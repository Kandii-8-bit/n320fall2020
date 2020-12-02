// Application Level Variables
let canvas = document.getElementById("renderCanvas");

//Creates Engine

var engine = new BABYLON.Engine(canvas, true);
var camera;
var goal;
var timeoutId;
var particleSystem;

// Creates Scene
var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  //Add Cam attach to Canvas
  camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -15),
    scene
  );
  //My Light
  var light = new BABYLON.DirectionalLight(
    "myLight",
    new BABYLON.Vector3(0, -0.5, 1),
    scene
  );
  //My Physics
  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  //My Ball Setup
  ball = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 1 }, scene);

  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.2 },
    scene
  );

  //Ground Setup for Ball
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 20, width: 20, subdivision: 4 },
    scene
  );
  ground.position.y = -3;
  ground.position.z = 9;

  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );

  //make goal
  goal = new BABYLON.MeshBuilder.CreateBox(
    "goal",
    { height: 5, width: 5 },
    scene
  );
  goal.position.z = 7;
  goal.position.x = Math.random() * 8 - 4;

  //make particle system
  particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
  particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
  particleSystem.minEmitPower = 1;
  particleSystem.maxEmitPower = 3;
  particleSystem.addVelocityGradient(0, 2);

  //load particle texture into scene
  particleSystem.particleTexture = new BABYLON.Texture(
    "images/confetti.png",
    scene
  );

  return scene;
};

function resetBall() {
  // reset position
  ball.position = new BABYLON.Vector3();

  //reset velocity
  ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
  ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

  //get rid of timeout if its still on
  clearTimeout(timeoutId);
}

window.addEventListener("click", function () {
  //get clicked mesh
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var selectedObject = pickResult.pickedMesh;

  //null check
  if (selectedObject) {
    //get a direction away from where user clicks on ball
    var surfaceNormal = pickResult.getNormal(true);
    var forceDirection = surfaceNormal.scale(-1000);

    //kick object
    selectedObject.physicsImpostor.applyForce(
      forceDirection,
      selectedObject.getAbsolutePosition()
    );

    //reset ball after 3 seconds
    timeoutId = setTimeout(resetBall, 3000);
  }
});

//Run Render loop
var scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

scene.registerAfterRender(function () {
  if (ball.intersectsMesh(goal, false)) {
    //move goal
    goal.position.x = Math.random() * 8 - 4;

    //play particle burst
    particleSystem.manualEmitCount = 21;
    particleSystem.start();

    //position particles
    particleSystem.minEmitBox = ball.position;
    particleSystem.minEmitBox = ball.position;

    //put ball back.
    resetBall();
  }
});

// Use jQuery via jQuery() instead of via $()
jQuery.noConflict();

//Define variable to place the sketch inside it later
var myp5;

//Tone.js and p5.js code
var sketch = function (p) {

  // Set volume in decibels
  const volume = -2;
  Tone.Master.volume.value = volume;

  //Variables for The synth we will use
  let synth;
  let risoColors;
  let colorJSON;
  let active = false;

  //Other variables we will use later
  let bkgcol;
  var canvas;
  let newarr;

  // Preloads JSON file
  p.preload = function () {
    // loads a JSON as an object
    colorJSON = p.loadJSON("./tools/crayola.json");
    preloadScale();
  };

  //Preload musical scale
  function preloadScale() {
    //Preload scale from which to play notes
    let myscale = p.random(Tonal.Scale.names())
    let musnotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    mynote = musnotes => {
      return musnotes.map(e => e + p.int(p.random(3, 5)) + " " + myscale);
    };
    //This is your list of playble notes self-generated everytime you reload the page
    newarr = mynote(musnotes);
  };

  // Create a new canvas to the browser size
  p.setup = function () {
    makeCanvas();
    // unpack the JSON object as an array
    risoColors = Object.values(colorJSON);
    //Create synth and make audio connections
    synthandConnect();
    //Sets the frame rate
    p.frameRate(30);
  };

  //Canvas settings
  function makeCanvas() {
    //Create canvas and place it at the back of the bage
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("display: inherit");
    canvas.position(0, 0);
    canvas.style("z-index:-3");
    bkgcol = p.color("rgba(247, 242, 203, 0.1)");
  };

  //Create synth and make audio connections
  function synthandConnect() {
    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
    });

    //Make audio connections (Wire up our nodes: synth->master)
    var feedbackDelay = new Tone.FeedbackDelay("8n", 0.6);
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);
  };

  //On window resize, update the canvas size
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  //Render loop that draws shapes with p5
  p.draw = function () {};

  //Draw shapes and play sound on click of body
  jQuery("body").click(function () {
    const r = p.random(["sound", "shape", "soundshape"]);

    if (r === "sound") {
      chooseNote();
    } else if (r === "shape") {
      drawShape();
    } else if (r === "soundshape") {
      drawShape();
      chooseNote();
    } else {};
  });

  function chooseNote() {
    //choose a note
    var n = p.random(newarr);
    const note = n.slice(0, 3);
    const l = p.random(["4n", "8n", "16n"]);
    synth.triggerAttackRelease(note, l);
  };

  function drawShape() {
    // the user touched the screen!
    const dim = p.min(p.width, p.height);
    const x = p.mouseX;
    const y = p.mouseY;

    //Retrieves data from JSON and turn it into text
    p.noStroke();
    const curColorData = p.random(risoColors);
    const curColor = p.color(curColorData.hex);
    const size = p.max(10, p.abs(p.randomGaussian(dim / 8, dim / 8)));
    const type = p.random(["circle", "line", "polygon"]);
    curColor.setAlpha(255 * 0.9);

    //Draws text
    p.fill(curColor);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("arial");
    p.text(curColorData.name, x, y - size / 2 - 20);

    // Draw a basic polygon, handles triangles, squares, pentagons, etc
    p.polygon = function (x, y, radius, sides = 3, angle = 0) {
      p.beginShape();
      for (let i = 0; i < sides; i += 1) {
        const a = angle + p.TWO_PI * (i / sides);
        let sx = x + p.cos(a) * radius;
        let sy = y + p.sin(a) * radius;
        p.vertex(sx, sy);
      }
      p.endShape(p.CLOSE);
    };

    //Sets probability of which shape will appear
    if (type === "circle") {
      p.ellipseMode(p.CENTER);
      p.circle(x, y, size);
    } else if (type === "line") {
      p.strokeWeight(dim * 0.01);
      p.stroke(curColor);
      p.polygon(x, y, size * 0.5, 2, p.random(-1, 1) * p.PI * 2);
    } else if (type === "polygon") {
      p.polygon(x, y, size * 0.5, p.floor(p.random(3, 10)), p.random(-1, 1) * p.PI * 2);
    };
  };
};

//Starts Tone and p5
jQuery(".playBut").click(function () {
  StartAudioContext(Tone.context, this).then(function () {
    myp5 = new p5(sketch);
  });
  return false;
});
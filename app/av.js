/* 

AUDIO 

*/

console.log("music.js has loaded")

var myp5;

//Tone.js and p5.js code
var sketch = function (p) {
  // Master volume in decibels
  const volume = -2;

  // The synth we'll use for audio
  let synth;
  let risoColors;
  let colorJSON;
  let active = false;
  let bkgcol;
  var canvas;

  // Preloads JSON file
  p.preload = function () {
    // loads a JSON as an object
    colorJSON = p.loadJSON("./tools/crayola.json");
  };

  // Create a new canvas to the browser size
  p.setup = function () {
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("display: inherit");
    canvas.position(0, 0);
    canvas.style("z-index:-3");
    bkgcol = p.color("rgba(247, 242, 203, 0.1)");
    p.background(bkgcol);

    // unpack the JSON object as an array
    risoColors = Object.values(colorJSON);

    console.log(p.random(risoColors));

    // Make the volume quieter
    Tone.Master.volume.value = volume;

    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator: {
        type: 'sine'
      }
    });

    // Wire up our nodes:
    // synth->master

    var feedbackDelay = new Tone.FeedbackDelay('8n', 0.6);
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);

    p.frameRate(30);
  };

  // On window resize, update the canvas size
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  // Render loop that draws shapes with p5
  p.draw = function () {
  };

  // Update mouse position and play a sound
  p.touchStarted = function (e) {
    // First time we click...
    if (!active) {
      active = true;
      // Clear background to white to create an initial flash
      p.background(bkgcol);
      return false;
    }

    // choose a note
    const note = p.random(["A3", "C4", "D4", "E3", "G4"]);
    synth.triggerAttackRelease(note, '8n');

    const dim = p.min(p.width, p.height);
    const x = p.mouseX;
    const y = p.mouseY;

    p.noStroke();
    const curColorData = p.random(risoColors);
    const curColor = p.color(curColorData.hex);
    const size = p.max(10, p.abs(p.randomGaussian(dim / 8, dim / 8)));
    const type = p.random(['circle', 'line', 'polygon']);
    curColor.setAlpha(255 * 0.9);
    // background(curColor, 0.1); 
    // curColor.setAlpha(0.1); 

    p.fill(curColor);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("arial");
    /* p.text(curColorData.pantone, x, y + size / 2 + 20); */
    p.text(curColorData.name, x, y - size / 2 - 20);
    if (type === 'circle') {
      p.ellipseMode(p.CENTER);
      p.circle(x, y, size);
    } else if (type === 'line') {
      p.strokeWeight(dim * 0.01);
      p.stroke(curColor);
      p.polygon(x, y, size * 0.5, 2, p.random(-1, 1) * p.PI * 2);
    } else if (type === 'polygon') {
      p.polygon(x, y, size * 0.5, p.floor(p.random(3, 10)), p.random(-1, 1) * p.PI * 2);
    }
    e.preventDefault()
  };

  // Draw a basic polygon, handles triangles, squares, pentagons, etc
  p.polygon = function (x, y, radius, sides = 3, angle = 0) {
    p.beginShape();
    for (let i = 0; i < sides; i++) {
      const a = angle + p.TWO_PI * (i / sides);
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  };

};

//Start tone and p5
$("#myButton").click(function (e) {
  StartAudioContext(Tone.context, '#playBut').then(function (e) {
    myp5 = new p5(sketch);
    return false;
  });
  e.preventDefault();
});


/* 

AUDIO 

*/

console.log("music.js has loaded");

var myp5;

//Tone.js and p5.js code
var sketch = function (p) {
  // Master volume in decibels
  const volume = -2;

  // The synth we will use for audio
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

    //Preload scale from which to play notes
    let myscale = p.random(Tonal.Scale.names());
    console.log(myscale);
    let musnotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    mynote = musnotes => {
      return musnotes.map(e => e + p.int(p.random(3, 5)) + " " + myscale);
    };
    //This is your list of playble notes self-generated everytime you reload the page
    newarr = mynote(musnotes);
  };

  // Create a new canvas to the browser size
  p.setup = function () {
    //Create canvas and style it in the background
    canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("display: inherit");
    canvas.position(0, 0);
    canvas.style("z-index:-3");
    bkgcol = p.color("rgba(247, 242, 203, 0.1)");
    p.background(bkgcol);

    // unpack the JSON object as an array
    risoColors = Object.values(colorJSON);

    // Make the volume quieter
    Tone.Master.volume.value = volume;

    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
    });

    // Wire up our nodes:
    // synth->master

    //Make audio connections
    var feedbackDelay = new Tone.FeedbackDelay("8n", 0.6);
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);

    //Sets the frame rate
    p.frameRate(30);
  };

  // On window resize, update the canvas size
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  // Render loop that draws shapes with p5
  p.draw = function () {};

  $("body").click(function () {
    console.log("ciao");
    chooseNote();
    drawShape();
  });

  function chooseNote() {
    //choose a note
    const note = p.random(newarr);
    synth.triggerAttackRelease(note, "8n");
  };

  function drawShape() {
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
    // background(curColor, 0.1); 
    // curColor.setAlpha(0.1); 

    p.fill(curColor);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("arial");

    // p.text(curColorData.pantone, x, y + size / 2 + 20); 
    p.text(curColorData.name, x, y - size / 2 - 20);
    if (type === "circle") {
      p.ellipseMode(p.CENTER);
      p.circle(x, y, size);
    } else if (type === "line") {
      p.strokeWeight(dim * 0.01);
      p.stroke(curColor);
      p.polygon(x, y, size * 0.5, 2, p.random(-1, 1) * p.PI * 2);
    } else if (type === "polygon") {
      p.polygon(x, y, size * 0.5, p.floor(p.random(3, 10)), p.random(-1, 1) * p.PI * 2);
    }
  };
/* 
  // Update mouse position and play a sound
  window.addEventListener("touchstart", function () {
    // the user touched the screen!
    if (!active) {
      active = true;
      // Clear background to white to create an initial flash
      p.background(bkgcol);
    };
  });
 */
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

};

//Start tone and p5
$("#myButton").click(function (e) {
  StartAudioContext(Tone.context, "#playBut").then(function (e) {
    myp5 = new p5(sketch);
  });
});
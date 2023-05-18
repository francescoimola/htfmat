//Use jQuery via jQuery() instead of via $()
jQuery.noConflict();

//Global variables
let jpgarray = [];
let elem = [];
let myp5;
let newarr;
let rnumber;

//Change cursor to pointer on hover of header elements
jQuery(".how, .to, .feel, .more, .at").hover(function () {
  jQuery(this).css("cursor", "pointer");
});

//Hide ENTER button and display poem content on click of ENTER
function startAll(container, poemtext, titles) {
  jQuery(container).css("display", "none");
  jQuery(container).css("visibility", "hidden");
  jQuery(poemtext).css("display", "inherit");
  jQuery(poemtext).css("visibility", "visible");
  jQuery(titles).css("display", "inherit");
  jQuery(titles).css("visibility", "visible");
  return true
};
jQuery(".playBut").click(function () {
  startAll("#cont", "#hd", "#poem");
});

//Scroll to about section on click of HOME 
function scrollToAbout(event) {
  event.preventDefault();
  jQuery("html, body").animate({
    scrollTop: jQuery(jQuery(this).attr("href")).offset().top
  }, 500);
};
startAll() && jQuery("a.scrollLink").click(function () {
  scrollToAbout();
});

//This JavaScript function always returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//Global preload functions
function preloadScale() {
  //Preload scale from which to play notes
  const scalenames = Tonal.Scale.names();
  const myscale = scalenames[Math.floor(Math.random() * scalenames.length)];
  const musnotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  let mynote = musnotes => {
    return musnotes.map(e => e + getRndInteger(3, 6) + " " + myscale);
  };
  //This is your list of playble notes self-generated everytime you reload the page
  newarr = mynote(musnotes);
};

function preloadAll() {
  //Set up array of images to display
  const arr1 = ["./img/img (1).jpg", "./img/img (2).jpg", "./img/img (3).jpg", "./img/img (4).jpg", "./img/img (5).jpg", "./img/img (6).jpg", "./img/img (7).jpg", "./img/img (8).jpg", "./img/img (9).jpg", "./img/img (10).jpg", "./img/img (11).jpg", "./img/img (12).jpg", "./img/img (13).jpg", "./img/img (14).jpg", "./img/img (15).jpg", "./img/img (16).jpg", "./img/img (17).jpg", "./img/img (18).jpg", "./img/img (19).jpg", "./img/img (20).jpg", "./img/img (21).jpg", "./img/img (22).jpg", "./img/img (23).jpg", "./img/img (24).jpg", "./img/img (25).jpg"];
  const arr2 = ["./img/img (26).jpg", "./img/img (27).jpg", "./img/img (28).jpg", "./img/img (29).jpg", "./img/img (30).jpg", "./img/img (31).jpg", "./img/img (32).jpg", "./img/img (33).jpg", "./img/img (34).jpg", "./img/img (35).jpg", "./img/img (36).jpg", "./img/img (37).jpg", "./img/img (38).jpg", "./img/img (39).jpg", "./img/img (40).jpg", "./img/img (41).jpg", "./img/img (42).jpg", "./img/img (43).jpg", "./img/img (44).jpg", "./img/img (45).jpg", "./img/img (46).jpg", "./img/img (47).jpg", "./img/img (48).jpg", "./img/img (49).jpg", "./img/img (50).jpg"];
  const arr3 = ["./img/img (51).jpg", "./img/img (52).jpg", "./img/img (53).jpg", "./img/img (54).jpg", "./img/img (55).jpg", "./img/img (56).jpg", "./img/img (57).jpg", "./img/img (58).jpg", "./img/img (59).jpg", "./img/img (60).jpg", "./img/img (61).jpg", "./img/img (62).jpg", "./img/img (63).jpg", "./img/img (64).jpg", "./img/img (65).jpg", "./img/img (66).jpg", "./img/img (67).jpg", "./img/img (68).jpg", "./img/img (69).jpg", "./img/img (70).jpg", "./img/img (71).jpg", "./img/img (72).jpg", "./img/img (73).jpg", "./img/img (74).jpg", "./img/img (75).jpg"];
  const arr4 = ["./img/img (76).jpg", "./img/img (77).jpg", "./img/img (78).jpg", "./img/img (79).jpg", "./img/img (80).jpg", "./img/img (81).jpg", "./img/img (82).jpg", "./img/img (83).jpg", "./img/img (84).jpg", "./img/img (85).jpg", "./img/img (86).jpg", "./img/img (87).jpg", "./img/img (88).jpg", "./img/img (89).jpg", "./img/img (90).jpg", "./img/img (91).jpg", "./img/img (92).jpg", "./img/img (93).jpg", "./img/img (94).jpg", "./img/img (95).jpg", "./img/img (96).jpg", "./img/img (97).jpg", "./img/img (98).jpg", "./img/img (99).jpg", "./img/img (100).jpg"];
  jpgarray = arr1.concat(arr2, arr3, arr4);
  //Retrieves existing images blocks
  elem = document.getElementsByClassName("myPicture");
  //Preloads Tone.Scale
  startAll() && preloadScale();
  return true
};

//Display images on click
function ImgOnClick(headelems) {
  // Insert images from array into image block on click
  if (elem.length !== "" && jpgarray.length !== "") {
    jQuery(headelems).click(function () {
      for (let i = 0; i < elem.length; i += 1) {
        let rando = Math.floor(Math.random() * jpgarray.length);
        elem[i].src = jpgarray[rando];
      };
      jQuery(".myPicture").css("display", "inherit");
      jQuery(".myPicture").css("visibility", "visible");
    });
    return true
  } else {
    return false
  }
};
ImgOnClick(".how, .to, .feel, .more, .at");

//Tone.js and p5.js code
let sketch = function (p) {

  // Set volume in decibels
  const volume = -10;
  Tone.Master.volume.value = volume;
  //Variables for The synth we will use
  let synth;
  let risoColors;
  let colorJSON;
  // Preloads JSON file and Musical Scale (Preload functions are outside the p5 sketch scope)
  p.preload = function () {
    // loads a JSON as an object
    colorJSON = p.loadJSON("./tools/crayola.json");
    preloadAll();
  };

  //Canvas settings
  function makeCanvas() {
    //Create canvas and place it at the back of the bage
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    canvas.style("display: inherit");
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
  };

  //Create synth and make audio connections
  const limiter = new Tone.Limiter(-2).toDestination();
  function synthandConnect() {
    // Setup a synth with ToneJS
    synth = new Tone.Synth({
      oscillator: {
        type: "sine"
      }
    }).connect(limiter);

    //Make audio connections (Wire up our nodes: synth->master)
    let feedbackDelay = new Tone.FeedbackDelay("8n", 0.6);
    synth.connect(feedbackDelay);
    synth.connect(Tone.Master);
    feedbackDelay.connect(Tone.Master);
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

  //On window resize, update the canvas size
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  //Render loop that draws shapes with p5
  p.draw = function () {};

  //Draw shapes and play sound on click of body
  jQuery("body").click(function () {
    //Sets probability to have sound, visuals, both, or nothing on click
    const r = p.random(["sound", "shape", "soundshape"]);
    if (r === "sound") {
      playNote();
    } else if (r === "shape") {
      drawShape();
    } else if (r === "soundshape") {
      playNote();
      drawShape();
    } else {};
  });

  function playNote() {
    //choose a note
    if (Array.isArray(newarr)) {
      let n = p.random(newarr);
      let note = n.slice(0, 3);
      const l = p.random(["4n", "8n", "16n"]);
      synth.triggerAttackRelease(note, l);
    };
  };

  //Draw shape when the user touches the screen
  function drawShape() {
    const dim = p.min(p.width, p.height);
    const x = p.mouseX;
    const y = p.mouseY;

    //Retrieves data from JSON and turns it into text
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

    // Draw a basic polygon (handles triangles, squares, pentagons, etc.)
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
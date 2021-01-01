// Use jQuery via jQuery() instead of via $()
jQuery.noConflict();

//Hide ENTER button and display poem content on click of ENTER
jQuery(".playBut").click(function () {
  jQuery("#cont").css("display", "none");
  jQuery("#cont").css("visibility", "hidden");
  jQuery("#poem").css("display", "inherit");
  jQuery("#poem").css("visibility", "visible");
});

//Change cursor to pointer on hover of header elements
jQuery(".how, .to, .feel, .more, .at").hover(function () {
  jQuery(this).css("cursor", "pointer");
});

//Scroll to about section on click of HOME 
jQuery("a.scrollLink").click(function (event) {
  event.preventDefault();
  jQuery("html, body").animate({
    scrollTop: jQuery(jQuery(this).attr("href")).offset().top
  }, 500);
});

//Display images on click
ImgOnClick(".how, .to, .feel, .more, .at");
function ImgOnClick(h) {
  //Set up array of images to display
  let arr1 = ["./img/img (1).jpg", "./img/img (2).jpg", "./img/img (3).jpg", "./img/img (4).jpg", "./img/img (5).jpg", "./img/img (6).jpg", "./img/img (7).jpg", "./img/img (8).jpg", "./img/img (9).jpg", "./img/img (10).jpg", "./img/img (11).jpg", "./img/img (12).jpg", "./img/img (13).jpg", "./img/img (14).jpg", "./img/img (15).jpg", "./img/img (16).jpg", "./img/img (17).jpg", "./img/img (18).jpg", "./img/img (19).jpg", "./img/img (20).jpg", "./img/img (21).jpg", "./img/img (22).jpg", "./img/img (23).jpg", "./img/img (24).jpg", "./img/img (25).jpg"];
  let arr2 = ["./img/img (26).jpg", "./img/img (27).jpg", "./img/img (28).jpg", "./img/img (29).jpg", "./img/img (30).jpg", "./img/img (31).jpg", "./img/img (32).jpg", "./img/img (33).jpg", "./img/img (34).jpg", "./img/img (35).jpg", "./img/img (36).jpg", "./img/img (37).jpg", "./img/img (38).jpg", "./img/img (39).jpg", "./img/img (40).jpg", "./img/img (41).jpg", "./img/img (42).jpg", "./img/img (43).jpg", "./img/img (44).jpg", "./img/img (45).jpg", "./img/img (46).jpg", "./img/img (47).jpg", "./img/img (48).jpg", "./img/img (49).jpg", "./img/img (50).jpg"];
  let arr3 = ["./img/img (51).jpg", "./img/img (52).jpg", "./img/img (53).jpg", "./img/img (54).jpg", "./img/img (55).jpg", "./img/img (56).jpg", "./img/img (57).jpg", "./img/img (58).jpg", "./img/img (59).jpg", "./img/img (60).jpg", "./img/img (61).jpg", "./img/img (62).jpg", "./img/img (63).jpg", "./img/img (64).jpg", "./img/img (65).jpg", "./img/img (66).jpg", "./img/img (67).jpg", "./img/img (68).jpg", "./img/img (69).jpg", "./img/img (70).jpg", "./img/img (71).jpg", "./img/img (72).jpg", "./img/img (73).jpg", "./img/img (74).jpg", "./img/img (75).jpg"];
  let arr4 = ["./img/img (76).jpg", "./img/img (77).jpg", "./img/img (78).jpg", "./img/img (79).jpg", "./img/img (80).jpg", "./img/img (81).jpg", "./img/img (82).jpg", "./img/img (83).jpg", "./img/img (84).jpg", "./img/img (85).jpg", "./img/img (86).jpg", "./img/img (87).jpg", "./img/img (88).jpg", "./img/img (89).jpg", "./img/img (90).jpg", "./img/img (91).jpg", "./img/img (92).jpg", "./img/img (93).jpg", "./img/img (94).jpg", "./img/img (95).jpg", "./img/img (96).jpg", "./img/img (97).jpg", "./img/img (98).jpg", "./img/img (99).jpg", "./img/img (100).jpg"];
  let jpgarray = arr1.concat(arr2, arr3, arr4);

  //Retrieves existing images blocks
  let elem = document.getElementsByClassName("myPicture");

  //Preload image array
  function preload(imageArray, index) {
    index = index || 0;
    if (imageArray && imageArray.length > index) {
      let img = new Image();
      img.onload = function () {
        preload(imageArray, index + 1);
      };
      img.src = jpgarray[index];
    };
  };

  preload(jpgarray);

  // Insert images from array into image block on click
  jQuery(h).click(function () {
    for (var i = 0; i < elem.length; i += 1) {
      let rando = Math.floor(Math.random() * jpgarray.length);
      elem[i].src = jpgarray[rando];
    };
    jQuery(".myPicture").css("display", "inherit");
    jQuery(".myPicture").css("visibility", "visible");
  });
};

//Draw lines between paragraphs
jQuery(".vline").insertAfter("p");
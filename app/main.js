// Checks this js file is loaded
/* console.log("main.js is loaded"); */

// Set up array of images to display
let jpgarray = ["./media/pictures/fa1088fa106826e91db341f114c19af4.jpg", "./media/pictures/f77870284683e69c6c95c16f59cd1bae.jpg", "./media/pictures/f505111a7b02c630ab4969ff530ac710.jpg", "./media/pictures/f37825bb25e075065a43cec1e5f26d18.jpg", "./media/pictures/f4e40f7810ea6fa251d28690809c74b7.jpg", "./media/pictures/f1cc11a674dd7b32710ca4ac3ab2fd5e.jpg", "./media/pictures/ee56a01596bb83d83ac3523d34504404.jpg", "./media/pictures/ec127be9138621c856dabdab1fb46d2b.jpg", "./media/pictures/e4246291752326ed7c7389a516d9501a.jpg", "./media/pictures/e7f230886915fefbdefb70cef0a3ae06.jpg", "./media/pictures/e7b1fecc0320488f8712c04a14978433.jpg", "./media/pictures/db7460b8036b9826d6e7fb82e5fbbe6b.jpg", "./media/pictures/db0fd6b453fed7e3956ad4081a13cfa2.jpg", "./media/pictures/d823e29fc6f6a0b6bb3d70ab1ed2645c.jpg", "./media/pictures/d96c53aa840095a9f85653542fbb48fe.jpg", "./media/pictures/d85caa6bc6e733b5bf89490f9261735e.jpg", "./media/pictures/c9943e4dd68ae4661a50e4c22ce7d2e4.jpg", "./media/pictures/c5502d6024d89a3552743a0af0234305.jpg", "./media/pictures/c3708eaf6ff918105adcfc842db8d588.jpg", "./media/pictures/c1aca1f076c5db1de059a4828398a14d.jpg", "./media/pictures/bf2ced22d5db9c3b05729ac15b8482ab.jpg", "./media/pictures/beb0bf4958ff3fc80e28e66d3638d868.jpg", "./media/pictures/be10dd849bf6779bc28b0ebb7778dbc0.jpg", "./media/pictures/bab030572030b40a69697fe089739946.jpg", "./media/pictures/b2033e4851cd4a9d711632440f326b5f.jpg", "./media/pictures/b165eada15c868380413eafbfa4827aa.jpg", "./media/pictures/b86fe6c9a6d531ad987574ce4bcaffc0.jpg", "./media/pictures/b71aadd2e8a4d7c09f5b2c012a3b49e7.jpg", "./media/pictures/b6ea4579166a0905770b93962a8ae1a5.jpg", "./media/pictures/b5a4160ec3db000fc06a1f7037d2f370.jpg", "./media/pictures/b3b55d5ed07928a7dcd91eeee510c99f.jpg", "./media/pictures/af06cbde9df61a81bc6cb52af1bd4ce2.jpg", "./media/pictures/adfcf42fc5219ed1424f07af9b3d9942.jpg", "./media/pictures/add97e3e917ba335c0a084a2c5a63d00.jpg", "./media/pictures/ad94ba54120b176b94a7185a890aa330.jpg", "./media/pictures/ac76680456e951ec88ca2e862177eef2.jpg", "./media/pictures/a89128609a7e02f5a4588110e9e22bee.jpg", "./media/pictures/a6180c635998132cbfbd894829e7d171.jpg", "./media/pictures/a234b59b7186b014a7041ad07579dc04.jpg", "./media/pictures/a90ce45e3f606d71c8efb0921270f1fd.jpg", "./media/pictures/74732279c91f58e3a9bc1b2412d080cc.jpg", "./media/pictures/923819a34ee75ac475978cc763ffc055.jpg", "./media/pictures/472224ae348846a56c57f834d30000af.jpg", "./media/pictures/236653e28333d4045c2b39feccac178e.jpg", "./media/pictures/145208c574c3bbf6de8347dd9c953ccf.jpg", "./media/pictures/85584a2e09e634a9bf6dc2d0cba48c78.jpg", "./media/pictures/81201cf592debd5a2d52f1dcffcf3bf0.jpg", "./media/pictures/9835a0b6966b70154d4694e4cdb286da.jpg", "./media/pictures/7985aa526820af176bf75c1a081ed96a.jpg", "./media/pictures/6683e2de53e83e3804ab31cd6f955f71.jpg", "./media/pictures/5646d1240af7d83205193d6a66415df0.jpg", "./media/pictures/3725a8693fa0316b0122669b9cdc4a3a.jpg", "./media/pictures/3305d277af4c30601eaed9ba3494ffca.jpg", "./media/pictures/975b3e99d9f2d83274112975428b6a22.jpg", "./media/pictures/931ae7eecf25ad572e4e426a4d04736c.jpg", "./media/pictures/819a39afb722bb287c4b0d1a69ac5981.jpg", "./media/pictures/737beebfa7bc8852fb9eebd38ca4a266.jpg", "./media/pictures/730f0a31454d74b141fd911452b11cc8.jpg", "./media/pictures/693e9f98f447036577cc0bcd60785fcb.jpg", "./media/pictures/352e482e75d7fb00716020e739a8f2b6.jpg", "./media/pictures/132af4498257ef26aab77d3e488630b1.jpg", "./media/pictures/103c05be6a4e278775695d6d41b620ab.jpg", "./media/pictures/95eec28caa4a1246a984ea7b28e72d0a.jpg", "./media/pictures/94cee92bbfd54da258cba9218c40d9c1.jpg", "./media/pictures/86a34ba5449de6fb49a4aab3d5fbfd44.jpg", "./media/pictures/73efd292103be71a8c2be833626f4758.jpg", "./media/pictures/68a0d743c3794485342f6df95ecd9ddf.jpg", "./media/pictures/060f707c62c3e9d7ad1cdb32ef695457.jpg", "./media/pictures/55ec8646ae4077459c43f19ee1420ea2.jpg", "./media/pictures/50ef8eee9684bb71acf99f59cbd77ba3.jpg", "./media/pictures/047b222fa3f6677063fb3c849abd63e9.jpg", "./media/pictures/38a121e661a281e0e224f2e3b10adfb2.jpg", "./media/pictures/34c3800632d60b1dd5d84ee708c41e67.jpg", "./media/pictures/31b8eb4799fd7a0330f52d7eba7e7352.jpg", "./media/pictures/20c7d65fa013f8090116500f2b0c400e.jpg", "./media/pictures/19b17eea548166996c27fb6ae8811b08.jpg", "./media/pictures/11bc6df0bbc86f679fdeb003b00e3dad.jpg", "./media/pictures/9d9c909ed9de6c97d53e5e7195199c4c.jpg", "./media/pictures/8e4e909dde0e8683bf1d19db9d689746.jpg", "./media/pictures/8a15b698ef0e445b604ab25881d16f98.jpg", "./media/pictures/7eda7277f6bec0bcaa12159c437faf54.jpg", "./media/pictures/7b3168f44e199bf9d3a31d2e7ca7c1d7.jpg", "./media/pictures/7b4de69e72631fd75f8ac29adb047022.jpg", "./media/pictures/7acece2f523a14a86f6ab304b22df474.jpg", "./media/pictures/6f449c66486d8237d832e928dd318c6f.jpg", "./media/pictures/6d6c07100b156c02ad535b94e248c4ce.jpg", "./media/pictures/5e339de6ab0c72f74503cc864703958e.jpg", "./media/pictures/5a5097040af0a6d60d11e5bf2e1f49f8.jpg", "./media/pictures/4d668830bf1f78ab020eebed5c476eb3.jpg", "./media/pictures/3fbed8ef0c5df2386aed0c8c32aa5168.jpg", "./media/pictures/3d67560c3c4fc8dedff9a2e6261e849a.jpg", "./media/pictures/3d67560c3c4fc8dedff9a2e6261e849a - Copy.jpg", "./media/pictures/2ee053ff36b566e3047bf71104569abd.jpg", "./media/pictures/2d0f4429b8f2a464d0265c228cabf4eb.jpg", "./media/pictures/2c75a7ab3130106237ccb7e9783ecdf4.jpg", "./media/pictures/1eebe99c0cd60e2cf27da62d79361298.jpg", "./media/pictures/1e0c5d5947b18a0d9efa3ac541c15a73.jpg", "./media/pictures/0fc560ca3cf235133eb2586e6c75e7cb.jpg", "./media/pictures/0c7522f1c8a151ee4c0e0e594d3c815e.jpg", "./media/pictures/0adcf8deb4c3aef5ce29d0baf3987dd9.jpg"];

// Retrieves existing images blocks
let elem1 = document.getElementsByClassName("myPicture");
let elem2 = document.getElementsByClassName("myOtherPicture");

// Test for touch events support and if not supported, attach .no-touch class to the HTML tag.
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch";
}

// All jQuery code goes here 
define(['jquery'], function ($) {

  // Confirm code has loaded
  /*   console.log("jQuery code has loaded");
   */
  // Draw lines between paragraphs
  $(".vline").insertAfter(".paragraph");

  // A solution to the lack of hover on touch devices.
  $(document).on("touchstart, click", ".how, .to, .feel, .more, .at, .home", function (e) {
    if (!$(this).hasClass("hover")) {
      e.preventDefault();
    }
    $(".how, .to, .feel, .more, .at, .home").not($(this).toggleClass("hover")).removeClass("hover");
  });

  // Preload image array
  $(document).ready(function () {

    // This message displays when the entire document has loaded
    /* console.log("document is ready"); */

    function preload(imageArray, index) {
      index = index || 0;
      if (imageArray && imageArray.length > index) {
        var img = new Image();
        img.onload = function () {
          preload(imageArray, index + 1);
        }
        img.src = jpgarray[index];
      }
    }
    // images is an array with image metadata 
    preload(jpgarray);

  });

  // Insert images from array into image block on hover
  $(".how, .to, .feel, .more, .at, .home").hover(function () {
    'use strict';
    /* console.log("hovered over header"); */
    for (var i = 0; i < elem1.length; i += 1) {
      let rando1 = Math.floor(Math.random() * jpgarray.length);
      let rando2 = Math.floor(Math.random() * jpgarray.length);
      elem1[i].src = jpgarray[rando1];
      elem1[i].src = jpgarray[rando2];
      $(this).css('cursor', 'pointer');
    }
  });
});

/* 
// Setting Up Are.na Js (Are.na API)

var mytoken = config.MY_API_ACCESS_TOKEN;

console.log("fetched access token")

const Arena = require(["are.na"], function (arena) {
  console.log("message from inside the require function");
});

let arena = new Arena({
  accessToken: mytoken
});

console.log("You have accessed are.na");
 */

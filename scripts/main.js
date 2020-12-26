"use strict";

$( ".vline" ).insertAfter( ".paragraph" );

var mytoken = config.MY_API_ACCESS_TOKEN;
var secretkey = config.SECRET_API_KEY;
var appid = config.APP_ID;

/* const Arena = require("are.na");
 
let arena = new Arena({ accessToken: "abcd" });
 
arena
  .channel("arena-influences")
  .get()
  .then(chan => {
    chan.contents.map(item => {
      console.log(item.title);
    });
  })
  .catch(err => console.log(err)); */
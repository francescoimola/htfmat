const directory = "./img/";
const fs = require('fs');
var dirlenght = 0

fs.readdir(directory, (err, files) => {
    dirlenght = files.length;
});

var myarray = new Array(dirlenght);

fs.readdirSync(directory).forEach(file => {
    myarray.push(file);
});

for (var i = 0; i < myarray.length; i++) {
    myarray[i] = "./img/" + myarray[i];
};

var slice1 = myarray.slice(0, 25);
var slice2 = myarray.slice(25, 50);
var slice3 = myarray.slice(50, 75);
var slice4 = myarray.slice(75, 100);

console.log(slice1.length + " " + slice2.length + " " + slice3.length + " " + slice4.length);

var myJSON1 = JSON.stringify(slice1);
var myJSON2 = JSON.stringify(slice2);
var myJSON3 = JSON.stringify(slice3);
var myJSON4 = JSON.stringify(slice4);

console.log(myJSON1);
console.log(" ");
console.log(myJSON2);
console.log(" ");
console.log(myJSON3);
console.log(" ");
console.log(myJSON4);

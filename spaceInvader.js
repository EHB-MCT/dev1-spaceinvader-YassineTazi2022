"use strict";


let cnv = document.querySelector("canvas");
cnv.width = innerWidth;
cnv.height = innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "green"
ctx.rect(20,150,100,100);
ctx.rect(500,150,100,100);
ctx.rect(20,50,580,100);
ctx.rect(265,450,100,100);
ctx.rect(265,250,100,100);
ctx.fill();
ctx.stroke();
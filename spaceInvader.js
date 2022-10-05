"use strict";


let cnv = document.querySelector("canvas");
cnv.width = innerWidth;
cnv.height = innerHeight;
let ctx = cnv.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "black";
ctx.rect(0,0,300,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "Lime";
ctx.rect(20,70,50,50);
ctx.rect(220,70,50,50);
ctx.rect(20,20,50,50);
ctx.rect(70,20,50,50);
ctx.rect(120,20,50,50);
ctx.rect(170,20,50,50);
ctx.rect(220,20,50,50);
ctx.rect(120,220,50,50);
ctx.rect(120,120,50,50);
ctx.fill();

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bife,bifeimg;
var car,carimg1,carimg2,carimg3,motoimg;
var pessoas,pessoaimg1,pessoaimg2,pessoaimg3;
var casa,casaimg;
var dog,dogeat,dogrun,dogobs,dogfim,doginicio;
var policia,policiaimg1,policiaimg2;
var gameOver,gameOverimg;
var floresta,florestaimg;

function preload()
{
  dogeat=loadImage("dogEat.png")
  dogobs=loadImage("dogObs.png")
  dogfim=loadImage("dogFim.png")
  doginicio=loadImage("dogInicio.png")
  dogrun=loadAnimation("dogRun1.png","dogRun2.png")
  bifeimg=loadImage("bife.png")
  carimg1=loadImage("carro1.png")
  carimg2=loadImage("carro2.png")
  carimg3=loadImage("carro3.png")
  motoimg=loadImage("moto.png")
  pessoaimg1=loadImage("pessoa1.png")
  pessoaimg2=loadImage("pessoa2.png")
  pessoaimg3=loadImage("pessoa3.png")
  casaimg=loadImage("casa1.png")
  policiaimg1=loadImage("policial1.png")
  policiaimg2=loadImage("policial2.png")
  gameOverimg=loadImage("gameOver.png")
  florestaimg=loadImage("floresta.png")
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
 

 dog=createSprite(1400,635,50,50) 
 dog.addImage("inicio",doginicio)
 dog.scale=0.25
 dog.frameDelay=15
}

function draw() {
background(florestaimg)  
drawSprites()
}
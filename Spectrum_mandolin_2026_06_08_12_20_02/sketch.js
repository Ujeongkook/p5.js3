let isDay=true,pendulumAngle=0,mouthOpen=0;
let cloudX=-200,cloudActive=false;
let m1x=600,m1y=-50,m1active=false;
let m2x=500,m2y=-30,m2active=false;
let meteor3X=550,meteor3Y=-70,meteor3Active=false;

function setup(){
  createCanvas(600,400);
}

function draw(){
  if(isDay){
    background(135,206,235);
    fill(255,220,0);noStroke();
    ellipse(520,60,50,50);
    if(cloudActive){
      fill(255,255,255,200);noStroke();
      ellipse(cloudX,80,60,40);
      ellipse(cloudX+30,75,50,35);
      ellipse(cloudX+55,80,55,38);
      ellipse(cloudX+150,100,70,45);
      ellipse(cloudX+190,95,60,40);
      ellipse(cloudX+225,100,65,42);
      ellipse(cloudX+320,70,55,35);
      ellipse(cloudX+350,68,50,32);
      ellipse(cloudX+375,70,50,35);
      cloudX+=1.5;
      if(cloudX>700)cloudActive=false;
    }
  }else{
    background(25,25,112);
    fill(240,240,255);noStroke();
    ellipse(520,60,45,45);
    fill(25,25,112);
    ellipse(510,55,35,35);
    if(m1active){
      stroke(255,255,200);strokeWeight(3);
      line(m1x,m1y,m1x+30,m1y-30);
      fill(255,255,220);noStroke();
      ellipse(m1x,m1y,8,8);
      m1x-=6;
      m1y+=6;
      if(m1y>400)m1active=false;
    }
    if(m2active){
      stroke(255,255,180);strokeWeight(2.5);
      line(m2x,m2y,m2x+25,m2y-25);
      fill(255,255,200);noStroke();
      ellipse(m2x,m2y,7,7);
      m2x-=5;
      m2y+=5;
      if(m2y>400)m2active=false;
    }
    if(meteor3Active){
      stroke(255,250,200);
strokeWeight(2.8);
      line(meteor3X,meteor3Y,meteor3X+28,meteor3Y-28);
      fill(255,255,210);noStroke();
      ellipse(meteor3X,meteor3Y,8,8);
      meteor3X-=6.5;
      meteor3Y+=6.5;
      if(meteor3Y>400)meteor3Active=false;
    }
  }
  fill(185,185,190);noStroke();
  beginShape();
  vertex(140,400);vertex(460,400);
  bezierVertex(460,370,450,310,412,280);
  bezierVertex(385,267,345,263,300,263);
  bezierVertex(255,263,215,267,188,275);
  bezierVertex(162,300,150,365,140,400);
  endShape(CLOSE);
  fill(90,145,200);noStroke();
  triangle(258,263,342,263,300,318);
  fill(185,185,190);
  triangle(188,275,262,263,300,312);
  triangle(412,280,338,263,300,312);
  fill(230,190,158);noStroke();
  rect(273,232,54,38,3);
  pendulumAngle=sin(frameCount*0.08)*0.25;
  stroke(75,65,60);strokeWeight(1.8);noFill();
  let neckCenterX=300,neckCenterY=268;
  let pendantX=neckCenterX+sin(pendulumAngle)*20;
  let pendantY=310+cos(pendulumAngle)*2;
  line(284,neckCenterY,pendantX,pendantY);
  line(316,neckCenterY,pendantX,pendantY);
  fill(165,155,145);stroke(70,60,55);strokeWeight(1.2);
  ellipse(pendantX,pendantY,11,11);
  fill(90,80,75);noStroke();
  ellipse(pendantX,pendantY,5,5);
  fill(230,190,158);noStroke();
  ellipse(300,173,146,165);
  fill(40,25,15);noStroke();
  arc(300,157,152,158,PI,TWO_PI);
  ellipse(300,106,126,46);
  fill(220,182,148);noStroke();
  ellipse(228,180,17,23);
  ellipse(372,180,17,23);
  let blinkCycle=millis()%2000;
  let isBlinking=blinkCycle>1800&&blinkCycle<1900;
  if(isBlinking){
    stroke(55,38,28);strokeWeight(3);noFill();
    line(255,175,285,175);
    line(315,175,345,175);
  }else{
    fill(255);noStroke();
    ellipse(270,175,30,28);
    ellipse(330,175,30,28);
    fill(55,38,28);
    ellipse(270,176,19,19);
    ellipse(330,176,19,19);
    fill(15,10,8);
    ellipse(270,176,12,12);
    ellipse(330,176,12,12);
    fill(255);
    ellipse(275,171,5,5);
    ellipse(335,171,5,5);
  }
  stroke(38,22,12);strokeWeight(2.8);noFill();
  arc(270,161,26,10,PI+0.25,TWO_PI-0.25);
  arc(330,161,26,10,PI+0.25,TWO_PI-0.25);
  stroke(190,145,108);strokeWeight(2.2);noFill();
  line(300,183,297,206);
  arc(300,207,22,11,0,PI);
  mouthOpen=abs(sin(frameCount*0.1))*8;
  stroke(182,108,102);strokeWeight(2);noFill();
  line(287,225,313,225);
  arc(300,226,26,10+mouthOpen,0,PI);
}

function mousePressed(){
  isDay=!isDay;
  cloudActive=false;
  m1active=false;
  m2active=false;
  meteor3Active=false;
}

function keyPressed(){
  if(key=='c'||key=='C'){
    if(isDay){
      cloudX=-200;
      cloudActive=true;
    }
  }else if(key=='t'||key=='T'){
    if(!isDay){
      m1x=random(450,600);
      m1y=random(-60,-20);
      m1active=true;
      m2x=random(400,550);
      m2y=random(-50,-10);
      m2active=true;
      meteor3X=random(500,600);
      meteor3Y=random(-80,-30);
      meteor3Active=true;
    }
  }else if(key=='g'||key=='G'){
    saveGif('character_animation',10);
  }
}
function setup() {
  createCanvas(600, 420);
  noLoop();
}

function draw() {
  background(245, 240, 230);

  
  fill(185, 185, 190); noStroke();
  beginShape();
  vertex(140, 420); vertex(460, 420);
  bezierVertex(460, 390, 450, 330, 412, 300);
  bezierVertex(385, 287, 345, 283, 300, 283);
  bezierVertex(255, 283, 215, 287, 188, 295);
  bezierVertex(162, 320, 150, 385, 140, 420);
  endShape(CLOSE);

  
  fill(90, 145, 200); noStroke();
  triangle(258, 283, 342, 283, 300, 338);
  fill(185, 185, 190);
  triangle(188, 295, 262, 283, 300, 332);
  triangle(412, 300, 338, 283, 300, 332);

  
  fill(230, 190, 158); noStroke();
  rect(273, 252, 54, 38, 3);

  
  fill(230, 190, 158); noStroke();
  ellipse(300, 193, 146, 165);

  
  fill(40, 25, 15); noStroke();
  arc(300, 177, 152, 158, PI, TWO_PI);
  ellipse(300, 126, 126, 46);

  
  fill(220, 182, 148); noStroke();
  ellipse(228, 200, 17, 23);
  ellipse(372, 200, 17, 23);

  fill(255); ellipse(270,195,30,28); ellipse(330,195,30,28);
  fill(55,38,28); ellipse(270,196,19,19); ellipse(330,196,19,19);
  fill(15,10,8); ellipse(270,196,12,12); ellipse(330,196,12,12);
  fill(255); ellipse(275,191,5,5); ellipse(335,191,5,5);

  stroke(38,22,12); strokeWeight(2.8); noFill();
  arc(270,181,26,10,PI+0.25,TWO_PI-0.25);
  arc(330,181,26,10,PI+0.25,TWO_PI-0.25);

  
  stroke(190,145,108); strokeWeight(2.2); noFill();
  line(300,203, 297,226);
  arc(300,227,22,11,0,PI);

  
  stroke(182,108,102); strokeWeight(2); noFill();
  line(287,245, 313,245);
  arc(300,246,26,10,0,PI);

  
  stroke(75,65,60); strokeWeight(1.8); noFill();
  line(284,268, 300,306);
  line(316,268, 300,306);
  fill(165,155,145); stroke(70,60,55); strokeWeight(1.2);
  ellipse(300,310,11,11);
  fill(90,80,75); noStroke();
  ellipse(300,310,5,5);
}
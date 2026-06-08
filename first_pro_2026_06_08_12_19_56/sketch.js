function setup() {
	
	createCanvas(600, 400);
    background(0);
  
  fill(0,50,0);
  triangle(0,400, 100,400, 50,0)
  rect(125,0,50,400);
  triangle(200,0, 300,0, 250,400)
  rect(325,0,50,400);
  triangle(400,400, 500,400, 450,0);
  rect(525,0,50,400);
    
  
    // 파랭이
    fill (0,150,255);
    noStroke();
    
    
    ellipse(170,140,80,80);
    ellipse(150, 120, 70, 70);
  ellipse(190, 120, 70, 70);
  ellipse(150, 160, 80, 80);
  ellipse(190, 160, 90, 90);
  
    fill(0);
    circle(170, 140, 10);
  
  // 주황이
  fill(255, 100, 0);
  noStroke();
  
  ellipse(400, 110, 90, 90);
  ellipse(375, 85, 80, 80);
  ellipse(425, 85, 80, 80);
  ellipse(375, 135, 80, 80);
  ellipse(425, 135, 80, 89);
  
  fill (0);
  circle (400, 110, 12)
  
  // 좀 밝은 노랑
  fill (255, 230, 0);
  noStroke();
  
  ellipse(220, 300, 90, 90);
  ellipse(220, 245, 80,80);
  ellipse( 260, 285, 90, 90);
  ellipse(250, 345, 90, 90);
  ellipse(190, 345, 90, 90);
  ellipse(180, 285, 90, 90);
  
  fill(0);
  circle( 220, 300, 12);
  
  // 라스트
  fill(255, 255, 100);
  noStroke ();
  
 
  ellipse(360, 305, 65, 65);
  ellipse(390, 325, 65, 65);
  ellipse(375, 365, 65, 65);
  ellipse(345, 365, 65, 65);
  ellipse( 330, 325, 65, 65);
  
  fill(0);
  circle(360, 337, 9);
    
    
}


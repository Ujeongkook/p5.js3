function setup() {
  createCanvas(600, 400);
}

let sizes = [1.0, 1.05, 0.82, 1.12];

function draw() {
  background(0);

  
  let t = millis() / 1000;
  let colorIndex = int(t) % 4;
  let lerpAmt = (t % 1);

  
  let ampFactor = sin(t * 0.6) * 0.5 + 0.5;

  fill(0, 50, 0);
  let sway1 = sin(t * 1.5) * 4 * ampFactor;
  triangle(0, 400, 100, 400, 50 + sway1, 0);
  rect(125 + sway1, 0, 50, 400);

  let sway2 = sin(t * 2) * 5 * ampFactor;
  triangle(200, 0, 300, 0, 250 + sway2, 400);
  rect(325 + sway2, 0, 50, 400);

  let sway3 = sin(t * 2.5) * 6 * ampFactor;
  triangle(400, 400, 500, 400, 450 + sway3, 0);
  rect(525 + sway3, 0, 50, 400);

  // 색상 배열
  let colors = [
    [0, 150, 255],      // 0: 파랑
    [255, 100, 0],      // 1: 주황
    [255, 255, 100],    // 2: 라이트노랑
    [255, 230, 0]       // 3: 밝은노랑
  ];

  // 크기 증가 
  for(let i = 0; i < 4; i++) {
    sizes[i] += 0.01;
    if(sizes[i] > 1.5) sizes[i] = 0.8;
  }

  // 색상 반시계방향
  let currIdx0 = (4 - colorIndex) % 4;
  let nextIdx0 = (5 - colorIndex) % 4;
  let c0 = lerpColor(color(colors[currIdx0]), color(colors[nextIdx0]), lerpAmt);

  let currIdx1 = (5 - colorIndex) % 4;
  let nextIdx1 = (6 - colorIndex) % 4;
  let c1 = lerpColor(color(colors[currIdx1]), color(colors[nextIdx1]), lerpAmt);

  let currIdx2 = (6 - colorIndex) % 4;
  let nextIdx2 = (7 - colorIndex) % 4;
  let c2 = lerpColor(color(colors[currIdx2]), color(colors[nextIdx2]), lerpAmt);

  let currIdx3 = (7 - colorIndex) % 4;
  let nextIdx3 = (8 - colorIndex) % 4;
  let c3 = lerpColor(color(colors[currIdx3]), color(colors[nextIdx3]), lerpAmt);

  // 크기 (시계방향)
  let s0 = sizes[colorIndex % 4];
  let s1 = sizes[(1 + colorIndex) % 4];
  let s2 = sizes[(2 + colorIndex) % 4];
  let s3 = sizes[(3 + colorIndex) % 4];

  // 파랭이 왼위
  let swayA = sin(t * 2) * 2 * ampFactor;
  fill(c0);
  noStroke();
  ellipse(170 + swayA, 140, 80 * s0, 80 * s0);
  ellipse(150 + swayA, 120, 70 * s0, 70 * s0);
  ellipse(190 + swayA, 120, 70 * s0, 70 * s0);
  ellipse(150 + swayA, 160, 80 * s0, 80 * s0);
  ellipse(190 + swayA, 160, 90 * s0, 90 * s0);
  fill(0);
  circle(170 + swayA, 140, 10);

  // 주황이 오위
  let swayB = sin(t * 2.3) * 2.5 * ampFactor;
  fill(c1);
  noStroke();
  ellipse(400 + swayB, 110, 90 * s1, 90 * s1);
  ellipse(375 + swayB, 85, 80 * s1, 80 * s1);
  ellipse(425 + swayB, 85, 80 * s1, 80 * s1);
  ellipse(375 + swayB, 135, 80 * s1, 80 * s1);
  ellipse(425 + swayB, 135, 80 * s1, 89 * s1);
  fill(0);
  circle(400 + swayB, 110, 12);

  // 라스트 오아
  let swayC = sin(t * 2.8) * 3 * ampFactor;
  fill(c2);
  noStroke();
  ellipse(360 + swayC, 305, 65 * s2, 65 * s2);
  ellipse(390 + swayC, 325, 65 * s2, 65 * s2);
  ellipse(375 + swayC, 365, 65 * s2, 65 * s2);
  ellipse(345 + swayC, 365, 65 * s2, 65 * s2);
  ellipse(330 + swayC, 325, 65 * s2, 65 * s2);
  fill(0);
  circle(360 + swayC, 337, 9);

  // 좀 밝은 노랑 
  let swayD = sin(t * 2.5) * 2.7 * ampFactor;
  fill(c3);
  noStroke();
  ellipse(220 + swayD, 300, 90 * s3, 90 * s3);
  ellipse(220 + swayD, 245, 80 * s3, 80 * s3);
  ellipse(260 + swayD, 285, 90 * s3, 90 * s3);
  ellipse(250 + swayD, 345, 90 * s3, 90 * s3);
  ellipse(190 + swayD, 345, 90 * s3, 90 * s3);
  ellipse(180 + swayD, 285, 90 * s3, 90 * s3);
  fill(0);
  circle(220 + swayD, 300, 12);
}

function keyPressed() {
  if(key == 'g' || key == 'G') {
    saveGif('abstract_animation', 10);
  }
}


const testo = "WTF";
const fontSize = 120;
const parti = 40;
const sfasamento = 4;
let font;
let circleX, circleY, triangleX, triangleY;
let textAlpha = 0;

function preload() {
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");  
}

function setup() {
  createCanvas(1200, 1200, "svg"); 
  rectMode(CENTER);
  angleMode(DEGREES);

  circleX = width / 2;  
  circleY = height / 2 + 50;
  triangleX = width / 2;  
  triangleY = height / 2 + 150;
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(48);

  noLoop();  
}

function draw() {
  clear(); 
  background(200);  

  fill(255, 180, 0); 
  rect(50, 50, width - 100, height - 100, 20); 
  textAlpha = min(textAlpha + 1, 255);
  
    fill(0, textAlpha);  
  textFont('Georgia');
  text("WFT", width / 2, 150);  

    textSize(24);
  fill(80, textAlpha);
  text("masutong", width / 2, 250); 

    textFont(font);
  textLeading(fontSize);
  textSize(fontSize);
  const text_width = textWidth(testo);
  const h_parti = fontSize / parti;

  noStroke();
  fill(0);

  for (let i = 0; i < parti; i++) {
    push();
    translate(text_width / 2, 0);
    translate(random(-sfasamento, sfasamento), 0);

    beginClip();
    rect(0, i * h_parti + h_parti / 2, text_width, h_parti);
    endClip();

    text(testo, -text_width / 2, fontSize);
    pop();
  }

  
  fill(255, 0, 0); 
  circleX += random(-1, 1);  
  circleY += random(-1, 1);  
  ellipse(circleX, circleY, 150, 150);  

  fill(0, 255, 0);  
  triangleX += random(-1, 1);  
  triangleY += random(-1, 1);  
  triangle(triangleX - 50, triangleY, triangleX + 50, triangleY, triangleX, triangleY + 50);  // 绘制绿色三角形

  textSize(18);
  fill(100, textAlpha);
  text("WTF", width / 2, height - 50);
}

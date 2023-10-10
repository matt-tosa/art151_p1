let ang;
let x = 4;

function setup() {
  createCanvas(1541/x,1393/x)
  angleMode(DEGREES);
  
  ang = 0;
}

function draw() {
  

  fill("#ff2106");
  noStroke();

  rotate(ang);
  push();
    circle(500/x,498/x,600/x);
    beginShape();
      vertex(432/x,246/x);
      vertex(463/x,112/x);
      vertex(515/x,112/x);
      vertex(552/x,246/x);
    endShape();

    beginShape();
      vertex(432/x,246/x);
      vertex(463/x,112/x);
      vertex(515/x,112/x);
      vertex(552/x,246/x);
    endShape();

    beginShape();
      vertex(296.9/x,334.1/x);
      vertex(243.2/x,207.5/x);
      vertex(285.2/x,176.9/x);
      vertex(394/x,263.6/x);
    endShape();

    beginShape();
      vertex(239.3/x,484.8/x); 
      vertex(121.5/x,413.9/x);
      vertex(137.5/x,364.5/x); 
      vertex(276.4/x,370.7/x);
    endShape();

    beginShape();
      vertex(281.4/x,640.5/x); 
      vertex(144.3/x,652.5/x); 
      vertex(128.3/x,603/x); 
      vertex(244.3/x,526.4/x);
    endShape();

    beginShape();
      vertex(406.9/x,741.8/x); 
      vertex(303/x,832/x); 
      vertex(261/x,801.5/x); 
      vertex(309.8/x,671.3/x);
    endShape();

    beginShape();
      vertex(568/x,750/x);
      vertex(537/x,884/x);
      vertex(485/x,884/x);
      vertex(448/x,750/x);
    endShape();

    beginShape();
      vertex(703.1/x,661.9/x);
      vertex(756.8/x,788.5/x);
      vertex(714.8/x,819.1/x);
      vertex(606/x,732.4/x);
    endShape();

    beginShape();
      vertex(760.7/x,511.2/x);
      vertex(878.5/x,582.1/x);
      vertex(862.5/x,631.5/x);
      vertex(723.6/x,625.3/x);
    endShape();

    beginShape();
      vertex(718.7/x,355.5/x);
      vertex(855.7/x,343.5/x);
      vertex(871.7/x,393/x);
      vertex(755.7/x,469.6/x);
    endShape();

    beginShape();
      vertex(593.1/x,254.2/x);
      vertex(697/x,164/x);
      vertex(739/x,194.5/x);
      vertex(690.2/x,324.7/x);
    endShape();
  pop();

}
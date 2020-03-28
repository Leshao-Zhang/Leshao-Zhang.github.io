const scale = 12;
const lorenz = new LorenzAttractor(1000);
let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createEasyCam();
  cam.zoom(-300);
  cam.rotateY(90);
  cam.panX(-250);
  document.oncontextmenu = ()=>false;
}


function draw() {
  background(255);
  lorenz3D();
  //HUD();
}

function HUD(){
  cam.beginHUD();
  
  fill(255,100);
  noStroke();
  rect(0,height-400,width,height);
  
  translate(200,height-200);
  let x = 0;
  stroke(0);
  noFill();
  beginShape();
  strokeWeight(3);
  for(let item of lorenz.getTrajectory()){
    vertex(x,item.x*5);
    x += 1;
  }
  endShape();
  cam.endHUD();
}

function lorenz3D(){
  lorenz.run();
  //stroke("#FF4DBE");
  stroke(0);
  noFill();
  beginShape();
  strokeWeight(1);
  for(let item of lorenz.getTrajectory()){
    vertex(item.x*scale,item.y*scale,item.z*scale);
  }
  endShape();
}

function LorenzAttractor(size){
  let sigma = 10;
  let beta = 8/3;
  let rho = 28;
  let dt = 0.01;
  let x = 1;
  let y = 1;
  let z = 1;
  let dx = 0;
  let dy = 0;
  let dz = 0;
  let traj = new CircularFIFOQ(size);
  
  this.run = function(){
    dx=(sigma*(y-x))*dt;
    dy=(x*(rho-z)-y)*dt;
    dz=(x*y-beta*z)*dt;
    x+=dx;
    y+=dy;
    z+=dz;
    traj.add(new Vector3(x,y,z));
  };
  
  this.getPoint = function(){
    return [x,y,z];
  };
  
  this.getTrajectory = function(){
    return traj.iter();
  };
}

function Vector3(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;
}

function CircularFIFOQ(size){
  let Q = [];
  let start = 0;
  let end = 0;
  let full = false;
  
  this.add = function(item){
    if(end>=size){
      end=0;
      full=true;
    }
    if(full){
      if(start>=size){
        start=0;
      }
      start++;
    }
    Q[end++]=item;
  };
  
  this.get = function(index){
    index=start+index;
    if(index>=size){
      index-=size;
    }
    return Q[index];
  };
  
  this.size = function(){
    if(full){
      return size;
    }
    return end;
  };
  
  this.iter = function*(){
    let n=0;
    while(n<this.size()){
      if(start+n<size){
        yield Q[start+n];
      }else{
        yield Q[start+n-size];
      }
      n++;
    }
  };
}

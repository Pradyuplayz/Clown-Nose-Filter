noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
canvas = createCanvas(410, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(410, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results) {

if(results.length > 0) {
console.log(results);
noseX = results[0].pose.nose.x-18;
noseY = results[0].pose.nose.y-10;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}

function modelLoaded() {
console.log('PoseNet Is Initialized')
}

function draw() {
image(video, 0, 0, 410, 300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX, noseY, 35);
image(clown_nose, noseX, noseY, 50, 40);
}

function take_snapshot() {
save('myFilterImage.png')
}
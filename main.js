noseX=0
noseY=0
leftwristX=0
rightwristX=0
difference=0

function setup(){
    video= createCapture(VIDEO)
    video.size (555,499)
    canvas=createCanvas(555,400);
    canvas.position(580,175);
    poseNet=ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose',gotPose)
}
function modelLoaded(){

}
function gotPose(result){
    if (result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        leftwristX=result[0].pose.leftWrist.x;
        rightwristX=result[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}
function draw(){
    background("blue")
    fill("yellow")
stroke("white")
square(noseX,noseY,difference);
}
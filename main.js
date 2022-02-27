x = 0 ;
y = 0 ;
right_x= 0 ; 
left_x = 0 ;
distance = 0 ;


function setup(){
    canvas = createCanvas(500,500);
    canvas.position(700,200);
    video = createCapture(VIDEO);
    video.size(600,500);
    video.position(100,200);
    posenetmodel = ml5.poseNet(video ,modelloaded);
    posenetmodel.on("pose" , getresults);
    
}

function modelloaded(){
    console.log("model has loaded")
}

function getresults(resultsaaray){
    if(resultsaaray.lenght > 0 ){
        console.log(resultsaaray);
x = resultsarray[0].pose.nose.x;
y = resultsarray[0].pose.nose.y;
right_x= resultsarray[0].pose.rightWrist.x;
left_x =resultsarray[0].pose.leftWrist.x;
distance = floor(right_x - left_x); 
   }
}

function draw(){
    background("lightblue");
    textSize(distance);
    fill("blue");
    stroke("lightblue");
    text("Navya" , x , y);
    
}
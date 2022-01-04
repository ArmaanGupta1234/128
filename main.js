song="";
song1="";
function preload()
{
    song=loadSound("music.mp3");
    song1=loadSound("music 2.mp3");
}


function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        
    }
}


function draw()
{
    image(video,0,0,600,500);

}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}


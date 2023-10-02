
status1 ="";
objects =[];
function preload(){
  }

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded(){
    console.log("Model Loaded")
    status1=true;
    objectDetector.detect(video, gotResult);
}


function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video,0,0,380,380);

    if (status1 !="")
    {      for (i = 0; i < objects.length; i++)
        {
            r=random(255);
            g=random(255);
            b=random(255);
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("nobj").innerHTML = "no. of objects detected are : " + objects.length
         fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "*", objects[i].x, objects [i].y);
        noFill();
        stroke(r,b,g);
        rect(objects[i].x, objects[i].y, objects[i].width, objects [i].height);   
        }
    } 
    
    
}



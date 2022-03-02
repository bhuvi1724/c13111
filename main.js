function setup(){
    canvas=createCanvas(500,550);
    canvas.center();
    stroke("")
}
    onclick =back()
    {
        window.location("index.html")
    }
      
    img="";
status="";
object=[];
function setup(){
canvas=createCanvas(500,550);
canvas.center();
object_decter=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("model Loaded");
    status=true;
    object_decter.detect(img,gotResult);
}
function gotResult(error,results){
if (error) {
    console.log(error);
} else {
    console.log(results);
    object=results;
    
}
}



function preload(){
img=loadImage("dog_cat.jpg");

}





function draw(){
    image(img,0,0,500,550);
    if (status !="") {
       for (i=0; i< object.length;i++) {
          
           
       
        fill("#ff0000");
        percent= floor(object[i].confidence*100);

text(object[i].label+""+ percent+"%",object[i].x,object[i].y);
noFill();
stroke("#ff0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
       }

        
    }

}
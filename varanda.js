img4 = "";
status4 = "";
objects4 = [];

function preload(){
    img4 = loadImage('varanda.jpeg');
}

function gotResult(error, results){
if(error){
    console.error(error);
}
console.log(results);
objects4 = results;
}


function modelLoded(){
    console.log("Modelo carregado");
    status4 = true;
    detector.detect(img4, gotResult);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("statusv").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img4, 0, 0, 640, 420);

    if(status4 !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("statusv").innerHTML = "Status: Objeto Detectado";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects4[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects4[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
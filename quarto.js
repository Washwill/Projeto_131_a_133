img2 = "";
status2 = "";
objects2 = [];

function preload(){
    img2 = loadImage('quarto.jpeg');
}

function gotResult(error, results){
if(error){
    console.error(error);
}
console.log(results);
objects2 = results;
}


function modelLoded(){
    console.log("Modelo carregado");
    status2 = true;
    detector.detect(img2, gotResult);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("statusq").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img2, 0, 0, 640, 420);

    if(status !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("statusq").innerHTML = "Status: Objeto Detectado";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects2[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects2[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
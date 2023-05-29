img1 = "";
status1 = "";
objects1 = [];

function preload(){
    img1 = loadImage('cozinha.webp');
}

function gotResult(error, results){
if(error){
    console.error(error);
}
console.log(results);
objects1 = results;
}


function modelLoded(){
    console.log("Modelo carregado");
    status1 = true;
    detector.detect(img1, gotResult);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("statusc").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img1, 0, 0, 640, 420);

    if(status1 !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("statusc").innerHTML = "Status: Objeto Detectado";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects1[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects1[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
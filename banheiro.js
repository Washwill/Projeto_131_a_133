img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('banheiro.jpeg');
}

function gotResult(error, results){
if(error){
    console.error(error);
}
console.log(results);
objects = results;
}


function modelLoded(){
    console.log("Modelo carregado");
    status = true;
    detector.detect(img, gotResult);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("statusb").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("statusb").innerHTML = "Status: Objeto Detectado";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
img3 = "";
status3 = "";
objects3 = [];

function preload(){
    img3 = loadImage('sala.jpeg');
}

function gotResult(error, results){
if(error){
    console.error(error);
}
console.log(results);
objects3 = results;
}


function modelLoded(){
    console.log("Modelo carregado");
    status3 = true;
    detector.detect(img3, gotResult);
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("statuss").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img3, 0, 0, 640, 420);

    if(status3 !=""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("statuss").innerHTML = "Status: Objeto Detectado";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects3[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects3[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
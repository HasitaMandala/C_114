function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,230,150,220,200);

    fill(0, 128, 210)
    stroke(0, 128, 0)
    rect(-30, 40, 460, 20, 20)

    fill(100, 0, 210)
    stroke(255, 0, 0)
    circle(50, 50, 80)

    fill(0, 128, 210)
    stroke(0, 128, 0)
    rect(90, 40, 460, 20, 20)

    fill(100, 0, 210)
    stroke(255, 0, 0)
    circle(590, 50, 80)

    fill(0, 128, 210)
    stroke(0, 128, 0)
    rect(620, 40, 460, 20,)

    fill(0, 128, 210)
    stroke(0, 128, 0)
    rect(90, 340, 460, 20, 20)

    fill(0, 128, 210)
    stroke(0, 128, 0)
    rect(-10, 400, 660, 500, 20)


}

function take_snapshot(){
    save('Hasita.png');
}


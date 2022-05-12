var object_detector=""
img=""
var objects=[]
var status=""
function preload(){
    img=loadImage("https://tse2.mm.bing.net/th/id/OIP.fa19h30LFJumTzLtWp-d2wHaFj?pid=ImgDet&rs=1")
}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    object_detector=ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML="detecting objects"

}
function modelloaded(){
    console.log("model is loaded")
}
function draw(){
    image(img,0,0,500,400)
}
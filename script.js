// 61 vids

const fileNames = [ 
    "./videos/DSC_0006.MOV",
    "./videos/DSC_0008.MOV",
    "./videos/DSC_0009.MOV",
    "./videos/DSC_0012.MOV",
    "./videos/DSC_0013.MOV",
    "./videos/DSC_0015.MOV",
    "./videos/DSC_0016.MOV",
    "./videos/DSC_0017.MOV",
    "./videos/DSC_0018.MOV",
    "./videos/DSC_0020.MOV",
    "./videos/DSC_0021.MOV",
    "./videos/DSC_0022.MOV",
    "./videos/DSC_0023.MOV",
    "./videos/DSC_0024.MOV",
    "./videos/DSC_0025.MOV",
    "./videos/DSC_0026.MOV",
    "./videos/DSC_0028.MOV",
    "./videos/DSC_0029.MOV",
    "./videos/DSC_0030.MOV",
    "./videos/DSC_0031.MOV",
    "./videos/DSC_0032.MOV",
    "./videos/DSC_0033.MOV",
    "./videos/DSC_0034.MOV",
    "./videos/DSC_0035.MOV",
    "./videos/DSC_0036.MOV",
    "./videos/DSC_0037.MOV",
    "./videos/DSC_0038.MOV",
    "./videos/DSC_0039.MOV",
    "./videos/DSC_0040.MOV",
    "./videos/DSC_0041.MOV",
    "./videos/DSC_0042.MOV",
    "./videos/DSC_0043.MOV",
    "./videos/DSC_0044.MOV",
    "./videos/DSC_0045.MOV",
    "./videos/DSC_0046.MOV",
    "./videos/DSC_0047.MOV",
    "./videos/DSC_0048.MOV",
    "./videos/VID_20190329_161134.mp4",
    "./videos/VID_20190329_161333.mp4",
    "./videos/VID_20190329_172445.mp4",
    "./videos/VID_20190329_181800.mp4",
    "./videos/VID_20190329_182811.mp4",
    "./videos/VID_20190329_183120.mp4",
    "./videos/VID_20190329_183224.mp4",
    "./videos/VID_20190329_183346.mp4",
    "./videos/VID_20190329_183417.mp4",
    "./videos/VID_20190329_183445.mp4",
    "./videos/VID_20190329_183522.mp4",
    "./videos/VID_20190329_183620.mp4",
    "./videos/VID_20190329_183728.mp4",
    "./videos/VID_20190329_183805.mp4",
    "./videos/VID_20190329_183824.mp4",
    "./videos/VID_20190329_183836.mp4",
    "./videos/VID_20190329_183850.mp4",
    "./videos/VID_20190329_184000.mp4",
    "./videos/VID_20190329_190502.mp4",
    "./videos/VID_20190329_190610.mp4",
    "./videos/VID_20190329_190721.mp4",
    "./videos/VID_20190329_190807.mp4",
    "./videos/VID_20190329_190843.mp4",
    "./videos/VID_20190329_190855.mp4"
];

console.log(fileNames.length)
var video = 0
// var source = document.getElementById("source") 
// source.setAttribute("src", "./videos/DSC_0006.MOV");
// source.setAttribute("type", "video/mp4");

var vid = document.createElement("video"); 
var source = document.createElement('source') 
 
// width="320" height=auto controls
source.setAttribute("src", fileNames[video]);
source.setAttribute("type", "video/mp4");
source.setAttribute("id", "source");
vid.setAttribute("width", "700");
vid.setAttribute("height", "auto");
vid.setAttribute("controls", "");
vid.setAttribute("id", "video");
vid.appendChild(source)
document.body.appendChild(vid); 
document.getElementById("title").innerText = "Video " + String(video + 1)

function next() {
    if (video < fileNames.length - 1) {
        video = video + 1
    }else{
        return
    }

    var vid = document.getElementById("video") 
    var source = document.getElementById("source") 
    document.getElementById("title").innerText = "Video " + String(video + 1)
    source.setAttribute("src", fileNames[video]);
    vid.load();
}

function back() {
    if (video != 0) {
        video = video - 1
    }else{
        return
    }

    var vid = document.getElementById("video") 
    var source = document.getElementById("source") 
    document.getElementById("title").innerText = "Video " + String(video + 1)
    source.setAttribute("src", fileNames[video]);
    vid.load();
}


var variableDark = 1;
var timerInterval = 0;
var runningonphone = 0;
if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
 runningonphone = 1;
}
function splashText() {
document.getElementById('splash').style = "color: YELLOW; font-size: 20px; text-shadow: 1px 1px 1px BLACK; right: 230px; top: 40%; position: absolute; transform: rotate(-10deg)"
		setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 21px; text-shadow: 1px 1px 1px BLACK; right: 229px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 50);
				setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 22px; text-shadow: 1px 1px 1px BLACK; right: 228px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 100);
						setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 23px; text-shadow: 1px 1px 1px BLACK; right: 227px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 150);
								setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 24px; text-shadow: 1px 1px 1px BLACK; right: 226px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 200);
								setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 25px; text-shadow: 1px 1px 1px BLACK; right: 225px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 250);
						setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 24px; text-shadow: 1px 1px 1px BLACK; right: 226px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 300);
				setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 23px; text-shadow: 1px 1px 1px BLACK; right: 227px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 350);
						setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 22px; text-shadow: 1px 1px 1px BLACK; right: 228px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 400);
						setTimeout(function() {
document.getElementById('splash').style = "color: YELLOW; font-size: 21px; text-shadow: 1px 1px 1px BLACK; right: 229px; top: 40%; position: absolute; transform: rotate(-10deg)"
		}, 450);
						setTimeout(function() {
splashText()
		}, 500);
}
	function toggleMisc() {
	if (allowpressbutton) {
	playacceptsound()
  var x = document.getElementById("miscMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}else{
}
}
	function compactOn() {
	playacceptsound()
	if (allowpressbutton) {
  var x = document.getElementById("compacttoolbar");
    var y = document.getElementById("normaltoolbar");
  if (x.style.display === "none") {
    x.style.display = "block";
	    y.style.display = "none";
	document.getElementById('compactbtn').innerHTML = 'Normal Mode'
  } else {
    x.style.display = "none";
		    y.style.display = "block";
		document.getElementById('compactbtn').innerHTML = 'Compact Mode'
  }
}else{
}
}
	function myFunction() {
	if (allowpressbutton) {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}else{
}
}
function chance() {
    var roll = Math.floor(Math.random('') * 1000) + 1;
	if (roll === 2) {
	// document.getElementById('kava').innerHTML = "Hey you! Send a PM to <a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=43042\" target=\"_blank\">LOLRyan2006 the Goombud</a> with this password: 'pancakesiwanttoeatalsoiwantcharacterpack' To win a prize! NOTE: It might take a while to get your prize."
	displaygs()
	document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><b>Hey you! Send a PM to LOLRyan2006 the Goombud with this password: 'pancakesiwanttoeatalsoiwantcharacterpack' To win a prize!<br><br>NOTE: It might take a while to get your prize.</b><button onclick=\"toolbarmsg(true)\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=43042\" target=\"_blank\"><button onclick=\"toolbarmsg(true)\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; right: 5px\">Send PM</button></a></div>"
	}
	}
var cancelSFX = "./assets/sfx/cancel.wav"
var acceptSFX = "./assets/sfx/accept.wav"
var dialogSFX = "./assets/sfx/dialog.wav"
var allowpressbutton = true;
var isfullscreen = 0
function goFullScreen(){
var target = document.getElementById("main")
if(target.requestFullScreen){
target.requestFullScreen()
}else if(target.webkitRequestFullScreen){
target.webkitRequestFullScreen()
}else if(target.mozRequestFullScreen){
target.mozRequestFullScreen()
}else if(target.msRequestFullScreen){
target.msRequestFullScreen()
}
isfullscreen = 1;
}
function quitFullScreen(){
if(document.exitFullscreen){
document.exitFullscreen()
}else if(target.webkitExitFullscreen){
document.webkitExitFullscreen()
}else if(target.mozCancelFullScreen){
document.mozCancelFullScreen()
}else if(target.msExitFullscreen){
document.msExitFullscreen()
}
isfullscreen = 0
}
function fullscreen(){
if (allowpressbutton) {
if (runningonphone == 1) {
throwmobileerror()
}else{
playacceptsound()
if(isfullscreen == 0){
goFullScreen()
}else if (isfullscreen == 1){
quitFullScreen()
}
}
}else{
}
}
var gs = "smb";
var tb = "tool1";
var idIndex = 0;
var savedlevel = 2;
var divid = 0;
var darken = 0;
var openedadialog = 0;
var musicMuted = false;
var base64audio;
var snetlvlpackData;
var bucketPosition1 = {'x': 0, 'y': 0}
var bucketPosition2 = {'x': 0, 'y': 0}
var createdlevel = 0;
var placed1stBucket = false;
var fillObject = "";
var bucketActive = false;
var sfxMuted = false;

function throwmobileerror(){
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 20px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\">This option is not available on mobile.<button onclick=\"toolbarmsg(true)\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}
function allowDrop(ev) {
ev.preventDefault();
}
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
ev.preventDefault();
ev.target.innerHTML = "<img onclick=''"
var data = ev.dataTransfer.getData("text");
var collisionAttr = document.getElementById(data).getAttribute('collision')
ev.target.appendChild(document.getElementById(data));
document.getElementById(data).removeAttribute("onclick");
var string = "-"
idIndex++;
ev.target.firstChild.id = ev.target.firstChild.id + string.repeat(idIndex)
ev.target.firstChild.setAttribute('collision', collisionAttr)
scanimages();
}
function scanimages() {
if (document.getElementById('elementcont1').innerHTML === "") document.getElementById('elementcont1').innerHTML = '<img class="element1" id="element1" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/brick.png">'
else if (document.getElementById('elementcont2').innerHTML === "") document.getElementById('elementcont2').innerHTML = '<img class="element2" id="element2" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/question.png">'
else if (document.getElementById('elementcont3').innerHTML === "") document.getElementById('elementcont3').innerHTML = '<img class="element3" id="element3" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/stone.png">'
else if (document.getElementById('elementcont4').innerHTML === "") document.getElementById('elementcont4').innerHTML = '<img class="element4" id="element4" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/ground.png">'
else if (document.getElementById('elementcont5').innerHTML === "") document.getElementById('elementcont5').innerHTML = '<img class="element5" id="element5" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/coin.png">'
else if (document.getElementById('elementcont6').innerHTML === "") document.getElementById('elementcont6').innerHTML = '<img class="element6" id="element6" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/dirt.png">'
else if (document.getElementById('elementcont7').innerHTML === "") document.getElementById('elementcont7').innerHTML = '<img class="element7" id="element7" draggable="true" ondragstart="drag(event)" src="./assets/' + gs + '/mario.png">'
}
function switchGamestyle(id) {
if (id == 1) gs = "smbs"
else if (id == 2) gs = "smb3"
else if (id == 3) gs = "smw"
else if (id == 4) gs = "smas"
else if (id == 5) gs = "nsmbds"
else if (id == 6) gs = "sml2"
else if (id == 7) gs = "smm2014smb"
else if (id == 8) gs = "yi"
else if (id == 9) gs = "smb2"
else if (id == 0) gs = "smb"
else if (id == 10) gs = "sma4"
else if (id == 11) gs = "nsmbw"
else if (id == 12) gs = "sm8w"
else if (id == 13) gs = "sma2"
else if (id == 14) gs = "sml"
else if (id == 15) gs = "nsmbu"
else if (id == 16) gs = "awful"
else if (id == 17) gs = "tll"
else if (id == 18) gs = "mapno4"
else if (id == 19) gs = "sm64"
else if (id == 20) gs = "smbs3"
else if (id == 21) gs = "sboi"
else if (id == 22) gs = "smrpg"
document.getElementById('musicsource').src = "./assets/" + gs + "/theme.mp3"
document.getElementById("bgmusic").load();
if (musicMuted) document.getElementById("bgmusic").pause();
else document.getElementById("bgmusic").play();
displaygs(true, true)
updateElms();
}
function toolbarchoose(id) {
if (id == 0) document.getElementById('newtoolbar').innerHTML = '<button onclick="displaygs()">Gamestyles</button>';
else if (id == 1) document.getElementById('newtoolbar').innerHTML = '<button onclick="enableFillMode()">Fill</button>';
else if (id == 2) { if (musicMuted) document.getElementById('newtoolbar').innerHTML = '<button id="mutebtn2" onclick="muteMusic()">Unmute Music</button>'; else document.getElementById('newtoolbar').innerHTML = '<button id="mutebtn2" onclick="muteMusic()">Mute Music</button>';}
else if (id == 3) { if (sfxMuted) document.getElementById('newtoolbar').innerHTML = '<button id="mutebtn2" onclick="muteSFX()">Unmute SFX</button>'; else document.getElementById('newtoolbar').innerHTML = '<button id="mutebtn2" onclick="muteMusic()">Mute SFX</button>';}
else if (id == 4) document.getElementById('newtoolbar').innerHTML = '<button onclick="getHelp()">Get Help</button>';
else if (id == 5) document.getElementById('newtoolbar').innerHTML = '<button onclick="info()">About</button>';
toolbarmsg(true, true)
}
function toolbarmsgshow() {
if (allowpressbutton) {
toolbarmsg()
}else{
}
}
function displaygsshow() {
if (allowpressbutton) {
displaygs()
}else{
}
}
function toolbarmsg(playAccept, fromScrollbar) {
if (darken == 0) {
allowpressbutton = false;
darken = 1;
if (!fromScrollbar) var sound = new Audio(dialogSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 25%; height: 25%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div style=\" overflow-y: scroll; width: 100%; height: calc(92% - 25px)\"><button onclick=\"toolbarchoose(5);\" style=\"width: 100%\">About Us Button</button><br><button onclick=\"toolbarchoose(4);\" style=\"width: 100%\">Get Help Button</button><br><button onclick=\"toolbarchoose(3);\" style=\"width: 100%\">Mute SFX Button</button><br><button onclick=\"toolbarchoose(2);\" style=\"width: 100%\">Mute Music Button</button><br><button onclick=\"toolbarchoose(0);\" style=\"width: 100%\">Gamestyles Button</button><br><button onclick=\"toolbarchoose(1);\" style=\"width: 100%\">Fill Button</button></div><button onclick=\"toolbarmsg()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>";
}
else {
allowpressbutton = true;
darken = 0;
if (!playAccept) var sound = new Audio(cancelSFX);
else var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').innerHTML = "";
document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
}
}
function win98() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #ffffff; background-color: #008081; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #a3a99f; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #c0c0c0 15%, #c0c0c0 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #c0c0c0 15%, #c0c0c0 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #c0c0c0 5%, #8d8b90 15%, #8d8b90 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#a3a99f;\n}\ntextarea {\nbackground-color:#a3a99f;\n}'
dialogSFX = "./assets/sfx/98Warning.wav"
acceptSFX = "./assets/sfx/98Accept.mp3"
cancelSFX = "./assets/sfx/98Cancel.wav";
}
function whistler() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #004e98; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #535353; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #9bbce5 5%, #ffffff 15%, #ffffff 75%, #9bbce5 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #9bbce5 5%, #ffffff 15%, #ffffff 75%, #9bbce5 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to right, #9bbce5 0%, #ffffff 5%, #ffffff 95%, #9bbce5 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#535353;\n}\ntextarea {\nbackground-color:#535353;\n}'
dialogSFX = "./assets/sfx/98Warning.wav"
acceptSFX = "./assets/sfx/98Accept.mp3"
cancelSFX = "./assets/sfx/98Cancel.wav";
}
function jade() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #1e6498; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #535353; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #FFFFFF 5%, #d6d4e4 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #FFFFFF 5%, #d6d4e4 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #FFFFFF;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #d6d4e4 5%, #FFFFFF 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#535353;\n}\ntextarea {\nbackground-color:#535353;\n}'
dialogSFX = "./assets/sfx/XPWarning.wav"
acceptSFX = "./assets/sfx/XPAccept.wav"
cancelSFX = "./assets/sfx/XPCancel.wav";
}
function plex() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #1e6498; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #535353; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #cfe6fd 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #cfe6fd 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #cfe6fd 5%, #ffffff 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#535353;\n}\ntextarea {\nbackground-color:#535353;\n}'
dialogSFX = "./assets/sfx/XPWarning.wav"
acceptSFX = "./assets/sfx/XPAccept.wav"
cancelSFX = "./assets/sfx/XPCancel.wav";
}
function slate() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #1e6498; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #535353; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #a6b8d2 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #ffffff 5%, #a6b8d2 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #a6b8d2 5%, #ffffff 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#535353;\n}\ntextarea {\nbackground-color:#535353;\n}'
dialogSFX = "./assets/sfx/XPWarning.wav"
acceptSFX = "./assets/sfx/XPAccept.wav"
cancelSFX = "./assets/sfx/XPCancel.wav";
}
function winXP() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #004e98; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #ffffff; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #658bca 5%, #ffffff 15%, #ffffff 75%, #658bca 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #658bca 5%, #ffffff 15%, #ffffff 75%, #658bca 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to right, #658bca 0%, #ffffff 5%, #ffffff 95%, #658bca 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#ffffff;\n}\ntextarea {\nbackground-color:#ffffff;\n}'
dialogSFX = "./assets/sfx/XPWarning.wav"
acceptSFX = "./assets/sfx/XPAccept.wav"
cancelSFX = "./assets/sfx/XPCancel.wav";
}
function win10() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #093a75; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #ffffff; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #0078d7 5%, #e1e1e1 15%, #e1e1e1 80%, #0078d7 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #0078d7 5%, #e1e1e1 15%, #e1e1e1 80%, #0078d7 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to right, #0078d7 0%, #e1e1e1 5%, #e1e1e1 95%, #0078d7 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#ffffff;\n}\ntextarea {\nbackground-color:#ffffff;\n}'
dialogSFX = "./assets/sfx/10Warning.wav"
acceptSFX = "./assets/sfx/10Accept.wav"
cancelSFX = "./assets/sfx/10Cancel.wav";
}
function questionQuestionQuestion() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #9effc7; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #fdf5de; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #f684b7 5%, #825470 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #f684b7 5%, #825470 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #825470 5%, #f684b7 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#fdf5de;\n}\ntextarea {\nbackground-color:#fdf5de;\n}'
darken = 0
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div style=\" overflow-y: scroll; width: 100%; height: calc(92% - 25px)\">You will never know what this theme was based-off</div><button onclick=\"allowpressbutton = true;themes();\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>";
}
function dark() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #FFFFFF; background-color: #1D1D1D; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #4F4F4F; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #FFFFFF;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #fff6af;\nbackground:linear-gradient(to bottom, #c2afff 5%, #1d2372 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #c2afff;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #c2afff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #c2afff;\nbackground:linear-gradient(to bottom, #c2afff 5%, #1d2372 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #0d2372;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #1d2372 5%, #c2afff 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#4f2054;\n}\ntextarea {\nbackground-color:#4f2054;\n}'
}
function amoled() {
darken = 0
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div style=\" overflow-y: scroll; width: 100%; height: calc(92% - 25px)\">Brave one, the path to darkness opens!</div><button onclick=\"darken = 1; allowpressbutton = true;themes();\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>";
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #FFFFFF; background-color: #000000; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #333333; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #FFFFFF;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #ffffff 5%, #AAAAAA 100%);\nbackground-color:#000000;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #ffffff 5%, #AAAAAA 100%);\nbackground-color:#000000;\nborder-radius:5px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #AAAAAA 5%, #FFFFFF 100%);\nbackground-color:#000000;\n}\ninput {\nbackground-color:#333333;\n}\ntextarea {\nbackground-color:#333333;\n}'
}
function win31() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #c0c0c0; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #ffffff; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #FFFFFF;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #c1c1c1 5%, #9a9a9a 100%);\nbackground-color:#000000;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #c1c1c1 5%, #9a9a9a 100%);\nbackground-color:#000000;\nborder-radius:5px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #9a9a9a 5%, #c1c1c1 100%);\nbackground-color:#000000;\n}\ninput {\nbackground-color:#ffffff;\n}\ntextarea {\nbackground-color:#ffffff;\n}'
dialogSFX = "./assets/sfx/3.1Warning.wav"
acceptSFX = "./assets/sfx/3.1Accept.wav"
cancelSFX = "./assets/sfx/3.1Cancel.wav";
}
function winCE() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #ffffff; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #ffffff; border:1px solid #000000\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #FFFFFF;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #c0c0c0 5%, #818181 100%);\nbackground-color:#000000;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #c0c0c0 5%, #818181 100%);\nbackground-color:#000000;\nborder-radius:5px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #818181 5%, #c0c0c0 100%);\nbackground-color:#000000;\n}\ninput {\nbackground-color:#ffffff; border:1px solid #000000\n}\ntextarea {\nbackground-color:#ffffff; border:1px solid #000000\n}'
dialogSFX = "./assets/sfx/CEWarning.wav"
acceptSFX = "./assets/sfx/CEAccept.wav"
cancelSFX = "./assets/sfx/CECancel.wav";
}
function win61() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid #32a442}\nbody {\n  color: #ffffff; background-image: linear-gradient(to right bottom, #004918, #0d611b, #227a1c, #399417, #52ae08); user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #32a442;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #ffffff;background-color: #086910;\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #FFFFFF;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #10a218 5%, #8cd394 100%);\nbackground-color:#000000;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:#000000\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #000000;\nbackground:linear-gradient(to bottom, #10a218 5%, #8cd394 100%);\nbackground-color:#000000;\nborder-radius:5px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:#000000\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #8cd394 5%, #10a218 100%);\nbackground-color:#000000;\n}\ninput {\nbackground-color:#086910;\n}\ntextarea {\nbackground-color:#086910;\n}'
dialogSFX = "./assets/sfx/6.1Warning.wav"
acceptSFX = "./assets/sfx/6.1Accept.wav"
cancelSFX = "./assets/sfx/6.1Cancel.wav";
}
function changeTheme(id) {
dialogSFX = "./assets/sfx/dialog.wav"
acceptSFX = "./assets/sfx/accept.wav"
cancelSFX = "./assets/sfx/cancel.wav";
if (id == 0) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #FFFFFF; background-color: #1D1D1D; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #c94300; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #c90000 5%, #520000 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #c90000 5%, #520000 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #520000 5%, #c90000 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#4f2054;\n}\ntextarea {\nbackground-color:#c94300;\n}'
else if (id == 1) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #edf6ff; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #38d8e0; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #00d2f2 5%, #004491 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #00d2f2 5%, #004491 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #004491 5%, #00d2f2 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#38d8e0;\n}\ntextarea {\nbackground-color:#38d8e0;\n}'
else if (id == 2) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #ffefed; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #f7ab48; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #d90000 5%, #fcf003 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #d90000 5%, #fcf003 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #fcf003 5%, #d90000 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#f7ab48;\n}\ntextarea {\nbackground-color:#f7ab48;\n}'
else if (id == 3) jade()
else if (id == 4) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: solid 1px black}\nbody {\n  color: #000000; background-color: #FFFFFF; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #000000;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #fff6af;\nbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\nbackground-color:#ffec64;\nborder-radius:6px;\nborder:1px solid #ffaa22;\ndisplay:inline-block;\ncolor:#333333;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffee66;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #fff6af;\nbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\nbackground-color:#ffec64;\nborder-radius:5px;\nborder:1px solid #ffaa22;\ndisplay:inline-block;\ncolor:#333333;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffee66;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\nbackground-color:#ffab23;\n}\ninput {\nbackground-color:#6ec8f5;\n}\ntextarea {\nbackground-color:#6dc8f5;\n}textarea {\nbackground-color:#6dc8f5;\n}'
else if (id == 5) dark()
else if (id == 6) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #FFFFFF; background-color: #3b2500; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #b58d45; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #855500 5%, #452c00 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #855500 5%, #452c00 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #452c00 5%, #855500 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#b58d45;\n}\ntextarea {\nbackground-color:#b58d45;\n}'
else if (id == 7) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #FFFFFF; background-color: #945e01; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #FFFFFF;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #75500f; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #a87f32 5%, #573d0c 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #a87f32 5%, #573d0c 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #333333;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #573d0c 5%, #a87f32 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#75500f;\n}\ntextarea {\nbackground-color:#75500f;\n}'
else if (id == 8) plex()
else if (id == 9) slate()
else if (id == 10) whistler()
else if (id == 11) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #e2e4e3; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #000000;background-color: #c4c6c5; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #a8d5e8 5%, #ffffff 15%, #ffffff 75%, #a8d5e8 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #a8d5e8 5%, #ffffff 15%, #ffffff 75%, #a8d5e8 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#000000;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #ffffff;\n}\nbutton:hover {\nbackground:linear-gradient(to right, #a8d5e8 0%, #ffffff 5%, #ffffff 95%, #a8d5e8 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#c4c6c5;\n}\ntextarea {\nbackground-color:#c4c6c5;\n}'
else if (id == 12) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid white}\nbody {\n  color: #ffffff; background-color: #000000; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #ffffff;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #070896; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #070896 5%, #310d57 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #070896 5%, #310d57 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #310d57 5%, #070896 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#070896;\n}\ntextarea {\nbackground-color:#070896;\n}'
else if (id == 13) document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #ede5b7; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #FFFFFF;background-color: #e6a819; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #1e38e3 5%, #091669 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to bottom, #1e38e3 5%, #091669 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:0px 1px 0px #000000;\n}\nbutton:hover {\nbackground:linear-gradient(to bottom, #091669 5%, #1e38e3 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#e6a819;\n}\ntextarea {\nbackground-color:#e6a819;\n}'
else if (id == 14) win98()
else if (id == 15) winXP()
else if (id == 16) win10()
else if (id == 17) questionQuestionQuestion()
else if (id == 18) win31()
else if (id == 19) winCE()
else if (id == 20) win61()
allowpressbutton = true;
themes(true, true)
}
function themes(playAccept, fromScrollbar) {
if (allowpressbutton){
if (darken == 0) {
buttontimer = 1;
allowpressbutton = false;
darken = 1;
if (!fromScrollbar) var sound = new Audio(dialogSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div style=\" overflow-y: scroll; width: 100%; height: calc(92% - 25px)\"><button onclick=\"changeTheme(0);\" style=\"width: 100%\">Spicy</button><br><button onclick=\"changeTheme(1);\" style=\"width: 100%\">Aqua</button><br><button onclick=\"changeTheme(2);\" style=\"width: 100%\">Flame</button><br><button onclick=\"changeTheme(3);\" style=\"width: 100%\">Jade</button><br><button onclick=\"if (variableDark == 1) { changeTheme(5); }\" onmousedown=\" timerInterval = setTimeout(function() { amoled(); variableDark = 0; }, 3000 ); variableDark = 1;\" onmouseup=\"clearInterval(timerInterval); if (variableDark == 1) { changeTheme(5); }; variableDark = 1\" style=\"width: 100%\">Dark</button><br><button onclick=\"changeTheme(4)\" style=\"width: 100%\">Light (Original)</button><br><button onclick=\"changeTheme(6)\" style=\"width: 100%\">Chocolate</button><br><button onclick=\"changeTheme(7)\" style=\"width: 100%\">Caramel</button><br><button onclick=\"changeTheme(8)\" style=\"width: 100%\">Plex</button><br><button onclick=\"changeTheme(9)\" style=\"width: 100%\">Slate</button><br><button onclick=\"changeTheme(10)\" style=\"width: 100%\">Whistler</button><br><button onclick=\"changeTheme(11)\" style=\"width: 100%\">Wii-Style</button><br><button onclick=\"changeTheme(12)\" style=\"width: 100%\">Gamecube-Style</button><br><button onclick=\"changeTheme(13)\" style=\"width: 100%\">Summer</button><br><button onclick=\"changeTheme(14)\" style=\"width: 100%\">Windows 98</button><button onclick=\"changeTheme(15);\" style=\"width: 100%\">Windows XP</button><br><button onclick=\"changeTheme(16);\" style=\"width: 100%\">Windows 10</button><br><button onclick=\"changeTheme(17);\" style=\"width: 100%\">???</button><br><button onclick=\"changeTheme(18);\" style=\"width: 100%\">Windows 3.1</button><br><button onclick=\"changeTheme(19);\" style=\"width: 100%\">Windows CE</button><button onclick=\"changeTheme(20);\" style=\"width: 100%\">Windows Mobile 6.1</button></div><button onclick=\"customTheme()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 32px; left 5px\">Custom Theme</button><button onclick=\"allowpressbutton = true;themes();\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>";
}
else {
buttontimer = 0;
document.getElementById('darken').innerHTML = "";
document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
allowpressbutton = true;
darken = 0;
if (!playAccept) var sound = new Audio(cancelSFX);
else var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
}
}
}
function customTheme(playAccept, fromScrollbar) {
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 75%; height: 50%; position: fixed; top: 50%; left: 50%; overflow-y: scroll; transform: translate(-50%, -50%)\"><div style=\" width: 100%; height: calc(100% - 25px)\">Button color: <input id=\"buttonColor\" type=\"color\" value=\"#ffffff\"/> Fade to: <input id=\"buttonFade\" type=\"color\" value=\"#000000\"/> Fade direction: <select id=\"side\"><option value=\"left\">Left</option><option value=\"right\">Right</option><option value=\"top\">Up</option><option value=\"bottom\">Down</option></select> Text: <input id=\"textcolor\" type=\"color\" value=\"#ffffff\"/> Text shadow: <input id=\"textshadow\" type=\"color\" value=\"#000000\"/><br>Button when hover: <input id=\"buttonHover\" type=\"color\" value=\"#000000\"/> Fade to: <input id=\"buttonHoverFade\" type=\"color\" value=\"#ffffff\"/> Fade direction: <select id=\"buttonHoverSide\"><option value=\"left\">Left</option><option value=\"right\">Right</option><option value=\"top\">Up</option><option value=\"bottom\">Down</option></select><br>Misc: <input id=\"misc\" type=\"color\" value=\"#000000\"/> Text: <input id=\"miscText\" type=\"color\" value=\"#ffffff\"/><br>Background: <input id=\"backgroundcolor\" type=\"color\" value=\"#ffffff\"/> Text: <input id=\"backtext\" type=\"color\" value=\"#000000\"/> Border: <input id=\"backborder\" type=\"color\" value=\"#000000\"/><br><button onclick=\"submitTheme()\">Submit</button><button onclick=\"allowpressbutton = true;themes()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>";
}
function submitTheme() {
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid '+ document.getElementById("backborder").value +'}\nbody {\n  color: '+ document.getElementById("backtext").value +'; background-color: '+ document.getElementById("backgroundcolor").value +'; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid '+ document.getElementById("backborder").value +';\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: '+ document.getElementById("miscText").value +';background-color: '+ document.getElementById("misc").value +'; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to '+ document.getElementById("side").value +', '+ document.getElementById("buttonColor").value +' 5%, '+ document.getElementById("buttonFade").value +' 100%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:'+ document.getElementById("textcolor").value +';\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:1px 1px 1px '+ document.getElementById("textshadow").value +';\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to '+ document.getElementById("side").value +', '+ document.getElementById("buttonColor").value +' 5%, '+ document.getElementById("buttonFade").value +' 100%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:'+ document.getElementById("textcolor").value +';\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:1px 1px 1px '+ document.getElementById("textshadow").value +';\n}\nbutton:hover {\nbackground:linear-gradient(to '+ document.getElementById("buttonHoverSide").value +', '+ document.getElementById("buttonHover").value +' 5%, '+ document.getElementById("buttonHoverFade").value +' 100%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:'+ document.getElementById("misc").value +'; color: '+ document.getElementById("miscText").value +'\n}\ntextarea {\nbackground-color:'+ document.getElementById("misc").value +';\n}'
}
function submitCode() {
if (document.getElementById("codeBox").value == 'awesome') {
playacceptsound()
document.getElementById('cssStyle').innerHTML = 'div, img {width: 32px; height: 32px}\ntable { border-collapse: collapse}\ntable, th, td {border: 1px solid black}\nbody {\n  color: #000000; background-color: #ffffff; user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.border {\n  background: rgba(100, 100, 100, 0.5);\n  border: 1px solid #000000;\n  padding: 5px;\n  font-size: 12px;\n}\ntextarea, input[type="number"] {\ncolor: #ffffff;background-color: #00cc25; border: none\n}\n*  {\n  cursor: url(\'./assets/cursor.png\'), auto;\n}\ninput[type=file] { display: none }\n.border {\nbackground: rgba(255, 255, 255, 0.5);\nborder: 1px solid #300202;\npadding: 5px;\nfont-size: 12px;\n}\nbutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to right, #ff0000 12%, #ffff00 24%, #00ff08 36%, #0cebe7 48%, #0cebe7 60%, #9900ff 72%, #ff00d9 84%, #ff0080 96%);\nbackground-color:#c2afff;\nborder-radius:6px;\nborder:1px solid #000000;\ndisplay:inline-block;\ncolor:#FFFFFF;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:4px 21px;\ntext-decoration:none;\ntext-shadow:1px 1px 1px #000000;\n}\n.gamebutton {\nbox-shadow: 0px 1px 0px 0px #300202;\nbackground:linear-gradient(to right, #ff0000 12%, #ffff00 24%, #00ff08 36%, #0cebe7 48%, #0cebe7 60%, #9900ff 72%, #ff00d9 84%, #ff0080 96%);\nbackground-color:#0d2372;\nborder-radius:5px;\nborder:1px solid #300202;\ndisplay:inline-block;\ncolor:#ffffff;\nfont-family:Arial;\nfont-size:15px;\nfont-weight:bold;\npadding:1px 16px;\ntext-decoration:none;\ntext-shadow:1px 1px 1px #000000;\n}\nbutton:hover {\nbackground:linear-gradient(to left, #ff0000 12%, #ffff00 24%, #00ff08 36%, #0cebe7 48%, #0cebe7 60%, #9900ff 72%, #ff00d9 84%, #ff0080 96%);\nbackground-color:#1d2372;\n}\ninput {\nbackground-color:#00cc25; color: #ffffff\n}\ntextarea {\nbackground-color:#00cc25;\n}'
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'oof') {
playacceptsound()
dialogSFX = "./assets/sfx/oof.mp3"
cancelSFX = "./assets/sfx/oof.mp3"
acceptSFX = "./assets/sfx/oof.mp3"
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'distract') {
playacceptsound()
document.getElementById('titleSong').src = "./assets/sfx/distraction.mp3"
document.getElementById("titleMusic").load();
document.getElementById('titleLogo').src = "./assets/distraction.gif"
document.getElementById('titleLogo').style = 'width: 107px; height: 128px'
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'het') {
het()
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'loop') {
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 18px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\">Loop :)<button onclick=\"playacceptsound()\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'disable-mobile-mode') {
if (runningonphone == 0) {
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 18px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\">This cheat code is only for mobile.<button onclick=\"toolbarmsg(true)\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}else{
runningonphone = 0;
}
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'best-snetlvl-ever') {
playacceptsound()
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("<audio id=\"bgmusic\" controls=\"\" autoplay=\"\" loop=\"\" style=\"display: none\"><source id=\"musicsource\" src=\"./assets/sfx/distraction.mp3\" type=\"audio/mpeg\"></audio><style id=\"cssStyle\">body {  user-select: none;  -webkit-user-select: none;  -khtml-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  visibility: hidden;}html {  background-image: url('./assets/distraction.gif');}</style>"));
element.setAttribute('download', "best-snet-level.snetlvl");
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
document.getElementById('wrong').style = 'color: #00cc25;'
document.getElementById('wrong').innerHTML = 'Code accepted!'
}
else if (document.getElementById("codeBox").value == 'C:/con/con') {
goFullScreen()
document.getElementById('thebody').innerHTML = '<img src="./assets/bsod.png" style="width: 100%; height: 100%"></img>'
}
else if (document.getElementById("codeBox").value == '???') {
hint()
document.getElementById('wrong').innerHTML = 'Code accepted!'
document.getElementById('wrong').style = 'color: #00cc25;'
}
else document.getElementById('wrong').innerHTML = '<span style="color: #fc0303;">Wrong code!</span>'
}
function hint(playAccept, fromScrollbar) {
if (darken == 0) {
allowpressbutton = false;
darken = 1;
if (!fromScrollbar) var sound = new Audio(dialogSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 20px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; overflow-y: scroll; transform: translate(-50%, -50%)\">Hint: It's a OC<button onclick=\"hint(); darken = 0;\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Hmmmmmmm...</button></div>";
}
else {
allowpressbutton = true;
darken = 0;
if (!playAccept) var sound = new Audio(cancelSFX);
else var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').innerHTML = "";
document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
}
}
function het(playAccept, fromScrollbar) {
if (darken == 0) {
allowpressbutton = false;
darken = 1;
if (!fromScrollbar) var sound = new Audio(dialogSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 20px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; overflow-y: scroll; transform: translate(-50%, -50%)\">You are about to see a very scary image. Wanna see it?<button onclick=\"het(); darken = 0;\" style=\"width: calc(50% - 11px); position: absolute; bottom: 5px; left: 5px\">No</button><button onclick=\"het2()\" style=\"width: calc(50% - 11px); position: absolute; bottom: 5px; right: 5px\">Yes</button></div>";
}
else {
allowpressbutton = true;
darken = 0;
if (!playAccept) var sound = new Audio(cancelSFX);
else var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').innerHTML = "";
document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
}
}
function het2(playAccept, fromScrollbar) {
playacceptsound()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 20px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; overflow-y: scroll; transform: translate(-50%, -50%)\">Sorry but, nope.<button onclick=\"het(true); darken = 0;\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>";
}
function playacceptsound() {
var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
}
function updateElms() {
document.getElementById('elementcont1').innerHTML = '<img class="element1" id="element1" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/brick.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/brick.png`">'
document.getElementById('elementcont2').innerHTML = '<img class="element2" id="element2" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/question.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/question.png`">'
document.getElementById('elementcont3').innerHTML = '<img class="element3" id="element3" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/stone.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/stone.png`">'
document.getElementById('elementcont4').innerHTML = '<img class="element4" id="element4" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/ground.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/ground.png`">'
document.getElementById('elementcont5').innerHTML = '<img class="element5" id="element5" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/coin.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/coin.png`">'
document.getElementById('elementcont6').innerHTML = '<img class="element6" id="element6" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/dirt.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/dirt.png`">'
document.getElementById('elementcont7').innerHTML = '<img class="element7" id="element7" draggable="true" ondragstart="drag(event, this)" src="./assets/' + gs + '/mario.png" onclick="document.getElementById(`blenk`).src=`./assets/' + gs + '/mario.png`">'
}
function submit() {
var width = parseInt(document.getElementById('width').value, 10)
var height = parseInt(document.getElementById('height').value, 10)
addGrid(width, height)
}
function addGrid(width, height) {
savedlevel = 0;
createdlevel = 1;
idIndex = 0;
var tablecontainer = document.getElementById("editorgrid");
var table = document.createElement('TABLE');
var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);
for (var i = 0; i < height; i++) {
var tr = document.createElement('TR');
tableBody.appendChild(tr);
for (var j = 0; j < width; j++) {
divid++;
var td = document.createElement('TD');
var div = document.createElement('DIV');
var clickwindow = document.createElement('A');
var attribute = document.createAttribute("onclick")
attribute.value = "placeElement(" + divid + ")"
clickwindow.setAttributeNode(attribute)
div.id = "gridcell" + divid
attribute = document.createAttribute("ondrop")
attribute.value = "drop(event, false)"
div.setAttributeNode(attribute)
attribute = document.createAttribute("ondragover")
attribute.value = "allowDrop(event)"
div.setAttributeNode(attribute)
div.style = "width: 32px; height: 32px"
clickwindow.appendChild(div);
td.appendChild(clickwindow);
tr.appendChild(td);
}
}
tablecontainer.innerHTML = '';
tablecontainer.appendChild(table);
displaygs(true)
}
function displaygs(playAccept, fromScrollbar) {
if (darken == 0) {
allowpressbutton = false;
darken = 1;
if (!fromScrollbar) var sound = new Audio(dialogSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div style=\" overflow-y: scroll; width: 100%; height: calc(92% - 25px)\"><button onclick=\"switchGamestyle(0)\"><img src=\"./assets/smb.png\"></button><button onclick=\"switchGamestyle(1)\"><img src=\"./assets/smbs.png\"></button><button onclick=\"switchGamestyle(17)\"><img src=\"./assets/thelevelsarelost.png\"></button><button onclick=\"switchGamestyle(9)\"><img src=\"./assets/smb2.png\"></button><button onclick=\"switchGamestyle(2)\"><img src=\"./assets/smb3.png\"><button onclick=\"switchGamestyle(14)\"><img src=\"./assets/sml.png\"></button></button><button onclick=\"switchGamestyle(21)\"><img src=\"./assets/sboi.png\"></button><button onclick=\"switchGamestyle(3)\"><img src=\"./assets/smw.png\"></button><button onclick=\"switchGamestyle(6)\"><img src=\"./assets/sml2.png\"></button><button onclick=\"switchGamestyle(4)\"><img src=\"./assets/smas.png\"></button><button onclick=\"switchGamestyle(12)\"><img src=\"./assets/sm8w.png\"></button><button onclick=\"switchGamestyle(8)\"><img src=\"./assets/yi.png\"></button><button onclick=\"switchGamestyle(22)\"><img src=\"./assets/smrpg.png\"></button><button onclick=\"switchGamestyle(19)\"><img src=\"./assets/sm64.png\"></button><button onclick=\"switchGamestyle(20)\"><img src=\"./assets/smbs3.png\"></button><button onclick=\"switchGamestyle(13)\"><img src=\"./assets/sma2.png\"></button><button onclick=\"switchGamestyle(10)\"><img src=\"./assets/sma4.png\"></button><button onclick=\"switchGamestyle(5)\"><img src=\"./assets/nsmbds.png\"></button><button onclick=\"switchGamestyle(11)\"><img src=\"./assets/nsmbw.png\"><button onclick=\"switchGamestyle(18)\"><img src=\"./assets/mapno4.png\"></button></button><button onclick=\"switchGamestyle(15)\"><img src=\"./assets/nsmbu.png\"></button><button onclick=\"switchGamestyle(16)\"><img src=\"./assets/awful.png\"></button><br><button onclick=\"customFiles()\" style=\"width: calc(100% - 5px)\">Upload Custom</button></div><button onclick=\"displaygs()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>";
}
else {
allowpressbutton = true;
darken = 0;
if (!playAccept) var sound = new Audio(cancelSFX);
else var sound = new Audio(acceptSFX);
if (!sfxMuted) sound.play();
document.getElementById('darken').innerHTML = "";
document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
}
}
function download(filename, text) {
savedlevel = 1;
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text) + encodeURIComponent(getCollisionData()));
element.setAttribute('download', filename);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
}
function loadData() {
createdlevel = 1;
var file = document.getElementById("savefile").files[0];
if (file) {
var reader = new FileReader();
reader.readAsText(file, "UTF-8");
reader.onload = function (evt) {
document.getElementById("editorgridcontainer").innerHTML = evt.target.result;
if (musicMuted) document.getElementById("bgmusic").pause();
else document.getElementById("bgmusic").play();
}
reader.onerror = function (evt) {
document.getElementById("editorgridcontainerd").innerHTML = "Error reading save file. It's maybe corrupted or invalid.";
createdlevel = 0;
}
}
}
function placeElement(elmid) {
var empty = false
var target = document.getElementById("gridcell" + elmid)
if (!target.innerHTML == '') empty = true;
var image = document.getElementById("clickobject").innerHTML
if (!empty) {
if (image.includes('brick')) var sound = new Audio('./assets/sfx/brick.wav')
else if (image.includes('question')) var sound = new Audio('./assets/sfx/question.wav')
else if (image.includes('coin')) var sound = new Audio('./assets/sfx/coin.wav')
else var sound = new Audio('./assets/sfx/stone.wav')
if (!sfxMuted) sound.play();
}
target.innerHTML = image
var string = "-"
idIndex++;
target.firstChild.id = target.firstChild.id + string.repeat(idIndex)
if (bucketActive) {
target.firstChild.src = './assets/bucket.png'
}
if (empty == true) {
if (bucketActive && placed1stBucket && target.innerHTML.includes('bucket.png')) {
placed1stBucket = false; 
}
var sound = new Audio('./assets/sfx/delete.wav')
if (!sfxMuted) sound.play();
target.innerHTML = ''
}
if (bucketActive && !empty) {
if (!placed1stBucket) placed1stBucket = true;
else if (placed1stBucket) {
detectBucketPosition()
}
}
}
function clear(id) {
var element = document.getElementById(id)
element.innerHTML = '';
}
function getHelp() {
if (allowpressbutton) {
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><b>I don't see the grid. How do I make it appear?</b><br>Specify width and height of your grid and click Submit Changes and the grid should appear<br><br><b>How do I place blocks?</b><br>Well, there are two options. You can either drag elements from item bar to the grid or click the element that you want to select and click somewhere in the grid.<br><br><b>How do I remove elements?</b><br>Click on the element you want to remove.<br><br><b>Someone gave me a weird .snetlvl file and said I must open it in this game. How do you load the file and how do you get this file?</b><br>To get this file, build a level, click Save Level then enter your level name and click save level. To load the file, click Load Level and choose a/your .snetlvl file.<br><br><b>How can I import my own tiles and music?</b><br>When you go to Gamestyle list, click on Custom and select your image or audio file, then click Upload<br><br><b>How can I fill an area with a tile?</b><br>Grab the bucket, mark spot 1, then 2 and the selected tile will now fill to the specified area<br><br><b>I went to fullscreen and how do I get out?</b><br>You either click Fullscreen Mode again or press Esc (Maybe F11 too).<br><br><b>Why does Export Image not work?</b><br>Either you have not submitted a level or its a bug. Mostly it's a bug.<br><button onclick=\"toolbarmsg(1)\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}else{
}
}
function muteMusic() {
if (allowpressbutton) {
playacceptsound()
if (!musicMuted) {
musicMuted = true
document.getElementById('bgmusic').pause()
document.getElementById('mutebtn').innerHTML = 'Unmute Music'
document.getElementById('mutebtn2').innerHTML = 'Unmute Music'
}
else if (musicMuted) {
musicMuted = false
document.getElementById('bgmusic').play()
document.getElementById('mutebtn').innerHTML = 'Mute Music'
document.getElementById('mutebtn2').innerHTML = 'Mute Music'
}
}else{
}
}
function muteSFX() {
if (allowpressbutton) {
if (!sfxMuted) {
sfxMuted = true
playacceptsound()
document.getElementById('mutesfxbtn').innerHTML = 'Unmute SFX'
document.getElementById('mutesfxbtn2').innerHTML = 'Unmute SFX'
}
else if (sfxMuted) {
sfxMuted = false
document.getElementById('mutesfxbtn').innerHTML = 'Mute SFX'
document.getElementById('mutesfxbtn2').innerHTML = 'Mute SFX'
}
}else{
}
}
function uploadCustomFiles() {
var collisionNum = document.getElementById('collisionType').value
var gfxfile = document.getElementById('graphic').files[0];
if (gfxfile) {
var gfxfilereader = new FileReader();
gfxfilereader.readAsDataURL(gfxfile);
gfxfilereader.onload = function (gfxevt) {
document.getElementById('clickobject').innerHTML = '<img id="blenk" collision="' + collisionNum + '" src="' + gfxevt.target.result + '">'
document.getElementById('warning').innerHTML = ""
}
}
var audfile = document.getElementById('sound').files[0];
if (audfile) {
var audfilereader = new FileReader();
audfilereader.readAsDataURL(audfile);
audfilereader.onload = function (audevt) {
document.getElementById('musicsource').src = audevt.target.result
document.getElementById("bgmusic").load();
if (musicMuted) document.getElementById("bgmusic").pause();
else document.getElementById("bgmusic").play();
document.getElementById('warning').innerHTML = ""
}
}
displaygs(true)
}
function customFiles() {
playacceptsound()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; font-family: Arial; font-size: 13px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><input type=\"file\" id=\"graphic\"><button onclick=\"document.getElementById('graphic').click()\">Custom Sprite</button><text> Select behaviour: </text><select id=\"collisionType\"><option value=\"0\">Air</option><option value=\"1\">Solid</option><option value=\"2\">Coin</option><option value=\"3\">Brick Block</option><option value=\"4\">? Block</option></select><br><input type=\"file\" id=\"sound\"><button onclick=\"document.getElementById('sound').click()\">Custom Music</button><br><button onclick=\"uploadCustomFiles()\" style=\"width: 100%\">Upload</button><br><text>Upload Size Limit: 50 MB</text><button onclick=\"displaygs()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>"
}
function sendDownloadRequest() {
if (allowpressbutton) {
displaygs()
if (createdlevel == 1) {
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 40%; font-family: Arial; font-size: 15px; height: 10%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\">Please enter the filename of you level:<textarea id=\"savefilename\" onclick=\"this.select()\" style=\"resize: none; height: 18px; width: 475px\">My Level</textarea><text>.snetlvl</text><button onclick=\"displaygs()\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; left: 5px\">Cancel</button><button onclick=\"download(document.getElementById('savefilename').value + '.snetlvl', document.getElementById('editorgridcontainer').innerHTML), toolbarmsg(true)\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; right: 5px\">Save Level</button></div>"
}
else {
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 18px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\">You have not made or load a level yet. Build a level and then save the level.<button onclick=\"toolbarmsg(true)\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}
}else{
}
}
function readFolder() {
gs = document.getElementById('gsfolder').value
document.getElementById('musicsource').src = "./assets/" + gs + "/theme.mp3"
document.getElementById("bgmusic").load();
updateElms()
displaygs(true);
}
function convertDialog() {
if (allowpressbutton) {
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; font-family: Arial; font-size: 15px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><input type=\"file\" id=\"oldsnetlvl\"><button onclick=\"playacceptsound(), document.getElementById('oldsnetlvl').click()\">Original SNETLVL file</button><br><input type=\"file\" id=\"addmusic\"><button onclick=\"playacceptsound(), document.getElementById('addmusic').click()\">Music File</button><br><button onclick=\"playacceptsound(), convert()\" style=\"width: 100%\">Convert</button><button onclick=\"displaygs()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>"
}else{
}
}
function convert() {
var sound = new Audio(acceptSFX)
var lvlfile = document.getElementById("oldsnetlvl").files[0];
var addmusic = document.getElementById("addmusic").files[0];
var reader = new FileReader();
reader.readAsText(lvlfile, "UTF-8");
reader.onload = function (snetlvl) {
var audiofilereader = new FileReader();
audiofilereader.readAsDataURL(addmusic);
audiofilereader.onload = function (audiobase64) {
download(lvlfile.name, "<audio id=\"bgmusic\" controls autoplay loop style=\"display: none\"><source id=\"musicsource\" src=\"" + audiobase64.target.result + "\" type=\"audio/mpeg\"></audio><div id=\"editorgrid\">" + snetlvl.target.result + "</div>")
}
}
}
function convertToBase64(id) {
var file = document.getElementById(id).files[0];
if (file) {
var filereader = new FileReader();
filereader.readAsDataURL(file);
filereader.onload = function (evt) {
var base64 = evt.target.result;
return base64
}
}
}
function confirmation() {
if (allowpressbutton) {
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; font-family: Arial; font-size: 15px; height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\">You are about to make a new level. Be aware that this will replace the current submitted level. Are you sure you want to submit changes?<button onclick=\"displaygs()\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; left: 5px\">No</button><button onclick=\"addGrid(parseInt(document.getElementById('width').value), parseInt(document.getElementById('height').value))\" style=\"width: calc(50% - 6px); position: absolute; bottom: 5px; right: 5px\">Yes</button></div>"
}else{
}
}
function info(){
if (allowpressbutton) {
var device;
if (runningonphone == 1) {
 device = "Mobile."
} else {
 device = "Computer (or other devices)."
}
displaygs()
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family:Arial; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><b>Copyright (C) 2020 Goombud Studios in partnership with Zangpule Company<br><br>Main developers:<br></b><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=41488\" target=\"_blank\">Dominicentek</a><br><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=35598\" target=\"_blank\">Batata Douce</a><br><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=42522\" target=\"_blank\">Koop the Koopa</a><br><br><b>Team Leader:<br></b><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=43042\" target=\"_blank\">LOLRyan2006 the Goombud</a><br><br><b>Creator:<br></b><a href=\"https://www.smwcentral.net/?p=pm&do=compose&user=41488\" target=\"_blank\">Dominicentek</a><br><br><b>Special thanks to:<br></b>Green Jerry by making the logo.<br><br><br><b>Super Mario Maker.NET is no way planned nor affliated with Nintendo. All images and music of the Super Mario franchise are a property of Nintendo. Other sounds, themes and images that do not belong to Nintendo are property of other registered companies.</b><br><br>You are running the proto on: " + device + "<button onclick=\"displaygs(true)\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}else{
}
}
function exportToImage() {
if (allowpressbutton) {
displaygs()
if (createdlevel == 1){
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; font-family: Arial;  height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\"><div id=\"screenshotLevelWindow\" style=\"overflow-x: scroll; overflow-y: scroll; width: 100%; height: calc(100% - 60px)\"></div><button onclick=\"downloadLevel()\">Download</button><button onclick=\"displaygs()\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">Cancel</button></div>"
var table = document.getElementById('editorgrid').firstElementChild
var canvas = document.createElement('canvas')
var attr = document.createAttribute('id')
attr.value = 'screenshotCanvas'
canvas.setAttributeNode(attr)
attr = document.createAttribute('width')
attr.value = table.rows[0].cells.length * 32 + '; height: ' + table.rows.length * 32
canvas.setAttributeNode(attr)
attr = document.createAttribute('height')
attr.value = table.rows.length * 32
canvas.setAttributeNode(attr)
document.getElementById('screenshotLevelWindow').appendChild(canvas)
var context = canvas.getContext("2d");
for (var i = 0, row; row = table.rows[i]; i++) {
for (var j = 0, col; col = row.cells[j]; j++) {
if (col.firstElementChild.firstElementChild.innerHTML !== '') {
var currTile = document.createElement('img')
var attr = document.createAttribute('src')
attr.value = col.firstElementChild.firstElementChild.firstElementChild.src
currTile.setAttributeNode(attr)
document.body.appendChild(currTile)
context.drawImage(currTile, j * 32, i * 32, 32, 32);
document.body.removeChild(currTile)
}
}
}
}else{
document.getElementById('darken').innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; font-family: Arial; font-size: 18px; width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)\">You have not made or load a level yet. Build a level and then export it.<button onclick=\"toolbarmsg(true)\" style=\"width: calc(100% - 6px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>"
}
}else{
}
}
function playTheGame() {
var sound = new Audio("./assets/sfx/mario.wav");
if (!sfxMuted) sound.play();
document.getElementById('titlescreencontainer').remove()
document.getElementById('bgmusic').play()
}
function downloadLevel() {
html2canvas(document.querySelector("#screenshotCanvas")).then(canvas => {
var img = canvas.toDataURL("image/png");
var link = document.createElement("a");
var attr = document.createAttribute('href')
attr.value = "data:" + img
link.setAttributeNode(attr)
attr = document.createAttribute('download')
attr.value = "level.png"
link.setAttributeNode(attr)
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
});
}
function detectBucketPosition() {
var scanned1stBucket = false;
var table = document.getElementById('editorgrid').firstElementChild
var i = 0;
var j = 0;
do {
do {
if (table.rows[i].cells[j].firstElementChild.firstElementChild.firstElementChild) {
if (table.rows[i].cells[j].firstElementChild.firstElementChild.firstElementChild.src.includes('bucket.png')) {
if (!scanned1stBucket) {
bucketPosition1.x = j
bucketPosition1.y = i
scanned1stBucket = true;
}
else {
bucketPosition2.x = j
bucketPosition2.y = i
bucketPrepared = true;
}
}
}
j++;
}
while (j < table.rows[i].cells.length)
i++;
j = 0;
}
while (i < table.rows.length)
if (bucketPosition1.x > bucketPosition2.x) {
var origbucketPosition1X = bucketPosition1.x
bucketPosition1.x = bucketPosition2.x
bucketPosition2.x = origbucketPosition1X
}
fill();
}
function fill() {
placed1stBucket = false;
bucketActive = false;
for (var i = bucketPosition1.y; i < bucketPosition2.y + 1; i++) {
for (var j = bucketPosition1.x; j < bucketPosition2.x + 1; j++) {
placeElementTo(j, i)
}
}
}
function enableFillMode() {
if (allowpressbutton) {
playacceptsound()
bucketActive = true
}else{
}
}
function placeElementTo(x, y) {
var image = document.getElementById("clickobject").innerHTML
var table = document.getElementById('editorgrid').firstElementChild
table.rows[y].cells[x].firstElementChild.firstElementChild.innerHTML = image
var string = "-"
idIndex++;
table.rows[y].cells[x].firstElementChild.firstElementChild.firstElementChild.id = "blenk" + string.repeat(idIndex)
}
function getCollisionData() {
var table = document.getElementById('editorgrid').firstElementChild
var data = "<collision>";
for (var i = 0, row; row = table.rows[i]; i++) {
data += "<row>"
for (var j = 0, col; col = row.cells[j]; j++) {
if (col.firstElementChild.firstElementChild.innerHTML !== '') {
data += '<tile collindex="' + col.firstElementChild.firstElementChild.firstElementChild.getAttribute('collision') + '"></tile>'
}
else data += '<tile collindex="0"></tile>'
}
data += "</row>"
}
data += "</collision>"
return data
}
function applyCollision() {
document.getElementById('element1').setAttribute('collision', 3)
document.getElementById('element2').setAttribute('collision', 4)
document.getElementById('element3').setAttribute('collision', 1)
document.getElementById('element4').setAttribute('collision', 1)
document.getElementById('element5').setAttribute('collision', 2)
document.getElementById('element6').setAttribute('collision', 1)
document.getElementById('element7').setAttribute('collision', 0)
}

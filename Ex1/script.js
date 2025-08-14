var myName = "FRCC";
const greeting = "Hi";

function writeName() {
 document.write("<p>");
 document.write( greeting + " " + myName + "!");
 document.write("</p>");
}

function zoomin() {
  document.getElementById("frccMap").src = "zoomin.png";
}

function zoomout() {
  document.getElementById("frccMap").src = "zoomout.png";
}

var image= ["images/mom2.png", 
"images/me.jpg",
"images/Dad.jpg"
];
var names= [
"Mom",
"Me",
"Dad"
];
var i=0;
function nextphoto() {
  i++; 
if (i==3) 
  {
  i=0;
 }
 
 var result=image[i]
 var updatedname=names[i]
document.getElementById("album").src=result;
document.getElementById("NamesofFamilymembers").innerHTML=updatedname;
}
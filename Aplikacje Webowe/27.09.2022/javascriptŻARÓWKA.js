
document.write("Hello world");


function turnOnOff() 
{
var image = document.getElementById('Image');


if (image.src.match("ONbulb"))
 image.src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
else
 image.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
}


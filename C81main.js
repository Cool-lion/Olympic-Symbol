canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.rect(100, 100, 600, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc (575,275,75,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.arc (487.5,350,75,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.arc (400,275,75,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#ffdf00";
ctx.lineWidth = 10;
ctx.arc (312.5,350,75,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.arc (225,275,75,0,2 * Math.PI);
ctx.stroke();







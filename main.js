canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "Teal";
var width = 3;
var mouse_event = "";
var last_position_x = 0;
var last_position_y = 0;
canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e) {
    mouse_event = "mouseDown";
}



function my_mouseup(e) {
    mouse_event = "mouseUp";
}



function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}



function my_mousemove(e) {
    var current_x_position = e.clientX - canvas.offsetLeft;
    var current_y_position = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_x_position, current_y_position);
        ctx.stroke();

    }
    last_position_x=current_x_position;
    last_position_y=current_y_position;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    function clear(){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    }
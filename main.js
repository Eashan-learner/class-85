canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
bag_img="mars.jpg";
rover_boy="rover.png";
rover_boy_x=12;
rover_boy_y=12;
rover_height=50;
rover_width=50;
function skip_me() {
    bag_imgtag =new Image();
    bag_imgtag.onload = upload_baground;
    bag_imgtag.src = bag_img;

    rover_imgtag =new Image();
    rover_imgtag.onload = rover_baground;
    rover_imgtag.src = rover_boy;
}
function upload_baground() {
    ctx.drawImage(bag_imgtag,0,0,canvas.width, canvas.height);
}
function rover_baground() {
    ctx.drawImage(rover_imgtag,rover_boy_x,rover_boy_y,rover_width , rover_height);
}
window.addEventListener("keydown",mathipro);
function mathipro(e) {
    keypressed=e.keyCode;
    if (keypressed=='38') {
        up();
        console.log ("up");
    }
    if (keypressed=='39') {
        right();
        console.log ("right");
    }
    if (keypressed=='37') {
        left();
        console.log ("left");
    }if (keypressed=='40') {
        down();
        console.log ("down");
    }
}
function up() {
    if (rover_boy_y >=0) {
        rover_boy_y =rover_boy_y-10;
        console.log ("rover_boy_x=" +rover_boy_x+ "rover_boy_y=" +rover_boy_y);
        upload_baground();
        rover_baground();
    }
}
function down() {
    if (rover_boy_y <=500) {
        rover_boy_y =rover_boy_y+10;
        console.log ("rover_boy_x=" +rover_boy_x+ "rover_boy_y=" +rover_boy_y);
        upload_baground();
        rover_baground();
    }
}
function right() {
    if (rover_boy_x <=700) {
        rover_boy_x =rover_boy_x+10;
        console.log ("rover_boy_x=" +rover_boy_x+ "rover_boy_y=" +rover_boy_y);
        upload_baground();
        rover_baground();
    }
}
function left() {
    if (rover_boy_x >=0) {
        rover_boy_x =rover_boy_x-10;
        console.log ("rover_boy_x=" +rover_boy_x+ "rover_boy_y=" +rover_boy_y);
        upload_baground();
        rover_baground();
    }
}
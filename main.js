var canvas = new fabric.Canvas("mycanvas");
block_width= 30;
block_height= 30;
player_x=100;
player_y=100;
player_object=""
block_object=""

function update_player() {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(player_object)
    });
}
function update_blocks(block) {
    fabric.Image.fromURL(block,function (Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    });
    

}
window.addEventListener("keydown",kd)
function kd(e) {
    x=e.keyCode
    console.log(x)
    if (x==67) {
        update_blocks("cloud.jpg")

    }
    if (x==68) {
       update_blocks("dark_green.png") 
    }
    if (x==71) {
        update_blocks("ground.png")
    }
    if (x==76){
        update_blocks("light_green.png")
    }
    if (x==82){
        update_blocks("roof.jpg")
    }
    if (x==84) {
        update_blocks("trunk.jpg")
    }
    if (x==85) {
        update_blocks("unique.png")
    }
    if (x==87) {
       update_blocks("wall.jpg") 
    }
    if (x==89) {
       update_blocks("yellow_wall.png") 
    }
    if(x==37){
        left()
    }
    if (x==38) {
        up()
    }
    if (x==39) {
        right()
    }
    if (x==40) {
        down()
    }
    if (x==80&&e.shiftKey==true) {
        block_height=block_height+10
        block_width=block_width+10
        document.getElementById("width").innerHTML=block_width
        document.getElementById("height").innerHTML=block_height
    }
    if (x==77&&e.shiftKey==true) {
        block_height=block_height-10
        block_width=block_width-10
        document.getElementById("height").innerHTML=block_height
        document.getElementById("width").innerHTML=block_width
    }

}
    
function up() {
    if (player_y>=0) {
        player_y=player_y-block_height

        canvas.remove(player_object);
        update_player();
    }
}
function down() {
    if (player_y<=500) {
        player_y=player_y+block_height
        canvas.remove(player_object);
        update_player();
    }

}
function right() {
    if (player_x<=700) {
        player_x=player_x+block_width
        canvas.remove(player_object);
        update_player();
    }
}
function left() {
    if (player_x>=0) {
        player_x=player_x-block_width
        canvas.remove(player_object);
        update_player();
        
    }
}

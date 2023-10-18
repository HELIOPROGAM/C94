
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

{
	
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{

keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == '67')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}

if(e.shiftKey && keyPressed == '68')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	

	if(keyPressed == '80')
	{
		new_image('parede.jpg'); 
		console.log("p");
	}
	if(keyPressed == '71')
	{
		new_image('grama.png'); 
		console.log("g");
	}
	if(keyPressed == '86')
	{
		new_image('verde_claro.png'); 
		console.log("v");
	}
	if(keyPressed == '77')
	{
		new_image('madeira_tronco.jpg'); 
		console.log("m");
	}
	if(keyPressed == '84')
	{
		new_image('telhado.jpg'); 
		console.log("t");
	}
	if(keyPressed == '65')
	{
		new_image('parede_amarela.png'); 
		console.log("a");
	}
	if(keyPressed == '69')
	{
		new_image('verde_escuro.png'); 
		console.log("e");
	}
	if(keyPressed == '85')
	{
		new_image('unico.png'); 
		console.log("u");
	}
	if(keyPressed == '78')
	{
		new_image('nuvem.jpg'); 
		console.log("n");
	}

}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

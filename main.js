
// Agora, escreveremos o código para JavaScript no arquivo main.js.
// 1. Primeiro, obteremos a referência do canvas com fabric.Canvas() e a armazenaremos
//  dentro de uma variável chamada canvas.

var canvas = new fabric.Canvas('myCanvas');
// Agora, definiremos as coordenadas x e y iniciais para o personagem e as
// armazenaremos em variáveis.
// ● Ajustamos os valores para playerX e playerY ambos em 10. Você pode ajustá-los em
// qualquer valor que desejar. Não é obrigatório que ajustemos em 10. Ajustamos nesse
// valor para que a imagem inicie ao topo do canvas.

player_x = 10;
player_y = 10;
//  2. Agora, definiremos a width e height iniciais das imagens dos blocos e as
// armazenaremos nas variáveis.
//  ● Ajustamos os valores para blockImageWidth e blockImageHeight ambos em 30. Não é
//  obrigatório ajustá-los em 30. Ajustamos ambas em 30 para que tivesse boa dimensão
//  no canvas.
block_image_width = 30;
block_image_height = 30;
// 4. Agora, definimos uma variável chamada playerObject. Essa variável será utilizada para
// armazenar o objeto da imagem do personagem.
// ● Em fabric.js, as imagens são armazenadas no canvas como objetos, portanto,
// enquanto adicionarmos um objeto, poderemos, também, deletá-lo. Isso simplesmente
// significa que podemos adicionar e deletar imagens utilizando objetos.
var player_object= "";
var block_image_object= "";
// 5. Agora, adicionaremos uma função chamada playerUpdate() para adicionar a imagem do
// personagem. Essa função enviará a imagem do jogador no canvas.

// ➔ Primeiro, defina a função e forneça o nome playerUpdate().
function player_update()
{
	
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
// 	➔ Agora, definiremos uma função chamada fabric.Image.fromURL() de fabric.js para
//  enviar uma imagem ao canvas
// ○ fabric: Esse será o nome da biblioteca que utilizamos.
// ○ Image: Isso diz que enviamos uma imagem.
// ○ fromURL: Esse contém a URL da imagem e a função para enviar imagens.
// ○ “player.png”: Essa é a imagem.
// ○ function(Img): Essa é a função que enviará player.png ao canvas.
// ■ Img: Esse é o objeto da imagem definida por padrão.
//playerObject é o objeto da imagem.
//○ set ajustará as coordenadas x e y da imagem do jogador.
//○ top representa a coordenada y.
// Ajustamos a coordenada y para o valor de playerY, que é 10,como já definimos anteriormente.
//○ left representa a coordenada x
// Ajustamos a coordenada x para o valor de playerX, que é 10,como já definimos anteriormente.
//➔ Agora, adicione essa imagem ao canvas
}
//Agora, adicionaremos uma função para adicionar as diferentes imagens conforme
//as teclas específicas pressionadas.
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

	//passamos a variável getImage entre parênteses. Essa variável conterá as respectivas imagens dos blocos conforme as teclas
	// pressionadas.
	/*Fabric: será o nome da biblioteca que utilizamos.
	○ Image: diz que estamos carregando uma imagem.
	○ fromURL: conterá a URL da imagem e a função de carregar uma
	imagem.
	○ getImage: essa variável conterá as respectivas imagens das teclas
	específicas pressionadas.*/
}
//acima aula 92
//abaixo aula93

//93 Essa linha adicionará um event listener para obter o valor ASCII da tecla que for pressionada e chamará a função my_keydown().
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
//93 A segunda linha define a função my_keydown.
{
//e.keyCode obterá o valor da tecla pressionada. Isso significa que ele obterá o valor ASCII das 
//teclas pressionadas, que armazenaremos na variável keyPressed para as exibirmos no console.
keyPressed = e.keyCode;
console.log(keyPressed);
//SE: "shift" e "C" foram pressionadas ao mesmo tempo, para então executar a condição if.
// Caso a condição for verdadeira, o console exibirá a mensagem “C e shift pressionadas ao mesmo tempo”. 
//Isso é utilizado para confirmarmos que nosso código está funcionando.
if(e.shiftKey == true && keyPressed == '67')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	// Na última aula, definimos a variável block_image_width com o valor inicial 30
	block_image_width = block_image_width + 10;//aumentará a largura e altura dos blocos
	block_image_height = block_image_height + 10;//aumentar a largura e altura dos blocos
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
//93
if(e.shiftKey && keyPressed == '68')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
//  93SE: o valor da variável keyPressed é 38, caso verdadeiro: chamará a função up(), que discutiremos na próxima aula.
// Depois, o código console.log explicará se o código foi executado ou não.
//Da mesma forma, poderemos fazer isso para as outras teclas direcionais.
	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	//Chamar a função down()
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	//Chamar a função left():
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	//Chamar a função right():
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	// 93Programar as imagens que serão enviadas ao canvas quando as teclas p, g, v, m, t,
    //a, e, u, n forem pressionadas:

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
//94  	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;//significa que player_y será atualizado de acordo com player_y subtraído do valor de block_image_height
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);//Remova a imagem do jogador do canvas, pois não queremos manter a imagem da posição antiga.
		player_update();//Essa função enviará a nova imagem do jogador ao canvas, que definimos na última aula.
	}
}

function down()
{
	if(player_y <=500)//verificaremos se player_y é igual ou menor que 500, para então permitir que ele se mova para baixo.
	{
		player_y = player_y + block_image_height;//significa que player_y será atualizado de acordo com player_y + block_image_height
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
	if(player_x <=850)//verificaremos se player_x é igual ou menor que 850, para então permitir que ele se mova para direita
	{
		player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

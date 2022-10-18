
//Criando variáveis
	var chao;
		var fundo;


//Criando variáveis imagens
	var fundoimg;
		var chaoimg;


//Carregando imagens
	function preload(){

		fundoimg = loadImage("./assets/Fundo.png");
			chaoimg = loadImage("./assets/Chão.png")
	}

//Configurando
	function setup(){
		createCanvas(1000,232);

			//Criando Sprites

				//Fundo
				fundo = createSprite(860, 116)
					fundo.addImage(fundoimg)

				//Chão
				chao = createSprite(660, 230)
					chao.addImage(chaoimg)
				chao.scale = 0.08

	}

//Desenhando
	function draw(){
		background("violet");



		drawSprites();
	}
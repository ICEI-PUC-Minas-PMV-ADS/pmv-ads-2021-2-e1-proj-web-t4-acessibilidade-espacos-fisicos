*************************************************************************************************************************************************
Pagina Principal
*************************************************************************************************************************************************


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <script src="https//use.fontawesome.com/ae97aecf40a.js"></script>
    <script src="dbfake.js"></script>
</head>
<body>
    <div id="fundo">
      <img class="logo" src="oculos.png">
      <div class="titulo">
        <h1>Olhos Guiados</h1>
      </div>
    </div>
    <nav class="menu-principal">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="braile.html">Braile</a></li>
            <li><a href="#">Doações</a></li>
            <li><a href="quem.html">Quem Somos</a></li>
            <li><a href=locais.html>Locais</a></li>
            <input class="search-txt" type="text" name="" placeholder="Pesquise">
            <li><a href=login.html>Login</a></li>
        </ul>
    </nav>
    <div id="fundo2">
    <p class= "title"> Podcasts</p>
    <iframe width="260" height="115" src="https://www.youtube.com/embed/dqE50LUi1xI" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>

  <iframe width="260" height="115" src="https://www.youtube.com/embed/qu-V7tdmcWw" title="YouTube video player"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
    </div>
   <!--QUEBRA DE LINHA-->
    <main>
      <h1>Locais</h1>
      <div id="lista-locais">
      </div>
    </main>
    <footer>
      <div class="footer-content">
        <h3>Olhos Guiados</h3>
        <p>Já pensou em ir vendado?</p>
        <ul class="socials">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
       <div class="footer-bottom">
         <p>COPYRIGHT &copy;2021 OlhosGuiados. designed by <span>Turma 4</span></p>
       </div>
    </footer>
    <script>

        var locs = '';
        for (i=0; i <2; i++) {
          locs += `<p class ="expor-item"> Local:<br> ${locais.locais[i].nome} <br> <img class="imagem" src="${locais.locais[i].foto}"> <br> ${locais.locais[i].endereço} <br> ${locais.locais[i].nota} <br> ${locais.locais[i].comentario}</p>`;
        }
        document.getElementById('lista-locais').innerHTML=locs;
    
      </script>
</body>
</html>

*************************************************************************************************************************************************
estilo. CSS
*************************************************************************************************************************************************

header{
  width: 100vw; 
  height: 100%;
    overflow-x: hidden ;
  }
body{
  width: 100vw;
    position: absolute;
  }
  .Podcast{
    display: inline-start
  }
  .logo{
      width: 70px;
      position: relative;
      bottom: 10px;
    }
    .titulo{
      font-style: italic;
      position: relative;
      bottom: 60px;
      left: 90px;
      color:aliceblue;
      
    }
  #fundo{
        background-color: #333;;
        height: 60px;
        padding: 20px;
    }

  *{
      margin: 0pt;
      padding: 0pt;
      box-sizing: border-box;
      font-family: 'Poppins';
    }

  .menu-principal ul{
        list-style: none;
        padding: 0px;
        background-color: #222;
        text-decoration: none;;
      }
  .menu-local ul{
        list-style: none;
        padding: 0px;
        background-color: rgb(147, 213, 114);
        text-decoration: none;;
      }
      
  .menu-principal ul li{
        display: inline;
      }
  .menu-local ul li{
        display: inline;
      }

  .menu-principal ul li a{
        color: rgb(237, 205, 250);
        padding: 20px;
        display: inline-block;
        text-decoration: none;
        transition: background .6s;
      }
  .menu-local ul li a{
        color: #fff;
        padding: 20px;
        display: inline-block;
        text-decoration: none;
        transition: background .6s;
      }
  .menu-principal ul li:last-child a{
        float: right;
        background-color: #999 ;
      }
  .menu-local ul li:last-child a{
        float: right;
        background-color: #999 ;
      }

  .menu-principal ul li a:hover{
        background-color: rgb(134, 123, 123);
      }
  .menu-local ul li a:hover{
        background-color: rgb(134, 123, 123);
      }

  #fundo2{
        background-color:snow;
    }
    .title{
      font-size: 22pt;
      text-align: justify;
    }
    .paragrafo{
        font-size: 12pt;
        text-align: justify;
    }
    .expor-item {
        width: 220px;
        float: left;
        padding: 0 10px;
    }
    .imagem{
        width: 200px;
        height: 300px;
    }
    .expor-locais{
      float:left;
      padding: 0 10px;
    }
footer{
        position: absolute;
        bottom: -500px ;
        background: #333;
        height: auto;
        width: 100vw;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
      }
      .footer-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }

      .footer-content h3{
        font-size: 1.8rem;
        font-weight: 400;
        text-transform: capitalize;
        line-height: 3rem;
      }

      .footer-content p{
        max-width: 500px;
        margin: 10px auto;
        line-height: 28px;
        font-size: 14px;
      }

      .socials{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 3rem 0;
      }

      .socials li{
        margin: 0 10px;
      }

      .socials a{
        text-decoration: none;
        color: #fff;
      }

      .socials a i{
        font-size: 1.1rem;
        transition: color .4s ease;
      }
      
      .socials a:hover i{
        color: #999;
      }

      .footer-bottom{
        background: #222;
        width: 100vw;
        padding: 20px 0;
        text-align: center;
      }

      .footer-bottom p{
        font-size: 14px;
        word-spacing: 2px;
        text-transform: capitalize;
      }
      .footer-bottom span{
        text-transform: uppercase;
        opacity: .4;
        font-weight: 200;
      }


*************************************************************************************************************************************************
dbfake.js
*************************************************************************************************************************************************

var livros={
    livros:[
        {
            titulo:'Jornalismo em Braille',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/419aP0l6JOL._SX351_BO1,204,203,200_.jpg',
            descricao:'Livro "Jornalismo em Braille, da autora Alessandra Nascimento',
            mapa: "Link do site para compra"
        },{
            titulo:'Feche os olhos para ver melhor',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/411wfknSpfL._SX359_BO1,204,203,200_.jpg',
            descricao:'Livro "Feche os olhos para ver melhor", do autor Sergio Sá',
            mapa:'Link do site para compra'
        },{
            titulo:'Era uma vez uma página em branco',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/41OJp-RQuXL._SY496_BO1,204,203,200_.jpg',
            descricao:'Livro "Era uma vez uma página em branco", da autora Ana Carmen Franco Nogueira',
            mapa:'Link do site para compra'
        },{
            titulo:'Alfabeto Braille',
            imagem:'https://www.alfabeto.net.br/wp-content/uploads/2013/09/alfabeto-braille.gif',
            descricao:'Alfabeto em braille que está disponível no site abaixo',
            mapa:'Link do site: https://www.alfabeto.net.br/alfabeto-braille/'
        },
    ]
    }
var locais={
    locais:[
        {
            id:'1',
            nome:'PUC Minas Coração Eucarístico',
            foto:'https://lh5.googleusercontent.com/p/AF1QipNj-6GR75uY5vBquhe27Sqb2q3pnbqpokjjjSa4=w408-h306-k-no',
            endereço:'R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Ótima estrutura'
        },{
            id:'2',
            nome:'PUC Minas Barreiro',
            foto:'https://lh5.googleusercontent.com/p/AF1QipP_Ei9ZL1J_7GEqgpMBJQIQV3iyob1vnXBFyG6c=w426-h240-k-no',
            endereço:'Av. Afonso Vaz de Melo, 1200 - Barreiro, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Boa infraestrutura'
        },{
            id:'3',
            nome:'Casa do Baile',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPt3dRFe_eqOg9w2mCayDxfUrvqY00epM4obt-P=w408-h306-k-no',
            endereço:'Av. Otacílio Negrão de Lima, 751 - Pampulha, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Possui visitas sensoriais e disponibiliza dispositivos táteis, sonoros e até gustativos.'
        },{
            id:'4',
            nome:'Museu de Arte da Pampulha',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPKEssCdLAd6wk1fMDQUwz_rEQQ86FBQkOCcnm4=w408-h272-k-no',
            endereço:'Av. Otacílio Negrão de Lima, 16585 - Pampulha, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Possui visitas sensoriais e disponibiliza dispositivos táteis, sonoros e até gustativos.'
        },{
            id:'5',
            nome:'Museu de Artes e Ofícios',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMl8UvD-_DVgE_T14jzVXNiKmT_cMvopwJtBFjC=w408-h272-k-no',
            endereço:'Praça Rui Barbosa, 600 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Promove a acessibilidade cultural por meio de visitas sensoriais para pessoas com deficiência visual e auditiva.'
        },{
            id:'6',
            nome:'Praça do Papa',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPGXEkt9gXTPRJwk0PpwXFu4mOddB4vMxIvX1M_=w408-h248-k-no',
            endereço:'Av. Agulhas Negras, s/n - Mangabeiras, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        },{
            id:'7',
            nome:'Parque Municipal Américo Renné Giannetti',
            foto:'https://lh5.googleusercontent.com/p/AF1QipOognVNVohCg5KYP4VoNUQRK5sABfTAa7ppvHmb=w426-h240-k-no',
            endereço:'Av. Afonso Pena, 1377 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        },{
            id:'8',
            nome:'Mineirão',
            foto:'https://lh5.googleusercontent.com/p/AF1QipNxT7u33mBOWzYhykkJCRHPe4T9m4itUsIZBIWe=w408-h271-k-no',
            endereço:'Av. Antônio Abrahão Caram, 1001 - São José, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações'
        },{
            id:'9',
            nome:'A Pão de Queijaria',
            foto:'https://lh5.googleusercontent.com/p/AF1QipM7MZHcJv58dfpqXyh3_V_sqHL7w7MCJNtaaz2K=w408-h272-k-no',
            endereço:'R. Antônio de Albuquerque, 856 - Funcionários, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Boa acessibilidade'
        },{
            id:'10',
            nome:'Cine Theatro Brasil',
            foto:'https://lh5.googleusercontent.com/p/AF1QipOQCnvqcRdYRowFBt1RdXybJwaSz3JZy8YZiy2T=w408-h544-k-no',
            endereço:'Av. Amazonas, 315 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Todos os espetáculos próprios contam com, pelo menos, uma sessão em libras e audiodescrição e as exposições têm informações em braile.  No quesito estrutura, o teatro oferece assentos demarcados, elevadores com leitura em Braile, poltronas adaptadas, banheiros acessíveis e sinalização.'
        },{
            id:'11',
            nome:'Edifício Maleta',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMEiBE6VQjlZ_capvL_ySebQHKM0ZcunxnhKvOc=w408-h864-k-no',
            endereço:'R. da Bahia, 1148 - Centro, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Várias opções de bares e restaurante, com local adaptado.'
        },{
            id:'12',
            nome:'Mercado Central',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMmsPQqEdM0QjkML7OrtJbBOpKyTgBW3DEGGRuY=w408-h306-k-no',
            endereço:'Av. Augusto de Lima, 744 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        }
    ]
}

function insertLocal(locais) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 13;
    if (db.data.length != 0) 
      novoId = locais.locais[locais.locais.length - 1].id + 1;
    let novolocal = {
        "id": novoId,
        "nome": locais.nome,
        "endereço" : locais.endereço,
        "nota": locais.nota,
        "comentario" : locais.comentario,
    };

    // Insere o novo objeto no array
    locais.locais.push(novolocal);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('locais', JSON.stringify(db));
}

*************************************************************************************************************************************************
Pagina Braile
*************************************************************************************************************************************************

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Braille</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <script src="https//use.fontawesome.com/ae97aecf40a.js"></script>
    <script src="dbfake.js"></script>
</head>
<body>
    <div id="fundo">
      <img class="logo" src="oculos.png">
      <div class="titulo">
        <h1>Olhos Guiados</h1>
      </div>
    </div>
    <nav class="menu-principal">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="braile.html">Braile</a></li>
            <li><a href="#">Doações</a></li>
            <li><a href="quem.html">Quem Somos</a></li>
            <li><a href=locais.html>Locais</a></li>
            <input class="search-txt" type="text" name="" placeholder="Pesquise">
            <li><a href=login.html>Login</a></li>
        </ul>
    </nav>
    <div id="fundo2">
    <p class= "title"> Sobre o braille</p>
    <p class="paragrafo">O braille é o sistema de escrita e leitura utilizado pelos deficientes visuais. A leitura se dá pelo toque
        no papel em relevo, onde os códigos do braille são marcados. Essa escrita pode acontecer de diversas maneiras
        sendo elas: o reglete e punção, máquina de escrever em braile, notetaker em braille e etc. Além disso a leitura
        por meio de computadores também é possível, os aplicativos de voz e leitura são os que auxiliam os deficientes
        visuais a navegarem pela Web sem passar por tanta dificuldade, contudo também existe os mostradores de braile
        atualizados, que auxiliam nesse processo.</p>

    <p class="paragrafo">Abaixo você irá encontrar uma lista de livros que vão te auxiliam e te inserir no mundo do braile, 
        te ensinando como funciona, como ler e escrever os códigos e também vão te apresentar a história, como o braile foi
        criado e com que intuíto foi criado, o que tomou como inspiração e muito mais, além também de livros que mostram as
        dificuldades dos deficientes visuais. São conteúdos que irão agregar muito aos que desejam conhecer mais sobre este 
        mundo.</p>
    </div>
    <!--QUEBRA DE LINHA-->
    <main>
        <p class= "title">LIVROS</p>
        <div id="lista-livros">

        </div>
      </main>
    <footer>
      <div class="footer-content">
        <h3>Olhos Guiados</h3>
        <p>Já pensou em ir vendado?</p>
        <ul class="socials">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
       <div class="footer-bottom">
         <p>COPYRIGHT &copy;2021 OlhosGuiados. designed by <span>Turma 4</span></p>
       </div>
    </footer>
    <script>

        var book = '';
        for (i=0; i <livros.livros.length; i++) {
          book += `<p class ="expor-item"> Livro: ${livros.livros[i].titulo} <br> <img class="imagem" src="${livros.livros[i].imagem}" <br> ${livros.livros[i].descricao} <br> ${livros.livros[i].mapa}</p>`;
        }
        document.getElementById('lista-livros').innerHTML=book;
    
      </script>
</body>
</html>



*************************************************************************************************************************************************
Pagina Principal
*************************************************************************************************************************************************


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto A</title>
  <link rel="stylesheet" href="style.Css">
  <script src="dbfake.js"></script>
</head>

<body>
  <header>
    <p>TITULO DO SITE </p>
    <p>JÁ PENSOU EM IR VENDADO </p>

  </header>

  <nav class="menu-principal">
    <ul>
      <li><a href="Projeto A.html">Home</a></li>
      <li><a href="Braile.html">Braile</a></li>
      <li>Doação</li>
    </ul>
  </nav>

  <nav class="PODCAST">
    <p>PODCAST</p>
  </nav>

  <iframe width="260" height="115" src="https://www.youtube.com/embed/dqE50LUi1xI" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>

  <iframe width="260" height="115" src="https://www.youtube.com/embed/qu-V7tdmcWw" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>

  <main>
    <h1>Locais</h1>
    <div id="lista-produtos">

    </div>
  </main>
  <footer>
    <p>Copyright 2021 Titulo do Site</p>
  </footer>

  <script>

    var prods = '';
    for (i=0; i <db.dados.length; i++) {
      prods += `<p class ="produto-item"> Produto: ${db.dados[i].titulo} <br> <img src="${db.dados[i].imagem}" <br> ${db.dados[i].descricao} <br> ${db.dados[i].mapa}</p>`;
    }
    document.getElementById('lista-produtos').innerHTML=prods;

  </script>
</body>

</html>

*************************************************************************************************************************************************
style. CSS
*************************************************************************************************************************************************

header {
  height: 100px;
  background-color: beige;
  text-align: center;
  padding: 20px;
}

.menu-principal{
  float: inline-start;
}

.menu-principal>ul>li{
  display: inline-block;
  padding: 8px;
}
.menu-principal>ul>li:hover{
  background-color: burlywood;
}

.PODCAST{
  display: inline-start
}

.produto-item {
  width: 220px;
  float: left;
  padding: 0 10px;
}



footer{
  clear: both;
  background-color: beige;
  text-align: center;
}


*************************************************************************************************************************************************
dbfake.js
*************************************************************************************************************************************************

var db={
dados:[
    {
        titulo:'Nome do local',
        imagem:'https://lorempixel.com/400/200/city/1',
        descricao:'Caracteristicas do local',
        mapa:'Link do googlemaps'
    },{
        titulo:'Nome do local',
        imagem:'https://lorempixel.com/400/200/city/2',
        descricao:'Caracteristicas do local',
        mapa:'Link do googlemaps'
    },{
        titulo:'Nome do local',
        imagem:'https://lorempixel.com/400/200/city/3',
        descricao:'Caracteristicas do local',
        mapa:'Link do googlemaps'
    },{
        titulo:'Nome do local',
        imagem:'https://lorempixel.com/400/200/city/4',
        descricao:'Caracteristicas do local',
        mapa:'Link do googlemaps'
    },{
        titulo:'Nome do local',
        imagem:'https://lorempixel.com/400/200/city/5',
        descricao:'Caracteristicas do local',
        mapa:'Link do googlemaps'
    }
]
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
    <title>Braile</title>
    <link rel="stylesheet" href="style.Css">
    <body>
        <header>
     Braile
        </header>

        <Button>
            <a href="Projeto A.html">Home</a>
        </Button>
    
        <Footer>
            <p>Copyright 2021 Titulo do Site</p>
        </Footer>
</body>
</html>



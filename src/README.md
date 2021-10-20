# Instruções de utilização

## Instalação do Site

O site em HTML/CSS/JS é um projeto estático, logo pode ser utilizado tanto em servidores...

## Histórico de versões

### [0.1.0] - 20/10/2021
#### Primeira versão

<!DOCTYPE html>
<html lang="en">
<head>
<title>CSS Website Layout</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 15px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width:600px) {
  .column {
    width: 100%;
  }
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

</style>
</head>
<body>

<div class="header">
  <h1>Seguimos</h1>
  <p>JÁ PENSOU EM IR VENDADO</p>
</div>

<div class="topnav">
  <a href="#">Home</a>
  <a href="#">Braile</a>
  <a href="#">Doação</a>
</div>

<div> 

  <p>PODCAST</p>  

  <iframe width="260" height="115" 
  src="https://www.youtube.com/embed/dqE50LUi1xI" 
  title="YouTube video player" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

<iframe width="260" height="115" 
src="https://www.youtube.com/embed/qu-V7tdmcWw" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>

   </div>
<div class="row">
  <div class="column">
    <h2>Local 1</h2>
    <p>Nome do Local + Imagem</p>
  </div>
  
  <div class="column">
    <h2>Decrição</h2>
    <p>Em poucas palavras do que se trata o local, o que existe de serviço e se é ou tem atendimento acessível</p>
  </div>
  
  <div class="column">
    <h2>Google Maps</h2>
    <p>Link do google maps do local</p>
  </div>
</div>

<div class="row">
    <div class="column">
      <h2>Local 2</h2>
      <p>Nome do Local + Imagem</p>
    </div>
    
    <div class="column">
      <h2>Decrição</h2>
      <p>Em poucas palavras do que se trata o local, o que existe de serviço e se é ou tem atendimento acessível</p>
    </div>
    
    <div class="column">
      <h2>Google Maps</h2>
      <p>Link do google maps do local</p>
    </div>
  </div>

  <div class="row">
    <div class="column">
      <h2>Local 3</h2>
      <p>Nome do Local + Imagem</p>
    </div>
    
    <div class="column">
      <h2>Decrição</h2>
      <p>Em poucas palavras do que se trata o local, o que existe de serviço e se é ou tem atendimento acessível</p>
    </div>
    
    <div class="column">
      <h2>Google Maps</h2>
      <p>Link do google maps do local</p>
    </div>
  </div>
<div class="footer">
    <p>Copyright Seguimos</p>
  </div>

</body>
</html> 

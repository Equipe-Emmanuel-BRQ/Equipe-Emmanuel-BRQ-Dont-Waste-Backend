<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<html lang="PT-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
    <link rel="stylesheet" href="../../resources/css/categorias.css">
    <link rel="stylesheet" href="../../resources/css/padrao.css">
    
    <title>Don't Waste | Home</title>
</head>

<body>

<header>
	<nav class="navbar-home-logada">
		<div class="navbar-home-logada-container">
			<img class="home-icon-logado" alt="" src="../../resources/img/home.svg">
			<form class="form-navbar" action="">
				<input type="text" class="form-input-navbar" placeholder="O que você procura?">
			</form>
			<img class="menu-icon" alt="" src="../../resources/img/menu.svg">		
		</div>
	</nav>
</header>

    <section class="section-home">
        <div class="section-home-container">
    
            <div class="section-home-container-content">
                <img class="logo-home" src="../../resources/img/LogoPng.png">

                <div class="section-home-container-titles">
                    <h1 class="home-title">Don't Waste</h1>
                    <h3 class="home-subtitle">Organize</h3>
                </div>
        
            </div>
            <h3 class="titulo-categorias">Clique para cadastrar o que há na sua:</h3>

            <div class="section-home-container-categorias">
               <a href="" class="categoria-card">
                    <h2 class="categoria-card-titulo">Geladeira</h2>
                    <img class="card-img-geladeira" src="../../resources/img/Geladeira.png" alt="">
               </a>
               <a href="" class="categoria-card">
                   <h2 class="categoria-card-titulo">Dispensa</h2>
                    <img  class="card-img-dispensa" src="../../resources/img/Dispensa.png" alt="">
               </a>
            </div>
            <a href="/homeLogada" class="button-voltar btn-categoria">Voltar</a>
        </div>
    </section>
</body>
</html>
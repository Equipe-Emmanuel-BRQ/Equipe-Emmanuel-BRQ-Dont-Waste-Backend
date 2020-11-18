<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<html lang="PT-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
    <link rel="stylesheet" href="../../resources/css/padrao.css">
    <link rel="stylesheet" href="../../resources/css/itensGeladeira.css">

    <title>Don't Waste | Home</title>
</head>

<body>

    <header>
        <nav class="navbar-home-logada">
            <div class="navbar-home-logada-container">
                <a href="homeLogada"><img class="home-icon-logado" alt="" src="../../resources/img/home.svg"></a>
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
                <img src="../../resources/img/LogoPng.png" class="logo-home">

                <div class="section-home-container-titles">
                    <h1 class="home-title">Don't Waste</h1>
                    <h3 class="home-subtitle">Organize</h3>
                </div>

            </div>
            <h3 class="titulo-categorias">Clique para cadastrar o que há na sua:</h3>

            <div class="section-home-container-tipo-item">

                <img src="../../resources/img/itens geladeira/geladeira.png" alt="Geladeira aberta" class="tipo-item-img-geladeira">
                <h2 class="tipo-item-title">Geladeira</h2>

            </div>

            <div class="section-home-container-categorias">
                <a href="cadastroGeladeiraFrutas" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Frutas.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Frutas, leg e verduras</h2>
                </a>

                <a href="" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Laticionios.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Laticínios</h2>
                </a>


                <a href="" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Frios.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Frios e embutidos</h2>
                </a>

                <a href="" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Carnes.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Frios e embutidos</h2>
                </a>

                <a href="" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Bebidas.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Bebidas</h2>
                </a>

                <a href="" class="categoria-card">
                    <img class="card-img" src="../../resources/img/itens geladeira/Bolos.png" alt="Frutas">
                    <h2 class="categoria-card-titulo">Bolos e sobremesas</h2>
                </a>

            </div>
            <a href="/homeLogada" class="button-voltar btn-categoria">Voltar</a>
        </div>
    </section>
</body>

</html>
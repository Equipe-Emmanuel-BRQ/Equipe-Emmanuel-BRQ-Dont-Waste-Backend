<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<html lang="PT-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
    <link rel="stylesheet" href="../../resources/css/homeLogada.css">
    <link rel="stylesheet" href="../../resources/css/padrao.css">
    <link rel="stylesheet" href="../../resources/css/menu.css">

    <!-- Jquery Cdn -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
        crossorigin="anonymous"></script>

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
                <div class="navbar-menu">
                    <h3 class="navbar-menu-title">MENU</h3>
                    <img class="navbar-menu-close" src="../../resources/img/cancel-menu-mark.svg" alt="">
                    <ul class="navbar-menu-list">
                        <li class="navbar-menu-item"><a class="navbar-menu-ancor" href="baixaItensGeladeira"><img
                                    class="navbar-menu-item-img" src="../../resources/img/Geladeira-menu.png" alt="">
                                Geladeira</a></li>
                        <li class="navbar-menu-item"><a class="navbar-menu-ancor" href=""><img
                                    class="navbar-menu-item-img" src="../../resources/img/Despensa-menu.png"
                                    alt="">Despensa</a></li>
                        <li class="navbar-menu-item"><a class="navbar-menu-ancor" href=""><img
                                    class="navbar-menu-item-img" src="../../resources/img/Lista de Compras-menu.png"
                                    alt="">Lista de Compras</a></li>
                        <li class="navbar-menu-item"><a class="navbar-menu-ancor" href=""><img
                                    class="navbar-menu-item-img"
                                    src="../../resources/img/Produtos Proximo ao vencimento-menu.png" alt="">Produtos
                                próx. do vencimento</a></li>
                        <li class="navbar-menu-item"><a class="navbar-menu-ancor" href=""><img
                                    class="navbar-menu-item-img" src="../../resources/img/Relatório-menu.png"
                                    alt="">Relatório de Desperdícios</a></li>
                    </ul>
                </div>
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

                <h2 class="home-slogan">Sua dispensa inteligente</h2>
            </div>
            <div class="section-home-container-links">
                <a href="/cadastroLogin" class="button-access btn-home" name="primerioAcesso">Vencimentos próximos</a>
                <a href="/login" class="button-login btn-home" name="login">Desperdícios</a>
            </div>
        </div>
    </section>
    <script src="../../resources/js/menu.js"></script>
</body>

</html>
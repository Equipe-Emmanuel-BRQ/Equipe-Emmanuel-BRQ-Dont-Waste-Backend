<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<html lang="PT-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
    <link rel="stylesheet" href="../../resources/css/padrao.css">
    <link rel="stylesheet" href="../../resources/css/baixaItensGeladeira.css">

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
                <img src="../../resources/img/itens geladeira/geladeira.png" alt="Geladeira aberta"
                    class="tipo-item-img-geladeira">
                <h2 class="tipo-item-title">Geladeira</h2>
            </div>

            <div class="section-home-container-cadastro">

                <div class="section-home-container-cadastro-titulo">
                    <h3>ALIMENTOS CADASTRADOS</h3>
                </div>
                    <table class="tabela-produtos">
                        <thead class="tabela-produtos-cabecalho">
                            <tr class="tabela-produtos-linha">
                                <th class="tabela-produtos-col-head">Alimento</th>
                                <th class="tabela-produtos-col-head">Data cadastro</th>
                                <th class="tabela-produtos-col-head">Quantidade</th>
                                <th class="tabela-produtos-col-head">Desperdício</th>
                                <th class="tabela-produtos-col-head">Consumo</th>
                            </tr>
                        </thead>
                        <tbody class="tabela-produtos-corpo">
                        
                        </tbody>
                    </table>

                <div class="section-home-container-cadastro-button">
                    <a href="itensGeladeira" class="button-voltar btn-cadastro">Voltar</a>
                    <a href="categorias" class="button-voltar btn-cadastro">Salvar</a>
                </div>
            </div>
        </div>
    </section>
</body>
<!-- Jquery Cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
    crossorigin="anonymous"></script>
<script src="../../resources/js/baixaItens.js">
</script>

</html>
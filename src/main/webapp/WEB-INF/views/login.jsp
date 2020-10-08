<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Css -->
    <link rel="stylesheet" href="../../resources/css/login.css">
    <link rel="stylesheet" href="../../resources/css/padrao.css">

    <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
    <title>Don't Waste | Login</title>
</head>

<!-- Jquery Cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
    crossorigin="anonymous"></script>

<body>
    <section class="section-container">
        <form class="section-container-white">
            <a href="/"><img src="../../resources/img/home.svg" alt="volta para home" class="home-icon"></a>

            <div class="section-form-content">
                <img src="../../resources/img/user.svg" alt="logo usuÃ¡rio" class="user-icon">

                <label for="email" class="form-label">E-mail:</label>
                <input type="email" name="user-email" id="input-email" class="form-input">

                <label for="password" class="form-label">Senha:</label>
                <input type="password" name="user-password" id="input-password" class="form-input">

                <div class="validation-container">
                    <img src="../../resources/img/icon/warning.svg" class="validation-icon-error">
                    <span class="validation-title-error">Email ou senha Invalidos</span>
                </div>

                <a href="/esqueciSenha" class="forget-password">Esqueci minha senha</a>

                <a href="#" class="ancor-options ancor-login">Logar</a>

            </div>
        </form>
    </section>
    <script src="../../resources/js/login.js"></script>
</body>


</html>
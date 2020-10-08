<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="../../resources/img/favicon.ico" />
  <title>Don't Waste | Login</title>

  <link rel="stylesheet" href="../../resources/css/cadastroUsuario.css">
</head>

<!-- Jquery Cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>

<body>
  <main class="main">
    <form class="main-form">
      <fieldset class="main-form-fieldset">
        <a href="/"><img src="../../resources/img/home.svg" class="formfield-home-img"></a>
        <div class="main-form-content">


          <img src="../../resources/img/user.svg" class="formfield-user-img">

          <div class="container form-container-name">
            <label class="form-label-title">Nome:</label>
            <input type="text" name="" id="input-name" class="form-input" placeholder="Digite seu nome">
          </div>

          <div class="container form-container-amount">
            <label class="form-label-title">Quantidade de pessoas que residem na casa: </label>
            <select id="select-people-number" class="form-select">
              <option disabled selected>Selecione</option>
              <option>1</option>
              <option>2</option>
              <option>3 ou mais</option>
            </select>
          </div>

          <div class="container form-container-date">
            <label class="form-label-title">Qual a data da sua última compra?</label>
            <input type="date" name="" id="input-date" class="form-input">
          </div>

          <div class="container form-container-sale">

            <label class="form-label-title">Com que frequência faz compras</label>
            <select id="select-sale" class="form-select">

              <option disabled selected>Selecione</option>
              <option>Pontual</option>
              <option>Semanal</option>
              <option>Quinzenal</option>
              <option>Mensal</option>
            </select>
          </div>


          <div class="validation-container">
            <img src="../../img/icon/warning.svg" class="validation-icon-error">
            <span class="validation-title-error">Preencha todos os campos</span>
        </div>

          <div class="ancor-option">
            <a href="/cadastroLogin" class="form-btn btn-voltar">Voltar</a>
            <a href="#" class="form-btn btn-salvar">Salvar</a>
          </div>

        </div>
      </fieldset>
    </form>
  </main>
  <script src="../../resources/js/cadastroUsuario.js"></script>
</body>

</html>
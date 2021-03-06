const regexEmail = RegExp("^[a-zA-Z0-9$%!._-]+\@[a-z]+\.[a-z]{2,4}$", "g");
const regexPassword = RegExp("^[0-9]{6,8}$", "g");

$(".validation-container").hide();

function validationField(inputEmail, regexEmail, inputPassword, regexPassword) {
    return inputEmail.match(regexEmail) && inputPassword.match(regexPassword);
}

$(".ancor-next").click(function () {
    $("#input-email").removeClass("error");
    let inputEmail = $("#input-email").val();
    let inputPassword = $("#input-password").val();

    if (validationField(inputEmail, regexEmail,inputPassword, regexPassword )) {
        window.location.href = "/cadastroUsuario";
    } else {
        $(".validation-container").show();
        $("#input-email").addClass("error");
        $("#input-password").addClass("error");
    }

})

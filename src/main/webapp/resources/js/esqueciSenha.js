const regexEmail = RegExp("^[a-zA-Z0-9$%!._-]+\@[a-z]+\.[a-z]{2,4}$", "g");

$(".validation-container").hide();

function validationField(inputEmail, regexEmail, inputPassword, regexPassword) {
    return inputEmail.match(regexEmail);
}

$(".ancor-send").click(function () {
    $("#input-email").removeClass("error");
    let inputEmail = $("#input-email").val();

    if (validationField(inputEmail, regexEmail)) {
       
        $("#input-email").removeClass("error");
        $(".validation-container").hide();
        alert("E-mail enviado!");

    } else {
        $(".validation-container").show();
        $("#input-email").addClass("error");
    }
})
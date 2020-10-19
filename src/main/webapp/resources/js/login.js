	const regexEmail = RegExp("^[a-zA-Z0-9$%!._-]+\@[a-z]+\.[a-z]{2,4}$", "g");
	const regexPassword = RegExp("^[0-9]{6,8}$", "g");

	$(".validation-container").hide();


	function validaLogin(email, password) {
		$.ajax({
			url: "validacaoLogin",
			type: "GET",
			data: {
				email: email,
				password: password
			},
			success: function (data) {
				debugger;


			}
		})
	}


		function validationField(inputEmail, regexEmail, inputPassword, regexPassword) {
			return inputEmail.match(regexEmail) && inputPassword.match(regexPassword);
		}

		$(".ancor-login").click(function () {
			event.preventDefault();
			$("#input-email").removeClass("error");
			let inputEmail = $("#input-email").val();
			let inputPassword = $("#input-password").val();

			if (validationField(inputEmail, regexEmail, inputPassword, regexPassword)) {
				debugger;
				$("#input-email").removeClass("error");
				$("#input-password").removeClass("error");
				$(".validation-container").hide();
				validaLogin(inputEmail, inputPassword);
			} else {
				$(".validation-container").show();
				$("#input-email").addClass("error");
				$("#input-password").addClass("error");
			}



		})
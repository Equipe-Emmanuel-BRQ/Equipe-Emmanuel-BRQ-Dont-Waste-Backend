	const regexEmail = RegExp("^[a-zA-Z0-9$%!._-]+\@[a-z]+\.[a-z]{2,4}$", "g");
	const regexPassword = RegExp("^[0-9]{6,8}$", "g");

	$(".validation-container").hide();


	function validaLogin(email, password) {
		debugger;
		$.ajax({
			url: "validacaoLogin",
			type: "GET",
			data: {
				email: email,
				password: password
			},
			success: function(data) {
				if(data == true) {
					$(".container-login").hide();
					alert("Redirecionando pagina...")
				}else {
					$(".container-login").show();
				}
				

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
				$("#input-email").removeClass("error");
				$("#input-password").removeClass("error");
				$(".container-fields").hide();
				validaLogin(inputEmail, inputPassword);
			} else {
				$(".container-fields").show();
				$("#input-email").addClass("error");
				$("#input-password").addClass("error");
			}



		})
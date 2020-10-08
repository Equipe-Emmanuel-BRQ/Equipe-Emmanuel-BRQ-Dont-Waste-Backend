package com.br.dontWaste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping("/esqueciSenha")
	public String esqueciSenha() {
		return "esqueciSenha";
	}
	
}

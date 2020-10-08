package com.br.dontWaste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/cadastroLogin")
	public String cadastroLogin() {
		return "cadastroLogin";
	}

	@RequestMapping("/cadastroUsuario")
	public String cadastroUsuario() {
		return "cadastroUsuario";
	}
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}

	
}

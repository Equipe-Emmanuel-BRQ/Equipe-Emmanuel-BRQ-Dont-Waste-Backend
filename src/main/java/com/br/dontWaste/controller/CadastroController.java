package com.br.dontWaste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CadastroController {

	@RequestMapping("/cadastroGeladeiraFrutas")
	public String cadastroGeladeiraFrutas() {
		return "cadastroGeladeiraFrutas";
	}	
}

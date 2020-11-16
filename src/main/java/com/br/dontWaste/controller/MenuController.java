package com.br.dontWaste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MenuController {

	@RequestMapping("/categorias")
	public String categorias() {
		return "categorias";
	}
	
	@RequestMapping("/itensGeladeira")
	public String itensGeladeira() {
		return "itensGeladeira";
	}	
}

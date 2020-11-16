package com.br.dontWaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.br.dontWaste.model.AlimentosModel;
import com.br.dontWaste.service.SistemaApi;

@Controller
public class CadastroController {

	@Autowired
	private SistemaApi sistemaApi;
	
	@RequestMapping("/cadastroGeladeiraFrutas")
	public String cadastroGeladeiraFrutas() {
		return "cadastroGeladeiraFrutas";
	}
	
	@RequestMapping("/buscarAlimentos")
	@ResponseBody
	public List<AlimentosModel> buscarAlimentos() throws Exception{
		System.out.println("back");
		List<AlimentosModel> alimentosModel = sistemaApi.buscarAlimentos();
		return alimentosModel;
	}
}

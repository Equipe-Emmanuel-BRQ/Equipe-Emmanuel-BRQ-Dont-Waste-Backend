package com.br.dontWaste.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.jasper.tagplugins.jstl.core.ForEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.br.dontWaste.model.LoginModel;
import com.br.dontWaste.service.SistemaApi;

@Controller
public class LoginController {

	@Autowired
	private SistemaApi sistema;
	
	@RequestMapping("/esqueciSenha")
	public String esqueciSenha() {
		return "esqueciSenha";
	}
	
	@RequestMapping("/validacaoLogin")
	public ModelAndView validacaoLogin(String email, String password) throws Exception {
		
		List<LoginModel> login = new ArrayList<LoginModel>();
		
		String loginIncorreto = "";
		
		login = sistema.buscarLogin();
		for (LoginModel loginModel : login) {
			if(email.equals(loginModel.getEmail())&&password.equals(loginModel.getSenha())) {
				ModelAndView modelAndView = new ModelAndView("index");
				return modelAndView;
			}
		}
		
		ModelAndView modelAndView = new ModelAndView("login");
		modelAndView.addObject("senhaIncorreta","Email ou senha incorreto");
		return modelAndView;
	}
}

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
	
	@RequestMapping("validacaoLogin")
	@ResponseBody
	public boolean validacaoLogin(String email, String password) throws Exception {
		
		List<LoginModel> login = sistema.buscarLogin();
		System.out.println("false");

		for (LoginModel loginModel : login) {
			if(validacaoDeLogin(loginModel,email, password)) {
				return true;
			}
		}
		return false;
	}
	
	private boolean validacaoDeLogin(LoginModel login, String email, String password) {
		return  email.equals(login.getEmail()) && password.equals(login.getSenha());
	}
}

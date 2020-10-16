package com.br.dontWaste.service;

import java.util.Arrays;
import java.util.List;

import org.apache.http.client.fluent.Request;
import org.springframework.stereotype.Service;

import com.br.dontWaste.model.LoginModel;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class SistemaApi {
	
	ObjectMapper mapper = new ObjectMapper();
	
	public List<LoginModel> buscarLogin() throws Exception{
		String returnCall = Request.Get("http://localhost:3002/login")
				.execute()
				.returnContent()
				.asString();
		List<LoginModel> listaLogin = Arrays.asList(mapper.readValue(returnCall, LoginModel[].class)); 
		
		return listaLogin;
	}

}

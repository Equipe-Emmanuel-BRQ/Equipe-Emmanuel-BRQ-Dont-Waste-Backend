package com.br.dontWaste.service;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.springframework.stereotype.Service;

import com.br.dontWaste.model.AlimentosModel;
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
	
	public List<AlimentosModel> buscarAlimentos() throws Exception{
		String returnCall = Request.Get("http://localhost:3002/alimentos")
				.execute()
				.returnContent()
				.asString();
		List<AlimentosModel> listaAlimentos = Arrays.asList(mapper.readValue(returnCall, AlimentosModel[].class)); 
		
		return listaAlimentos;
	}
	
	public Response cadastraarAlimentos(AlimentosModel alimentos) throws Exception{
		Response returnCall = Request.Post("http://localhost:3002/alimentos/" + alimentos)
				.execute();
		return returnCall;
	}
	
	public AlimentosModel cadastrarAlimentos(AlimentosModel alimentos) throws Exception {
		Client client = ClientBuilder.newClient();
		WebTarget myResource = client.target("http://localhost:3002/alimentos/");
		AlimentosModel alimentosModel = myResource.request(MediaType.APPLICATION_JSON)
				.post(Entity.json(alimentos), AlimentosModel.class);
		
		return alimentosModel;
	}
	
}

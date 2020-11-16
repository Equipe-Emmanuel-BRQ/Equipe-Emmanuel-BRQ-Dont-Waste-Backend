package com.br.dontWaste.model;

public class AlimentosModel {

	private int id;
	private int idUsuario;
	private String nome;
	private int quantidade;
	private String datacompra;
	private String tipoalimento;
	private String tipoitem;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public String getDatacompra() {
		return datacompra;
	}
	public void setDatacompra(String datacompra) {
		this.datacompra = datacompra;
	}
	public String getTipoalimento() {
		return tipoalimento;
	}
	public void setTipoalimento(String tipoalimento) {
		this.tipoalimento = tipoalimento;
	}
	public String getTipoitem() {
		return tipoitem;
	}
	public void setTipoitem(String tipoitem) {
		this.tipoitem = tipoitem;
	}
	@Override
	public String toString() {
		return "AlimentosModel [id=" + id + ", idUsuario=" + idUsuario + ", nome=" + nome + ", quantidade=" + quantidade
				+ ", datacompra=" + datacompra + ", tipoalimento=" + tipoalimento + ", tipoitem=" + tipoitem + "]";
	}
	
	
	
}

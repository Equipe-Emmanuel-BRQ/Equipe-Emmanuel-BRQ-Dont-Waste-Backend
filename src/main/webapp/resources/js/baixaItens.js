let valRange;
let htmlTemplateTabela = "";

function montarLinhasTabela(produto) {
	return `<tr class="tabela-produtos-corpo-linha">
		        <td class="tabela-produtos-corpo-col tbl-item">${produto.nome}</td>
		        <td class="tabela-produtos-corpo-col tbl-data">${produto.datacompra}</td>
		        <td class="tabela-produtos-corpo-col tbl-qantidade">
					<input type="hidden" id="produto-id" value="${produto.id}" />
		            <div class='div-input-interno-tbl-quantidade'>
		                <button class='menos' onclick="subtrair(this)">-</button>
		                <input readonly value='${produto.quantidade}' class='input-number'  type='text'>
		                <button class='mais'  onclick="somar(this)">+</button>
		            </div>
		        </td>
		        <td class="tabela-produtos-corpo-col tbl-desperdicio" colspan="3">
		            <div class="slidecontainer">
		                <input class="input-desperdicio" id="${produto.id}" type="range" min="1" max="3">
		            </div>
		        </td>
    	    </tr>` ;
}


function somar(element) {
	let valor = parseInt($(element).parent().find('input').val());
	let quantidade = $(element).parent().find('input').val(valor + 1);
	let idProduto = $(element).parent().parent().find('#produto-id').val();
	$(element).parent().find('input').val(valor + 1);

	atualizaQuantidade(idProduto, quantidade.val());
}

function subtrair(element) {
	let quantidade;
	let valor = parseInt($(element).parent().find('input').val());
	let idProduto = $(element).parent().parent().find('#produto-id').val();

	if (valor > 0) {
		$(element).parent().find('input').val(valor - 1);
		quantidade = $(element).parent().find('input').val(valor - 1);
		atualizaQuantidade(idProduto, quantidade.val());
	}
}

function atualizaQuantidade(idProduto, quantidade) {

	$.ajax({
		url: "atualizarQuantidade",
		type: "PUT",
		data: {
			idProduto: idProduto,
			quantidade: quantidade
		},
		success: function() {
		}
	})
}


function carregarDadosNaTabela() {
	$.ajax({
		url: "buscarAlimentos",
		type: "GET",
		data: {},
		success: function(data) {
			let geradorId = 0;

			$.each(data, function(index, produto) {
				htmlTemplateTabela += montarLinhasTabela(produto);
			});

			$(".tabela-produtos-corpo").append(htmlTemplateTabela);
		},
	});
}

$(function() {

	carregarDadosNaTabela();

	$(".tabela-produtos-corpo").change(function(input) {
		let targetInput = input.target;
		valRange = $(targetInput).val();

		if (valRange == 1) {
			$(targetInput).css("background-color", "red");
		} else if (valRange == 2) {
			$(targetInput).css("background-color", "#5FBAA7");
		} else {
			$(targetInput).css("background-color", "green");
		}

	})
})
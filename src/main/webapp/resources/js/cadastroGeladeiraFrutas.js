$(document).ready(function() {
	$.ajax({
		url: "buscarAlimentos",
		type: "GET",
		data: {},
		success: function(data) {
			let geradorId = 0;
			for (const item of data) {
				if ((item.tipoalimento == "fvl") && (item.tipoitem == "geladeira")) {
					let template = `
                    <div class='section-home-container-cadastro-interno'>
                        <label for='input-number'>${item.nome}</label>
						<input type="hidden" id="produto-id" value="${item.id}" />
                        <div class='div-input-interno'>
                            <button class='menos' id='less${geradorId}' onclick='subtrair(this)'>-</button>
                            <input  readonly value='${item.quantidade}' class='input-number' type='text'>
                            <button class='mais' id='add${geradorId}' onclick='somar(this)'>+</button>
                        </div>
                    </div>
                    `
					$(".section-home-container-cadastro-content").append(template);
				}
			}
		}
	}
	)
});

$(".span-novo-item").hide();

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

$(".button-novo-item").click(function() {
	$(".span-novo-item").show();
})

$(".button-cadastra-item").click(function() {
	alimentoToJson()
	$("#form-cadastro-alimento").submit();
})

$(".button-cancela-cadastro").click(function() {
	$(".span-novo-item").hide();
})

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

function alimentoToJson() {
	let alimento = {}
	alimento["id"] = 0;
	alimento["idUsuario"] = 1;
	alimento["nome"] = $(".input-novo-item").val();
	alimento["quantidade"] = 0;
	alimento["datacompra"] = "17112020";
	alimento["tipoalimento"] = "fvl";
	alimento["tipoitem"] = "geladeira";

	$("#enviarAlimento").val(JSON.stringify(alimento))
}
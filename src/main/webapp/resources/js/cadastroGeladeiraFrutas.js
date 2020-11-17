$(document).ready(function(){
    $.ajax({
        url: "buscarAlimentos",
        type: "GET",
        data: {},
        success: function (data) {
            let geradorId = 0;
            for (const item of data) {
                if (((item.tipoalimento == "fruta") || (item.tipoalimento == "legume") || (item.tipoalimento == "verdura")) && (item.tipoitem == "geladeira")) {
                    let template = `
                    <div class='section-home-container-cadastro-interno'>
                        <label for='input-number'>${item.nome}</label>
                        <div class='div-input-interno'>
                            <button class='menos' id='less${geradorId}' onclick='subtrair(this)'>-</button>
                            <input  readonly value='0' class='input-number' type='text'>
                            <button class='mais' id='add${geradorId}' onclick='somar(this)'>+</button>
                        </div>
                    </div>
                    `
                    $(".section-home-container-cadastro-content").append(template);
                }
                geradorId++;
            }
        }
    }
    )
});

$(".span-novo-item").hide();

function somar(element){
    let valor = parseInt($(element).parent().find('input').val());
    $(element).parent().find('input') .val(valor+1);
}

function subtrair(element){
    let valor = parseInt($(element).parent().find('input').val());
    if(valor > 0){
        $(element).parent().find('input') .val(valor-1);
    }
}

$(".button-novo-item").click(function () {
    $(".span-novo-item").show();
})

$(".button-cadastra-item").click(function() {
    alimentoToJson()
    $("#form-cadastro-alimento").submit();   
    
})

function alimentoToJson(){
    let alimento = {}
    alimento["id"] = 0;
    alimento["idUsuario"] = 1;
    alimento["nome"] = $(".input-novo-item").val();
    alimento["quantidade"] = 0;
    alimento["datacompra"] = "17112020";
    alimento["tipoalimento"] = "fvl";
    alimento["tipoitem"] = "Geladeira";

    $("#enviarAlimento").val(JSON.stringify(alimento))
    console.log($("#enviarAlimento").val());
}
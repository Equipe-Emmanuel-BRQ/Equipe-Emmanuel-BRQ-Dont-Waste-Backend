

$(document).ready(function () {
    $.ajax({
        url: "buscarAlimentos",
        type: "GET",
        data: {},
        success: function (data) {
            for (const item of data) {
                if (item.tipoitem == "geladeira") {
                    let template = `
                    <tr class="tabela-produtos-corpo-linha">
                                <td class="tabela-produtos-corpo-col tbl-item">${item.nome}</td>
                                <td class="tabela-produtos-corpo-col tbl-data">${item.datacompra}</td>
                                <td class="tabela-produtos-corpo-col tbl-qantidade">
                                    <div class='div-input-interno-tbl-quantidade'>
                                        <button class='menos' id="less${item.id}" onclick='subtrair(this)'>-</button>
                                        <input  readonly value='0' class='input-number' type='text'>
                                        <button class='mais' id="add${item.id}" onclick='somar(this)'>+</button>
                                    </div>
                                </td>
                                <td class="tabela-produtos-corpo-col tbl-desperdicio" colspan="3">
                                    <div class="slidecontainer">
                                        <input class="input-desperdicio"  type="range" min="1" max="3">
                                      </div>
                            </td>
                        <td class="tabela-produtos-corpo-col tbl-consumo"></td>
                    </tr>
                    `
                    $(".tabela-produtos-corpo").append(template);
                }
            }
        }
    }
    )
});

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

let valRange;

$('.input-desperdicio').change(function () {
    valRange = $(this).val()
    console.log(valRange);
    if (valRange == 1) {
        $(this).css('background-color', 'red')
    } else if (valRange == 2) {
        $(this).css('background-color', '#5FBAA7')
    } else {
        $(this).css('background-color', 'green')
    }
})
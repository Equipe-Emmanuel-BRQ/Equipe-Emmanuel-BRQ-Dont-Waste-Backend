var numero = document.getElementById('input-number');
var valor = numero.value

$(".span-novo-item").hide();

    $("#menos").click(function() {
        if((valor--)>0){
            $(".input-number").val(valor).html();
        }
        else{
            valor++;
        }
    });
    $("#mais").click(function() {        
        valor++;
        $(".input-number").val(valor).html();
    });


    $(".button-novo-item").click(function(){
        $(".span-novo-item").show();
    })

$(".span-novo-item").hide();

class CadastroGeladeiraFrutas{
    constructor(){
        
        $.ajax({
			url: "buscarAlimentos",
			type: "GET",
			data: {},
			success: function(data) {
                let itens = $(".section-home-container-cadastro-interno").val();
                
                for (const item of data) {
                    if(((item.tipoalimento=="fruta")||(item.tipoalimento=="legume")||(item.tipoalimento=="verdura"))&&(item.tipoitem=="geladeira")){
                        let template = `
                        <div class='section-home-container-cadastro-interno'>
                            <label for='input-number'>${item.nome}</label>
                            <div class='div-input-interno'>
                                <button class='menos'>-</button>
                                <input  readonly class='input-number' type='text'>
                                <button class='mais'>+</button>
                            </div>
                        </div>
                        `
                        
                        $(".section-home-container-cadastro-content").append(template);
                    }
                }
			}
		})
    }
}

new CadastroGeladeiraFrutas();



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
        alert("Button")
        $(".span-novo-item").show();
    })
var inputName = $("#input-name").val();
var inputDate = $("#input-date").val();
var selectPeopleNumber = $("#select-people-number").val();
var selectSale = $("#select-sale").val();

let date = new Date();
let oneYearBefore = (date.getFullYear() - 1) + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
document.querySelector("#input-date").min = oneYearBefore;

$(".validation-container").hide();


function validationRequeredInput(inputName, inputDate){
    return (inputName != "") && (inputDate != "");
}

function validationRequeredSelect(selectPeopleNumber, selectSale){
    return (selectPeopleNumber != null) && (selectSale != null);
}


$(".btn-salvar").click(function () {
    
    let inputName = $("#input-name").val();
    let inputDate = $("#input-date").val();
    let selectPeopleNumber = $("#select-people-number").val();
    var selectSale = $("#select-sale").val();

    if(validationRequeredInput(inputName, inputDate) && validationRequeredSelect(selectPeopleNumber, selectSale)){

        $(".validation-container").hide();
        $("#input-name").removeClass("error");
        $("#select-people-number").removeClass("error");
        $("#select-sale").removeClass("error");
        $("#input-date").removeClass("error");

    }else{

        $(".validation-container").show();
        $("#input-name").addClass("error");
        $("#select-people-number").addClass("error");
        $("#select-sale").addClass("error");
        $("#input-date").addClass("error");
    }
    
})







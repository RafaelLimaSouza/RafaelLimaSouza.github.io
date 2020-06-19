
//Ativa o modal de confirmação de Agendamento
$(document).ready(function(){
    $("#function-save").click(function(){
        $("#modalAgenda").modal('toggle');
    });
});

$(document).ready(function(){
    $("#saveModal").click(function(){
        $("#function-save").css({"background-color":"red", "color":"white", "border":"1px solid #c0c0c0"});
        $("#modalAgenda").modal('toggle');
    });
});

//Ativa o modal de esqueci minha senha
$(document).ready(function(){
    $("#esqueciSenha").click(function(){
        $("#modal1").modal('toggle');
    });
});

$(document).ready(function(){
    $("#enviarSenha").click(function(){
        $("#modal1").modal('toggle');
        $("#modal2").modal('toggle');
    });
});

//Ativa o modal de cadastro de usuário
$(document).ready(function(){
    $("#cadastrar").click(function(e){
        $("#modal3").modal('toggle');
        e.preventDefault();
    });
});

//Modal de Pagamento

$(document).ready(function(){
    $(".payment").click(function(e){
        e.preventDefault();
        $("#modalPayment").modal('toggle');      
    });
});

$(document).ready(function(e){
    $("#btn-money").click(function(){
        $("#modalPayment").modal('toggle');  
        $("#modalPaymentConfirmed").modal('toggle'); 
    });
    $("#btn-card").click(function(){
        $("#modalPayment").modal('toggle');  
        $("#modalPaymentConfirmed").modal('toggle'); 
    });
});

//Modal de Cancelamento de Consultas

$(document).ready(function(){
    $(".cancel").click(function(e){
        e.preventDefault();
        $("#modalCancel").modal('toggle');     
    });
});

$(document).ready(function(e){
    $("#cancelConfirmed").click(function(){
        $("#modalCancel").modal('toggle');  
        $("#modalCancelConfirmed").modal('toggle'); 
    });
});

//Modal de ALteração de Valor

$(document).ready(function(){
    $(".changePrice").click(function(e){
        e.preventDefault();
        $("#modalValor").modal('toggle');     
    });
});

$(document).ready(function(){
    $("#savePrice").click(function(){
        $("#modalValor").modal('toggle');  
    });
});


//Adiciona os tooltips nos botões

$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
});


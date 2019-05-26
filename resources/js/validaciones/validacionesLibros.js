$(function(){ // jquery
    //document.addEventListener("DOMContentLoaded", function(){ Javascript Puro / Vainilla    
        asociarEventos();
    });
    
    function asociarEventos(){
        $("#name").change(function(event){
            validacionNombre();
        })

        $("#email").change(function(event){
            validacionEmail();
        })
    
        $("#password").change(function(event){
            validacionPassword();
        })

        $("#password-confirm").change(function(event){
            validacionConfirmarPassword();
        })

        $("#customCheck1").change(function(event){
            validadacionTerminos();
        })
    
        $("#formulario").submit(function(event){
            event.preventDefault();
            validarTodoElFormulario();
        })

        $("button[data-action='mostrar_modal']").click(
            function(event){
                event.preventDefault()
                $("#button").attr("data-element-borrar", $(event.target).attr('data-element'));
                $("#confirmarBorrar").modal("show")
            }
        )

      /**  $("#button").click(function(event){
                event.preventDefault()
                alert($("#button").attr('data-element-borrar'))
        }) */  

    }
    
    function validacionNombre(){
        let esCorrecto = false;
        let valor= document.getElementById("name").value;
        let divErrores = document.getElementById("nameErrores");
        $(divErrores).empty();
        $("#name").removeClass("is-valid is-invalid");
    
        if(valor===null || valor.length===0 || valor === "" ){
            divErrores.append("El nombre no puede estar vacio")
            $("#name").addClass("is-invalid");
        }else{
            $("#name").addClass("is-valid");
            esCorrecto = true;
        }
        return esCorrecto;
    }

    function validacionEmail(){
        let esCorrecto = false;
        let valor = document.getElementById("email").value;
        let divErrores = document.getElementById("emailErrores");
        $(divErrores).empty();
        let expr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        $("#email").removeClass("is-valid is-invalid");

        if(!expr.test(valor)){
            divErrores.append("Email incorrecto");
            $("#email").addClass("is-invalid");
        }else{
            $("#email").addClass("is-valid");
            esCorrecto = true;
        }
        return esCorrecto;
    }
    
    function validacionPassword(){
        let esCorrecto = false;
        let cifrado = document.getElementById("password").value;
        let divErrores = document.getElementById("passErrores");
        $(divErrores).empty();
        let expr = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
        
        $("#password").removeClass("is-valid is-invalid");
        
        if(!expr.test(cifrado)){
            divErrores.append(" Introduzca una contraseña de entre 8 y 16 caracteres, con mayusculas, minusculas y numeros")
            $("#password").addClass("is-invalid");
        }else{
            $("#password").addClass("is-valid");
            esCorrecto = true
        }
        return esCorrecto;
    
    }

    function validacionConfirmarPassword(){
        let esCorrecto = false;
        let cifrado = document.getElementById("password").value;
        let cifrado2 = document.getElementById("password-confirm").value;
        let divErrores = document.getElementById("passConfErrores");
        $(divErrores).empty();
        $("#password-confirm").removeClass("is-valid is-invalid");
        
        if(cifrado !== cifrado2){
            divErrores.append("Las contraseñas no coinciden")
            $("#password-confirm").addClass("is-invalid");
        }else{
            if(cifrado !== "" || cifrado2 !== ""){
                $("#password-confirm").addClass("is-valid");
                esCorrecto = true
            }
        }
        return esCorrecto;
    
    }
    
    function validadacionTerminos(){
        let esCorrecto = false;
        let aceptar = document.getElementById("customCheck1");
        let divErrores=document.getElementById("terminosErrores");
        $(divErrores).empty();
    
        $("#customCheck1").removeClass("is-valid is-invalid");
    
        if(!aceptar.checked){
            divErrores.append("Seleccione la casilla para continuar");
            $("#customCheck1").addClass("is-invalid");
        }else{
            $("#customCheck1").addClass("is-valid");
            esCorrecto = true;
        }
        return esCorrecto;
    }
    
    function validarTodoElFormulario(){
        let esNombreCorrecto = validacionNombre();
        let esEmailCorrecto = validacionEmail();
        let esPasswordCorrecto = validacionPassword();
        let esConfirmacionCorrecto = validacionConfirmarPassword();
        let esTerminosCorrecto = validadacionTerminos();
    
        if(esNombreCorrecto && esEmailCorrecto && esPasswordCorrecto && esConfirmacionCorrecto && esTerminosCorrecto){
            let formularioRegistro = document.getElementById("formulario");
            formularioRegistro.submit();
        }else{
            $("#alerta").removeClass("invisible");
            $("#alerta").addClass("visible");
        }
    }

    
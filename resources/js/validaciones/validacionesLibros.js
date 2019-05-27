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

        $('#formulario').submit(function (event) {
            event.preventDefault();
            validarFormulario();
        });
    
        $("#title").change(function(event){
            validacionTitulo();
    
        })
    
    
        $("#publisher").change(function(event){
          validacionPublisher();
        })
    
        $("#customCheck").change(function(event){
            validarCondiciones();
        })
    
        $('#formularioEditar').submit(function (event) {
            event.preventDefault();
            editarFormulario();
        });
    
    
        $("button[data-accion='mostrar_modal']").click(
            function(event){
                event.preventDefault();
                $("#confirmarEliminar").attr("data-elemento-borrar",$(event.target).attr('data-elemento'));
                $("#modalEliminar").modal('show');
        });
    
        $("#confirmarEliminar").click(function(event){
            event.preventDefault();
            borrarFormulario();
        });
    
        $("a[data-accion='show']").click(function (event) {
            event.preventDefault();
            let idBook = $(event.target).attr('data-book');
            mostrarFormulario(idBook);
        });
    
        $("#searchInput").keypress(function (event){
            event.preventDefault();
            setTimeout(() => {
                busquedaAjax();
            }, 300);
        });
    
        $("#selectBusqueda").change(function (event){
            event.preventDefault();
            busquedaAjax();
        });
    
        $("#checkBox1").change(function(event){
            event.preventDefault();
            busquedaAjax();
        });
    
        $("#checkBox2").change(function(event){
            event.preventDefault();
            busquedaAjax();
        });
    

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
    
    function validacionTitulo(){
        $("#title").removeClass("is-valid is-invalid");
        $("#erroresTitle").empty();
        let correcto = false;
        let expresion = /[a-zA-Z]+$/g;
        let valor = $("#title").val().trim();
        if(expresion.test(valor)){
            marcarInputCorrecto($("#title"));
            correcto = true;
        }else{
            marcarInputErroneo($("#title"));
            $("#erroresTitle").append("<span>El título solo permite letras minúsculas y mayúsculas<span>");
        }
    
        return correcto;
    }
    
    
    function validacionPublisher(){
      $("#publisher").removeClass("is-valid is-invalid");
      let correcto = false;
      let opcion = document.getElementById("publisher").value;
      let divErrores = document.getElementById("erroresPublisher");
      $(divErrores).empty();
    
    
      if(opcion===""){
          divErrores.append("Selecciona una opción");
          $("#publisher").addClass("is-invalid");
      }else{
          $("#publisher").addClass("is-valid");
          correcto = true;
      }
      return correcto;
    
    }
    
    function validarCondiciones(){
        $("#customCheck").removeClass("is-valid is-invalid");
        let correcto = false;
        let aceptar = document.getElementById("customCheck");
        let divErrores = document.getElementById("erroresCondiciones");
        $(divErrores).empty();
    
    
        if (!aceptar.checked){
            divErrores.append("Seleccione la casilla para continuar");
            $("#customCheck").addClass("is-invalid");
        }else{
            $("#customCheck").addClass("is-valid");
            correcto = true;
        }
    
        return correcto;
    }
    
    /** Validación completa del formulario */
    function validarFormulario(){
        $('#modalCarga').modal('show');
    
        let esTituloCorrecto = validacionTitulo();
        let esEmailCorrecto = validacionEmail();
        let esPublisherCorrecto = validacionPublisher();
        let esCondicionCorrecto = validarCondiciones();
    
        if (esTituloCorrecto && esEmailCorrecto && esPublisherCorrecto && esCondicionCorrecto){
            let datosFormulario = $("#formulario").serialize();
            axios.post("/books/createAjax",datosFormulario)
            .then(function(response){
                $("#modalCorrecto .modal-body p").html(response.data);
                $("#modalCorrecto").modal("show");
            }).catch(function(){
                $('#modalError').modal('show');
            }).then(function(){
               $('#modal').modal('hide');
               $('#modalCarga').modal('hide');
            })
            
    
        }else{
            $('#modalCarga').modal('hide');
            $('#modal').modal('show');
        }
            
    }
    
    /** Editar un elemento de la lista por Axios */
    function editarFormulario(){
        let editForm = $("#formularioEditar").serialize();
        let idBook = $("#formularioEditar").attr("data-book");
    
        $('#modalCarga').modal('show');
        axios.put(`/books/editAjax/${idBook}`, editForm)
            .then(function (response) {
                $("#modalCorrecto .modal-body p").html(response.data);
                $("#modalCorrecto").modal("show");
            }).catch(function(){
                $('#modalError').modal('show');
            }).then(function(){
                $('#modalCarga').modal('hide');
            })
    
    }
    /** Eliminar un elemento de la lista por Axios */
    function borrarFormulario(){
        let idBook =  $("#confirmarEliminar").attr('data-elemento-borrar');
        $('#modalEliminar').modal('hide');
        $('#modalCarga').modal('show');
        axios.delete(`/books/deleteAjax/${idBook}`)
            .then(function (response) {
                $("#modalCorrecto .modal-body p").html(response.data);
                $(`#libro${idBook}`).remove();
            }).catch(function () {
                $('#modalError').modal('show');
            }).then(function () {
                $('#modalCarga').modal("hide");
            });
    }
    
    /** Mostrar */
    function mostrarFormulario(idBook){
    
    showModalCarga();
        axios.get(`/books/showAjax/${idBook}`)
            .then(function (response) {
                hideModalCarga();
                $('#modalShow').modal('show');
                $('#info').html(response.data);
                
            }).catch(function () {
                $('#modalError').modal('show');
            }).then(function () {
                $('#modalCarga').modal("hide");
            });
    }
    
    /**Búsqueda Ajax */
    function busquedaAjax(){
        let searchForm = $("#searchForm").serialize();
        spinnerShow();
        $('#searchInput').val();
        axios.post('/books/searchAjax', searchForm)
            .then(function (response) {
                let divMostrarBusqueda = $("#mostrarBusqueda");
    
                divMostrarBusqueda.empty();
                divMostrarBusqueda.html(response.data);
                console.log(response);
                spinnerShow();
                })
                .catch(function (error) {
                showErrorModal();
                console.log(error);
                })
                .then(function () {
                spinnerHide()
            });
    }
    
    
    $(function (){
        
        $('#myTabPill a').on('show.bs.tab', function (e){
            let vista = $(e.target).attr("id");
            axios.get(`/miPerfil/${vista}`)
            .then(function (response){
                $("#tabContent").html(response.data);
            })
            .catch(function () {
                $('#modalError').modal('show');
            });
        });
    });
    
    /** MODALES */
    function showModalCarga(){
        $('#modalCarga').modal('show');
    }
    
    function hideModalCarga(){
        $('#modalCarga').modal('hide');
    }
    
    function showErrorModal(){
        $('#modalError').modal('show');
    }
    
    function hideErrorModal(){
        $('#modalError').modal('hide');
    }
    
    /** SPINNER */
    
    function spinnerHide(){
        $("#spinner").hide();
    };
    
    function spinnerShow() {
        $("#spinner").show();
    };
    
    /** INPUTS VALIDACIÓN */
    function marcarInputCorrecto(input){
        input.addClass("is-valid");
    
    }
    
    function marcarInputErroneo(input){
        input.addClass("is-invalid");
    }
    

    
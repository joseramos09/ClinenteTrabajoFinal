/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/validaciones/validacionesLibros.js":
/*!*********************************************************!*\
  !*** ./resources/js/validaciones/validacionesLibros.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  // jquery
  //document.addEventListener("DOMContentLoaded", function(){ Javascript Puro / Vainilla    
  asociarEventos();
});

function asociarEventos() {
  $("#name").change(function (event) {
    validacionNombre();
  });
  $("#email").change(function (event) {
    validacionEmail();
  });
  $("#password").change(function (event) {
    validacionPassword();
  });
  $("#password-confirm").change(function (event) {
    validacionConfirmarPassword();
  });
  $("#customCheck1").change(function (event) {
    validadacionTerminos();
  });
  $("#formulario").submit(function (event) {
    event.preventDefault();
    validarTodoElFormulario();
  });
  $("button[data-action='mostrar_modal']").click(function (event) {
    event.preventDefault();
    $("#button").attr("data-element-borrar", $(event.target).attr('data-element'));
    $("#confirmarBorrar").modal("show");
  });
  /**  $("#button").click(function(event){
            event.preventDefault()
            alert($("#button").attr('data-element-borrar'))
    }) */

  $('#formulario').submit(function (event) {
    event.preventDefault();
    validarFormulario();
  });
  $("#title").change(function (event) {
    validacionTitulo();
  });
  $("#publisher").change(function (event) {
    validacionPublisher();
  });
  $("#customCheck").change(function (event) {
    validarCondiciones();
  });
  $('#formularioEditar').submit(function (event) {
    event.preventDefault();
    editarFormulario();
  });
  $("button[data-accion='mostrar_modal']").click(function (event) {
    event.preventDefault();
    $("#confirmarEliminar").attr("data-elemento-borrar", $(event.target).attr('data-elemento'));
    $("#modalEliminar").modal('show');
  });
  $("#confirmarEliminar").click(function (event) {
    event.preventDefault();
    borrarFormulario();
  });
  $("a[data-accion='show']").click(function (event) {
    event.preventDefault();
    var idBook = $(event.target).attr('data-book');
    mostrarFormulario(idBook);
  });
  $("#searchInput").keypress(function (event) {
    event.preventDefault();
    setTimeout(function () {
      busquedaAjax();
    }, 300);
  });
  $("#selectBusqueda").change(function (event) {
    event.preventDefault();
    busquedaAjax();
  });
  $("#checkBox1").change(function (event) {
    event.preventDefault();
    busquedaAjax();
  });
  $("#checkBox2").change(function (event) {
    event.preventDefault();
    busquedaAjax();
  });
}

function validacionNombre() {
  var esCorrecto = false;
  var valor = document.getElementById("name").value;
  var divErrores = document.getElementById("nameErrores");
  $(divErrores).empty();
  $("#name").removeClass("is-valid is-invalid");

  if (valor === null || valor.length === 0 || valor === "") {
    divErrores.append("El nombre no puede estar vacio");
    $("#name").addClass("is-invalid");
  } else {
    $("#name").addClass("is-valid");
    esCorrecto = true;
  }

  return esCorrecto;
}

function validacionEmail() {
  var esCorrecto = false;
  var valor = document.getElementById("email").value;
  var divErrores = document.getElementById("emailErrores");
  $(divErrores).empty();
  var expr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  $("#email").removeClass("is-valid is-invalid");

  if (!expr.test(valor)) {
    divErrores.append("Email incorrecto");
    $("#email").addClass("is-invalid");
  } else {
    $("#email").addClass("is-valid");
    esCorrecto = true;
  }

  return esCorrecto;
}

function validacionPassword() {
  var esCorrecto = false;
  var cifrado = document.getElementById("password").value;
  var divErrores = document.getElementById("passErrores");
  $(divErrores).empty();
  var expr = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  $("#password").removeClass("is-valid is-invalid");

  if (!expr.test(cifrado)) {
    divErrores.append(" Introduzca una contraseña de entre 8 y 16 caracteres, con mayusculas, minusculas y numeros");
    $("#password").addClass("is-invalid");
  } else {
    $("#password").addClass("is-valid");
    esCorrecto = true;
  }

  return esCorrecto;
}

function validacionConfirmarPassword() {
  var esCorrecto = false;
  var cifrado = document.getElementById("password").value;
  var cifrado2 = document.getElementById("password-confirm").value;
  var divErrores = document.getElementById("passConfErrores");
  $(divErrores).empty();
  $("#password-confirm").removeClass("is-valid is-invalid");

  if (cifrado !== cifrado2) {
    divErrores.append("Las contraseñas no coinciden");
    $("#password-confirm").addClass("is-invalid");
  } else {
    if (cifrado !== "" || cifrado2 !== "") {
      $("#password-confirm").addClass("is-valid");
      esCorrecto = true;
    }
  }

  return esCorrecto;
}

function validadacionTerminos() {
  var esCorrecto = false;
  var aceptar = document.getElementById("customCheck1");
  var divErrores = document.getElementById("terminosErrores");
  $(divErrores).empty();
  $("#customCheck1").removeClass("is-valid is-invalid");

  if (!aceptar.checked) {
    divErrores.append("Seleccione la casilla para continuar");
    $("#customCheck1").addClass("is-invalid");
  } else {
    $("#customCheck1").addClass("is-valid");
    esCorrecto = true;
  }

  return esCorrecto;
}

function validarTodoElFormulario() {
  var esNombreCorrecto = validacionNombre();
  var esEmailCorrecto = validacionEmail();
  var esPasswordCorrecto = validacionPassword();
  var esConfirmacionCorrecto = validacionConfirmarPassword();
  var esTerminosCorrecto = validadacionTerminos();

  if (esNombreCorrecto && esEmailCorrecto && esPasswordCorrecto && esConfirmacionCorrecto && esTerminosCorrecto) {
    var formularioRegistro = document.getElementById("formulario");
    formularioRegistro.submit();
  } else {
    $("#alerta").removeClass("invisible");
    $("#alerta").addClass("visible");
  }
}

function validacionTitulo() {
  $("#title").removeClass("is-valid is-invalid");
  $("#erroresTitle").empty();
  var correcto = false;
  var expresion = /[a-zA-Z]+$/g;
  var valor = $("#title").val().trim();

  if (expresion.test(valor)) {
    marcarInputCorrecto($("#title"));
    correcto = true;
  } else {
    marcarInputErroneo($("#title"));
    $("#erroresTitle").append("<span>El título solo permite letras minúsculas y mayúsculas<span>");
  }

  return correcto;
}

function validacionPublisher() {
  $("#publisher").removeClass("is-valid is-invalid");
  var correcto = false;
  var opcion = document.getElementById("publisher").value;
  var divErrores = document.getElementById("erroresPublisher");
  $(divErrores).empty();

  if (opcion === "") {
    divErrores.append("Selecciona una opción");
    $("#publisher").addClass("is-invalid");
  } else {
    $("#publisher").addClass("is-valid");
    correcto = true;
  }

  return correcto;
}

function validarCondiciones() {
  $("#customCheck").removeClass("is-valid is-invalid");
  var correcto = false;
  var aceptar = document.getElementById("customCheck");
  var divErrores = document.getElementById("erroresCondiciones");
  $(divErrores).empty();

  if (!aceptar.checked) {
    divErrores.append("Seleccione la casilla para continuar");
    $("#customCheck").addClass("is-invalid");
  } else {
    $("#customCheck").addClass("is-valid");
    correcto = true;
  }

  return correcto;
}
/** Validación completa del formulario */


function validarFormulario() {
  $('#modalCarga').modal('show');
  var esTituloCorrecto = validacionTitulo();
  var esEmailCorrecto = validacionEmail();
  var esPublisherCorrecto = validacionPublisher();
  var esCondicionCorrecto = validarCondiciones();

  if (esTituloCorrecto && esEmailCorrecto && esPublisherCorrecto && esCondicionCorrecto) {
    var datosFormulario = $("#formulario").serialize();
    axios.post("/books/createAjax", datosFormulario).then(function (response) {
      $("#modalCorrecto .modal-body p").html(response.data);
      $("#modalCorrecto").modal("show");
    })["catch"](function () {
      $('#modalError').modal('show');
    }).then(function () {
      $('#modal').modal('hide');
      $('#modalCarga').modal('hide');
    });
  } else {
    $('#modalCarga').modal('hide');
    $('#modal').modal('show');
  }
}
/** Editar un elemento de la lista por Axios */


function editarFormulario() {
  var editForm = $("#formularioEditar").serialize();
  var idBook = $("#formularioEditar").attr("data-book");
  $('#modalCarga').modal('show');
  axios.put("/books/editAjax/".concat(idBook), editForm).then(function (response) {
    $("#modalCorrecto .modal-body p").html(response.data);
    $("#modalCorrecto").modal("show");
  })["catch"](function () {
    $('#modalError').modal('show');
  }).then(function () {
    $('#modalCarga').modal('hide');
  });
}
/** Eliminar un elemento de la lista por Axios */


function borrarFormulario() {
  var idBook = $("#confirmarEliminar").attr('data-elemento-borrar');
  $('#modalEliminar').modal('hide');
  $('#modalCarga').modal('show');
  axios["delete"]("/books/deleteAjax/".concat(idBook)).then(function (response) {
    $("#modalCorrecto .modal-body p").html(response.data);
    $("#libro".concat(idBook)).remove();
  })["catch"](function () {
    $('#modalError').modal('show');
  }).then(function () {
    $('#modalCarga').modal("hide");
  });
}
/** Mostrar */


function mostrarFormulario(idBook) {
  showModalCarga();
  axios.get("/books/showAjax/".concat(idBook)).then(function (response) {
    hideModalCarga();
    $('#modalShow').modal('show');
    $('#info').html(response.data);
  })["catch"](function () {
    $('#modalError').modal('show');
  }).then(function () {
    $('#modalCarga').modal("hide");
  });
}
/**Búsqueda Ajax */


function busquedaAjax() {
  var searchForm = $("#searchForm").serialize();
  spinnerShow();
  $('#searchInput').val();
  axios.post('/books/searchAjax', searchForm).then(function (response) {
    var divMostrarBusqueda = $("#mostrarBusqueda");
    divMostrarBusqueda.empty();
    divMostrarBusqueda.html(response.data);
    console.log(response);
    spinnerShow();
  })["catch"](function (error) {
    showErrorModal();
    console.log(error);
  }).then(function () {
    spinnerHide();
  });
}
/**Paginar Ajax 
function paginarAjax(){
    let contadorMostrados = 10;
    axios.get('/books/paginarAjax/'.concat(contadorMostrados))
            .then(function (response) {
                if(response.data === ""){
                    alert("NO HAY MAS LIBROS");
                }else{
                    $("#mostrarBusqueda").append(response.data);
                    contadorMostrados += 10;
                }
            }).catch(function () {
                showErrorModal();
            }).then(function(){
                $("#spinner").hide();
            });
    }
    */


$(function () {
  $('#myTabPill a').on('show.bs.tab', function (e) {
    var vista = $(e.target).attr("id");
    axios.get("/miPerfil/".concat(vista)).then(function (response) {
      $("#tabContent").html(response.data);
    })["catch"](function () {
      $('#modalError').modal('show');
    });
  });
});
/** MODALES */

function showModalCarga() {
  $('#modalCarga').modal('show');
}

function hideModalCarga() {
  $('#modalCarga').modal('hide');
}

function showErrorModal() {
  $('#modalError').modal('show');
}

function hideErrorModal() {
  $('#modalError').modal('hide');
}
/** SPINNER */


function spinnerHide() {
  $("#spinner").hide();
}

;

function spinnerShow() {
  $("#spinner").show();
}

;
/** INPUTS VALIDACIÓN */

function marcarInputCorrecto(input) {
  input.addClass("is-valid");
}

function marcarInputErroneo(input) {
  input.addClass("is-invalid");
}

/***/ }),

/***/ 1:
/*!***************************************************************!*\
  !*** multi ./resources/js/validaciones/validacionesLibros.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jose/Sites/ClientesFinal/resources/js/validaciones/validacionesLibros.js */"./resources/js/validaciones/validacionesLibros.js");


/***/ })

/******/ });
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
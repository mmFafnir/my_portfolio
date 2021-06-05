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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//Бургер миню\r\nconst iconBurger = document.querySelector('.burger__icon');\r\nconst menuBurger = document.querySelector('.burger');\r\n\r\nif(iconBurger) {\r\n    iconBurger.addEventListener(\"click\", function(e) {\r\n        document.body.classList.toggle('lock');\r\n        iconBurger.classList.toggle('active');\r\n        menuBurger.classList.toggle('active');\r\n    })\r\n}\r\n\r\n\r\n//Анимация при скролле\r\nconst animItems = document.querySelectorAll('.__anim-item');\r\n//условие проверки наличия на странице объектов с классом '.__anim-item'\r\nif (animItems.length > 0) {\r\n   window.addEventListener('scroll', animOnScroll);\r\n\r\n   function animOnScroll() {\r\n      //цикл 'for' наделяет объекты в массиве объектов переменными и определяет их текущий класс\r\n      for (let index = 0; index < animItems.length; index++) {\r\n         const animItem = animItems[index];\r\n         const animItemHight = animItem.offsetHeight;\r\n         const animItemOffset = offset(animItem).top;\r\n         const animStart = 6;\r\n\r\n         //создание точки анимации, при значении animStart = 4, точка анимации - при 1/10 высоты объекта\r\n         let animItemPoint = window.innerHeight - animItemHight / animStart;\r\n\r\n         //проверка, если анимированный объект выше высоты окна браузера\r\n         if (animItemHight > window.innerHeight) {\r\n            animItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n         }\r\n         //Добавление или удаление класса '__active' объекту\r\n         if ((pageYOffset > animItemOffset - animItemPoint)\r\n            &&\r\n            pageYOffset < (animItemOffset + animItemHight)) {\r\n            animItem.classList.add('__active');\r\n         } else {\r\n            //доп условие: при отсутсвии класса-заглушки повтора анимации '__active' не будет снят\r\n            if (!animItem.classList.contains('__no-repeat-anim')) {\r\n               animItem.classList.remove('__active');\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   //функциия позволяет получить позицию объекта относительно верха или левой стороны объекта window\r\n   function offset(e1) {\r\n      const rect = e1.getBoundingClientRect(),\r\n         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n         scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\r\n   }\r\n\r\n   //вызов функции для объектов, которые находятся изначально при загрузке страницы с задержкой 300ms\r\n   setTimeout(() => {\r\n      animOnScroll()\r\n   }, 300);\r\n}\r\n\r\n\r\n\r\n\r\n//Модальное окнос\r\nconst modalLink = document.getElementById('modal-link');\r\nconst modal = document.querySelector('.modal');\r\nconst modalClose = document.querySelector('.modal__icon');\r\n\r\nif(modalLink){\r\n    modalLink.addEventListener(\"click\", function(e){\r\n        document.body.classList.add('lock');\r\n        modal.classList.add('active');\r\n    })\r\n}\r\nif(modalClose){\r\n    modalClose.addEventListener(\"click\", function(e){\r\n        document.body.classList.remove('lock');\r\n        modal.classList.remove('active');\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\mmfaf\\Desktop\\gulp4-project\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\mmfaf\\Desktop\\gulp4-project\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
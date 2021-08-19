/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

// var per vue js
var app = new Vue({
  // elemento con id root
  el: "#root",
  // data
  data: {
    // navabar
    navbarVisible: false,
    // scroll-down
    scrollDownVisible: false,
    // title
    titleIndex: 0,
    titleText: "Hi, I'm Mattia and I'm a web developer",
    // project
    projects: [{
      title: "WHATSAPP",
      description: "A WhatsApp web app clone, using HTML, CSS and Vue JS",
      descrVisible: false,
      "class": "whatsapp",
      grayscale: false
    }, {
      title: "NETFLIX",
      description: "A Netflix clone, calling the TMDB Api and using HTML, CSS and Vue JS",
      descrVisible: false,
      "class": "netflix",
      grayscale: false
    }, {
      title: "TODO LIST",
      description: "A simple todo list, using HTML, CSS and Vue JS",
      descrVisible: false,
      "class": "todo",
      grayscale: false
    }, {
      title: "BURGER",
      description: "A simple web app, using HTML, CSS and JavaScript",
      descrVisible: false,
      "class": "burger",
      grayscale: false
    }, {
      title: "SLIDER",
      description: "A simple images slideshow, using HTML, CSS and Vue JS",
      descrVisible: false,
      "class": "slider",
      grayscale: false
    }],
    // skills
    frontEndTitle: "Front-end",
    frontEndTitleWhite: false,
    backEndTitle: "Back-end",
    backEndTitleWhite: false,
    learningTitle: "I'm learning",
    learningTitleWhite: false,
    // frontend skill list
    frontEndSkills: [{
      title: "HTML 5",
      path: "html.png"
    }, {
      title: "CSS 3",
      path: "css.png"
    }, {
      title: "Bootstrap",
      path: "bootstrap.png"
    }, {
      title: "Sass",
      path: "sass.png"
    }, {
      title: "JavaScript ES6",
      path: "javascript.png"
    }, {
      title: "JQuery",
      path: "jquery.png"
    }, {
      title: "Vue JS",
      path: "vuejs.png"
    }, {
      title: "Photoshop",
      path: "photoshop.png"
    }],
    // backend skill list
    backEndSkills: [{
      title: "PHP",
      path: "php.png"
    }, {
      title: "Laravel",
      path: "laravel.png"
    }, {
      title: "My SQL",
      path: "mysql.png"
    }],
    // learning skill list
    learningSkills: [{
      title: "React JS",
      path: "react.png"
    }, {
      title: "Angular JS",
      path: "angular.png"
    }, {
      title: "Illustrator",
      path: "illustrator.png"
    }],
    // contacts modal
    activeModalIndex: 0,
    emailText: "Email address: pmattiab@live.it",
    email: "pmattiab@live.it"
  },
  // funzioni
  methods: {
    frontMouseOver: function frontMouseOver(index) {
      this.frontEndTitle = this.frontEndSkills[index].title;
      this.frontEndTitleWhite = true;
    },
    backMouseOver: function backMouseOver(index) {
      this.backEndTitle = this.backEndSkills[index].title;
      this.backEndTitleWhite = true;
    },
    learningMouseOver: function learningMouseOver(index) {
      this.learningTitle = this.learningSkills[index].title;
      this.learningTitleWhite = true;
    },
    mouseLeave: function mouseLeave() {
      this.frontEndTitle = "Front-end";
      this.backEndTitle = "Back-end";
      this.learningTitle = "I'm learning";
      this.frontEndTitleWhite = false;
      this.backEndTitleWhite = false;
      this.learningTitleWhite = false;
    },
    showNavbar: function showNavbar() {
      this.navbarVisible = true;
    },
    showScrollDown: function showScrollDown() {
      this.scrollDownVisible = true;
    },
    showModal: function showModal(index) {
      this.activeModalIndex = index;
      this.emailText = "Email address: pmattiab@live.it";
    },
    copyEmail: function copyEmail() {
      navigator.clipboard.writeText(this.email);
      this.emailText = "Copied to clipboard!";
    },
    projectShow: function projectShow(index) {
      this.projects.forEach(function (element) {
        element.grayscale = true;
        element.descrVisible = false;
      });
      this.projects[index].grayscale = false;
      this.projects[index].descrVisible = true;
    }
  },
  // funzioni in mounted che partono dopo il caricamento dell'HTML
  created: function created() {
    setTimeout(this.showNavbar, 4000);
    setTimeout(this.showScrollDown, 5000);
  },
  // funzioni in mounted che partono dopo il caricamento dell'HTML
  mounted: function mounted() {}
});
var index = 0;
var text = "Hi, I'm Mattia and I'm a web developer";

function typing() {
  if (index < text.length) {
    document.getElementById("title").innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 90);
  }
}

typing(); // window.addEventListener("scroll", reveal);
// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientRect().top;
//         var revealPoint = 100;
//         if (revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add("show");
//         } else {
//             reveals[i].classList.remove("show");
//         }
//     }
// }

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio_site"] = self["webpackChunkportfolio_site"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
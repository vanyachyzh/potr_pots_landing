parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var r,o=document.body.querySelectorAll(".hide-window__bottom"),i=e(o);try{var a=function(){var t=r.value;t.addEventListener("click",function(e){var n=e.currentTarget.parentNode,r=n.querySelector(".hide-window__description-container");t.classList.toggle("hide-window__bottom--acrive"),r.classList.toggle("hide-window__description-container--active"),n.classList.toggle("hide-window--active")}),t.addEventListener("click",function(t){var n,r=t.currentTarget.parentNode.querySelector(".hide-window__description-container"),i=e(o);try{for(i.s();!(n=i.n()).done;){var a=n.value,c=a.parentNode.querySelector(".hide-window__description-container");c.style.display="flex",r!==c&&(a.classList.remove("hide-window__bottom--acrive"),c.classList.remove("hide-window__description-container--active"),a.parentNode.classList.remove("hide-window--active"))}}catch(d){i.e(d)}finally{i.f()}})};for(i.s();!(r=i.n()).done;)a()}catch(h){i.e(h)}finally{i.f()}var c,d=document.body.querySelectorAll(".hide-window__description-container"),l=d.length-1,s=e(d);try{for(s.s();!(c=s.n()).done;){var u=c.value;u.addEventListener("touchstart",function(e){(l-=1)<0&&(l=d.length-1),e.currentTarget.classList.remove("hide-window__description-container--active"),d[l].classList.toggle("hide-window__description-container--active")})}}catch(h){s.e(h)}finally{s.f()}var f=document.body.querySelector(".questions"),v=f.querySelector(".button"),y=f.querySelectorAll(".form__field");v.addEventListener("click",function(t){var n,r=e(y);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(o.value.length<o.getAttribute("minlength"))return}}catch(h){r.e(h)}finally{r.f()}t.preventDefault();var i,a=e(y);try{for(a.s();!(i=a.n()).done;){i.value.value=""}}catch(h){a.e(h)}finally{a.f()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6b3ddab7.js.map
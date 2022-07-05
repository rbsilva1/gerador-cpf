(()=>{"use strict";var n={122:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),a.push([n.id,":root {\n  --primary-color: rgb(71, 8, 143);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 560px;\n  margin: 200px auto;\n  background: rgb(0, 0, 0);\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n  color: white;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 5px;\n}\n\n.container button {\n  margin-left: 5cm;\n  display: block;\n  text-align: center;\n  align-self: center;\n  border-radius: 10px;\n  height: 40px;\n  border: 3px solid rgb(0, 0, 0);\n  background-color: rgb(71, 8, 143);\n  color: #fff;\n  font-weight: bold;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;EACE,gCAAgC;EAChC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,wBAAwB;EACxB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,iCAAiC;EACjC,WAAW;EACX,iBAAiB;AACnB",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(71, 8, 143);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 560px;\n  margin: 200px auto;\n  background: rgb(0, 0, 0);\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n  color: white;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 5px;\n}\n\n.container button {\n  margin-left: 5cm;\n  display: block;\n  text-align: center;\n  align-self: center;\n  border-radius: 10px;\n  height: 40px;\n  border: 3px solid rgb(0, 0, 0);\n  background-color: rgb(71, 8, 143);\n  color: #fff;\n  font-weight: bold;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */"),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],u=i[p]||0,l="".concat(p," ").concat(u);i[p]=u+1;var A=e(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==A)r[A].references++,r[A].updater(d);else{var f=o(d,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),p=0;p<i.length;p++){var u=e(i[p]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{function n(n){Object.defineProperty(this,"cpfLimpo",{enumerable:!0,get:function(){return n.replace(/\D+/g,"")}}),this.valida=function(){if(!this.cpfLimpo)return!1;if(this.cpfLimpo.length<11)return!1;if(this.eSequencia())return!1;var n=this.cpfLimpo.slice(0,-2),r=this.criaDigito(n),e=n+r+this.criaDigito(n+r);return this.cpfLimpo===e},this.eSequencia=function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}}function r(){}n.criaDigito=function(n){var r=Array.from(n),e=n.length+1,t=11-r.reduce((function(n,r){return n+=Number(r)*e,e--,n}),0)%11;return t>9?"0":String(t)},r.prototype.rand=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))},r.prototype.formatado=function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)},r.prototype.geraNovoCPF=function(){var r=this.rand(),e=n.criaDigito(r),t=r+e+n.criaDigito(r+e);return this.formatado(t)};var t,o=e(379),i=e.n(o),a=e(795),c=e.n(a),s=e(569),p=e.n(s),u=e(565),l=e.n(u),A=e(216),d=e.n(A),f=e(589),g=e.n(f),m=e(122),h={};h.styleTagTransform=g(),h.setAttributes=l(),h.insert=p().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=d(),i()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,t=new r,document.querySelector(".cpf-gerado").innerHTML=t.geraNovoCPF(),document.addEventListener("click",(function(n){n.target.classList.contains("voltar")&&function(){var n=new r;document.querySelector(".cpf-gerado").innerHTML=n.geraNovoCPF()}()}))})()})();
//# sourceMappingURL=bundle.js.map
(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"body, html {\r\n    margin: 0;\r\n}\r\n\r\n#content { \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center; \r\n    align-items: center;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n#menu {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: none;\r\n    gap: 10px;\r\n    margin: 80px 30px 60px 30px;\r\n   \r\n}\r\n\r\n#contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content:center;\r\n    align-items: center;\r\n    font-family: monospace;\r\n    \r\n}\r\n\r\n#about{\r\n    font-family: monospace;\r\n    font-size: 14px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.card {\r\n    background-color: orange;\r\n    border: 3px solid black;\r\n    padding: 20px;\r\n    font-family: monospace;\r\n    font-size: 14px;\r\n    \r\n}\r\n\r\n.price {\r\n    float:right;\r\n}\r\n\r\n.hrs {\r\n    float: right;\r\n}\r\n\r\n.address, .timings {\r\n    background-color: orange;\r\n    flex: 1 1 0;\r\n    width: 50vw;\r\n    margin: 10px;\r\n}\r\n\r\n.hide {\r\n    display: none !important;\r\n}\r\n\r\n.tabLink {\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 20px 30px;\r\n    font-size: 20px;\r\n    width: 30%;\r\n}\r\n\r\n.active {\r\n    background-color: #adadad;\r\n}",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var s=e[a],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=i(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:f(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function f(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=c(t)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=i(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(426);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;let a=document.createElement("div"),o=document.createElement("button");o.textContent="About",o.setAttribute("id","default"),o.setAttribute("class","tabLink");let i=document.createElement("button");i.textContent="Menu",i.setAttribute("class","tabLink");let s=document.createElement("button");s.textContent="Contact",s.setAttribute("class","tabLink"),a.appendChild(o),a.appendChild(i),a.appendChild(s),content.appendChild(a),content.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","about"),e.setAttribute("class","tabContent hide");const t=document.createElement("h1");t.textContent="Casey's Restaurant",e.appendChild(t);const n=document.createElement("img");!function(e,t){for(let n in t)e.setAttribute(n,t[n])}(n,{src:"https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/04/peak-restaurant-new-york-city-usa-rockwell-group-2.jpg",alt:"restaurant",width:"800",height:"500"}),e.appendChild(n);const r=document.createElement("p");return r.innerHTML="Situated in downtown LA, Casey's Restaurant is one of the oldest restaurant boasting one of the highest percentage of European visitors dining in fall season.\n    It offers traditional Italian cuisines which you can enjoyed in the pleasant air conditioned ambience.\n    It has a capacity of 123 seats and 35-40 seats in the summer garden. In addition to lunch and dinner, the restaurant premises, for example, to organize banquets, graduations, weddings or birthday celebrations. <br>\n    For the booking options to lunch or dinner for tourist group don’t hesitate to contact us. <br>\n    We hope that your visit to our restaurants will be one of your pleasant experiences, and that you will come back. Our team is looking forvard to your visit.",e.appendChild(r),e}()),content.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","menu"),e.setAttribute("class","tabContent hide");let t=[],n=[],r=[],a=[],o=[],i=[];const s=(e,t,n)=>({name:e,price:t,type:n}),c=s("Garlic Bread","$9","starters"),d=s("Bread with Olives","$11","starters"),l=s("Bruschetta with Bocconcini","$16","starters"),u=s("Antipasto Misto","$29","starters"),p=s("Spaghetti Bolognese","$24","pasta & risotto"),h=s("Linguine al Pollo","$25","pasta & risotto"),m=s("Penne Polpette","$25","pasta & risotto"),f=s("Risotto Pescatora","$35","pasta & risotto"),b=s("Parmigiana","$27","meat"),g=s("Chicken avocado","$34","meat"),y=s("Rib eye steak","$39","meat"),v=s("Veal al Limone","$34","meat"),C=s("Insalata Romana","$9","sides"),w=s("Button Mushrooms","$9","sides"),M=s("Bowl of chips","$8","sides"),x=s("Roasted Potatoes","$9","sides");return t.push(c,d,l,u,p,h,m,f,b,g,y,v,C,w,M,x),t.map((e=>"starters"===e.type?n.push(e):"pasta & risotto"===e.type?r.push(e):"meat"===e.type?a.push(e):o.push(e))),i.push(n,r,a,o),i.map((t=>{let n=document.createElement("div");n.setAttribute("class","card"),n.innerHTML=`<strong> <h2> ${t[0].type} </h2> </strong>`;let r=document.createElement("ul");t.map((e=>{let t=document.createElement("li");t.innerHTML=`${e.name} <span class="price">${e.price}</span>`,r.appendChild(t)})),n.appendChild(r),e.appendChild(n)})),e}()),content.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","contact"),e.setAttribute("class","tabContent hide");let t=document.createElement("div");t.setAttribute("class","address"),t.innerHTML="\n    <h2> Visit Us </h2> <br>\n    Casey's Restaurant <br>\n    4.7 stars - based on 368 reviews <br>\n    624 South La Brea Ave <br>\n    Los Angeles, CA 90036 <br>\n    United States <br>\n    Phone: +1 310-362-6115 <br>\n    Email: casey@laheights.com <br>\n    Categories: Authentic Italian Food <br>\n    Price Range: starting $8 <br>\n    Takes Reservations: Yes\n    ",e.appendChild(t);let n=document.createElement("div");n.setAttribute("class","timings");let r="<h2> Opening Hours </h2> <br>";return[{day:"Monday",status:"CLOSED"},{day:"Tuesday",status:"5:30PM-10PM"},{day:"Wednesday",status:"5:30PM-10PM"},{day:"Thursday",status:"5:30PM-10PM"},{day:"Friday",status:["5:30PM-10PM","11AM-2PM"]},{day:"Saturday",status:["5:30PM-10PM","11AM-2PM"]},{day:"Sunday",status:["5:30PM-10PM","11AM-2PM"]}].map((e=>{r+=`${e.day} <span class="hrs">${e.status}</span> <br>`})),r+="Please note that our restaurant closes between 2:30pm-5:30pm every open day of the week.",n.innerHTML=r,e.appendChild(n),e}());const c=(e,t)=>{let n=document.querySelectorAll(".tabContent");for(let e=0;e<n.length;e++)n[e].classList.add("hide");document.querySelector(`#${t}`).classList.remove("hide");let r=document.querySelectorAll(".tabLink");for(let e=0;e<r.length;e++)r[e].classList.remove("active");e.target.classList.add("active")};o.addEventListener("click",(e=>{c(e,"about")})),i.addEventListener("click",(e=>{c(e,"menu")})),s.addEventListener("click",(e=>{c(e,"contact")})),document.querySelector("#default").click()})()})();
(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)i=c[l],o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1383eeaa"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("mdc-layout-app",[n("mdc-toolbar",{attrs:{slot:"toolbar","drawer-type":"temporary"},slot:"toolbar"},[n("mdc-toolbar-row",[n("mdc-toolbar-section",{attrs:{"align-start":""}},[n("mdc-toolbar-menu-icon",{attrs:{event:"toggle-drawer"}}),n("mdc-toolbar-title",[e._v("Evolutionary")])],1)],1)],1),n("mdc-drawer",{attrs:{slot:"drawer","toggle-on":"toggle-drawer",temporary:""},slot:"drawer"},[n("mdc-drawer-list",[n("mdc-drawer-item",{attrs:{href:"/#/","start-icon":"home"}},[e._v("Home")]),n("mdc-drawer-item",{attrs:{href:"/#/about","start-icon":"send"}},[e._v("About")])],1)],1),n("main",{staticClass:"content"},[n("router-view")],1)],1)],1)},a=[],i={},c=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,o,a,!1,null,null,null),l=s.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Banner")],1)},p=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"banner"}},[r("img",{attrs:{src:n("cf05"),alt:"evolutionary logo"}}),r("h2",[r("span",[e._v("Dictionary of evolution")])])])}],b={name:"Banner"},g=b,h=(n("8e74"),Object(u["a"])(g,m,v,!1,null,"49851dd6",null)),w=h.exports,y={name:"home",components:{Banner:w}},_=y,j=Object(u["a"])(_,d,p,!1,null,null,null),O=j.exports;r["a"].use(f["a"]);var x=new f["a"]({routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),k=n("2f62");r["a"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{}}),P=n("9483");Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=n("fb51");r["a"].use(S["a"]),r["a"].config.productionTip=!1,new r["a"]({router:x,store:E,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"8e74":function(e,t,n){"use strict";var r=n("e4ba"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.fdba4ace.png"},e4ba:function(e,t,n){}});
//# sourceMappingURL=app.06fd5a04.js.map
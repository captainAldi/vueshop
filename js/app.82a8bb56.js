(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about",alert:"alert",book:"book","book-item":"book-item",cart:"cart",categories:"categories",category:"category",checkout:"checkout",login:"login","my-order":"my-order",payment:"payment",profile:"profile",register:"register",search:"search"}[t]||t)+"."+{about:"e38a2596",alert:"c57a1bb1",book:"f343b6fd","book-item":"dc58a7ea",cart:"cd912315",categories:"fb2d1d66",category:"5c8696f6",checkout:"b08d5487","chunk-0025aa1c":"37a7bac1",login:"d7c1c6e3","my-order":"0e2853e9",payment:"77fdc209",profile:"c4b04eac",register:"c915fd4a",search:"0777dc5f"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={alert:1,book:1,cart:1,categories:1,category:1,checkout:1,"chunk-0025aa1c":1,"my-order":1,payment:1,profile:1,register:1,search:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",alert:"alert",book:"book","book-item":"book-item",cart:"cart",categories:"categories",category:"category",checkout:"checkout",login:"login","my-order":"my-order",payment:"payment",profile:"profile",register:"register",search:"search"}[t]||t)+"."+{about:"31d6cfe0",alert:"3e507f7b",book:"04348105","book-item":"31d6cfe0",cart:"85aadb5e",categories:"d9e045ca",category:"d9e045ca",checkout:"95c9d861","chunk-0025aa1c":"d9e045ca",login:"31d6cfe0","my-order":"c57ee95b",payment:"c57ee95b",profile:"c57ee95b",register:"35b17141",search:"c02abeab"}[t]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://captainaldi.github.io/vueshop/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("bc3a"),a=n.n(r),i={baseURL:"https://namikazenaruto2.000webhostapp.com/api/v1/"},s=a.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},o["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.isHome?n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",extended:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{attrs:{to:"/"}},[t._v(t._s(t.appName))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setDialogComponent("cart")}}},[n("v-badge",{attrs:{color:"orange",overlap:""},scopedSlots:t._u([t.countCart>0?{key:"badge",fn:function(){return[n("span",[t._v(t._s(t.countCart)+" ")])]},proxy:!0}:null],null,!0)},[n("v-icon",[t._v("mdi-cart")])],1)],1),n("v-text-field",{attrs:{slot:"extension","hide-details":"","append-icon":"mdi-microphone",flat:"",label:"Search","prepend-inner-icon":"mdi-magnify","solo-inverted":""},on:{click:function(e){return t.setDialogComponent("search")}},slot:"extension"})],1):n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left-circle")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setDialogComponent("cart")}}},[n("v-badge",{attrs:{color:"orange",overlap:""},scopedSlots:t._u([t.countCart>0?{key:"badge",fn:function(){return[n("span",[t._v(t._s(t.countCart)+" ")])]},proxy:!0}:null],null,!0)},[n("v-icon",[t._v("mdi-cart")])],1)],1)],1),n("v-card",[n("v-navigation-drawer",{attrs:{app:""},scopedSlots:t._u([t.guest?null:{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:"",color:"red",dark:""},on:{click:t.logout}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-lock")]),t._v("\n              Logout\n          ")],1)],1)]},proxy:!0}],null,!0),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.guest?n("div",{staticClass:"pa-2"},[n("v-btn",{staticClass:"mb-1",attrs:{block:"",color:"primary"},on:{click:function(e){return t.setDialogComponent("login")}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-lock")]),t._v("\n            Login\n        ")],1),n("v-btn",{attrs:{block:"",color:"success"},on:{click:function(e){return t.setDialogComponent("register")}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-account")]),t._v("\n            Register\n        ")],1)],1):t._e(),t.guest?t._e():n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.getImage("/users/"+t.user.avatar)}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(t.user.name)+"\n          ")])],1)],1),n("v-divider"),n("v-list",{attrs:{shaped:""}},[t._l(t.menus,(function(e,o){return[!e.auth||e.auth&&!t.guest?n("v-list-item",{key:"menu-"+o,attrs:{to:e.route}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1):t._e()]}))],2)],1)],1),n("alert"),n("keep-alive",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n(t.currentComponent,{tag:"component",on:{closed:t.setDialogStatus}})],1)],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",[n("router-view")],1)],1)],1),n("v-card",[n("v-footer",{attrs:{absolute:"",app:""}},[n("v-card-text",{staticClass:"text-center"},[t._v("\n        © "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Vueshop")])])],1)],1)],1)},u=[],l=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"App",components:{Alert:function(){return n.e("alert").then(n.bind(null,"98ab"))},Search:function(){return n.e("search").then(n.bind(null,"c106"))},Login:function(){return n.e("login").then(n.bind(null,"578a"))},Register:function(){return n.e("register").then(n.bind(null,"1feb"))},Cart:function(){return n.e("cart").then(n.bind(null,"b3b1"))}},data:function(){return{drawer:!1,menus:[{title:"Home",icon:"mdi-home",route:"/"},{title:"About",icon:"mdi-account",route:"/about"},{title:"Profile",icon:"mdi-account",route:"/profile",auth:!0},{title:"My Order",icon:"mdi-shopping",route:"/my-order",auth:!0}]}},methods:d({},Object(f["b"])({setDialogStatus:"dialog/setStatus",setDialogComponent:"dialog/setComponent",setAuth:"auth/set",setAlert:"alert/set",removeCart:"cart/remove",setCart:"cart/set"}),{logout:function(){var t=this,e={headers:{Authorization:"Bearer "+this.user.api_token}};this.axios.post("/logout",{},e).then((function(e){t.setAuth({}),t.setAlert({status:!0,color:"success",text:"Logout successfully"})})).catch((function(e){var n=e.response.data;t.setAlert({status:!0,color:"error",text:n.message})}))},checkout:function(){this.close(),this.$router.push({path:"/checkout"})},close:function(){this.$emit("closed",!1)}}),computed:d({isHome:function(){return"/"===this.$route.path}},Object(f["c"])({countCart:"cart/count",guest:"auth/guest",user:"auth/user",dialogStatus:"dialog/status",currentComponent:"dialog/component",totalPrice:"cart/totalPrice",totalQuantity:"cart/totalQuantity",totalWeight:"cart/totalWeight"}),{dialog:{get:function(){return this.dialogStatus},set:function(t){this.setDialogStatus(t)}}})},h=m,g=n("2877"),v=n("6544"),b=n.n(v),y=n("7496"),k=n("40dc"),x=n("5bc1"),_=n("4ca6"),w=n("8336"),C=n("b0af"),j=n("99d9"),O=n("a523"),P=n("a75b"),V=n("169a"),S=n("ce7e6"),A=n("553a"),D=n("132d"),E=n("adda"),L=n("8860"),I=n("da13"),T=n("8270"),q=n("5d23"),N=n("f774"),B=n("0789"),F=n("2fa4"),U=n("8654"),$=n("2a7f"),M=Object(g["a"])(h,c,u,!1,null,null,null),W=M.exports;b()(M,{VApp:y["a"],VAppBar:k["a"],VAppBarNavIcon:x["a"],VBadge:_["a"],VBtn:w["a"],VCard:C["a"],VCardText:j["b"],VContainer:O["a"],VContent:P["a"],VDialog:V["a"],VDivider:S["a"],VFooter:A["a"],VIcon:D["a"],VImg:E["a"],VList:L["a"],VListItem:I["a"],VListItemAvatar:T["a"],VListItemContent:q["a"],VListItemTitle:q["c"],VNavigationDrawer:N["a"],VSlideYTransition:B["e"],VSpacer:F["a"],VTextField:U["a"],VToolbarTitle:$["a"]});var H=n("8c4f"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"ma-0 pa-0",attrs:{"grid-list-sm":""}},[n("div",{staticClass:"text-right"},[n("v-btn",{staticClass:"blue--text",attrs:{small:"",text:"",to:"/categories"}},[t._v("\n        All Categories "),n("v-icon",[t._v("mdi-chevron-right")])],1)],1),n("v-layout",{attrs:{wrap:""}},t._l(t.categories,(function(e){return n("v-flex",{key:"category-"+e.id,attrs:{xs6:""}},[n("v-card",{attrs:{to:"/category/"+e.slug}},[n("v-img",{staticClass:"white--text",attrs:{src:t.getImage("/categories/"+e.image)}},[n("v-card-title",{staticClass:"fill-height align-end",domProps:{textContent:t._s(e.name)}})],1)],1)],1)})),1)],1),n("v-container",{staticClass:"ma-0 pa-0 mt-2",attrs:{"grid-list-sm":""}},[n("div",{staticClass:"text-right"},[n("v-btn",{staticClass:"blue--text",attrs:{small:"",text:"",to:"/books"}},[t._v("\n        All Books "),n("v-icon",[t._v("mdi-chevron-right")])],1)],1),n("v-layout",{attrs:{wrap:""}},t._l(t.books,(function(t){return n("v-flex",{key:"book-"+t.id,attrs:{xs6:""}},[n("book-item",{attrs:{book:t}})],1)})),1)],1)],1)},z=[],R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{"text-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),o("v-flex",{attrs:{"mb-4":""}},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),o("br"),t._v("please join our online\n        "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-flex",{attrs:{"mb-5":"",xs12:""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},J=[],Y={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},K=Y,G=n("0e8f"),X=n("a722"),Z=Object(g["a"])(K,R,J,!1,null,null,null),tt=Z.exports;b()(Z,{VContainer:O["a"],VFlex:G["a"],VImg:E["a"],VLayout:X["a"]});var et={created:function(){var t=this;console.log("get data categories"),this.axios.get("/categories/random/2").then((function(e){var n=e.data.data;t.categories=n})).catch((function(t){var e=t.responses;console.log(e)})),this.axios.get("/books/top/4").then((function(e){var n=e.data.data;t.books=n})).catch((function(t){var e=t.responses;console.log(e)}))},components:{HelloWorld:tt,BookItem:function(){return n.e("book-item").then(n.bind(null,"54f3"))}},data:function(){return{categories:[],books:[]}}},nt=et,ot=Object(g["a"])(nt,Q,z,!1,null,null,null),rt=ot.exports;b()(ot,{VBtn:w["a"],VCard:C["a"],VCardTitle:j["c"],VContainer:O["a"],VFlex:G["a"],VIcon:D["a"],VImg:E["a"],VLayout:X["a"]});n("7514");var at={namespaced:!0,state:{carts:[]},mutations:{insert:function(t,e){t.carts.push({id:e.id,title:e.title,cover:e.cover,price:e.price,weight:e.weight,quantity:1})},update:function(t,e){var n=t.carts.indexOf(e);t.carts.splice(n,1,{id:e.id,title:e.title,cover:e.cover,price:e.price,weight:e.weight,quantity:e.quantity}),e.quantity<=0&&t.carts.splice(n,1)},set:function(t,e){t.carts=e}},actions:{add:function(t,e){var n=t.state,o=t.commit,r=n.carts.find((function(t){return t.id===e.id}));r?(r.quantity++,o("update",r)):o("insert",e)},remove:function(t,e){var n=t.state,o=t.commit,r=n.carts.find((function(t){return t.id===e.id}));r&&(r.quantity--,o("update",r))},set:function(t,e){var n=t.commit;n("set",e)}},getters:{carts:function(t){return t.carts},count:function(t){return t.carts.length},totalPrice:function(t){var e=0;return t.carts.forEach((function(t){e+=t.price*t.quantity})),e},totalQuantity:function(t){var e=0;return t.carts.forEach((function(t){e+=t.quantity})),e},totalWeight:function(t){var e=0;return t.carts.forEach((function(t){e+=t.weight})),e}}},it={namespaced:!0,state:{status:!1,color:"success",text:""},mutations:{set:function(t,e){t.status=e.status,t.text=e.text,t.color=e.color}},actions:{set:function(t,e){var n=t.commit;n("set",e)}},getters:{status:function(t){return t.status},color:function(t){return t.color},text:function(t){return t.text}}},st={namespaced:!0,state:{user:{}},mutations:{set:function(t,e){t.user=e}},actions:{set:function(t,e){var n=t.commit;n("set",e)}},getters:{user:function(t){return t.user},guest:function(t){return 0===Object.keys(t.user).length}}},ct={namespaced:!0,state:{status:!1,component:"search"},mutations:{setStatus:function(t,e){t.status=e},setComponent:function(t,e){t.component=e}},actions:{setStatus:function(t,e){var n=t.commit;n("setStatus",e)},setComponent:function(t,e){var n=t.commit;n("setComponent",e),n("setStatus",!0)}},getters:{status:function(t){return t.status},component:function(t){return t.component}}},ut={namespaced:!0,state:{provinces:[],cities:[]},mutations:{setProvinces:function(t,e){t.provinces=e},setCities:function(t,e){t.cities=e}},actions:{setProvinces:function(t,e){var n=t.commit;n("setProvinces",e)},setCities:function(t,e){var n=t.commit;n("setCities",e)}},getters:{provinces:function(t){return t.provinces},cities:function(t){return t.cities}}},lt=n("bfa9"),ft=new lt["a"]({key:"my-app",storage:localStorage});o["a"].use(f["a"]);var pt,dt=new f["a"].Store({plugins:[ft.plugin],state:{prevUrl:"",payment:[]},mutations:{setPrevUrl:function(t,e){t.prevUrl=e},setPayment:function(t,e){t.payment=e}},actions:{setPrevUrl:function(t,e){var n=t.commit;n("setPrevUrl",e)},setPayment:function(t,e){var n=t.commit;n("setPayment",e)}},getters:{prevUrl:function(t){return t.prevUrl},payment:function(t){return t.payment}},modules:{cart:at,alert:it,auth:st,dialog:ct,region:ut}});o["a"].use(H["a"]);var mt=new H["a"]((pt={mode:"history"},Object(l["a"])(pt,"mode","history"),Object(l["a"])(pt,"base","https://captainaldi.github.io/vueshop/"),Object(l["a"])(pt,"routes",[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/categories",name:"categories",component:function(){return n.e("categories").then(n.bind(null,"58c2"))}},{path:"/books",name:"books",component:function(){return n.e("chunk-0025aa1c").then(n.bind(null,"4de9"))}},{path:"/category/:slug",name:"category",component:function(){return n.e("category").then(n.bind(null,"4886"))}},{path:"/book/:slug",name:"book",component:function(){return n.e("book").then(n.bind(null,"8bf3"))}},{path:"/checkout",name:"checkout",component:function(){return n.e("checkout").then(n.bind(null,"7cb4"))},meta:{auth:!0}},{path:"/payment",name:"payment",component:function(){return n.e("payment").then(n.bind(null,"1175"))},meta:{auth:!0}},{path:"/profile",name:"profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))},meta:{auth:!0}},{path:"/my-order",name:"my-order",component:function(){return n.e("my-order").then(n.bind(null,"7d27"))},meta:{auth:!0}}]),pt));mt.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.auth}))&&dt.getters["auth/guest"]?(dt.dispatch("alert/set",{status:!0,text:"Login first",color:"error"}),dt.dispatch("setPrevUrl",t.path),dt.dispatch("dialog/setComponent","login"),dt.dispatch("dialog/setStatus",!0)):n()}));var ht=mt,gt=n("9483");Object(gt["a"])("".concat("https://captainaldi.github.io/vueshop/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var vt=n("f309");o["a"].use(vt["a"]);var bt=new vt["a"]({icons:{iconfont:"mdi"}}),yt={install:function(t){t.prototype.appName="Vueshop",t.prototype.getImage=function(t){return null!=t&&t.length>0?"https://namikazenaruto2.000webhostapp.com/image"+t:"/img/unavailable.png"}}};o["a"].use(yt),o["a"].config.productionTip=!1,new o["a"]({router:ht,store:dt,vuetify:bt,render:function(t){return t(W)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.82a8bb56.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0025aa1c"],{"0bc6":function(t,e,n){},"17b3":function(t,e,n){},"4de9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"ma-0 pa-0",attrs:{"grid-list-sm":""}},[n("v-subheader",[t._v("\n      All Books \n    ")]),n("v-layout",{attrs:{wrap:""}},t._l(t.books,(function(e){return n("v-flex",{key:"book-"+e.id,attrs:{xs6:""}},[n("v-card",{attrs:{to:"/book/"+e.slug}},[n("v-img",{staticClass:"white--text",attrs:{src:t.getImage("/books/"+e.cover)}},[n("v-card-title",{staticClass:"fill-height align-end",domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1),[n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.lengthPage,"total-visible":10},on:{input:t.go},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]],2)},a=[],s={data:function(){return{books:[],page:0,lengthPage:0}},created:function(){this.go()},methods:{go:function(){var t=this,e="/books?page="+this.page;this.axios.get(e).then((function(e){var n=e.data.data,i=e.data.meta;t.books=n,t.lengthPage=i.last_page,t.page=i.current_page})).catch((function(t){var e=t.responses;console.log(e)}))}}},r=s,o=n("2877"),c=n("6544"),u=n.n(c),l=n("b0af"),h=n("99d9"),p=n("a523"),v=n("0e8f"),g=n("adda"),f=n("a722"),d=n("891e"),b=n("e0c7"),m=Object(o["a"])(r,i,a,!1,null,null,null);e["default"]=m.exports;u()(m,{VCard:l["a"],VCardTitle:h["c"],VContainer:p["a"],VFlex:v["a"],VImg:g["a"],VLayout:f["a"],VPagination:d["a"],VSubheader:b["a"]})},"891e":function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d"),n("6b54");var i=n("75fc"),a=n("bd86"),s=(n("c5f6"),n("17b3"),n("9d26")),r=n("dc22"),o=n("58df"),c=n("a9ad"),u=n("7560");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(o["a"])(c["a"],u["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return h({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=t>this.maxButtons?this.maxButtons:t||this.maxButtons;if(this.length<=e||e<1)return this.range(1,this.length);var n=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+n;if(this.value>a&&this.value<s){var r=this.value-a+2,o=this.value+a-2-n;return[1,"..."].concat(Object(i["a"])(this.range(r,o)),["...",this.length])}if(this.value===a){var c=this.value+a-1-n;return[].concat(Object(i["a"])(this.range(1,c)),["...",this.length])}if(this.value===s){var u=this.value-a+1;return[1,"..."].concat(Object(i["a"])(this.range(u,this.length)))}return[].concat(Object(i["a"])(this.range(1,a)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var i=t;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:i}},[t(s["a"],[e])])])},genItem:function(t,e){var n=this,i=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,i){return t("li",{key:i},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},e0c7:function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var i=n("bd86"),a=(n("0bc6"),n("7560")),s=n("58df");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(s["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:o({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-0025aa1c.37a7bac1.js.map
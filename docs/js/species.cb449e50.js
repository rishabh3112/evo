(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["species"],{"38d5":function(e,t,s){},"7d39":function(e,t,s){"use strict";var i=s("38d5"),a=s.n(i);a.a},"8c0f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"text-align":"center"},attrs:{id:"specie"}},[s("div",{staticClass:"banner"},[s("h1",[e._v(e._s(e.specie.toUpperCase()))]),s("center",[s("mdc-button",{staticStyle:{"margin-top":"10px",background:"gold",color:"black"},attrs:{raised:"",href:"#/"}},[e._v(e._s("< BACK"))])],1)],1),s("div",{staticClass:"selection"},[s("b",[e._v(" DRAG SLIDER TO SELECT ERA ")]),s("mdc-slider",{attrs:{min:"0",max:e.evo.length-1,step:"1","display-markers":""},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}}),s("span",{staticStyle:{float:"left"}},[e._v(" PAST ")]),s("span",{staticStyle:{float:"right"}},[e._v("PRESENT")])],1),s("div",{staticClass:"card"},[s("h4",[e._v(e._s(e.evo[e.index].period.toUpperCase())+" ERA ")]),s("h1",{staticStyle:{color:"black"}},[e._v(e._s(e.evo[e.index].upper.split(" ")[0])+" to "+e._s(e.evo[e.index].lower.split(" ")[0]))]),s("h4",[e._v("MILLION YEARS AGO")]),s("hr"),s("mdc-button",{attrs:{unelevated:"",href:"#/species/"+e.specie+"/"+e.selected}},[e._v("Explore!")])],1)])},a=[],n=(s("7f7f"),{data:function(){return{index:0,specie:this.$route.params.name,evo:s("9320")("./".concat(this.$route.params.name,".json")).evolution_data}},computed:{selected:function(){return this.evo[this.index].period}}}),c=n,o=(s("7d39"),s("2877")),r=Object(o["a"])(c,i,a,!1,null,"22c75958",null);t["default"]=r.exports}}]);
//# sourceMappingURL=species.cb449e50.js.map
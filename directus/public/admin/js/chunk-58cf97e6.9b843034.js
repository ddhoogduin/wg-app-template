(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58cf97e6"],{"2708c":function(e,t,a){},4793:function(e,t,a){"use strict";var s=a("2708c"),l=a.n(s);l.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},a7d4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.userInfo?a("div",["name"!==e.options.display?a("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===e.options.display?e.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"display-user",attrs:{size:28,src:e.src,alt:e.displayValue,color:"light-gray"}}):e._e(),"avatar"!==e.options.display?a("span",{staticClass:"label gray style-3"},[a("div",[e._v(e._s(e.displayValue))])]):e._e()],1):e.newItem?a("div",{staticClass:"gray style-3"},[e._v("\n  "+e._s(e.$t("interfaces-user-created-you"))+"\n")]):a("div",{staticClass:"gray style-3"},[e._v("\n  "+e._s(e.$t("interfaces-user-created-unknown"))+"\n")])},l=[],n=a("7618"),i=a("8db2"),u=a.n(i),r={mixins:[u.a],computed:{userInfo:function(){return this.value?"object"===Object(n["a"])(this.value)?this.value.first_name?this.value:this.$store.state.users[this.value.id]:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}},o=r,p=(a("4793"),a("2877")),c=Object(p["a"])(o,s,l,!1,null,"c9fff834",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-58cf97e6.9b843034.js.map
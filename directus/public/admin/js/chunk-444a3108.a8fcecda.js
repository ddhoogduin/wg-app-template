(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-444a3108"],{"0221":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.options.formatInput?i("div",{staticClass:"interface-container"},[i("v-input",{staticClass:"interface-file-size",attrs:{type:"number",readonly:e.readonly,placeholder:e.options.placeholder},on:{input:e.calculateValue},model:{value:e.reducedValue,callback:function(t){e.reducedValue=t},expression:"reducedValue"}}),i("v-select",{staticClass:"interface-file-size-units",attrs:{id:e.name,readonly:e.readonly,options:e.unitChoices,placeholder:e.options.placeholder},on:{input:e.calculateValue},model:{value:e.units,callback:function(t){e.units=t},expression:"units"}})],1):i("div",[i("v-input",{staticClass:"interface-file-size",attrs:{type:"number",readonly:e.readonly,placeholder:e.options.placeholder,value:e.value},on:{input:function(t){return e.$emit("input",t)}}}),i("span",{staticClass:"interface-file-size-formatted"},[e._v("("+e._s(e.formatSize(e.value,!0))+")")])],1)},u=[],n=i("8db2"),l=i.n(n),s=i("281c"),r={mixins:[l.a],data:function(){return{reducedValue:"1",units:"1",unitChoices:{1:"B",1e3:"kB",1e6:"MB",1e9:"GB",1e12:"TB",1e15:"PB",1e18:"EB"}}},created:function(){this.value<1e3?(this.reducedValue=this.value,this.units="1"):this.value<1e6?(this.reducedValue=this.value/1e3,this.units="1000"):this.value<1e9?(this.reducedValue=this.value/1e6,this.units="1000000"):this.value<1e12?(this.reducedValue=this.value/1e9,this.units="1000000000"):this.value<1e15?(this.reducedValue=this.value/1e12,this.units="1000000000000"):this.value<1e18?(this.reducedValue=this.value/1e15,this.units="1000000000000000"):(this.reducedValue=this.value/1e18,this.units="1000000000000000000")},methods:{formatSize:s["a"],calculateValue:function(){var e=Math.round(this.reducedValue*this.units);this.$emit("input",e)}}},c=r,o=(i("c02f"),i("2877")),d=Object(o["a"])(c,a,u,!1,null,"65a4a56a",null);t["default"]=d.exports},"281c":function(e,t,i){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t?1e3:1024;if(!1===Boolean(e))return"--";if(Math.abs(e)<i)return"".concat(e," B");var a=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,n=e;do{n/=i,u+=1}while(Math.abs(n)>=i&&u<a.length-1);return"".concat(n.toFixed(1)," ").concat(a[u])}i.d(t,"a",function(){return a})},"87a5":function(e,t,i){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},c02f:function(e,t,i){"use strict";var a=i("87a5"),u=i.n(a);u.a}}]);
//# sourceMappingURL=chunk-444a3108.a8fcecda.js.map
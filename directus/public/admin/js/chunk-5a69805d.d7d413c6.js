(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a69805d"],{"32cb":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"status-mapping"},[n("div",{staticClass:"boxes"},[n("draggable",{attrs:{handle:".handle"},model:{value:e.boxes,callback:function(t){e.boxes=t},expression:"boxes"}},e._l(e.boxes,function(t,i){return n("Box",{key:i,attrs:{id:i,headers:e.headers,fields:e.formFields,data:t,open:i==e.open},on:{"stage-value":e.stageValue,open:function(t){return e.openBox(i)},delete:function(t){return e.deleteBox(i)}}})}),1)],1),e.limit>0&&e.boxCount>=e.limit?e._e():n("v-button",{attrs:{icon:"add"},on:{click:e.addBox}},[e._v("\n    "+e._s(e.buttonText)+"\n  ")])],1)},o=[],s=n("bd86"),a=(n("ac6a"),n("7514"),n("8db2")),l=n.n(a),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box",class:{closed:!e.open}},[n("div",{staticClass:"header",on:{click:function(t){return e.$emit("open")}}},[n("div",{staticClass:"start"},[n("v-icon",{staticClass:"handle",attrs:{name:"drag_handle"}}),e._l(e.headers,function(t,i){return n("v-ext-display",{key:i,attrs:{"interface-type":t.interface,options:e.fields[i].options,type:"null",name:t.field,value:e.data[i]}})})],2),n("div",{staticClass:"end"},[n("v-icon",{attrs:{name:e.open?"unfold_less":"unfold_more"}}),n("button",{staticClass:"delete",on:{click:function(t){return t.stopPropagation(),e.$emit("delete")}}},[n("v-icon",{attrs:{name:"delete_outline"}})],1)],1)]),n("div",{staticClass:"container"},[n("v-form",{attrs:{fields:e.fields,values:e.data},on:{"stage-value":function(t){return e.$emit("stage-value",{id:e.id,data:t})}}})],1)])},u=[],d=(n("c5f6"),{props:{id:{type:Number,required:!0},headers:{type:Object,required:!0},fields:{type:Object,required:!0},data:{type:Object,required:!0},open:{type:Boolean,default:!1}}}),c=d,f=(n("cf08"),n("2877")),p=Object(f["a"])(c,r,u,!1,null,"abf8799e",null),h=p.exports,b={components:{Box:h},mixins:[l.a],data:function(){return{open:null}},computed:{headers:function(){return _.pickBy(this.options.fields,function(e){return e.hasOwnProperty("preview")&&e.preview})},formFields:function(){var e=this.options.fields;return _.forOwn(e,function(t,n){e[n].hidden_detail=!1,e[n].hasOwnProperty("field")||(e[n].field=n)}),e},buttonText:function(){return this.options.buttonText||"Add Field"},limit:function(){return this.options.limit||0},boxCount:function(){return this.boxes.length},indexType:function(){var e=_.find(this.options.fields,{index:!0});return e&&e.field?e.field:null},dataType:function(){return this.options.dataType||"object"},boxes:{get:function(){if("value"==this.dataType){var e=[],t=_.keys(this.options.fields);return _.forOwn(this.value,function(n,i){var o;e.push((o={},Object(s["a"])(o,t[0],n),Object(s["a"])(o,t[1],i),o))}),e}return _.values(_.cloneDeep(this.value))||[]},set:function(e){for(var t={},n=0;n<e.length;n++){var i=null;if("value"==this.dataType){var o=_.chain(this.options.fields).pickBy(function(e){return!e.hasOwnProperty("index")||!e.index}).keys().value();i=e[n][o[0]]}else i=e[n];this.indexType?t[e[n][this.indexType]]=i:t[n]=i}this.$emit("input",t)}}},methods:{addBox:function(){var e={};_.forOwn(this.options.fields,function(t,n){e[n]=null}),this.open=this.boxes.length,this.boxes.push(e),this.boxes=this.boxes},deleteBox:function(e){_.remove(this.boxes,function(t,n){return n==e}),this.boxes=this.boxes},stageValue:function(e){var t=e.id,n=e.data;this.$set(this.boxes[t],n.field,n.value),this.boxes=this.boxes},openBox:function(e){this.open==e?this.open=null:this.open=e}}},v=b,x=Object(f["a"])(v,i,o,!1,null,"f4c5f2e2",null);t["default"]=x.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},c722:function(e,t,n){},cf08:function(e,t,n){"use strict";var i=n("c722"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-5a69805d.d7d413c6.js.map
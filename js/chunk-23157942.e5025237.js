(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23157942"],{"02f4":function(e,t,r){var i=r("4588"),n=r("be13");e.exports=function(e){return function(t,r){var a,o,l=String(n(t)),s=i(r),c=l.length;return s<0||s>=c?e?"":void 0:(a=l.charCodeAt(s),a<55296||a>56319||s+1===c||(o=l.charCodeAt(s+1))<56320||o>57343?e?l.charAt(s):a:e?l.slice(s,s+2):o-56320+(a-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var i=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?i(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var i=r("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var i=r("2aba"),n=r("32e9"),a=r("79e5"),o=r("be13"),l=r("2b4c"),s=r("520a"),c=l("species"),u=!a(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=l(e),d=!a(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),g=d?!a(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[c]=function(){return r}),r[f](""),!t}):void 0;if(!d||!g||"replace"===e&&!u||"split"===e&&!p){var v=/./[f],b=r(o,f,""[e],function(e,t,r,i,n){return t.exec===s?d&&!n?{done:!0,value:v.call(t,r,i)}:{done:!0,value:e.call(r,t,i)}:{done:!1}}),h=b[0],m=b[1];i(String.prototype,e,h),n(RegExp.prototype,f,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},"23c6":function(e,t,r){var i=r("2d95"),n=r("2b4c")("toStringTag"),a="Arguments"==i(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=o(t=Object(e),n))?r:a?i(t):"Object"==(l=i(t))&&"function"==typeof t.callee?"Arguments":l}},"28a5":function(e,t,r){"use strict";var i=r("aae3"),n=r("cb7c"),a=r("ebd6"),o=r("0390"),l=r("9def"),s=r("5f1b"),c=r("520a"),u=r("79e5"),p=Math.min,f=[].push,d="split",g="length",v="lastIndex",b=4294967295,h=!u(function(){RegExp(b,"y")});r("214f")("split",2,function(e,t,r,u){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!i(e))return r.call(n,e,t);var a,o,l,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,d=void 0===t?b:t>>>0,h=new RegExp(e.source,u+"g");while(a=c.call(h,n)){if(o=h[v],o>p&&(s.push(n.slice(p,a.index)),a[g]>1&&a.index<n[g]&&f.apply(s,a.slice(1)),l=a[0][g],p=o,s[g]>=d))break;h[v]===a.index&&h[v]++}return p===n[g]?!l&&h.test("")||s.push(""):s.push(n.slice(p)),s[g]>d?s.slice(0,d):s}:"0"[d](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,i){var n=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,n,i):m.call(String(n),r,i)},function(e,t){var i=u(m,e,this,t,m!==r);if(i.done)return i.value;var c=n(e),f=String(this),d=a(c,RegExp),g=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),x=new d(h?c:"^(?:"+c.source+")",v),B=void 0===t?b:t>>>0;if(0===B)return[];if(0===f.length)return null===s(x,f)?[f]:[];var J=0,y=0,w=[];while(y<f.length){x.lastIndex=h?y:0;var C,S=s(x,h?f:f.slice(y));if(null===S||(C=p(l(x.lastIndex+(h?0:y)),f.length))===J)y=o(f,y,g);else{if(w.push(f.slice(J,y)),w.length===B)return w;for(var D=1;D<=S.length-1;D++)if(w.push(S[D]),w.length===B)return w;y=J=C}}return w.push(f.slice(J)),w}]})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"520a":function(e,t,r){"use strict";var i=r("0bfb"),n=RegExp.prototype.exec,a=String.prototype.replace,o=n,l="lastIndex",s=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[l]||0!==t[l]}(),c=void 0!==/()??/.exec("")[1],u=s||c;u&&(o=function(e){var t,r,o,u,p=this;return c&&(r=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),s&&(t=p[l]),o=n.call(p,e),s&&o&&(p[l]=p.global?o.index+o[0].length:t),c&&o&&o.length>1&&a.call(o[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),e.exports=o},"5d6b":function(e,t,r){var i=r("e53d").parseInt,n=r("a1ce").trim,a=r("e692"),o=/^[-+]?0[xX]/;e.exports=8!==i(a+"08")||22!==i(a+"0x16")?function(e,t){var r=n(String(e),3);return i(r,t>>>0||(o.test(r)?16:10))}:i},"5f1b":function(e,t,r){"use strict";var i=r("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"61f7":function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n});r("28a5");function i(e){var t=!0;if((t&&!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))&&(t=!1),t&&18==e.length){for(var r=e.split(""),i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=[1,0,"X",9,8,7,6,5,4,3,2],a=0,o=0,l=0,s=0;s<17;s++)o=r[s],l=i[s],a+=o*l;n[a%11]!=r[17]&&(t=!1)}return t}function n(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}},"6b54":function(e,t,r){"use strict";r("3846");var i=r("cb7c"),n=r("0bfb"),a=r("9e1e"),o="toString",l=/./[o],s=function(e){r("2aba")(RegExp.prototype,o,e,!0)};r("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?n.call(e):void 0)}):l.name!=o&&s(function(){return l.call(this)})},7445:function(e,t,r){var i=r("63b6"),n=r("5d6b");i(i.G+i.F*(parseInt!=n),{parseInt:n})},9621:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{title:"修改参保信息",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[r("a-card",{attrs:{bordered:!1}},[r("a-form",{attrs:{form:e.form}},[e.visible.persondetail.SBBeginDate?[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"社保开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[r("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBBeginDate",{initialValue:e.visible.persondetail.SBBeginDate,rules:e.AFormImportRules.SBBeginDate}],expression:"['SBBeginDate',{initialValue: visible.persondetail.SBBeginDate,rules:AFormImportRules.SBBeginDate }]"}],attrs:{format:"YYYY-MM-DD"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"工资",labelCol:{span:10},wrapperCol:{span:14}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Salary",{rules:e.AFormImportRules.Salary}],expression:"['Salary',{rules:AFormImportRules.Salary }]"}],attrs:{type:"number",step:"0.01"}})],1)],1)],1)]:e._e(),e.visible.persondetail.GJJBeginDate?[e.visible.persondetail.GJJBeginDate&&e.visible.persondetail.SBBeginDate?r("a-divider",{attrs:{dashed:""}},[e._v("公积金信息")]):e._e(),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"公积金开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[r("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBeginDate",{initialValue:e.visible.persondetail.GJJBeginDate,rules:e.AFormImportRules.GJJBeginDate}],expression:"['GJJBeginDate',{initialValue: visible.persondetail.GJJBeginDate,rules:AFormImportRules.GJJBeginDate }]"}],attrs:{format:"YYYY-MM-DD"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"公积金基数",labelCol:{span:10},wrapperCol:{span:14}}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBase",{rules:e.AFormImportRules.GJJBase}],expression:"['GJJBase',{ rules:AFormImportRules.GJJBase }]"}],attrs:{type:"number"}})],1)],1)],1),r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{span:12}},[r("a-form-item",{attrs:{label:"公积金企业比例",labelCol:{span:10},wrapperCol:{span:14}}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBili",{rules:e.AFormImportRules.Bili}],expression:"['GJJBili',{rules:AFormImportRules.Bili }]"}],attrs:{placeholder:"请选择比例",allowClear:!0}},[r("span",{staticStyle:{"font-weight":"600",color:"#aaa"},attrs:{slot:"suffixIcon"},slot:"suffixIcon"},[e._v("%")]),e._l(e.gjjBLdata,function(t){return r("a-select-option",{key:t.text},[e._v(e._s(t.text))])})],2)],1)],1),r("a-col",{attrs:{span:12}})],1)]:e._e()],2)],1),r("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[r("ul",[r("li",[e._v("社保信息修改只修改在报增中状态的社保")]),r("li",[e._v("公积金信息修改只修改在报增中状态的公积金")]),r("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),r("li",[e._v("系统中增员派单信息在客服受理前可自行修改，受理后若对派单信息做调整请联系专属客服")])])]),r("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[r("a-button",{on:{click:e.onClose}},[e._v("取消")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")]),null==e.visible.id?r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleSubmit("next")}}},[e._v("提交并继续增员")]):e._e()],1)],1)},n=[],a=(r("6b54"),r("7514"),r("28a5"),r("e814")),o=r.n(a),l=(r("61f7"),r("c32d")),s=r.n(l),c=r("b775"),u=(r("1c46"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,persondetail:{IDCard:"",PName:""}},gjjBLdata:[],form:this.$form.createForm(this),AFormImportRules:{SBBeginDate:[{required:!0,transform:this.beginDate,message:"请社保开始日期"}],GJJBeginDate:[{required:!0,transform:this.beginDate,message:"请公积金开始日期"}],Salary:[{required:!0,message:"请输入工资"},{validator:this.checkPrice}],GJJBase:[{required:!0,message:"请输入公积金基数"},{validator:this.checkPrice}],Bili:[{required:!0,message:"请选择公积金比例"}]}}},watch:{visible:function(e,t){e.show&&null!=e.id?(null!=e.persondetail.SBBeginDate&&(e.persondetail.SBBeginDate=s()(e.persondetail.SBBeginDate)),null!=e.persondetail.GJJBeginDate&&(e.persondetail.GJJBeginDate=s()(e.persondetail.GJJBeginDate)),e.persondetail.CityCode=[e.persondetail.CityCode.substring(0,2),e.persondetail.CityCode],e.persondetail.GJJBiliC&&e.persondetail.GJJBiliP&&(e.persondetail.gjjbili=e.persondetail.GJJBiliC+"+"+e.persondetail.GJJBiliP)):e.persondetail={CityCode:["13","1301"]},this.onCityChange(e.persondetail.CityCode)},show:function(e,t){var r=this;e.show&&r.init(),null!=e.id&&null===e.persondetail?c["a"].post("/api/Shebao/Order/Detail",{SBOrderGuid:e.id}).then(function(t){var i=t;0===i.code&&(e.persondetail=i.data.detail,r.visible=e)}).catch(function(e){console.log(e)}):r.visible=e}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){},handleSubmit:function(e){var t=this;this.form.validateFields(function(r,i){if(!r){var n=i;n.SBOrderGuid=t.visible.id,i.GJJBili&&(n.GJJBiliC=o()(i.GJJBili.split("+")[0]),n.GJJBiliP=o()(i.GJJBili.split("+")[1])),i.GJJBeginDate&&(n.GJJBeginDate=s()(i.GJJBeginDate).format("YYYY-MM-01")),i.SBBeginDate&&(n.SBBeginDate=s()(i.SBBeginDate).format("YYYY-MM-01")),c["a"].post("/api/Shebao/Order/EditShebao",n).then(function(r){var i=r;i.code>0?t.$message.error(i.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):t.onClose(),t.$message.success(i.msg))}).catch(function(e){console.log(e)})}})},checkPrice:function(e,t,r){var i=/^[0-9]*\.?[0-9]{0,2}$/;!t||t>0&&i.test(t)?r():r("为空或者大于零且小数最多两位")},filter:function(e,t){return t.some(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},onCityChange:function(e,t){var r=this;c["a"].post("/api/Dim/Region/GJJBili",{CityCode:e[1]}).then(function(e){var i=e;if(0===i.code&&(r.gjjBLdata=i.data.bili,t)){var n=r.gjjBLdata.find(function(e){return e.text===r.form.getFieldValue("GJJBili")});n?r.form.setFieldsValue({GJJBili:r.form.getFieldValue("GJJBili")}):r.form.setFieldsValue({GJJBili:void 0})}}).catch(function(e){console.log(e)})},beginDate:function(e){if(e){var t=e.startOf("month").toString();return t}}}}),p=u,f=r("2877"),d=Object(f["a"])(p,i,n,!1,null,null,null);t["default"]=d.exports},a1ce:function(e,t,r){var i=r("63b6"),n=r("25eb"),a=r("294c"),o=r("e692"),l="["+o+"]",s="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e,t,r){var n={},l=a(function(){return!!o[e]()||s[e]()!=s}),c=n[e]=l?t(f):o[e];r&&(n[r]=c),i(i.P+i.F*l,"String",n)},f=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},aae3:function(e,t,r){var i=r("d3f4"),n=r("2d95"),a=r("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,r){"use strict";var i=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b9e9:function(e,t,r){r("7445"),e.exports=r("584a").parseInt},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,r){e.exports=r("b9e9")},ebd6:function(e,t,r){var i=r("cb7c"),n=r("d8e8"),a=r("2b4c")("species");e.exports=function(e,t){var r,o=i(e).constructor;return void 0===o||void 0==(r=i(o)[a])?t:n(r)}}}]);
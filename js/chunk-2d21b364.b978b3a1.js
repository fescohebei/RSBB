(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b364"],{bf8b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"减员",visible:this.visible.show,closable:!1,maskClosable:!1,width:600}},[a("a-table",{attrs:{columns:e.columns,dataSource:this.show.selectedRows,bordered:!1,pagination:{pageSize:5},size:"middle"}}),a("a-divider",[e._v("社保信息")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保截止日期",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",e.AFormImportRules.SBEndDate],expression:"['SBEndDate',AFormImportRules.SBEndDate]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.sbEndDateChange}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申领失业金",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["reqShiyejin"],expression:"['reqShiyejin']"}],attrs:{checkedChildren:"是",unCheckedChildren:"否",defaultunChecked:""}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"离职原因",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["lzReason",e.AFormImportRules.lzReason],expression:"['lzReason',AFormImportRules.lzReason]"}]},[a("a-select-option",{attrs:{value:"合同到期解除"}},[e._v("合同到期解除")]),a("a-select-option",{attrs:{value:"个人辞职"}},[e._v("个人辞职")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:19,offset:5}},[a("a-form-item",{attrs:{labelCol:{span:0},wrapperCol:{span:24}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["lzRemarks"],expression:"['lzRemarks']"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[e._v("增减员直接派送至客服与系统中增减员同时存在时，将以直接派送到客服的数据为准")])]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("减员派单不允许修改，若需修改请联系专属客服")]),a("li",[e._v("系统中不允许单减某个险种，若需单减某个险种请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},s=[],o=a("bd86"),l=(a("ac6a"),a("b775")),n=[{title:"员工姓名",dataIndex:"PName"},{title:"证件号码",dataIndex:"IDCard"}],i={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1},columns:n,form:this.$form.createForm(this),AFormImportRules:{lzReason:{rules:[{required:!0,message:"请选择离职原因"}]},SBEndDate:{rules:[{required:!0,message:"请选择社保截止日期"}]}}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t})},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh()},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;r.Key=[],console.log(e.show.selectedRows),e.show.selectedRows.forEach(function(e){r.Key.push(e.key)}),l["a"].post("/api/Shebao/Order/Remove",a).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.$message.success(a.msg),e.onClose())}).catch(function(e){console.log(e)})}})},sbEndDateChange:function(e){if(e){var t=e.endOf("month");this.form.setFields(Object(o["a"])({},"SBEndDate",{value:t,errors:null}))}}}},c=i,d=a("2877"),u=Object(d["a"])(c,r,s,!1,null,null,null);t["default"]=u.exports}}]);
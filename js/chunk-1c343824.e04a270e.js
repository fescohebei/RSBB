(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c343824","chunk-26f4f825","chunk-2d21b364","chunk-2d0c7991"],{3263:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:e.onClose}},[a("template",{slot:"title"},[e._v("\n    基本信息\n    "),e.persondetail.Status<=20?a("a-button",{staticStyle:{float:"right","margin-left":"8px"},attrs:{size:"small",type:"danger"},on:{click:function(t){return e.removeSingle(e.persondetail)}}},[e._v("减员")]):e._e(),10==e.persondetail.Status?a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small",icon:"form"},on:{click:e.edit}},[e._v("修改基本信息")]):e._e()],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("姓名:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.persondetail.PName))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("身份证号:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.persondetail.IDCard))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("手机号码:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.persondetail.rzMobile))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("电子信箱:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.persondetail.rzEmail))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("派单日期:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.changeDate(e.persondetail.PaiDanDate)))]),a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("参保城市:")]),a("a-col",{attrs:{span:6}},[e._v(e._s(e.city[e.persondetail.CityCode]))])],1),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[e._v("备注:")]),a("a-col",{attrs:{span:18}},[e._v(e._s(e.persondetail.Remark))])],1),a("a-divider",{attrs:{orientation:"left"}},[e._v("社保信息")]),a("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[a("a-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[(10==e.persondetail.Status||20==e.persondetail.Status)&&e.dataSource.length<5?a("a-button",{staticStyle:{float:"left","margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.SBgjjLonelyAdd}},[e._v("新增")]):e._e(),10==e.persondetail.Status&&(e.persondetail.GJJBeginDate||e.persondetail.SBBeginDate)?a("a-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"small"},on:{click:e.shebaogjjEdit}},[e._v("修改")]):e._e()],1)],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"SBGUID"},scopedSlots:e._u([{key:"sbType",fn:function(t){return a("a",{on:{click:function(a){return e.detail(t)}}},[e._v("\n      "+e._s(e.map.sbType[t.sbType])+"\n      "),50==t.sbType?[e._v("\n        ("+e._s(t.Bili)+")\n      ")]:e._e()],2)}},{key:"status",fn:function(t,i){return[a("a-tag",{attrs:{color:e.map.OrderStatusColor[i.BOrderItemStatus]}},[e._v(e._s(e.map.ShebaoOrderItemStatus[i.BOrderItemStatus]))])]}},{key:"action",fn:function(t){return[a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n          更多\n          "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[10==t.BOrderItemStatus||30==t.BOrderItemStatus?a("a-menu-item",{on:{click:function(a){return e.changelonely(t)}}},[e._v("修改")]):e._e(),e.persondetail.Status<30&&15==t.BOrderItemStatus?a("a-menu-item",{on:{click:function(a){return e.reapplyLonely(t)}}},[e._v("重新申报")]):e._e(),15!=t.BOrderItemStatus?a("a-menu-item",{on:{click:function(a){return e.removelonely(t)}}},[e._v("单减")]):e._e()],1)],1)]}}])}),a("drawer-shebao-detail",{attrs:{show:e.drawer.detail}}),a("drawer-person-base-edit",{attrs:{show:e.drawer.edit,refresh:e.init}}),a("drawer-person-remove",{attrs:{show:e.drawer.remove,refresh:e.init}}),a("drawer-shebaogjj-edit",{attrs:{show:e.drawer.shebaogjjedit,refresh:e.init}}),a("drawer-sbgjj-lonely-edit",{attrs:{show:e.drawer.sbgjjlonelyedit,refresh:e.init}}),a("drawer-sbgjj-modify-remove",{attrs:{show:e.drawer.sbgjjmodifyremove,refresh:e.init}}),a("drawer-sbgjj-lonely-add",{attrs:{show:e.drawer.sbgjjlonelyadd,refresh:e.init}})],2)},r=[],s=a("5176"),o=a.n(s),l=(a("ac6a"),a("b775")),n=a("b00c"),d=a("b7f6"),c=a("a426"),u=a("9621"),p=a("bf8b"),m=a("590b"),h=a("50ff"),b=a("54f4"),f=a("c32d"),v=a.n(f),g=[{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",dataIndex:"Startime"},{title:"起做日期",dataIndex:"ActStartime"},{title:"结束日期",dataIndex:"SBEndDate"},{title:"工资",dataIndex:"Jishu"},{title:"状态",scopedSlots:{customRender:"status"}},{title:"操作",scopedSlots:{customRender:"action"}}],y={components:{DrawerShebaoDetail:d["default"],DrawerPersonBaseEdit:c["default"],DrawerPersonRemove:p["default"],DrawerShebaogjjEdit:u["default"],DrawerSbgjjLonelyEdit:m["default"],DrawerSbgjjModifyRemove:h["default"],DrawerSbgjjLonelyAdd:b["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{}},columns:g,dataSource:[],persondetail:{},form:this.$form.createForm(this),drawer:{detail:{show:!1},remove:{show:!1},edit:{show:!1},shebaogjjedit:{show:!1},sbgjjlonelyedit:{show:!1},sbgjjmodifyremove:{show:!1},sbgjjlonelyadd:{show:!1}},modalform:{shebaoform:{visible:!1}},AFormImportRules:{Jishu:[{required:!0,message:"请输入基数"}],Startime:[{required:!0,message:"请社保开始月份"}]},map:{ShebaoOrderItemStatus:{},sbType:{},OrderStatusColor:{}},city:{}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;l["a"].post("/api/Shebao/Order/Detail",{SBOrderGuid:e.show.id}).then(function(t){var a=t;0===a.code&&(a.data.shebao.forEach(function(e){e.Startime=v()(e.Startime).format("YYYY-MM-DD"),e.ActStartime=e.ActStartime?v()(e.ActStartime).format("YYYY-MM-DD"):"",e.SBEndDate=e.SBEndDate?v()(e.SBEndDate).format("YYYY-MM-DD"):""}),e.dataSource=a.data.shebao,e.persondetail=a.data.detail)}).catch(function(e){console.log(e)}),l["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then(function(t){var a=t;0===a.code&&(e.city=a.data.city)}).catch(function(e){console.log(e)}),l["a"].post("/api/Dim/Enum/EnumDecode",{Names:["ShebaoOrderItemStatus","sbType","Action","ActionType","OperatorType"]}).then(function(t){var a=t;0===a.code&&(e.map.ShebaoOrderItemStatus=a.data.ShebaoOrderItemStatus,e.map.sbType=a.data.sbType,e.map.OrderStatusColor=n["a"].EnumsOrder.OrderStatusColor,e.map.Action=a.data.Action,e.map.ActionType=a.data.ActionType,e.map.OperatorType=a.data.OperatorType,console.log(e.map))}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.dataSource=[],this.persondetail={},this.refresh()},detail:function(e){this.drawer.detail={show:!0,id:e.SBGUID,title:this.map.sbType[e.sbType]+"险种日志",map:this.map,father:e}},edit:function(){this.drawer.edit={show:!0,id:this.show.id,persondetail:this.persondetail}},removeSingle:function(e){var t=[];e.key=this.visible.id,t.push(e),this.drawer.remove={show:!0,selectedRows:t}},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var i=a;i.SBOrderGuid=e.visible.id,i.SBOrderItemGuid=e.modalform.shebaoform.sbitem.SBOrderItemGuid,l["a"].post("/api/Shebao/Order/ShebaoEdit",i).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.$message.success(a.msg),e.modalform.shebaoform.visible=!1,e.init())}).catch(function(e){console.log(e)})}})},shebaogjjEdit:function(){this.drawer.shebaogjjedit={show:!0,id:this.show.id,persondetail:this.persondetail}},changeDate:function(e){return v()(e).format("YYYY-MM-DD")},changelonely:function(e){if(10==e.BOrderItemStatus)this.drawer.sbgjjlonelyedit={show:!0,id:this.show.id,detail:this.persondetail,lonelydetail:e,sbType:e.sbType,sbID:e.SBGUID,doneType:"change",title:"修改参保信息"};else{var t=[],a=o()({},this.persondetail);a.key=this.visible.id,t.push(a),e.SBEndDate?e.SBEndDate=v()(e.SBEndDate):e.SBEndDate=null,this.drawer.sbgjjmodifyremove={show:!0,title:"派减中"+this.map.sbType[e.sbType]+"修改",type:"modify",id:this.show.id,detail:this.persondetail,sbdetail:e,sbID:e.SBGUID,selectedRows:t}}},reapplyLonely:function(e){this.drawer.sbgjjlonelyedit={show:!0,id:this.show.id,detail:this.persondetail,lonelydetail:e,sbType:e.sbType,sbID:e.SBGUID,doneType:"reapply",title:"重新申报"}},SBgjjLonelyAdd:function(){var e=this.map.sbType,t=[];for(var a in e){var i={};i.key=a,i.text=e[a],t.push(i)}this.drawer.sbgjjlonelyadd={show:!0,sbType:t,id:this.show.id,detail:this.persondetail}},removelonely:function(e){var t=[],a=o()({},this.persondetail);a.key=this.visible.id,t.push(a),e.SBEndDate?e.SBEndDate=v()(e.SBEndDate):e.SBEndDate=null,this.drawer.sbgjjmodifyremove={show:!0,title:"单独派减"+this.map.sbType[e.sbType],type:"remove",id:this.show.id,detail:this.persondetail,sbdetail:e,sbID:e.SBGUID,selectedRows:t}}}},w=y,S=a("2877"),C=Object(S["a"])(w,i,r,!1,null,null,null);t["default"]=C.exports},"50ff":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:this.visible.title,visible:this.visible.show,closable:!1,maskClosable:!1,width:600}},[a("a-table",{attrs:{columns:e.columns,dataSource:this.show.selectedRows,bordered:!1,pagination:{pageSize:5},size:"middle"}}),a("a-divider",[e._v("社保信息")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保截止日期",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",{rules:e.AFormImportRules.SBEndDate}],expression:"['SBEndDate',{rules:AFormImportRules.SBEndDate}]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.sbEndDateChange}})],1)],1)],1)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[e._v("增减员直接派送至客服与系统中增减员同时存在时，将以直接派送到客服的数据为准")])]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("减员派单不允许修改，若需修改请联系专属客服")]),a("li",[e._v("系统中不允许单减某个险种，若需单减某个险种请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],s=a("bd86"),o=a("b775"),l=[{title:"员工姓名",dataIndex:"PName"},{title:"证件号码",dataIndex:"IDCard"}],n={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,sbdetail:{SBEndDate:""}},columns:l,form:this.$form.createForm(this),AFormImportRules:{SBEndDate:[{required:!0,message:"请选择社保截止日期"}]}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t})},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},handleSubmit:function(){var e=this,t=this,a="";this.form.validateFields(function(i,r){if(!i){var s=r;s.SBOrderItemGuid=e.visible.sbID,s.SBEndDate=moment(r.SBEndDate).format("YYYY-MM-DD"),"modify"==t.visible.type&&(a="/api/Shebao/Order/EditRemoveShebaoItem"),"remove"==t.visible.type&&(a="/api/Shebao/Order/RemoveItem"),o["a"].post(a,s).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.$message.success(a.msg),r.SBEndDate="",t.onClose())}).catch(function(e){console.log(e)})}})},sbEndDateChange:function(e){if(e){var t=e.endOf("month");this.form.setFields(Object(s["a"])({},"SBEndDate",{value:t,errors:null}))}}}},d=n,c=a("2877"),u=Object(c["a"])(d,i,r,!1,null,null,null);t["default"]=u.exports},5176:function(e,t,a){e.exports=a("51b6")},"54f4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"单增参保信息",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sbType",{rules:e.AFormImportRules.sbType}],expression:"['sbType',{rules:AFormImportRules.sbType }]"}],attrs:{placeholder:"请选择社保类型",allowClear:!0},on:{change:e.sbChange}},e._l(e.visible.sbType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:50!=e.visible.sbType?"社保开始日期":"公积金开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{rules:e.AFormImportRules.SBBeginDate}],expression:"['BeginDate',{rules:AFormImportRules.SBBeginDate }]"}],attrs:{format:"YYYY-MM-DD"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:50!=e.visible.sbType?"工资":"公积金基数",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Salary",{rules:e.AFormImportRules.Salary}],expression:"['Salary',{rules:AFormImportRules.Salary }]"}],attrs:{type:"number",step:"0.01"}})],1)],1)],1),e.chooseSbType?[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金企业比例",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Bili",{rules:e.AFormImportRules.Bili}],expression:"['Bili',{rules:AFormImportRules.Bili }]"}],attrs:{placeholder:"请选择比例",allowClear:!0}},[a("span",{staticStyle:{"font-weight":"600",color:"#aaa"},attrs:{slot:"suffixIcon"},slot:"suffixIcon"},[e._v("%")]),e._l(e.gjjBLdata,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{span:12}})],1)]:e._e()],2)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[e._v("社保信息修改只修改在报增中状态的社保")]),a("li",[e._v("公积金信息修改只修改在报增中状态的公积金")]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("系统中增员派单信息在客服受理前可自行修改，受理后若对派单信息做调整请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],s=(a("6b54"),a("7514"),a("28a5"),a("e814")),o=a.n(s),l=(a("61f7"),a("c32d")),n=a.n(l),d=a("b775"),c=(a("1c46"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,lonelydetail:{Startime:""}},gjjBLdata:[],form:this.$form.createForm(this),AFormImportRules:{sbType:[{required:!0,message:"请选择"}],SBBeginDate:[{required:!0,transform:this.beginDate,message:"请社保开始日期"}],GJJBeginDate:[{required:!0,transform:this.beginDate,message:"请公积金开始日期"}],Salary:[{required:!0,message:"请输入工资"},{validator:this.checkPrice}],GJJBase:[{required:!0,message:"请输入公积金基数"},{validator:this.checkPrice}],Bili:[{required:!0,message:"请选择公积金比例"}]},chooseSbType:!1}},watch:{visible:function(e,t){e.show&&null!=e.id?(e.detail.CityCode=[e.detail.CityCode.substring(0,2),e.detail.CityCode],e.detail.GJJBiliC&&e.detail.GJJBiliP&&(e.detail.gjjbili=e.detail.GJJBiliC+"+"+e.detail.GJJBiliP)):e.detail={CityCode:["13","1301"]},this.onCityChange(e.detail.CityCode)},show:function(e,t){var a=this;e.show&&(a.init(),a.visible=e)}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){},handleSubmit:function(e){var t=this;this.form.validateFields(function(e,a){if(console.log(t.visible.detail),!e){var i=a;i.SBOrderGuid=t.visible.detail.SBOrderGuid,a.Bili&&(i.GJJBiliC=o()(a.Bili.split("+")[0]),i.GJJBiliP=o()(a.Bili.split("+")[1])),a.BeginDate&&(i.BeginDate=n()(a.BeginDate).format("YYYY-MM-01")),d["a"].post("/api/Shebao/Order/AddItem",i).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.onClose(),t.$message.success(a.msg))}).catch(function(e){console.log(e)})}})},checkPrice:function(e,t,a){var i=/^[0-9]*\.?[0-9]{0,2}$/;!t||t>0&&i.test(t)?a():a("为空或者大于零且小数最多两位")},filter:function(e,t){return t.some(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},onCityChange:function(e,t){var a=this;d["a"].post("/api/User/Service/GJJBili",{CityCode:e[1]}).then(function(e){var i=e;if(0===i.code&&(a.gjjBLdata=i.data.bili,t)){var r=a.gjjBLdata.find(function(e){return e.text===a.form.getFieldValue("GJJBili")});r?a.form.setFieldsValue({GJJBili:a.form.getFieldValue("GJJBili")}):a.form.setFieldsValue({GJJBili:void 0})}}).catch(function(e){console.log(e)})},beginDate:function(e){if(console.log(e),e){var t=e.startOf("month").toString();return console.log(t),t}},sbChange:function(e){this.chooseSbType="50"==e}}}),u=c,p=a("2877"),m=Object(p["a"])(u,i,r,!1,null,null,null);t["default"]=m.exports},"590b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:this.visible.title,placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:50!=e.visible.sbType?"社保开始日期":"公积金开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{initialValue:e.visible.lonelydetail.Startime,rules:e.AFormImportRules.SBBeginDate}],expression:"['BeginDate',{initialValue: visible.lonelydetail.Startime,rules:AFormImportRules.SBBeginDate }]"}],attrs:{format:"YYYY-MM-DD"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:50!=e.visible.sbType?"工资":"公积金基数",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Salary",{rules:e.AFormImportRules.Salary}],expression:"['Salary',{rules:AFormImportRules.Salary }]"}],attrs:{type:"number",step:"0.01"}})],1)],1)],1),50==e.visible.sbType?[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金企业比例",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Bili",{rules:e.AFormImportRules.Bili}],expression:"['Bili',{rules:AFormImportRules.Bili }]"}],attrs:{placeholder:"请选择比例",allowClear:!0}},[a("span",{staticStyle:{"font-weight":"600",color:"#aaa"},attrs:{slot:"suffixIcon"},slot:"suffixIcon"},[e._v("%")]),e._l(e.gjjBLdata,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{span:12}})],1)]:e._e()],2)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[e._v("社保信息修改只修改在报增中状态的社保")]),a("li",[e._v("公积金信息修改只修改在报增中状态的公积金")]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("系统中增员派单信息在客服受理前可自行修改，受理后若对派单信息做调整请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],s=(a("6b54"),a("7514"),a("28a5"),a("e814")),o=a.n(s),l=(a("61f7"),a("c32d")),n=a.n(l),d=a("b775"),c=(a("1c46"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,lonelydetail:{Startime:""}},gjjBLdata:[],form:this.$form.createForm(this),AFormImportRules:{SBBeginDate:[{required:!0,transform:this.beginDate,message:"请社保开始日期"}],GJJBeginDate:[{required:!0,transform:this.beginDate,message:"请公积金开始日期"}],Salary:[{required:!0,message:"请输入工资"},{validator:this.checkPrice}],GJJBase:[{required:!0,message:"请输入公积金基数"},{validator:this.checkPrice}],Bili:[{required:!0,message:"请选择公积金比例"}]}}},watch:{visible:function(e,t){e.show&&null!=e.id?(null!=e.lonelydetail.Startime&&(e.lonelydetail.Startime=n()(e.lonelydetail.Startime)),e.detail.CityCode=[e.detail.CityCode.substring(0,2),e.detail.CityCode],e.detail.GJJBiliC&&e.detail.GJJBiliP&&(e.detail.gjjbili=e.detail.GJJBiliC+"+"+e.detail.GJJBiliP)):e.detail={CityCode:["13","1301"]},this.onCityChange(e.detail.CityCode)},show:function(e,t){var a=this;e.show&&(a.init(),a.visible=e)}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){},handleSubmit:function(e){var t=this,a=this,i="";this.form.validateFields(function(e,r){if(console.log(r),!e){var s=r;s.SBOrderItemGuid=a.visible.sbID,r.Bili&&(s.GJJBiliC=o()(r.Bili.split("+")[0]),s.GJJBiliP=o()(r.Bili.split("+")[1])),r.BeginDate&&(s.BeginDate=n()(r.BeginDate).format("YYYY-MM-01")),"change"==t.visible.doneType&&(i="/api/Shebao/Order/EditShebaoItem"),"reapply"==t.visible.doneType&&(i="/api/Shebao/Order/ReAddItem"),d["a"].post(i,s).then(function(e){var t=e;t.code>0?a.$message.error(t.msg):(a.onClose(),a.$message.success(t.msg))}).catch(function(e){console.log(e)})}})},checkPrice:function(e,t,a){var i=/^[0-9]*\.?[0-9]{0,2}$/;!t||t>0&&i.test(t)?a():a("为空或者大于零且小数最多两位")},filter:function(e,t){return t.some(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},onCityChange:function(e,t){var a=this;d["a"].post("/api/User/Service/GJJBili",{CityCode:e[1]}).then(function(e){var i=e;if(0===i.code&&(a.gjjBLdata=i.data.bili,t)){var r=a.gjjBLdata.find(function(e){return e.text===a.form.getFieldValue("GJJBili")});r?a.form.setFieldsValue({GJJBili:a.form.getFieldValue("GJJBili")}):a.form.setFieldsValue({GJJBili:void 0})}}).catch(function(e){console.log(e)})},beginDate:function(e){if(console.log(e),e){var t=e.startOf("month").toString();return console.log(t),t}}}}),u=c,p=a("2877"),m=Object(p["a"])(u,i,r,!1,null,null,null);t["default"]=m.exports},a426:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"修改基本信息",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:10},wrapperCol:{span:14}}},[e._v("\n            "+e._s(e.visible.persondetail.PName)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:10},wrapperCol:{span:14}}},[e._v("\n            "+e._s(e.visible.persondetail.IDCard)+"\n          ")])],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"手机号码",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{initialValue:e.visible.persondetail.rzMobile,rules:e.AFormImportRules.Mobile}],expression:"['Mobile',{initialValue:visible.persondetail.rzMobile,rules:AFormImportRules.Mobile }]"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"电子信箱",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{initialValue:e.visible.persondetail.rzEmail,rules:e.AFormImportRules.Email}],expression:"['Email',{initialValue:visible.persondetail.rzEmail,rules:AFormImportRules.Email }]"}]})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"参保城市",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{initialValue:e.visible.persondetail.CityCode,rules:e.AFormImportRules.CityCode}],expression:"['CityCode',{initialValue:visible.persondetail.CityCode ,rules:AFormImportRules.CityCode}]"}],attrs:{autocomplete:"new-password",options:e.dimCity,showSearch:{filter:e.filter},placeholder:"请选择"},on:{change:e.onCityChange}})],1)],1),a("a-col",{attrs:{span:12}})],1),a("a-divider",{attrs:{dashed:""}},[e._v("备注")]),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{labelCol:{span:0},wrapperCol:{span:24}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{initialValue:e.visible.persondetail.Remark}],expression:"['Remark',{initialValue:visible.persondetail.Remark }]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[e._v("增减员直接派送至客服与系统中增减员同时存在时，将以直接派送到客服的数据为准")])])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],s=a("61f7"),o=(a("c32d"),a("b775")),l=(a("1c46"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,persondetail:{IDCard:"",PName:""}},dimCity:[],gjjBLdata:[],form:this.$form.createForm(this),AFormImportRules:{PName:[{required:!0,message:"请输入姓名"}],IDCard:[{required:!0,message:"请输入身份证号"},{validator:this.handleConfirmIDCard}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.handleConfirmMobile}],Email:[{required:!1,message:"请输入电子信箱"},{type:"email",message:"邮箱格式不正确!"}],CityCode:[{required:!0,message:"请选择参保城市"}]}}},watch:{visible:function(e,t){e.show&&null!=e.id?e.persondetail.CityCode=[e.persondetail.CityCode.substring(0,2),e.persondetail.CityCode]:e.persondetail={CityCode:["13","1301"]}},show:function(e,t){var a=this;e.show&&a.init(),null!=e.id&&null===e.persondetail?o["a"].post("/api/Shebao/Order/Detail",{SBOrderGuid:e.id}).then(function(t){var i=t;0===i.code&&(e.persondetail=i.data.detail,a.visible=e)}).catch(function(e){console.log(e)}):a.visible=e}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var e=this;o["a"].post("/api/User/Service/ComServiceTree").then(function(t){var a=t;0===a.code&&(e.dimCity=a.data.tree)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this;this.form.validateFields(function(e,a){if(!e){var i=a;i.SBOrderGuid=t.visible.id,i.CityCode=i.CityCode[i.CityCode.length-1],o["a"].post("/api/Shebao/Order/EditPerson",i).then(function(e){var a=e;a.code>0?t.$message.error(a.msg):(t.onClose(),t.$message.success(a.msg))}).catch(function(e){console.log(e)})}})},handleConfirmIDCard:function(e,t,a){!t||Object(s["a"])(t)?a():a("身份证号不符合规则！")},handleConfirmMobile:function(e,t,a){!t||Object(s["b"])(t)?a():a("手机号码不符合规则！")},filter:function(e,t){return t.some(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},onCityChange:function(e,t){}}}),n=l,d=a("2877"),c=Object(d["a"])(n,i,r,!1,null,null,null);t["default"]=c.exports},b00c:function(e,t,a){"use strict";var i={OrderStatus:{10:"增员中",20:"增员已受理",30:"减员中",40:"减员已受理",50:"已报减"},OrderStatusColor:{10:"blue",20:"green",30:"yellow",40:"red"},sbType:{10:"养老",20:"失业",30:"工伤",40:"医疗",50:"公积金"},sbChangeType:{1:"派入",2:"修改",3:"减员"},ShebaoOrderItemStatus:{10:"申报中",20:"申报已受理",30:"报减中",40:"报减已受理"}},r={BillStatus:{0:"待确认",1:"已确认",2:"回退"},BillStatusColor:{0:"blue",1:"green",2:"red"}};t["a"]={EnumsOrder:i,EnumsShebaoBill:r}},b7f6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{message:"",visible:this.visible.show,width:350,destroyOnClose:!0,closable:!1,title:e.visible.title},on:{close:e.onClose}},[a("a-timeline",e._l(e.dataSource,function(t){return a("a-timeline-item",{key:t.LogGuid,attrs:{color:"green"}},[1==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":报增")]):e._e(),2==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":"+e._s("1"==t.Action?"报增中对"+e.visible.map.sbType[e.visible.father.sbType]+"进行修改":"报减中对"+e.visible.map.sbType[e.visible.father.sbType]+"进行修改"))]):e._e(),3==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":报减")]):e._e(),4==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":重新报增")]):e._e(),-1==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":"+e._s("1"==t.Action?"客服受理"+e.visible.map.sbType[e.visible.father.sbType]+"报增":"客服受理"+e.visible.map.sbType[e.visible.father.sbType]+"报减"))]):e._e(),-2==t.ActionType?a("p",[e._v(e._s(t.LogTime)+":"+e._s("1"==t.Action?"客服拒绝"+e.visible.map.sbType[e.visible.father.sbType]+"报增":"客服拒绝"+e.visible.map.sbType[e.visible.father.sbType]+"报减")),a("br"),e._v(e._s(t.Remarks))]):e._e()])}),1)],1)},r=[],s=a("b775"),o=(a("b00c"),a("c32d"),{name:"DrawerPersonDetail",props:["show"],data:function(){return{visible:{show:!1,id:{}},dataSource:[],drawer:{detail:{show:!1}}}},created:function(){var e=this;this.$watch("show",function(t,a){console.log(t),e.visible=t,console.log(e.visible),e.visible.show&&e.init()})},methods:{init:function(){var e=this;s["a"].post("/api/Shebao/Order/OrderItemLogs",{SBOrderItemGuid:e.visible.id}).then(function(t){var a=t;0===a.code&&(e.dataSource=a.data.rows)}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1}}}),l=o,n=a("2877"),d=Object(n["a"])(l,i,r,!1,null,null,null);t["default"]=d.exports},bf8b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"减员",visible:this.visible.show,closable:!1,maskClosable:!1,width:600}},[a("a-table",{attrs:{columns:e.columns,dataSource:this.show.selectedRows,bordered:!1,pagination:{pageSize:5},size:"middle"}}),a("a-divider",[e._v("社保信息")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保截止日期",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",e.AFormImportRules.SBEndDate],expression:"['SBEndDate',AFormImportRules.SBEndDate]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.sbEndDateChange}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申领失业金",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["reqShiyejin"],expression:"['reqShiyejin']"}],attrs:{checkedChildren:"是",unCheckedChildren:"否",defaultunChecked:""}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"离职原因",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["lzReason",e.AFormImportRules.lzReason],expression:"['lzReason',AFormImportRules.lzReason]"}]},[a("a-select-option",{attrs:{value:"合同到期解除"}},[e._v("合同到期解除")]),a("a-select-option",{attrs:{value:"个人辞职"}},[e._v("个人辞职")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:19,offset:5}},[a("a-form-item",{attrs:{labelCol:{span:0},wrapperCol:{span:24}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["lzRemarks"],expression:"['lzRemarks']"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[e._v("增减员直接派送至客服与系统中增减员同时存在时，将以直接派送到客服的数据为准")])]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("减员派单不允许修改，若需修改请联系专属客服")]),a("li",[e._v("系统中不允许单减某个险种，若需单减某个险种请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},r=[],s=a("bd86"),o=(a("ac6a"),a("b775")),l=[{title:"员工姓名",dataIndex:"PName"},{title:"证件号码",dataIndex:"IDCard"}],n={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1},columns:l,form:this.$form.createForm(this),AFormImportRules:{lzReason:{rules:[{required:!0,message:"请选择离职原因"}]},SBEndDate:{rules:[{required:!0,message:"请选择社保截止日期"}]}}}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t})},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh()},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var i=a;i.Key=[],console.log(e.show.selectedRows),e.show.selectedRows.forEach(function(e){i.Key.push(e.key)}),o["a"].post("/api/Shebao/Order/Remove",a).then(function(t){var a=t;a.code>0?e.$message.error(a.msg):(e.$message.success(a.msg),e.onClose())}).catch(function(e){console.log(e)})}})},sbEndDateChange:function(e){if(e){var t=e.endOf("month");this.form.setFields(Object(s["a"])({},"SBEndDate",{value:t,errors:null}))}}}},d=n,c=a("2877"),u=Object(c["a"])(d,i,r,!1,null,null,null);t["default"]=u.exports}}]);
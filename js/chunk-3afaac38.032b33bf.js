(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3afaac38"],{"6ea4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"增员",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:700}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["PName",{initialValue:e.visible.persondetail.PName,rules:e.AFormImportRules.PName}],expression:"['PName',{initialValue:visible.persondetail.PName,rules:AFormImportRules.PName  }]"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["IDCard",{initialValue:e.visible.persondetail.IDCard,rules:e.AFormImportRules.IDCard}],expression:"['IDCard',{initialValue:visible.persondetail.IDCard,rules:AFormImportRules.IDCard  }]"}],attrs:{disabled:null!=e.visible.id}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"手机号码",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{initialValue:e.visible.persondetail.Mobile,rules:e.AFormImportRules.Mobile}],expression:"['Mobile',{initialValue:visible.persondetail.Mobile,rules:AFormImportRules.Mobile }]"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"电子信箱",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{initialValue:e.visible.persondetail.Email,rules:e.AFormImportRules.Email}],expression:"['Email',{initialValue:visible.persondetail.Email,rules:AFormImportRules.Email }]"}]})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"参保城市",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{rules:e.AFormImportRules.CityCode}],expression:"['CityCode',{rules:AFormImportRules.CityCode}]"}],attrs:{autocomplete:"new-password",options:e.dimCity,showSearch:{filter:e.filter},placeholder:"请选择"},on:{change:e.onCityChange}})],1)],1),a("a-col",{attrs:{span:12}})],1),a("a-divider",{attrs:{dashed:""}},[e._v("社保信息")]),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBBeginDate",{initialValue:e.visible.persondetail.SBBeginDate,rules:e.AFormImportRules.SBBeginDate}],expression:"['SBBeginDate',{initialValue: visible.persondetail.SBBeginDate,rules:AFormImportRules.SBBeginDate }]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.handleSBBeginDateSelectChange}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Salary",{initialValue:e.visible.persondetail.Salary,rules:e.AFormImportRules.Salary}],expression:"['Salary',{initialValue: visible.persondetail.Salary,rules:AFormImportRules.Salary }]"}],attrs:{type:"number",step:"0.01"}})],1)],1)],1),a("a-divider",{attrs:{dashed:""}},[e._v("公积金信息")]),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金开始日期",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBeginDate",{initialValue:e.visible.persondetail.GJJBeginDate,rules:e.AFormImportRules.GJJBeginDate}],expression:"['GJJBeginDate',{initialValue: visible.persondetail.GJJBeginDate,rules:AFormImportRules.GJJBeginDate }]"}],attrs:{format:"YYYY-MM-DD"},on:{change:e.handleGJJBeginDateSelectChange}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金基数",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBase",{initialValue:e.visible.persondetail.GJJBase,rules:e.AFormImportRules.GJJBase}],expression:"['GJJBase',{initialValue: visible.persondetail.GJJBase,rules:AFormImportRules.GJJBase }]"}],attrs:{type:"number"}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金企业比例",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBili",{initialValue:e.visible.persondetail.gjjbili,rules:e.AFormImportRules.Bili}],expression:"['GJJBili',{initialValue: visible.persondetail.gjjbili,rules:AFormImportRules.Bili }]"}],attrs:{placeholder:"请选择比例",allowClear:!0}},[a("span",{staticStyle:{"font-weight":"600",color:"#aaa"},attrs:{slot:"suffixIcon"},slot:"suffixIcon"},[e._v("%")]),e._l(e.gjjBLdata,function(t){return a("a-select-option",{key:t.text},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{span:12}})],1),a("a-divider",{attrs:{dashed:""}},[e._v("备注")]),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{labelCol:{span:0},wrapperCol:{span:24}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{initialValue:e.visible.persondetail.Remark}],expression:"['Remark',{initialValue:visible.persondetail.Remark }]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],1),a("a-card",{staticClass:"markdown",attrs:{bordered:!1,title:"事项说明"}},[a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[e._v("增减员直接派送至客服与系统中增减员同时存在时，将以直接派送到客服的数据为准")])]),a("li",[e._v("系统中增减员派单与当地社保政策不符时，客服将与您沟通并修改派单信息")]),a("li",[e._v("系统中增员派单信息在客服受理前可自行修改，受理后若对派单信息做调整请联系专属客服")])])]),a("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")]),null==e.visible.id?a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleSubmit("next")}}},[e._v("提交并继续增员")]):e._e()],1)],1)},i=[],o=(a("6b54"),a("7514"),a("28a5"),a("e814")),s=a.n(o),l=a("61f7"),n=a("c32d"),d=a.n(n),u=a("b775"),m=(a("1c46"),{props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,persondetail:{IDCard:"",PName:""}},dimCity:[],gjjBLdata:[],form:this.$form.createForm(this),AFormImportRules:{SBBeginDate:[{required:!0,transform:this.beginDate,message:"请社保开始日期"}],GJJBeginDate:[{required:!0,transform:this.beginDate,message:"请公积金开始日期"}],Salary:[{required:!0,message:"请输入工资"},{validator:this.checkPrice}],GJJBase:[{required:!0,message:"请输入公积金基数"},{validator:this.checkPrice}],PName:[{required:!0,message:"请输入姓名"}],IDCard:[{required:!0,message:"请输入身份证号"},{validator:this.handleConfirmIDCard}],Mobile:[{required:!0,message:"请输入手机号"},{validator:this.handleConfirmMobile}],Email:[{required:!1,message:"请输入电子信箱"},{type:"email",message:"邮箱格式不正确!"}],CityCode:[{required:!0,message:"请选择参保城市"}],Bili:[{required:!0,message:"请选择公积金比例"}]}}},watch:{visible:function(e,t){e.show&&null!=e.id?(null!=e.persondetail.SBBeginDate?e.persondetail.SBBeginDate=d()(e.persondetail.SBBeginDate):(this.AFormImportRules.SBBeginDate[0].required=!1,this.AFormImportRules.Salary[0].required=!1),null!=e.persondetail.GJJBeginDate?e.persondetail.GJJBeginDate=d()(e.persondetail.GJJBeginDate):(this.AFormImportRules.GJJBeginDate[0].required=!1,this.AFormImportRules.GJJBase[0].required=!1,this.AFormImportRules.Bili[0].required=!1),e.persondetail.CityCode=[e.persondetail.CityCode.substring(0,2),e.persondetail.CityCode],e.persondetail.GJJBiliC&&e.persondetail.GJJBiliP&&(e.persondetail.gjjbili=e.persondetail.GJJBiliC+"+"+e.persondetail.GJJBiliP)):(e.persondetail={CityCode:["13","1301"]},this.AFormImportRules.SBBeginDate[0].required=!1,this.AFormImportRules.Salary[0].required=!1,this.AFormImportRules.GJJBeginDate[0].required=!1,this.AFormImportRules.GJJBase[0].required=!1,this.AFormImportRules.Bili[0].required=!1),this.onCityChange(e.persondetail.CityCode)},show:function(e,t){var a=this;e.show&&a.init(),null!=e.id&&null===e.persondetail?u["a"].post("/api/Shebao/Order/OrderDetail",{SBOrderGuid:e.id}).then(function(t){var r=t;0===r.code&&(e.persondetail=r.data.detail,a.visible=e)}).catch(function(e){console.log(e)}):a.visible=e}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){var e=this;u["a"].post("/api/Dim/Region/ComServiceTree").then(function(t){var a=t;0===a.code&&(e.dimCity=a.data.tree)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this;this.form.validateFields(function(a,r){if(!a){var i=r;i.CityCode=i.CityCode[i.CityCode.length-1],r.GJJBili&&(i.GJJBiliC=s()(r.GJJBili.split("+")[0]),i.GJJBiliP=s()(r.GJJBili.split("+")[1])),r.GJJBeginDate&&(i.GJJBeginDate=d()(r.GJJBeginDate).format("YYYY-MM-01")),r.SBBeginDate&&(i.SBBeginDate=d()(r.SBBeginDate).format("YYYY-MM-01")),u["a"].post("/api/Shebao/Order/Add",i).then(function(a){var r=a;r.code>0?t.$message.error(r.msg):("next"===e?(t.form.resetFields(),t.refresh&&t.refresh()):t.onClose(),t.$message.success(r.msg))}).catch(function(e){console.log(e)})}})},handleGJJBeginDateSelectChange:function(e,t){e?(this.AFormImportRules.GJJBeginDate[0].required=!0,this.AFormImportRules.GJJBase[0].required=!0,this.AFormImportRules.Bili[0].required=!0):this.visible.persondetail.GJJBeginDate||(this.AFormImportRules.GJJBeginDate[0].required=!1,this.AFormImportRules.GJJBase[0].required=!1,this.AFormImportRules.Bili[0].required=!1),this.form.setFieldsValue({GJJBase:this.form.getFieldValue("GJJBase")}),this.form.setFieldsValue({GJJBili:this.form.getFieldValue("GJJBili")})},handleSBBeginDateSelectChange:function(e){e?(this.AFormImportRules.Salary[0].required=!0,this.AFormImportRules.SBBeginDate[0].required=!0):this.visible.persondetail.SBBeginDate||(this.AFormImportRules.Salary[0].required=!1,this.AFormImportRules.SBBeginDate[0].required=!1),this.form.setFieldsValue({Salary:this.form.getFieldValue("Salary")})},handleConfirmIDCard:function(e,t,a){!t||Object(l["a"])(t)?a():a("身份证号不符合规则！")},handleConfirmMobile:function(e,t,a){!t||Object(l["b"])(t)?a():a("手机号码不符合规则！")},checkPrice:function(e,t,a){var r=/^[0-9]*\.?[0-9]{0,2}$/;!t||t>0&&r.test(t)?a():a("为空或者大于零且小数最多两位")},filter:function(e,t){return t.some(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},onCityChange:function(e,t){var a=this;u["a"].post("/api/Dim/Region/GJJBili",{CityCode:e[1]}).then(function(e){var r=e;if(0===r.code&&(a.gjjBLdata=r.data.bili,t)){var i=a.gjjBLdata.find(function(e){return e.text===a.form.getFieldValue("GJJBili")});i?a.form.setFieldsValue({GJJBili:a.form.getFieldValue("GJJBili")}):a.form.setFieldsValue({GJJBili:void 0})}}).catch(function(e){console.log(e)})},beginDate:function(e){if(e){var t=e.startOf("month").toString();return t}}}}),c=m,p=a("2877"),h=Object(p["a"])(c,r,i,!1,null,null,null);t["default"]=h.exports},"8b25":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:1}},[a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:24}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"SBGUID"},scopedSlots:e._u([{key:"sbType",fn:function(t){return a("a",{on:{click:function(a){return e.detail(t)}}},[e._v("\n          "+e._s(e.map.sbType[t.sbType])+"\n          "),50==t.sbType?[e._v("\n            ("+e._s(t.Bili)+")\n          ")]:e._e()],2)}},{key:"PaiDanDate",fn:function(t,a){return[e._v("\n          "+e._s(e.moment(a.PaiDanDate).format("YYYY-MM-DD"))+"                   \n        ")]}},{key:"descript",fn:function(t,a){return[a.Startime?[e._v(e._s(e.map.sbType[a.sbType])+"，开始日期："+e._s(e.moment(a.Startime).format("YYYY-MM-DD")))]:e._e(),a.SBEndDate?[e._v("，结束日期："+e._s(e.moment(a.SBEndDate).format("YYYY-MM-DD")))]:e._e()]}},{key:"status",fn:function(t,r){return[a("a-tag",{attrs:{color:e.map.OrderStatusColor[r.BOrderItemStatus+5]}},[e._v(e._s(e.map.ShebaoOrderItemStatus[r.BOrderItemStatus]))])]}},{key:"action",fn:function(t){return[a("a",{on:{click:function(a){return e.detail(t)}}},[e._v("\n            详情\n          ")])]}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("drawer-person-remove",{attrs:{show:e.drawer.remove,refresh:e.refreshPage}}),a("drawer-person-detail",{attrs:{show:e.drawer.detail,refresh:e.refreshPage}}),a("drawer-person-edit",{attrs:{show:e.drawer.edit,refresh:e.refreshPage}})],1)},i=[],o=a("5176"),s=a.n(o),l=a("b775"),n=a("b00c"),d=a("c32d"),u=a.n(d),m=a("3263"),c=a("bf8b"),p=a("6ea4"),h=(a("1c46"),[{title:"姓名",dataIndex:"PName"},{title:"状态",scopedSlots:{customRender:"status"}},{title:"身份证号",dataIndex:"IDCard"},{title:"起派日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"描述",scopedSlots:{customRender:"descript"}},{title:"工资",dataIndex:"Jishu"},{title:"操作",scopedSlots:{customRender:"action"}}]),f={components:{DrawerPersonDetail:m["default"],DrawerPersonRemove:c["default"],DrawerPersonEdit:p["default"]},data:function(){return{advanced:!0,columns:h,formSearch:{pageSize:10,current:1,total:0,Keyword:""},dataSource:[],selectedRowKeys:[],selectedRows:[],drawer:{add:{show:!1},remove:{show:!1},detail:{show:!1,id:1},edit:{show:!1}},map:{sbType:{},ShebaoOrderItemStatus:{},OrderStatusColor:{}},ShebaoOrderStatus:[],moment:u.a}},created:function(){var e=this;e.init()},methods:{init:function(){var e=this;l["a"].post("/api/Dim/Enum/EnumDecode",{Names:["ShebaoOrderItemStatus","sbType","Action","ActionType","OperatorType"]}).then(function(t){var a=t;0===a.code&&(e.map.ShebaoOrderItemStatus=a.data.ShebaoOrderItemStatus,e.map.sbType=a.data.sbType,e.map.OrderStatusColor=n["a"].EnumsOrder.OrderStatusColor)}).catch(function(e){console.log(e)}),this.pagechange(1)},initPage:function(){this.pagechange(1)},refreshPage:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this;t.formSearch.current=e;var a=s()({},t.formSearch);l["a"].post("/api/Shebao/Order/RefuseList",a).then(function(e){var a=e;0===a.code&&(t.dataSource=a.data.rows,t.formSearch.total=a.data.count)}).catch(function(e){console.log(e)})},showaddDrawer:function(){this.drawer.add={show:!0}},remove:function(){this.drawer.remove={show:!0,selectedRows:this.selectedRows}},removeSingle:function(e){var t=[];t.push(e),this.drawer.remove={show:!0,selectedRows:t}},detail:function(e){this.drawer.detail={show:!0,id:e.key}},edit:function(e){this.drawer.edit={show:!0,id:e.key,persondetail:null}},updateSelect:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},changeDate:function(e){return u()(e).format("YYYY-MM-DD")}}},g=f,b=(a("8faf"),a("2877")),v=Object(b["a"])(g,r,i,!1,null,null,null);t["default"]=v.exports},"8faf":function(e,t,a){"use strict";var r=a("d660"),i=a.n(r);i.a},d660:function(e,t,a){}}]);
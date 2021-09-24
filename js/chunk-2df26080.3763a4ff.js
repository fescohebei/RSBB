(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df26080","chunk-7bd43499","chunk-5eeede0c"],{"098f":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("a-layout-content",[e("a-card",[e("div",[e("a-form",{attrs:{layout:"horizontal"}},[e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{md:8}},[e("a-form-item",{attrs:{label:"账期",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-month-picker",{attrs:{placeholder:"月份"},model:{value:t.formSearch.Period,callback:function(a){t.$set(t.formSearch,"Period",a)},expression:"formSearch.Period"}})],1)],1),e("a-col",{attrs:{md:8}},[e("a-form-item",{attrs:{label:"状态",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-select",{attrs:{placeholder:"请选择",allowClear:!0},model:{value:t.formSearch.BillStatus,callback:function(a){t.$set(t.formSearch,"BillStatus",a)},expression:"formSearch.BillStatus"}},[e("a-select-option",{attrs:{value:"0"}},[t._v("未确认")]),e("a-select-option",{attrs:{value:"1"}},[t._v("已确认")]),e("a-select-option",{attrs:{value:"2"}},[t._v("已退回")])],1)],1)],1),e("a-col",{attrs:{span:8}},[e("a-form-item",[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.pagechange(1)}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("重置")])],1)],1)],1)],1)],1),e("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,rowKey:function(t){return t.SBBillGuid},pagination:!1},scopedSlots:t._u([{key:"BillStatus",fn:function(a){return[e("a-tag",{attrs:{color:t.map.BillStatusColor[a.BillStatus]}},[t._v(t._s(t.map.BillStatus[a.BillStatus]))])]}},{key:"Operation",fn:function(a){return[e("a",{on:{click:function(e){return t.detail(a)}}},[t._v("详情")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-dropdown",[e("a",{staticClass:"ant-dropdown-link"},[t._v("\n              更多\n              "),e("a-icon",{attrs:{type:"down"}})],1),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{attrs:{disabled:0!=a.BillStatus},on:{click:function(e){return t.confirm(a)}}},[t._v("确认")]),e("a-menu-item",{attrs:{disabled:0!=a.BillStatus},on:{click:function(e){return t.rollback(a)}}},[t._v("回退")]),e("a-menu-item",{on:{click:function(e){return t.download(a)}}},[t._v("导出账单")])],1)],1)]}}])},[e("template",{slot:"footer"},[e("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),e("drawer-roll-back",{attrs:{show:t.drawer.rollback,confirm:t.confirm}}),e("drawer-bill-detail",{attrs:{show:t.drawer.detail,confirm:t.confirm,rollback:t.rollback,download:t.download}})],1)},l=[],s=e("f711"),i=e("531c"),o=e("b775"),n=e("b00c"),c=[{title:"账期",dataIndex:"nianYue"},{title:"生成时间",dataIndex:"CreateTime"},{title:"社保费",dataIndex:"社保费"},{title:"服务费",dataIndex:"服务费"},{title:"一次性收费",dataIndex:"一次性费用"},{title:"总额",dataIndex:"AllMoney"},{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"操作",scopedSlots:{customRender:"Operation"}}],u={name:"QueryList",components:{DrawerBillDetail:s["default"],DrawerRollBack:i["default"]},data:function(){return{columns:c,formSearch:{pageSize:10,current:1,total:0},dataSource:[],drawer:{detail:{show:!1},rollback:{show:!1}},map:n["a"].EnumsShebaoBill}},mounted:function(){this.pagechange(1)},methods:{detail:function(t){this.drawer.detail={show:!0,record:t}},pagechange:function(t){var a=this;a.formSearch.current=t,o["a"].post("/api/Shebao/Bill/BillList",a.formSearch).then(function(t){var e=t;0===e.code&&(a.dataSource=e.data.rows,a.formSearch.total=e.count)}).catch(function(t){console.log(t)})},confirm:function(t){var a=this;o["a"].post("/api/Shebao/Bill/ConfirmBill",{SBBillGuid:t.SBBillGuid}).then(function(e){var r=e;0===r.code?(t.BillStatus=1,a.$message.success("已确认")):a.$message.error(r.msg)}).catch(function(t){a.$message.error("网络异常"),console.log(t)}),console.log(t)},rollback:function(t){this.drawer.rollback={show:!0,record:t}},download:function(t){var a=document.createElement("a");"大库账单"==t.type?a.href="/api/Shebao/Bill/Export?RECGuid="+t.RECGuid:a.href="/api/Shebao/Bill/ExportReal?RECGuid="+t.RECGuid,a.click()}}},d=u,p=(e("de4c"),e("2877")),v=Object(p["a"])(d,r,l,!1,null,null,null);a["default"]=v.exports},"531c":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{title:"回退账单",visible:this.visible.show,closable:!1,maskClosable:!1,width:500,zIndex:2e3}},[e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("账期:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.NianYue))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("生成时间:")]),e("a-col",{attrs:{span:10}},[t._v(t._s(t.visible.record.CreateDate))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("总额:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.总额))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),e("a-col",{attrs:{span:10}},[t._v(t._s(t.map.BillStatus[t.visible.record.BillStatus]))])],1),e("a-divider",[t._v("回退账单")]),e("a-form",{attrs:{form:t.form}},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{span:22,offset:2}},[e("a-form-item",{attrs:{label:"回退原因",labelCol:{span:0},wrapperCol:{span:24}}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:t.AFormImportRules.Remarks}],expression:"['Remarks',{rules:AFormImportRules.Remarks }]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1),e("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e("a-button",{on:{click:t.onClose}},[t._v("取消")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},l=[],s=e("b775"),i=e("b00c"),o={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,record:{}},form:this.$form.createForm(this),AFormImportRules:{Remarks:[{required:!0,message:"请填写回退原因"}]},map:i["a"].EnumsShebaoBill}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a})},methods:{onClose:function(){this.visible.show=!1,this.refresh},handleSubmit:function(){var t=this;this.form.validateFields(function(a,e){if(!a){var r=e;r.SBBillGuid=t.visible.record.SBBillGuid,s["a"].post("/api/Shebao/Bill/RollBackBill",r).then(function(a){var e=a;e.code>0?t.$message.error(e.msg):(t.$message.success(e.msg),t.visible.record.BillStatus=2,t.onClose())}).catch(function(t){console.log(t)})}})}}},n=o,c=e("2877"),u=Object(c["a"])(n,r,l,!1,null,null,null);a["default"]=u.exports},9082:function(t,a,e){},b00c:function(t,a,e){"use strict";var r={OrderStatus:{10:"增员中",20:"增员已受理",30:"减员中",40:"减员已受理",50:"已报减"},OrderStatusColor:{10:"blue",20:"green",30:"yellow",40:"red"},sbType:{10:"养老",20:"失业",30:"工伤",40:"医疗",50:"公积金"},sbChangeType:{1:"派入",2:"修改",3:"减员"},ShebaoOrderItemStatus:{10:"申报中",20:"申报已受理",30:"报减中",40:"报减已受理"}},l={BillStatus:{0:"待确认",1:"已确认",2:"回退"},BillStatusColor:{0:"blue",1:"green",2:"red"}};a["a"]={EnumsOrder:r,EnumsShebaoBill:l}},de4c:function(t,a,e){"use strict";var r=e("9082"),l=e.n(r);l.a},f711:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    账单详情\n    "),0==t.visible.record.BillStatus?e("a-button",{staticStyle:{float:"right","margin-left":"5px"},attrs:{size:"small",icon:"rollback"},on:{click:function(a){return t.rollback(t.visible.record)}}},[t._v("回退")]):t._e(),0==t.visible.record.BillStatus?e("a-button",{staticStyle:{float:"right","margin-left":"5px"},attrs:{size:"small",icon:"check"},on:{click:function(a){return t.confirm(t.visible.record)}}},[t._v("确认")]):t._e(),e("a-button",{staticStyle:{float:"right","margin-left":"5px"},attrs:{size:"small",icon:"cloud-download"},on:{click:function(a){return t.download(t.visible.record)}}},[t._v("导出账单")])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("账期:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.nianYue))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("生成时间:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.CreateTime))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("总额:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.AllMoney))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("状态:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.map.BillStatus[t.visible.record.BillStatus]))])],1),e("a-divider",{attrs:{orientation:"left"}},[t._v("社保费用")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("养老企业:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.养老企业))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("养老个人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.养老个人))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("失业企业:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.失业企业))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("失业个人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.失业个人))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("工伤企业:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.工伤企业))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("工伤个人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.工伤个人))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("医疗生育企业:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.医疗生育企业))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("医疗生育个人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.医疗生育个人))])],1),e("a-divider",{attrs:{orientation:"left"}},[t._v("公积金费用")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公积金企业:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.公积金企业))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("公积金个人:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.公积金个人))])],1),e("a-divider",{attrs:{orientation:"left"}},[t._v("其它费用")]),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("服务费:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.服务费))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("一次性收费:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.一次性费用))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[t._v("福利:")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.record.福利))])],1)],2)},l=[],s=(e("b775"),e("b00c")),i={components:{},props:{show:{type:Object,default:{show:!1}},rollback:{type:Function,default:null},confirm:{type:Function,default:null},download:{type:Function,default:null}},show:{type:Object,default:{show:!1}},data:function(){return{visible:{show:!1,record:{}},map:s["a"].EnumsShebaoBill}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a})},methods:{onClose:function(){this.visible.show=!1}}},o=i,n=e("2877"),c=Object(n["a"])(o,r,l,!1,null,null,null);a["default"]=c.exports}}]);
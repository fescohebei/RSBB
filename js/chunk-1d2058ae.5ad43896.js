(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d2058ae","chunk-2d0cfb20"],{"63a9":function(t,e,a){},"658c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{visible:this.visible.show,width:550,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[a("template",{slot:"title"},[t._v("\n    "+t._s(t.title)+"\n    "),a("a-button",{staticStyle:{float:"right","margin-right":"5px",color:"#409EFF"},attrs:{size:"small",icon:"cloud-download"},on:{click:t.btnExport}},[t._v("导出")])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!0,size:"middle",rowKey:t.rowKey}})],2)},o=[],n=a("b775"),l=[{title:"姓名",dataIndex:"PName"},{title:"身份证号",dataIndex:"IDCard"},{title:"工资批次",dataIndex:"BatchName"}],c={props:{show:{type:Object,default:{show:!1}},title:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1},record:{},columns:l,dataSource:[],drawer:{delerr:{show:!1,record:null}},formSearch:{pageSize:10}}},created:function(){var t=this;this.$watch("show",function(e,a){console.log(e),t.visible=e,t.record=e.record,t.formSearch.Month=t.record.PayrollMonth,t.formSearch.Year=t.record.PayrollYear,t.init()})},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh()},btnExport:function(){var t=document.createElement("a");t.href="/api/Salary/Tax/ExportPayroll?Year="+this.record.PayrollYear+"&Month="+this.record.PayrollMonth,t.click()},init:function(){var t=this;n["a"].post("/api/Salary/Tax/DeclareDetail",t.formSearch).then(function(e){var a=e;0===a.code&&(t.dataSource=a.data)}).catch(function(t){console.log(t)})},rowKey:function(t){return t.PayrollGuid}}},i=c,s=a("2877"),u=Object(s["a"])(i,r,o,!1,null,null,null);e["default"]=u.exports},"8d9a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"alert"},[a("a-alert",{attrs:{type:"info","show-icon":!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n              总共 \n              "),a("a",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.formSearch.total))]),t._v("\n               批次个税专项附加表\n            ")])])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:t.rowKey},scopedSlots:t._u([{key:"NianYue",fn:function(e){return[t._v(t._s(e.PayrollYear)+"年"+t._s(e.PayrollMonth)+"月")]}},{key:"Operation",fn:function(e){return[a("a-tag",{on:{click:function(a){return t.showdetail(e)}}},[t._v("详情")])]}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("drawer-detail",{attrs:{show:t.drawer.detail,refresh:t.init,title:t.drawer.detail.title}})],1)},o=[],n=a("b775"),l=a("658c"),c=(a("1c46"),[{title:"所属月份",scopedSlots:{customRender:"NianYue"}},{title:"操作",scopedSlots:{customRender:"Operation"}}]),i=[],s={components:{DrawerDetail:l["default"]},data:function(){return{formSearch:{pageSize:10,current:1,total:0},ld:null,columns:c,dataSource:i,drawer:{detail:{show:!1,record:null,title:""}}}},computed:{tableHeight:function(){return window.innerHeight-280}},methods:{init:function(){this.pagechange(1)},pagechange:function(t){var e=this;e.formSearch.current=t,n["a"].post("/api/Salary/Tax/InitForDeclare",e.formSearch).then(function(t){var a=t;0===a.code&&(e.dataSource=a.data,e.formSearch.total=a.count)}).catch(function(t){console.log(t)})},rowKey:function(t){return 12*t.PayrollYear+t.PayrollMonth},showdetail:function(t){this.drawer.detail={show:!0,record:t,title:t.PayrollYear+"年"+t.PayrollMonth+"个税申报表"}}},mounted:function(){var t=this;t.init()}},u=s,d=(a("c924"),a("2877")),h=Object(d["a"])(u,r,o,!1,null,null,null);e["default"]=h.exports},c924:function(t,e,a){"use strict";var r=a("63a9"),o=a.n(r);o.a}}]);
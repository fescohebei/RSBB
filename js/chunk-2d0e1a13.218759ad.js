(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1a13"],{"7af9":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-drawer",{attrs:{visible:this.visible.show,width:450,destroyOnClose:!0,closable:!1,title:"多批次工资表"},on:{close:e.onClose}},[o("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,bordered:!1,size:"middle",rowKey:e.rowKey}})],1)},s=[],l=[{title:"批次",dataIndex:"BatchName"},{title:"年",dataIndex:"PayrollYear"},{title:"月",dataIndex:"PayrollMonth"}],n={props:{show:{type:Object,default:{show:!1}}},data:function(){return{visible:{show:!1},columns:l,dataSource:[]}},created:function(){var e=this;this.$watch("show",function(t,o){e.visible=t,e.dataSource=t.record})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[]},rowKey:function(e){return e.PayrollColGuid}}},r=n,i=o("2877"),c=Object(i["a"])(r,a,s,!1,null,null,null);t["default"]=c.exports}}]);
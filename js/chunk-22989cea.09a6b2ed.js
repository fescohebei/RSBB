(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22989cea"],{"1dff":function(t,a,e){},9406:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout",[e("a-layout-content",[e("div",[e("a-row",{staticStyle:{margin:"0 -12px"}},[e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[e("a-row",[e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{bordered:!1,"body-style":{padding:0}}},[e("div",t._l(t.projects,function(a,r){return e("a-card-grid",{key:r},[e("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[e("a-card-meta",{attrs:{description:a.desc}},[e("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:a.logo}}),e("router-link",{staticStyle:{"padding-left":"10px"},attrs:{to:a.to}},[t._v(t._s(a.name))])],1)])],1)],1)}),1)])],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:12,lg:12,md:12,sm:12,xs:12}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,title:"增员",bordered:!1}},[e("a-card-grid",{staticStyle:{width:"33.3%","text-align":"center"}},[e("span",{staticClass:"font-big color-blue"},[t._v(t._s(t.personNum.In.Total))]),e("br"),t._v("总人数\n                ")]),e("a-card-grid",{staticStyle:{width:"33.3%","text-align":"center",cursor:"pointer"},on:{click:function(a){return t.JumpTo("10")}}},[e("span",{staticClass:"font-big color-red"},[t._v(t._s(t.personNum.In.Dim["增员中"]))]),e("br"),t._v("增员中\n                ")]),e("a-card-grid",{staticStyle:{width:"33.3%","text-align":"center",cursor:"pointer"},on:{click:function(a){return t.JumpTo("20")}}},[e("span",{staticClass:"font-big color-green"},[t._v(t._s(t.personNum.In.Dim["增员已受理"]))]),e("br"),t._v("增员已受理\n                ")])],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:12,lg:12,md:12,sm:12,xs:12}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,title:"减员",bordered:!1}},[e("a-card-grid",{staticStyle:{width:"25%","text-align":"center"}},[e("span",{staticClass:"font-big color-blue"},[t._v(t._s(t.personNum.Cut.Total))]),e("br"),t._v("总人数\n                ")]),e("a-card-grid",{staticStyle:{width:"25%","text-align":"center",cursor:"pointer"},on:{click:function(a){return t.JumpTo("30")}}},[e("span",{staticClass:"font-big color-purple"},[t._v(t._s(t.personNum.Cut.Dim["减员中"]))]),e("br"),t._v("减员中\n                ")]),e("a-card-grid",{staticStyle:{width:"25%","text-align":"center",cursor:"pointer"},on:{click:function(a){return t.JumpTo("40")}}},[e("span",{staticClass:"font-big color-green"},[t._v(t._s(t.personNum.Cut.Dim["减员已受理"]))]),e("br"),t._v("减员已受理\n                ")]),e("a-card-grid",{staticStyle:{width:"25%","text-align":"center",cursor:"pointer"},on:{click:function(a){return t.JumpTo("50")}}},[e("span",{staticClass:"font-big color-red"},[t._v(t._s(t.personNum.Cut.Dim["已撤离"]))]),e("br"),t._v("已撤离\n                ")])],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,title:"被拒绝列表",bordered:!1}},[e("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,bordered:!1,pagination:!1,size:"middle",rowKey:"SBGUID"},scopedSlots:t._u([{key:"sbType",fn:function(a){return e("a",{on:{click:function(e){return t.detail(a)}}},[t._v("\n                  "+t._s(t.map.sbType[a.sbType])+"\n                  "),50==a.sbType?[t._v("\n                    ("+t._s(a.Bili)+")\n                  ")]:t._e()],2)}},{key:"PaiDanDate",fn:function(a,e){return[t._v("\n                  "+t._s(t.moment(e.PaiDanDate).format("YYYY-MM-DD"))+"                   \n                ")]}},{key:"descript",fn:function(a,e){return[e.Startime?[t._v(t._s(t.map.sbType[e.sbType])+"，开始日期："+t._s(t.moment(e.Startime).format("YYYY-MM-DD")))]:t._e(),e.SBEndDate?[t._v("，结束日期："+t._s(t.moment(e.SBEndDate).format("YYYY-MM-DD")))]:t._e()]}},{key:"status",fn:function(a,r){return[e("a-tag",{attrs:{color:t.map.OrderStatusColor[r.BOrderItemStatus+5]}},[t._v(t._s(t.map.ShebaoOrderItemStatus[r.BOrderItemStatus]))])]}},{key:"action",fn:function(a){return[e("a",{on:{click:function(e){return t.detail(a)}}},[t._v("\n                    详情\n                  ")])]}}])})],1)],1)],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"常用表格",bordered:!1,"body-style":{padding:0}}},[e("div",{staticClass:"item-group"},[e("a",{on:{click:function(a){return t.showModal("社保政策",a)}}},[t._v("石家庄社保公积金基数比例表")]),e("a",{on:{click:function(a){return t.showModal("个税速扣",a)}}},[t._v("个人所得税预扣率表一(工资、薪金)")])])])],1)],1)],1),e("a-modal",{attrs:{title:"石家庄市社会保险及公积金说明(201905-201912)",footer:null,width:820},model:{value:t.modelvisible.社保政策,callback:function(a){t.$set(t.modelvisible,"社保政策",a)},expression:"modelvisible.社保政策"}},[e("table",{staticClass:"dashboardtable",attrs:{border:"1",width:"100%"}},[e("tr",[e("th",{attrs:{rowspan:"2"}},[t._v("项目")]),e("th",{attrs:{rowspan:"2"}},[t._v("社平工资")]),e("th",{attrs:{rowspan:"2"}},[t._v("最低基数")]),e("th",{attrs:{colspan:"2"}},[t._v("封顶基数")]),e("th",{attrs:{colspan:"3"}},[t._v("企业缴纳")]),e("th",{attrs:{colspan:"3"}},[t._v("个人缴纳")]),e("th",{attrs:{colspan:"2"}},[t._v("合计")])]),e("tr",[e("th",[t._v("企业")]),e("th",[t._v("个人")]),e("th",[t._v("比例(%)")]),e("th",[t._v("最低")]),e("th",[t._v("最高")]),e("th",[t._v("比例(%)")]),e("th",[t._v("最低")]),e("th",[t._v("最高")]),e("th",[t._v("最低")]),e("th",[t._v("最高")])]),e("tr",[e("th",[t._v("养老保险")]),e("td",[t._v("4727.00")]),e("td",[t._v("2836.20")]),e("td",[t._v("不封顶")]),e("td",[t._v("14181.00")]),e("td",[t._v("16.00")]),e("td",[t._v("453.79")]),e("td",[t._v("--")]),e("td",[t._v("8.00")]),e("td",[t._v("226.90")]),e("td",[t._v("1134.48")]),e("td",[t._v("680.69")]),e("td",[t._v("--")])]),e("tr",[e("th",[t._v("工伤保险")]),e("td",[t._v("4727.00")]),e("td",[t._v("2836.20")]),e("td",[t._v("不封顶")]),e("td",[t._v("不缴纳")]),e("td",[t._v("根据行业")]),e("td",[t._v("--")]),e("td",[t._v("--")]),e("td",[t._v("不缴纳")]),e("td",[t._v("不缴纳")]),e("td",[t._v("不缴纳")]),e("td",[t._v("--")]),e("td",[t._v("--")])]),e("tr",[e("th",[t._v("失业保险")]),e("td",[t._v("5656.67")]),e("td",[t._v("2836.20")]),e("td",[t._v("不封顶")]),e("td",[t._v("14181.00")]),e("td",[t._v("0.70")]),e("td",[t._v("19.85")]),e("td",[t._v("--")]),e("td",[t._v("0.30")]),e("td",[t._v("8.51")]),e("td",[t._v("42.54")]),e("td",[t._v("28.36")]),e("td",[t._v("--")])]),e("tr",[e("th",[t._v("医疗保险")]),e("td",[t._v("5000.00")]),e("td",[t._v("5000.00")]),e("td",[t._v("不封顶")]),e("td",[t._v("不封顶")]),e("td",[t._v("8.00")]),e("td",[t._v("400.00")]),e("td",[t._v("--")]),e("td",[t._v("2.00")]),e("td",[t._v("100.00")]),e("td",[t._v("--")]),e("td",[t._v("500.00")]),e("td",[t._v("--")])]),e("tr",[e("th",[t._v("生育保险")]),e("td",[t._v("5000.00")]),e("td",[t._v("5000.00")]),e("td",[t._v("不封顶")]),e("td",[t._v("不封顶")]),e("td",[t._v("1.00")]),e("td",[t._v("50.00")]),e("td",[t._v("--")]),e("td",[t._v("不缴纳")]),e("td",[t._v("不缴纳")]),e("td",[t._v("不缴纳")]),e("td",[t._v("50.00")]),e("td",[t._v("--")])]),e("tr",[e("th",{attrs:{colspan:"5"}},[t._v("五险合计(不含工伤保险)")]),e("td",[t._v("25.70")]),e("td",[t._v("923.64")]),e("td",[t._v("--")]),e("td",[t._v("10.30")]),e("td",[t._v("335.41")]),e("td",[t._v("--")]),e("td",[t._v("1259.05")]),e("td",[t._v("--")])]),e("tr",[e("th",[t._v("住房公积金")]),e("td",[t._v("6158.00")]),e("td",[t._v("3695.00")]),e("td",[t._v("18476.00")]),e("td",[t._v("18476.00")]),e("td",[t._v("5~12")]),e("td",[t._v("184.00")]),e("td",[t._v("2217.00")]),e("td",[t._v("5~12")]),e("td",[t._v("184.00")]),e("td",[t._v("2217.00")]),e("td",[t._v("368.00")]),e("td",[t._v("4434.00")])]),e("tr",[e("th",{attrs:{colspan:"5"}},[t._v("五险一金合计(不含工伤保险)")]),e("td",[t._v("30.70~37.70")]),e("td",[t._v("1107.65")]),e("td",[t._v("--")]),e("td",[t._v("15.30~22.30")]),e("td",[t._v("519.41")]),e("td",[t._v("--")]),e("td",[t._v("1627.06")]),e("td",[t._v("--")])]),e("tr",[e("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"13"}},[t._v("\n            注意事项：\n            "),e("br"),t._v("A、根据石市医保政策，城乡居民医保（或新农合）与职工医保不能同时缴纳和享受，如有员工缴纳城乡居民医保或新农合，请尽快至原办理机构（村委会或居委会）注销城乡医保，并及时告知我们。\n            "),e("br"),t._v("B、根据石市医保政策，石家庄市职工医保缴费必须连续（居民缴费年限不算入职工医保年限），如有断交产生的欠费，需要进行补缴。\n          ")])])])]),e("a-modal",{attrs:{title:"个人所得税预扣率表一（适用：居民个人工资、薪金所得预扣预缴适用）",footer:null,width:820},model:{value:t.modelvisible.个税速扣,callback:function(a){t.$set(t.modelvisible,"个税速扣",a)},expression:"modelvisible.个税速扣"}},[e("table",{staticClass:"dashboardtable",attrs:{border:"1",width:"100%"}},[e("tr",[e("th",[t._v("级数")]),e("th",[t._v("累计预扣预缴应纳税所得额")]),e("th",[t._v("预扣率")]),e("th",[t._v("速算扣除数")])]),e("tr",[e("th",[t._v("1")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("不超过36000元的部分")]),e("td",[t._v("3.00%")]),e("td",[t._v("0.00")])]),e("tr",[e("th",[t._v("2")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过36000元至144000元的部分")]),e("td",[t._v("10.00%")]),e("td",[t._v("2520.00")])]),e("tr",[e("th",[t._v("3")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过144000元至300000元的部分")]),e("td",[t._v("20.00%")]),e("td",[t._v("16920.00")])]),e("tr",[e("th",[t._v("4")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过300000元至420000元的部分")]),e("td",[t._v("25.00%")]),e("td",[t._v("31920.00")])]),e("tr",[e("th",[t._v("5")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过420000元至660000元的部分")]),e("td",[t._v("30.00%")]),e("td",[t._v("52920.00")])]),e("tr",[e("th",[t._v("6")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过660000元至960000元的部分")]),e("td",[t._v("35.00%")]),e("td",[t._v("85920.00")])]),e("tr",[e("th",[t._v("7")]),e("td",{staticStyle:{"text-align":"left"}},[t._v("超过960000元的部分")]),e("td",[t._v("45.00%")]),e("td",[t._v("181920.00")])]),e("tr",[e("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"13"}},[t._v("\n            工资薪酬个税计算公式：\n            "),e("br"),e("b",[t._v("本期应预扣预缴税额")]),t._v("=（\n            "),e("span",{staticStyle:{color:"red"}},[t._v("累计预扣预缴应纳税所得额")]),t._v("×预扣率-速算扣除数)-累计减免税额-累计已预扣预缴税额\n            "),e("br"),e("b",[e("span",{staticStyle:{color:"red"}},[t._v("累计预扣预缴应纳税所得额")])]),t._v("=累计收入-累计免税收入-\n            "),e("span",{staticStyle:{color:"green"}},[t._v("累计减除费用")]),t._v("-累计专项扣除-累计专项附加扣除-累计依法确定的其他扣除\n            "),e("br"),e("b",[e("span",{staticStyle:{color:"green"}},[t._v("累计减除费用")])]),t._v("=纳税人当年截至本月在本单位的任职受雇月份数×5000\n          ")])])])]),e("drawer-person-detail",{attrs:{show:t.drawer.detail,refresh:t.refuse}})],1)],1)},n=[],d=(e("a481"),e("b775")),o=e("c32d"),s=e.n(o),i=e("b00c"),l=e("3263"),c=[{logo:"insurance",name:"社保管理",desc:"线上社保增减员派单",to:"/shebao/insured/index"}],v=[{title:"姓名",dataIndex:"PName"},{title:"状态",scopedSlots:{customRender:"status"}},{title:"身份证号",dataIndex:"IDCard"},{title:"起派日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"描述",scopedSlots:{customRender:"descript"}},{title:"工资",dataIndex:"Jishu"},{title:"操作",scopedSlots:{customRender:"action"}}],_={components:{DrawerPersonDetail:l["default"]},data:function(){return{loading:!1,columns:v,dataSource:[],formSearch:{pageSize:50,current:1,total:0},projects:c,personNum:{In:{Total:0,Dim:{"增员中":0,"增员已受理":0}},Cut:{Total:0,Dim:{"减员中":0,"减员已受理":0,"已撤离":0}}},modelvisible:{"社保政策":!1,"个税速扣":!1},map:{sbType:{},ShebaoOrderItemStatus:{},OrderStatusColor:{}},moment:s.a,drawer:{detail:{show:!1,id:1}}}},mounted:function(){this.init()},methods:{showModal:function(t,a){switch(t){case"社保政策":this.modelvisible.社保政策=!0;break;case"个税速扣":this.modelvisible.个税速扣=!0;break;default:break}},init:function(){var t=this;d["a"].post("/api/Dim/Enum/EnumDecode",{Names:["ShebaoOrderItemStatus","sbType","Action","ActionType","OperatorType"]}).then(function(a){var e=a;0===e.code&&(t.map.ShebaoOrderItemStatus=e.data.ShebaoOrderItemStatus,t.map.sbType=e.data.sbType,t.map.OrderStatusColor=i["a"].EnumsOrder.OrderStatusColor)}).catch(function(t){console.log(t)}),d["a"].post("/api/Shebao/Order/Data").then(function(a){var e=a;0===e.code&&(t.personNum=e.data)}).catch(function(t){console.log(t)}),t.refuse()},JumpTo:function(t){this.$router.replace({name:"参保人员",params:{type:t}})},refuse:function(){var t=this;d["a"].post("/api/Shebao/Order/RefuseList",t.formSearch).then(function(a){var e=a;0===e.code&&(t.dataSource=e.data.rows)}).catch(function(t){console.log(t)})},detail:function(t){this.drawer.detail={show:!0,id:t.key}}}},u=_,p=(e("cda4"),e("2877")),m=Object(p["a"])(u,r,n,!1,null,null,null);a["default"]=m.exports},a481:function(t,a,e){"use strict";var r=e("cb7c"),n=e("4bf8"),d=e("9def"),o=e("4588"),s=e("0390"),i=e("5f1b"),l=Math.max,c=Math.min,v=Math.floor,_=/\$([$&`']|\d\d?|<[^>]*>)/g,u=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};e("214f")("replace",2,function(t,a,e,m){return[function(r,n){var d=t(this),o=void 0==r?void 0:r[a];return void 0!==o?o.call(r,d,n):e.call(String(d),r,n)},function(t,a){var n=m(e,t,this,a);if(n.done)return n.value;var v=r(t),_=String(this),u="function"===typeof a;u||(a=String(a));var f=v.global;if(f){var b=v.unicode;v.lastIndex=0}var g=[];while(1){var S=i(v,_);if(null===S)break;if(g.push(S),!f)break;var y=String(S[0]);""===y&&(v.lastIndex=s(_,d(v.lastIndex),b))}for(var x="",w=0,k=0;k<g.length;k++){S=g[k];for(var D=String(S[0]),T=l(c(o(S.index),_.length),0),C=[],I=1;I<S.length;I++)C.push(p(S[I]));var O=S.groups;if(u){var M=[D].concat(C,T,_);void 0!==O&&M.push(O);var Y=String(a.apply(void 0,M))}else Y=h(D,_,T,C,O,a);T>=w&&(x+=_.slice(w,T)+Y,w=T+D.length)}return x+_.slice(w)}];function h(t,a,r,d,o,s){var i=r+t.length,l=d.length,c=u;return void 0!==o&&(o=n(o),c=_),e.call(s,c,function(e,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,r);case"'":return a.slice(i);case"<":s=o[n.slice(1,-1)];break;default:var c=+n;if(0===c)return e;if(c>l){var _=v(c/10);return 0===_?e:_<=l?void 0===d[_-1]?n.charAt(1):d[_-1]+n.charAt(1):e}s=d[c-1]}return void 0===s?"":s})}})},cda4:function(t,a,e){"use strict";var r=e("1dff"),n=e.n(r);n.a}}]);
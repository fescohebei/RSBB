(function(e){function t(t){for(var a,i,r=t[0],o=t[1],u=t[2],l=0,d=[];l<r.length;l++)i=r[l],s[i]&&d.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s={app:0},c=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-08e12601":"fcbfd7b0","chunk-26f4f825":"df16469a","chunk-2d0b274a":"1e4a476f","chunk-2d0c18c0":"01ac846a","chunk-2d0c7991":"708780ec","chunk-2d0c7e17":"1b63a493","chunk-2d0cfb20":"bd9c59bb","chunk-2d0e1a13":"7ac7e529","chunk-2d21b364":"b978b3a1","chunk-2d22ca77":"23358cb0","chunk-2d23050e":"9171cf51","chunk-2d2306d3":"e6d26e20","chunk-2df26080":"b81a6d08","chunk-3678606e":"f899e016","chunk-1970df2e":"102d3621","chunk-1d2058ae":"5ad43896","chunk-23157942":"e5025237","chunk-1c343824":"ae368368","chunk-22989cea":"d2f71e53","chunk-3afaac38":"933b91a4","chunk-d730ad40":"8dd20b73","chunk-3473dbe1":"efbb6eb4","chunk-6c796ecf":"c8004340","chunk-6c89e9d1":"cdc9af79","chunk-8684a108":"62fd545a","chunk-8dbc8404":"acfdc9d6","chunk-d1b94f70":"7e304199","chunk-49d47874":"e01e8d7d","chunk-4f73a587":"ce2ecefb","chunk-54ecf04e":"2cb0654f","chunk-5eeede0c":"61342a94","chunk-678d99ec":"cc4fbaa0","chunk-748fc792":"8455473a","chunk-7bd43499":"f0540894","chunk-7e092551":"b42ccee1"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-08e12601":1,"chunk-2df26080":1,"chunk-1970df2e":1,"chunk-1d2058ae":1,"chunk-22989cea":1,"chunk-3afaac38":1,"chunk-d730ad40":1,"chunk-6c796ecf":1,"chunk-8dbc8404":1,"chunk-49d47874":1,"chunk-54ecf04e":1,"chunk-678d99ec":1,"chunk-748fc792":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-08e12601":"f2012b32","chunk-26f4f825":"31d6cfe0","chunk-2d0b274a":"31d6cfe0","chunk-2d0c18c0":"31d6cfe0","chunk-2d0c7991":"31d6cfe0","chunk-2d0c7e17":"31d6cfe0","chunk-2d0cfb20":"31d6cfe0","chunk-2d0e1a13":"31d6cfe0","chunk-2d21b364":"31d6cfe0","chunk-2d22ca77":"31d6cfe0","chunk-2d23050e":"31d6cfe0","chunk-2d2306d3":"31d6cfe0","chunk-2df26080":"f2012b32","chunk-3678606e":"31d6cfe0","chunk-1970df2e":"f2012b32","chunk-1d2058ae":"f2012b32","chunk-23157942":"31d6cfe0","chunk-1c343824":"31d6cfe0","chunk-22989cea":"ea5d985c","chunk-3afaac38":"f2012b32","chunk-d730ad40":"f2012b32","chunk-3473dbe1":"31d6cfe0","chunk-6c796ecf":"f2012b32","chunk-6c89e9d1":"31d6cfe0","chunk-8684a108":"31d6cfe0","chunk-8dbc8404":"a4413715","chunk-d1b94f70":"31d6cfe0","chunk-49d47874":"cb419ed0","chunk-4f73a587":"31d6cfe0","chunk-54ecf04e":"1a1b5833","chunk-5eeede0c":"31d6cfe0","chunk-678d99ec":"1c56af5a","chunk-748fc792":"fee515ea","chunk-7bd43499":"31d6cfe0","chunk-7e092551":"31d6cfe0"}[e]+".css",s=o.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete i[e],h.parentNode.removeChild(h),n(c)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){i[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");c.type=a,c.request=i,n[1](c)}s[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://cdn.jsdelivr.net/gh/fescohebei/RSBB/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a78":function(e,t,n){"use strict";var a=n("a2af"),i=n.n(a);i.a},"0ce4":function(e,t,n){},1443:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("global-layout",[n("contextmenu",{attrs:{itemList:e.menuItemList,visible:e.menuVisible},on:{"update:visible":function(t){e.menuVisible=t},select:e.onMenuSelect}}),e.multipage?n("a-tabs",{staticStyle:{"margin-top":"-8px","margin-bottom":"8px"},attrs:{"active-key":e.activePage,"hide-add":!0,type:"editable-card"},on:{change:e.changePage,edit:e.editPage},nativeOn:{contextmenu:function(t){return function(t){return e.onContextmenu(t)}(t)}}},e._l(e.pageList,function(t){return n("a-tab-pane",{key:t.fullPath},[n("span",{attrs:{slot:"tab",pagekey:t.fullPath},slot:"tab"},[e._v(e._s(t.name))])])}),1):e._e(),n("page-header",{staticStyle:{margin:"-24px -24px 0px"},attrs:{breadcrumb:e.breadcrumb}}),n("transition",{attrs:{name:"page-toggle"}},[e.multipage?n("keep-alive",[n("router-view",{staticStyle:{margin:"12px 0"}})],1):n("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{style:{overflow:"auto",height:"100vh",width:"100vw",position:"fixed",left:0}},[e.isMobile?n("drawer",{attrs:{openDrawer:e.collapsed},on:{change:e.onDrawerChange}},[n("sider-menu",{attrs:{theme:e.theme,menuData:e.menuData,collapsed:!1,collapsible:!1},on:{menuSelect:e.onMenuSelect}})],1):"side"===e.layout?n("sider-menu",{attrs:{theme:e.theme,menuData:e.menuData,collapsed:e.collapsed,collapsible:!0}}):e._e(),n("a-layout",[n("global-header",{attrs:{menuData:e.menuData,collapsed:e.collapsed},on:{toggleCollapse:e.toggleCollapse}}),n("a-layout-content",{style:{minHeight:e.minHeight,margin:"16px 24px 0"}},[e._t("default")],2),"head"===e.layout?n("a-layout-footer",{staticStyle:{padding:"0px"}},[n("global-footer",{attrs:{copyright:e.copyright}})],1):e._e()],1)],1)},c=[],r=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout-header",{class:[e.theme,"global-header"]},[n("div",{class:["global-header-wide",e.layout]},[e.isMobile||"head"===e.layout?n("router-link",{class:["logo",e.isMobile?null:"pc",e.theme],attrs:{to:"/"}},[n("img",{attrs:{width:"32",src:"/logo.png"}}),e.isMobile?e._e():n("h1",[e._v(e._s(e.systemName))])]):e._e(),e.isMobile?n("a-divider",{attrs:{type:"vertical"}}):e._e(),"side"===e.layout?n("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.toggleCollapse}}):e._e(),"head"===e.layout?n("div",{staticClass:"global-header-menu"},[n("i-menu",{staticStyle:{height:"64px","line-height":"64px"},attrs:{theme:e.theme,mode:"horizontal",menuData:e.menuData},on:{select:e.onSelect}})],1):e._e(),n("div",{class:["global-header-right",e.theme]},[n("header-avatar",{staticClass:"header-item"})],1)],1)])}),o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-popover",{attrs:{trigger:"click",placement:"bottomRight"}},[n("template",{slot:"content"},[n("a-spin",{attrs:{spinning:e.loadding}},[n("a-tabs",[n("a-tab-pane",{key:"1",attrs:{tab:"通知"}},[n("a-list",[n("a-list-item",[n("a-list-item-meta",{attrs:{title:"你收到了 14 份新周报",description:"一年前"}},[n("a-avatar",{staticStyle:{"background-color":"white"},attrs:{slot:"avatar",src:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"},slot:"avatar"})],1)],1),n("a-list-item",[n("a-list-item-meta",{attrs:{title:"你推荐的 曲妮妮 已通过第三轮面试",description:"一年前"}},[n("a-avatar",{staticStyle:{"background-color":"white"},attrs:{slot:"avatar",src:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"},slot:"avatar"})],1)],1),n("a-list-item",[n("a-list-item-meta",{attrs:{title:"这种模板可以区分多种通知类型",description:"一年前"}},[n("a-avatar",{staticStyle:{"background-color":"white"},attrs:{slot:"avatar",src:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"},slot:"avatar"})],1)],1)],1)],1),n("a-tab-pane",{key:"2",attrs:{tab:"消息"}},[e._v("\n          123\n        ")]),n("a-tab-pane",{key:"3",attrs:{tab:"待办"}},[e._v("\n          123\n        ")])],1)],1)],1),n("span",{staticClass:"header-notice",on:{click:e.fetchNotice}},[n("a-badge",{attrs:{count:"12"}},[n("a-icon",{class:["header-notice-icon",e.theme],attrs:{type:"bell"}})],1)],1)],2)},l=[],d={name:"HeaderNotice",data:function(){return{loadding:!1}},computed:{theme:function(){return"side"===this.$store.state.setting.layout?"light":this.$store.state.setting.theme}},methods:{fetchNotice:function(){var e=this;this.loadding?this.loadding=!1:(this.loadding=!0,setTimeout(function(){e.loadding=!1},2e3))}}},h=d,f=(n("0a78"),n("2877")),p=Object(f["a"])(h,u,l,!1,null,null,null),m=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-dropdown",{staticStyle:{display:"inline-block",height:"100%","vertical-align":"initial"}},[n("span",{staticStyle:{cursor:"pointer"}},[n("span",[e._v(e._s(e.currUser))])]),n("a-menu",{staticStyle:{width:"150px"},attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{on:{click:e.editpwd}},[n("a-icon",{attrs:{type:"safety"}}),n("span",[e._v("修改密码")])],1),n("a-menu-divider"),n("a-menu-item",{on:{click:e.logout}},[n("a-icon",{attrs:{type:"poweroff"}}),n("span",[e._v("退出登录")])],1)],1)],1),e.modalform.visible?n("a-modal",{attrs:{title:"修改密码",destroyOnClose:!0},on:{ok:e.handleSubmit},model:{value:e.modalform.visible,callback:function(t){e.$set(e.modalform,"visible",t)},expression:"modalform.visible"}},[n("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[n("a-form-item",{attrs:{label:"账号",labelCol:{span:6},wrapperCol:{span:14}}},[e._v(e._s(e.currUser))]),n("a-form-item",{attrs:{label:"当前密码",labelCol:{span:6},wrapperCol:{span:14}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Curpwd",{rules:[{required:!0,message:"请输入当前密码!"}]}],expression:"['Curpwd',{ rules: [{ required: true, message: '请输入当前密码!' }] }]"}],attrs:{type:"password"}})],1),n("a-form-item",{attrs:{label:"新密码",labelCol:{span:6},wrapperCol:{span:14}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Newpwd",{rules:[{required:!0,message:"请输入新密码!"}]}],expression:"['Newpwd',{ rules: [{ required: true, message: '请输入新密码!' }] }]"}],attrs:{type:"password"}})],1),n("a-form-item",{attrs:{label:"确认密码",labelCol:{span:6},wrapperCol:{span:14}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Repwd",e.AFormImportRules.Repwd],expression:"['Repwd',AFormImportRules.Repwd]"}],attrs:{type:"password"}})],1)],1)],1):e._e()],1)},v=[],k=n("a78e"),g=n.n(k),y=n("5f87"),w=n("b775"),x={name:"HeaderAvatar",data:function(){return{form:this.$form.createForm(this),modalform:{visible:!1},AFormImportRules:{Repwd:{rules:[{required:!0,message:"请输入确认密码"},{validator:this.handleConfirmRepwd}]}}}},computed:{currUser:function(){return g.a.get("us")}},methods:{logout:function(){Object(y["b"])(),location.reload()},editpwd:function(){this.modalform.visible=!0},handleSubmit:function(){var e=this,t=this;this.form.validateFields(function(n,a){n||w["a"].post("/api/user/account/SavePassword",a).then(function(e){var n=e;0!==n.code?t.$message.error(n.msg):t.logout()}.bind(e)).catch(function(e){console.log(e),t.loading=!1})})},handleConfirmRepwd:function(e,t,n){var a=this.form.getFieldValue("Newpwd");t&&t!=a?n("新密码与确认密码不一致！"):n()}}},S=x,L=Object(f["a"])(S,b,v,!1,null,"f993605c",null),E=L.exports,O=(n("7f7f"),n("ac6a"),n("55f1")),C=n("0c63"),_=O["a"].Item,M=O["a"].SubMenu,j=["dashboard","user","form","setting","message","safety","bell","delete","code-o","poweroff","eye-o","hourglass"],P={name:"IMenu",props:{menuData:{type:Array,required:!0},theme:{type:String,required:!1,default:"dark"},mode:{type:String,required:!1,default:"inline"},collapsed:{type:Boolean,required:!1,default:!1}},data:function(){return{openKeys:[],selectedKeys:[],cachedOpenKeys:[]}},computed:{rootSubmenuKeys:function(e){var t=[];return e.menuData.forEach(function(e){t.push(e.path)}),t}},created:function(){this.updateMenu()},watch:{collapsed:function(e){e?(this.cachedOpenKeys=this.openKeys,this.openKeys=[]):this.openKeys=this.cachedOpenKeys},$route:function(){this.updateMenu()}},methods:{renderIcon:function(e,t){return"none"===t||null===t?null:e(C["a"],{props:{type:void 0!==t?t:j[Math.floor(Math.random()*j.length)]}})},renderMenuItem:function(e,t,n,a){return e(_,{key:t.path?t.path:"item_"+n+"_"+a},[e("a",{attrs:{href:"#"+t.path}},[this.renderIcon(e,t.icon),e("span",[t.name])])])},renderSubMenu:function(e,t,n,a){var i=this,s=[e("span",{slot:"title"},[this.renderIcon(e,t.icon),e("span",[t.name])])],c=[],r=n+"_"+a;return t.children.forEach(function(t,n){c.push(i.renderItem(e,t,r,n))}),e(M,{key:t.path?t.path:"submenu_"+n+"_"+a},s.concat(c))},renderItem:function(e,t,n,a){if(!t.invisible)return t.children?this.renderSubMenu(e,t,n,a):this.renderMenuItem(e,t,n,a)},renderMenu:function(e,t){var n=this,a=[];return t.forEach(function(t,i){a.push(n.renderItem(e,t,"0",i))}),a},onOpenChange:function(e){var t=this,n=e.find(function(e){return-1===t.openKeys.indexOf(e)});-1===this.rootSubmenuKeys.indexOf(n)?this.openKeys=e:this.openKeys=n?[n]:[]},updateMenu:function(){var e=this.$route.matched.concat();this.selectedKeys=[e.pop().path];var t=[];e.forEach(function(e){t.push(e.path)}),this.collapsed||"horizontal"===this.mode?this.cachedOpenKeys=t:this.openKeys=t}},render:function(e){var t=this;return e(O["a"],{props:{theme:this.$props.theme,mode:this.$props.mode,openKeys:this.openKeys,selectedKeys:this.selectedKeys},on:{openChange:this.onOpenChange,select:function(e){t.selectedKeys=e.selectedKeys,t.$emit("select",e)}}},this.renderMenu(e,this.menuData))}},A={name:"GlobalHeader",components:{IMenu:P,HeaderAvatar:E,HeaderNotice:m},props:["collapsed","menuData"],computed:{isMobile:function(){return this.$store.state.setting.isMobile},layout:function(){return this.$store.state.setting.layout},theme:function(){return"side"===this.layout?"light":this.$store.state.setting.theme},systemName:function(){return this.$store.state.setting.systemName}},methods:{toggleCollapse:function(){this.$emit("toggleCollapse")},onSelect:function(e){this.$emit("menuSelect",e)}}},K=A,I=(n("d450"),Object(f["a"])(K,r,o,!1,null,"01afb547",null)),N=I.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"copyright"},[e._v("\n    Copyright"),n("a-icon",{attrs:{type:"copyright"}}),e._v(e._s(e.copyright)+"\n  ")],1)])},$=[],R={name:"GlobalFooter",props:["copyright"]},T=R,V=(n("30ac"),Object(f["a"])(T,D,$,!1,null,"fce5b84e",null)),q=V.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:["mask",e.openDrawer?"open":"close"],on:{click:e.close}}),n("div",{class:["drawer",e.placement,e.openDrawer?"open":"close"]},[n("div",{ref:"drawer",staticStyle:{position:"relative",height:"100%"}},[e._t("default")],2),e.showHandler?n("div",{ref:"handler",class:["handler-container",e.placement],on:{click:e.handle}},[e.$slots.handler?e._t("handler"):n("div",{staticClass:"handler"},[n("a-icon",{attrs:{type:e.openDrawer?"close":"bars"}})],1)],2):e._e()])])},H=[],G={name:"Drawer",data:function(){return{drawerWidth:0}},props:{openDrawer:{type:Boolean,required:!1,default:!1},placement:{type:String,required:!1,default:"left"},showHandler:{type:Boolean,required:!1,default:!0}},mounted:function(){this.drawerWidth=this.getDrawerWidth()},watch:{drawerWidth:function(e){"left"===this.placement?this.$refs.handler.style.left=e+"px":this.$refs.handler.style.right=e+"px"}},methods:{open:function(){this.$emit("change",!0)},close:function(){this.$emit("change",!1)},handle:function(){this.$emit("change",!this.openDrawer)},getDrawerWidth:function(){return this.$refs.drawer.clientWidth}}},U=G,z=(n("a8e9"),Object(f["a"])(U,B,H,!1,null,"7bcd0a84",null)),F=z.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{class:[e.theme,"sider",e.isMobile?null:"shadow"],attrs:{collapsible:e.collapsible,trigger:null},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("div",{class:[e.collapsed?"logo":"logotext",e.theme]},[a("router-link",{attrs:{to:"/dashboard"}},[a("img",{attrs:{src:n("97e5")}}),a("h1",[e._v(e._s(e.systemName))])])],1),a("i-menu",{attrs:{theme:e.theme,collapsed:e.collapsed,menuData:e.menuData},on:{select:e.onSelect}})],1)},Y=[],Q={name:"SiderMenu",components:{IMenu:P},props:{collapsible:{type:Boolean,required:!1,default:!1},collapsed:{type:Boolean,required:!1,default:!1},menuData:{type:Array,required:!0},theme:{type:String,required:!1,default:"dark"}},computed:{isMobile:function(){return this.$store.state.setting.isMobile},systemName:function(){return this.$store.state.setting.systemName}},methods:{onSelect:function(e){this.$emit("menuSelect",e)}}},X=Q,W=(n("7426"),Object(f["a"])(X,J,Y,!1,null,"1b818f89",null)),Z=W.exports,ee=window.innerHeight-64-24-122,te=[],ne={name:"GlobalLayout",components:{SiderMenu:Z,Drawer:F,GlobalFooter:q,GlobalHeader:N},data:function(){return{minHeight:ee+"px",collapsed:!1,menuData:te}},computed:{isMobile:function(){return this.$store.state.setting.isMobile},theme:function(){return this.$store.state.setting.theme},layout:function(){return this.$store.state.setting.layout},copyright:function(){return this.$store.state.setting.copyright}},methods:{toggleCollapse:function(){this.collapsed=!this.collapsed},onDrawerChange:function(e){this.collapsed=e},onMenuSelect:function(){this.toggleCollapse()}},beforeCreate:function(){te=this.$router.options.routes.find(function(e){return"/"===e.path}).children}},ae=ne,ie=Object(f["a"])(ae,s,c,!1,null,"a54957f0",null),se=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-menu",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"contextmenu",style:e.style,attrs:{selectedKeys:e.selectedKeys},on:{click:e.handleClick}},e._l(e.itemList,function(t){return n("a-menu-item",{key:t.key},[t.icon?n("a-icon",{attrs:{role:"menuitemicon",type:t.icon}}):e._e(),e._v(e._s(t.text)+"\n  ")],1)}),1)},re=[],oe={name:"Contextmenu",props:{visible:{type:Boolean,required:!1,default:!1},itemList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{left:0,top:0,target:null,selectedKeys:[]}},computed:{style:function(){return{left:this.left+"px",top:this.top+"px"}}},created:function(){var e=this;window.addEventListener("mousedown",function(t){return e.closeMenu(t)}),window.addEventListener("contextmenu",function(t){return e.setPosition(t)})},methods:{closeMenu:function(e){["menuitemicon","menuitem"].indexOf(e.target.getAttribute("role"))<0&&this.$emit("update:visible",!1)},setPosition:function(e){this.left=e.clientX,this.top=e.clientY,this.target=e.target},handleClick:function(e){var t=e.key;this.$emit("select",t,this.target),this.$emit("update:visible",!1)}}},ue=oe,le=(n("defc"),Object(f["a"])(ue,ce,re,!1,null,"18a40ee8",null)),de=le.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("div",{class:["page-header-wide",e.layout]},[n("div",{staticClass:"breadcrumb"},[n("a-breadcrumb",e._l(e.breadcrumb,function(t,a){return n("a-breadcrumb-item",{key:t.path},[n("span",[e._v(e._s(t.name))])])}),1)],1)])])},fe=[],pe={name:"PageHeader",props:{breadcrumb:{type:Array,required:!1}},computed:{layout:function(){return this.$store.state.setting.layout}}},me=pe,be=(n("7af0"),Object(f["a"])(me,he,fe,!1,null,"63230972",null)),ve=be.exports,ke={name:"MenuView",components:{Contextmenu:de,GlobalLayout:se,PageHeader:ve},data:function(){return{pageList:[],linkList:[],activePage:"",menuVisible:!1,menuItemList:[{key:"1",icon:"arrow-left",text:"关闭左侧"},{key:"2",icon:"arrow-right",text:"关闭右侧"},{key:"3",icon:"close",text:"关闭其它"}],breadcrumb:[]}},mounted:function(){this.getBreadcrumb()},updated:function(){this.getBreadcrumb()},computed:{multipage:function(){return this.$store.state.setting.multipage}},created:function(){this.pageList.push(this.$route),this.linkList.push(this.$route.fullPath),this.activePage=this.$route.fullPath},watch:{$route:function(e,t){this.activePage=e.fullPath,this.multipage?this.linkList.indexOf(e.fullPath)<0&&(this.linkList.push(e.fullPath),this.pageList.push(e)):(this.linkList=[e.fullPath],this.pageList=[e])},activePage:function(e){this.$router.push(e)},multipage:function(e,t){e||(this.linkList=[this.$route.fullPath],this.pageList=[this.$route])}},methods:{getBreadcrumb:function(){this.breadcrumb=this.$route.matched},changePage:function(e){this.activePage=e},editPage:function(e,t){this[t](e)},remove:function(e){if(1!==this.pageList.length){this.pageList=this.pageList.filter(function(t){return t.fullPath!==e});var t=this.linkList.indexOf(e);this.linkList=this.linkList.filter(function(t){return t!==e}),t=t>=this.linkList.length?this.linkList.length-1:t,this.activePage=this.linkList[t]}else this.$message.warning("这是最后一页，不能再关闭了啦")},onContextmenu:function(e){var t=this.getPageKey(e.target);null!==t&&(e.preventDefault(),this.menuVisible=!0)},getPageKey:function(e,t){if(t=t||0,t>2)return null;var n=e.getAttribute("pagekey");return n=n||(e.previousElementSibling?e.previousElementSibling.getAttribute("pagekey"):null),n||(e.firstElementChild?this.getPageKey(e.firstElementChild,++t):null)},onMenuSelect:function(e,t){var n=this.getPageKey(t);switch(e){case"1":this.closeLeft(n);break;case"2":this.closeRight(n);break;case"3":this.closeOthers(n);break;default:break}},closeOthers:function(e){var t=this.linkList.indexOf(e);this.linkList=this.linkList.slice(t,t+1),this.pageList=this.pageList.slice(t,t+1),this.activePage=this.linkList[0]},closeLeft:function(e){var t=this.linkList.indexOf(e);this.linkList=this.linkList.slice(t),this.pageList=this.pageList.slice(t),this.linkList.indexOf(this.activePage)<0&&(this.activePage=this.linkList[0])},closeRight:function(e){var t=this.linkList.indexOf(e);this.linkList=this.linkList.slice(0,t+1),this.pageList=this.pageList.slice(0,t+1),this.linkList.indexOf(this.activePage<0)&&(this.activePage=this.linkList[this.linkList.length-1])}}},ge=ke,ye=Object(f["a"])(ge,a,i,!1,null,"37dd1742",null);t["a"]=ye.exports},"2a68":function(e,t,n){var a={"./views/dashboard":["9406","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-22989cea"],"./views/dashboard/":["9406","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-22989cea"],"./views/dashboard/index":["9406","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-22989cea"],"./views/dashboard/index.vue":["9406","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-22989cea"],"./views/employee":["5303","chunk-2d0c7e17"],"./views/employee/":["5303","chunk-2d0c7e17"],"./views/employee/index":["5303","chunk-2d0c7e17"],"./views/employee/index.vue":["5303","chunk-2d0c7e17"],"./views/employee/paidan":["23d7","chunk-2d0b274a"],"./views/employee/paidan.vue":["23d7","chunk-2d0b274a"],"./views/errorPage/401":["5143","chunk-748fc792"],"./views/errorPage/401.vue":["5143","chunk-748fc792"],"./views/errorPage/404":["fde5","chunk-49d47874"],"./views/errorPage/404.vue":["fde5","chunk-49d47874"],"./views/login":["9ed6","chunk-54ecf04e"],"./views/login/":["9ed6","chunk-54ecf04e"],"./views/login/index":["9ed6","chunk-54ecf04e"],"./views/login/index.vue":["9ed6","chunk-54ecf04e"],"./views/redirect":["ef3c","chunk-7e092551"],"./views/redirect/":["ef3c","chunk-7e092551"],"./views/redirect/index":["ef3c","chunk-7e092551"],"./views/redirect/index.vue":["ef3c","chunk-7e092551"],"./views/salary/deduct":["0b68","chunk-3678606e","chunk-6c796ecf"],"./views/salary/deduct/":["0b68","chunk-3678606e","chunk-6c796ecf"],"./views/salary/deduct/components/detail":["ec82","chunk-2d23050e"],"./views/salary/deduct/components/detail.vue":["ec82","chunk-2d23050e"],"./views/salary/deduct/components/upload":["f3c7","chunk-2d22ca77"],"./views/salary/deduct/components/upload.vue":["f3c7","chunk-2d22ca77"],"./views/salary/deduct/index":["0b68","chunk-3678606e","chunk-6c796ecf"],"./views/salary/deduct/index.vue":["0b68","chunk-3678606e","chunk-6c796ecf"],"./views/salary/payroll":["b64c","chunk-3678606e","chunk-8dbc8404"],"./views/salary/payroll/":["b64c","chunk-3678606e","chunk-8dbc8404"],"./views/salary/payroll/components/delerr":["7af9","chunk-2d0e1a13"],"./views/salary/payroll/components/delerr.vue":["7af9","chunk-2d0e1a13"],"./views/salary/payroll/components/detail":["9444","chunk-4f73a587"],"./views/salary/payroll/components/detail.vue":["9444","chunk-4f73a587"],"./views/salary/payroll/components/upload":["ac5f","chunk-678d99ec"],"./views/salary/payroll/components/upload.vue":["ac5f","chunk-678d99ec"],"./views/salary/payroll/index":["b64c","chunk-3678606e","chunk-8dbc8404"],"./views/salary/payroll/index.vue":["b64c","chunk-3678606e","chunk-8dbc8404"],"./views/salary/tax/components/detaildeclare":["658c","chunk-2d0cfb20"],"./views/salary/tax/components/detaildeclare.vue":["658c","chunk-2d0cfb20"],"./views/salary/tax/components/detailnewly":["ebdd","chunk-2d2306d3"],"./views/salary/tax/components/detailnewly.vue":["ebdd","chunk-2d2306d3"],"./views/salary/tax/declare":["8d9a","chunk-3678606e","chunk-1d2058ae"],"./views/salary/tax/declare.vue":["8d9a","chunk-3678606e","chunk-1d2058ae"],"./views/salary/tax/newly":["2bed","chunk-3678606e","chunk-1970df2e"],"./views/salary/tax/newly.vue":["2bed","chunk-3678606e","chunk-1970df2e"],"./views/shebao/bill":["098f","chunk-2df26080"],"./views/shebao/bill/":["098f","chunk-2df26080"],"./views/shebao/bill/index":["098f","chunk-2df26080"],"./views/shebao/bill/index.vue":["098f","chunk-2df26080"],"./views/shebao/components/bill/detail":["f711","chunk-7bd43499"],"./views/shebao/components/bill/detail.vue":["f711","chunk-7bd43499"],"./views/shebao/components/bill/rollback":["531c","chunk-5eeede0c"],"./views/shebao/components/bill/rollback.vue":["531c","chunk-5eeede0c"],"./views/shebao/components/insured/personbaseedit":["a426","chunk-3678606e","chunk-3473dbe1"],"./views/shebao/components/insured/personbaseedit.vue":["a426","chunk-3678606e","chunk-3473dbe1"],"./views/shebao/components/insured/persondetail":["3263","chunk-3678606e","chunk-23157942","chunk-1c343824"],"./views/shebao/components/insured/persondetail.vue":["3263","chunk-3678606e","chunk-23157942","chunk-1c343824"],"./views/shebao/components/insured/personedit":["6ea4","chunk-3678606e","chunk-8684a108"],"./views/shebao/components/insured/personedit.vue":["6ea4","chunk-3678606e","chunk-8684a108"],"./views/shebao/components/insured/personremove":["bf8b","chunk-2d21b364"],"./views/shebao/components/insured/personremove.vue":["bf8b","chunk-2d21b364"],"./views/shebao/components/insured/sbgjjlonelyadd":["54f4","chunk-3678606e","chunk-6c89e9d1"],"./views/shebao/components/insured/sbgjjlonelyadd.vue":["54f4","chunk-3678606e","chunk-6c89e9d1"],"./views/shebao/components/insured/sbgjjlonelyedit":["590b","chunk-3678606e","chunk-d1b94f70"],"./views/shebao/components/insured/sbgjjlonelyedit.vue":["590b","chunk-3678606e","chunk-d1b94f70"],"./views/shebao/components/insured/sbgjjmodifyremove":["50ff","chunk-2d0c7991"],"./views/shebao/components/insured/sbgjjmodifyremove.vue":["50ff","chunk-2d0c7991"],"./views/shebao/components/insured/shebaodetail":["b7f6","chunk-26f4f825"],"./views/shebao/components/insured/shebaodetail.vue":["b7f6","chunk-26f4f825"],"./views/shebao/components/insured/shebaogjjedit":["9621","chunk-3678606e","chunk-23157942"],"./views/shebao/components/insured/shebaogjjedit.vue":["9621","chunk-3678606e","chunk-23157942"],"./views/shebao/components/invoice/detail":["4707","chunk-2d0c18c0"],"./views/shebao/components/invoice/detail.vue":["4707","chunk-2d0c18c0"],"./views/shebao/insured":["401a","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-d730ad40"],"./views/shebao/insured/":["401a","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-d730ad40"],"./views/shebao/insured/index":["401a","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-d730ad40"],"./views/shebao/insured/index.vue":["401a","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-d730ad40"],"./views/shebao/invoice":["f8e8","chunk-08e12601"],"./views/shebao/invoice/":["f8e8","chunk-08e12601"],"./views/shebao/invoice/index":["f8e8","chunk-08e12601"],"./views/shebao/invoice/index.vue":["f8e8","chunk-08e12601"],"./views/shebao/refused":["8b25","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-3afaac38"],"./views/shebao/refused/":["8b25","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-3afaac38"],"./views/shebao/refused/index":["8b25","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-3afaac38"],"./views/shebao/refused/index.vue":["8b25","chunk-3678606e","chunk-23157942","chunk-1c343824","chunk-3afaac38"]};function i(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id="2a68",e.exports=i},"30ac":function(e,t,n){"use strict";var a=n("486b"),i=n.n(a);i.a},"348f":function(e,t,n){},"486b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("8bbf"),i=n.n(a),s=n("f23d"),c=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a-locale-provider",{attrs:{locale:e.locale}},[n("router-view")],1)],1)}),r=[],o=n("677e"),u=n.n(o),l={name:"App",data:function(){return{locale:u.a}}},d=l,h=n("2877"),f=Object(h["a"])(d,c,r,!1,null,null,null),p=f.exports,m=n("a18c"),b=n("5880"),v=n.n(b),k=n("795b"),g=n.n(k),y=(n("7514"),n("ac6a"),n("b775"));function w(){return Object(y["a"])({url:"api/",method:"post"})}var x=n("5d73"),S=n.n(x),L=n("1443");function E(e){var t=[],a=!0,i=!1,s=void 0;try{for(var c,r=function(){var e=c.value,a={};if(a=2===e.Type?{path:e.Url,name:e.NODE_NAME,component:function(){return n("2a68")("./views"+e.Url)},icon:e.Ico}:{path:e.Url,name:e.NODE_NAME,component:L["a"],icon:e.Ico},e.Children.length>0){var i=[];i=E(e.Children),a.children=i}t.push(a)},o=S()(e);!(a=(c=o.next()).done);a=!0)r()}catch(u){i=!0,s=u}finally{try{a||null==o.return||o.return()}finally{if(i)throw s}}return t}var O={state:{routers:[],addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,t.forEach(function(e){m["a"].find(function(e){return"/"===e.path}).children.push(e)}),e.routers=m["a"]}},actions:{GetMenu:function(e){var t=e.commit;return new g.a(function(e,n){w().then(function(n){var a=n.data,i=a.tree,s=[];s=E(i),t("SET_ROUTERS",s),e()}).catch(function(e){n(e)})})}}},C=O,_={namespaced:!0,state:{isMobile:!1,theme:"dark",layout:"side",systemName:"方胜人事帮",copyright:"2019 河北方胜",multipage:!0},mutations:{setDevice:function(e,t){e.isMobile=t},setTheme:function(e,t){e.theme=t},setLayout:function(e,t){e.layout=t},setMultipage:function(e,t){e.multipage=t}}},M={sidebar:function(e){return e.app.sidebar},visitedViews:function(e){return e.tagsView.visitedViews},cachedViews:function(e){return e.tagsView.cachedViews},permission_routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},permission_menutrees:function(e){return e.permission.menutrees}},j=M;i.a.use(v.a);var P=new v.a.Store({modules:{permission:C,setting:_},getters:j}),A=P,K=n("cebc"),I=n("323e"),N=n.n(I),D=(n("a5d8"),n("5f87"));N.a.configure({showSpinner:!1});var $=["/login"],R=["/401"];m["b"].beforeEach(function(e,t,n){N.a.start(),Object(D["a"])()?(-1!==R.indexOf(e.path)&&n(),"/login"===e.path?(n({path:"/"}),N.a.done()):0===A.getters.addRouters.length?A.dispatch("GetMenu").then(function(t){m["b"].addRoutes(A.getters.addRouters),n(Object(K["a"])({},e,{replace:!0}))}).catch(function(e){console.log(e),n({path:"/401",replace:!0,query:{noGoBack:!0}})}):n()):-1!==$.indexOf(e.path)?n():(n("/login?redirect=".concat(e.path)),N.a.done())}),m["b"].afterEach(function(){N.a.done()}),i.a.config.productionTip=!1,i.a.use(s["a"]),new i.a({router:m["b"],store:A,render:function(e){return e(p)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},"5f87":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return r});var a=n("a78e"),i=n.n(a),s="FescoRSBBV1";function c(){return i.a.get(s)}function r(){return i.a.remove(s)}},6389:function(e,t){e.exports=VueRouter},7426:function(e,t,n){"use strict";var a=n("f35d"),i=n.n(a);i.a},"7af0":function(e,t,n){"use strict";var a=n("f680"),i=n.n(a);i.a},"8bbf":function(e,t){e.exports=Vue},"97e5":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEaklEQVR4nO3dW4hVVRzH8c8cJ6PQVCov1UPjRAqViIbdiIiIojSojOipeokIISqlhyKIpJeMhMjwRerBCqKiwopu9NLFsqQi7OJbSNIV7aqWp4c1B8dx5syemX1Zg//v05y1/3vv3/Blz6yz91pr97Tb7T5sxtkmB8/g9gJ1M/AULqs0zSH+xg58gO3Ygr/GepCedru9AwvLzVY5d2H9KDUbcVsNWUbiBzyLJ7Gz6E4tk08GLCtQ01d5iu7Mw934Dg+it8hOLfxRYaiq2FOg5vfKUxTnAXyDRaMVttCuPE75TMbM8/E5VnQratWTJRjEK7h2pI0hpBlexLnDbQghzfEGjhvaGEKa40TpSjmMENIsV+KKwQ0hpHmeHvwhhDTPHFzX+RBC8uDhzg8hJA8WYAkhJCduIITkxOWEkJxYivkhJC8uDCF5MSeE5EVfCMmLM0JIXkwLIXnRDiF50RNC8uJACMmLXSEkL3aGkLzYHULy4usQkg8/4v0Qkg/viF5WVmwhnofkwn94iRCSCxsMTO4JIXkQo04yYgN2dz6EkGbZh1WDG0JIs1xvyOSjENIcjxro6g4mhDTDC1g93IYQUj+vYeVIG0NIvTyBq7sVtHBsPVlKZWqBmkLzwmtiN24xpEc1HL2K/XK50VOgZlrlKUbnV2zCWsXm1mvh3ioTVcAePFagrkhNFfyJ17FGmpu+RkEZpLVOSAN9Tx9oy3VS/hT8g63Ss4Mi9EuL6kyVbuBVlWs/9uJn7JKujHHRERJkQvSyMiOEZEYIyYwQkhkhJDNCSGaEkMzo3O9ZLH2rbOFgc3G6MkVa+fND/FJwn5m4CMdLX3gPGmYFnpzoxT1Y13SQMfAbLsZXo9T1S/JOHtL+ES6oIFcptEwuGTBLWiZ2NO50pAw4H9ukqyY7WjjQdIhxUORub7fb70vxMU4qJ055tKQbdpONfSXUnCX9+Zoz8TjlcbT3svrxBeY2HaTD0S4EZuMznNp0EEJIh3n4Uur6N0oIOcQsqfd1TpMhQsjhzJJeN7GkqQAh5EimSY+J63rvyGGEkOHpxdsGVnmrkxDSnTdxTZ0nDCGj8zKW13WyEFKMV3FjHScKIcV5DrdWfZIQMjY2KTA+dyKEkLHzuPQMqRJCyPhYh/uqOHAIGT9r8VDZBw0hE+N+PFLmAUPIxFkt/V8phRBSDquk9+5OmBBSHjdLL06eECGkXG7C8xM5QAgpn5XSrZZxEUKqYbn0itUxE0KqYwXeHetOIaRaLpXGfhUmhFTPediu4Lz5EFIPi/GpAkNXQ0h9nCldKad0Kwoh9XKaJGXEUZIhpH5mSwPyFgy3MYQ0w1xpOsTCoRtCSHOcII28XzS4MYQ0yzH4BMs6DSGkeaZKcyEvIYTkQgvvYUUIyYvNISQv9oaQvNg/WYUUmRZdpCY7WpjedIhxMKNAzczKU5TP9Ba+bTrFONhWoGZr5SnK56eedrvdj43ok/dl3oN/8RbuKLjPelwlfQHLebXPNr7Hqv8Bq/qfPXwX+esAAAAASUVORK5CYII="},a0c5:function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("8bbf"),i=n.n(a),s=n("6389"),c=n.n(s),r=n("1443");i.a.use(c.a);var o=[{path:"/redirect",component:r["a"],hidden:!0,children:[{path:"/redirect/:path*",component:function(){return n.e("chunk-7e092551").then(n.bind(null,"ef3c"))}}]},{path:"/login",component:function(){return n.e("chunk-54ecf04e").then(n.bind(null,"9ed6"))},hidden:!0},{path:"*",component:function(){return n.e("chunk-49d47874").then(n.bind(null,"fde5"))},hidden:!0},{path:"/401",component:function(){return n.e("chunk-748fc792").then(n.bind(null,"5143"))},hidden:!0},{path:"/",name:"首页",component:r["a"],redirect:"/dashboard",icon:"none",invisible:!0,children:[{path:"/dashboard",name:"工作台",component:function(){return Promise.all([n.e("chunk-3678606e"),n.e("chunk-23157942"),n.e("chunk-1c343824"),n.e("chunk-22989cea")]).then(n.bind(null,"9406"))},icon:"dashboard"}]}];t["b"]=new c.a({routes:o})},a2af:function(e,t,n){},a8e9:function(e,t,n){"use strict";var a=n("348f"),i=n.n(a);i.a},b775:function(e,t,n){"use strict";var a=n("795b"),i=n.n(a),s=n("bc3a"),c=n.n(s),r=n("a18c"),o=n("f64c"),u=c.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"https://cdn.jsdelivr.net/gh/fescohebei/RSBB/"}).BASE_API});u.interceptors.request.use(function(e){var t=e.headers;return"application/octet-stream;charset=utf-8"===t["content-type"]?e.data:e},function(e){i.a.reject(e)}),u.interceptors.response.use(function(e){return 1==e.data.code&&(console.log(r["b"].currentRoute.fullPath),r["b"].push({path:"/login",query:{redirect:r["b"].currentRoute.fullPath}})),e.data},function(e){return o["a"].error(e.message),i.a.reject(e)}),t["a"]=u},c32d:function(e,t){e.exports=moment},d450:function(e,t,n){"use strict";var a=n("0ce4"),i=n.n(a);i.a},defc:function(e,t,n){"use strict";var a=n("a0c5"),i=n.n(a);i.a},f35d:function(e,t,n){},f680:function(e,t,n){}});
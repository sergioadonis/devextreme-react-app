(this["webpackJsonpsistema-inventario"]=this["webpackJsonpsistema-inventario"]||[]).push([[0],{622:function(e,t,n){},624:function(e,t,n){},625:function(e,t,n){},626:function(e,t,n){},670:function(e,t,n){},671:function(e,t,n){},876:function(e,t,n){},879:function(e,t,n){},880:function(e,t,n){},882:function(e,t,n){},883:function(e,t,n){},884:function(e,t,n){},885:function(e,t,n){},886:function(e,t,n){},887:function(e,t,n){},888:function(e,t,n){},889:function(e,t,n){"use strict";n.r(t);n(421),n(431);var a=n(4),c=n.n(a),s=n(282),i=n.n(s),r=(n(622),n(623),n(624),n(625),n(75)),o=(n(626),n(417)),u=n.n(o),l=n(80),d=n(30),j=n(0),b=Object(a.createContext)({}),m=function(){return Object(a.useContext)(b)};function h(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),c=n[0],s=n[1];return Object(j.jsx)(b.Provider,Object(l.a)({value:{navigationData:c,setNavigationData:s}},e))}var p=n(89),x=function(){var e=Object(a.useState)(w()),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useCallback)((function(){c(w())}),[]);return Object(a.useEffect)((function(){return C(s),function(){y(s)}}),[s]),n},f=[],O=window.matchMedia("(max-width: 599.99px)"),v=window.matchMedia("(min-width: 600px) and (max-width: 959.99px)"),g=window.matchMedia("(min-width: 960px) and (max-width: 1279.99px)"),k=window.matchMedia("(min-width: 1280px)");[O,v,g,k].forEach((function(e){e.addListener((function(e){e.matches&&f.forEach((function(e){return e()}))}))}));var C=function(e){return f.push(e)},y=function(e){f=f.filter((function(t){return t!==e}))};function w(){return{isXSmall:O.matches,isSmall:v.matches,isMedium:g.matches,isLarge:k.matches}}var S=n(36),T="Sistema de Inventarios",N=(n(670),n(22)),P=n.n(N),_=n(46),D=(n(671),n(12)),E=n.n(D),M="sergioadonis.auth0.com",F={xs:1,sm:2,md:3,lg:4},I=(n(759),n(62)),R=n.n(I),L=n(139),A=n.n(L),B={store:{type:"odata",key:"Task_ID",url:"https://js.devexpress.com/Demos/DevAV/odata/Tasks"},expand:"ResponsibleEmployee",select:["Task_ID","Task_Subject","Task_Start_Date","Task_Due_Date","Task_Status","Task_Priority","Task_Completion","ResponsibleEmployee/Employee_Full_Name"]},z=[{name:"High",value:4},{name:"Urgent",value:3},{name:"Normal",value:2},{name:"Low",value:1}],U=[{path:"/tasks",component:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Tasks"}),Object(j.jsx)("div",{className:"content-block",children:Object(j.jsx)(L.Button,{text:"Create a new task",type:"default",icon:"file"})}),Object(j.jsx)("div",{className:"content-block",children:Object(j.jsxs)(R.a,{className:"dx-card",dataSource:B,showBorders:!1,focusedRowEnabled:!0,defaultFocusedRowIndex:0,columnAutoWidth:!0,columnHidingEnabled:!0,children:[Object(j.jsx)(I.Paging,{defaultPageSize:10}),Object(j.jsx)(I.Pager,{showPageSizeSelector:!0,showInfo:!0}),Object(j.jsx)(I.FilterRow,{visible:!0}),Object(j.jsx)(I.Column,{dataField:"Task_ID",width:90,hidingPriority:2}),Object(j.jsx)(I.Column,{dataField:"Task_Subject",width:200,caption:"Subject",hidingPriority:8}),Object(j.jsx)(I.Column,{dataField:"Task_Status",caption:"Status",hidingPriority:6}),Object(j.jsx)(I.Column,{dataField:"Task_Priority",caption:"Priority",hidingPriority:5,children:Object(j.jsx)(I.Lookup,{dataSource:z,valueExpr:"value",displayExpr:"name"})}),Object(j.jsx)(I.Column,{dataField:"ResponsibleEmployee.Employee_Full_Name",caption:"Assigned To",allowSorting:!1,hidingPriority:7}),Object(j.jsx)(I.Column,{dataField:"Task_Start_Date",caption:"Start Date",dataType:"date",hidingPriority:3}),Object(j.jsx)(I.Column,{dataField:"Task_Due_Date",caption:"Due Date",dataType:"date",hidingPriority:4}),Object(j.jsx)(I.Column,{dataField:"Task_Priority",caption:"Priority",name:"Priority",hidingPriority:1}),Object(j.jsx)(I.Column,{dataField:"Task_Completion",caption:"Completion",hidingPriority:0})]})})]})}},{path:"/profile",component:function(){var e=Object(a.useState)("Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts."),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(p.b)(),r=i.user,o=i.isAuthenticated,u=i.getAccessTokenSilently,l=Object(a.useState)(null),b=Object(d.a)(l,2),m=b[0],h=b[1];Object(a.useEffect)((function(){(function(){var e=Object(_.a)(P.a.mark((function e(){var t,n,a,c,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u({audience:"https://".concat(M,"/api/v2/"),scope:"read:current_user"});case 3:return t=e.sent,n="https://".concat(M,"/api/v2/users/").concat(r.sub),e.next=7,fetch(n,{headers:{Authorization:"Bearer ".concat(t)}});case 7:return a=e.sent,e.next=10,a.json();case 10:c=e.sent,s=c.user_metadata,h(s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[u,r]);var x={ID:7,FirstName:"Sandra",LastName:"Johnson",Prefix:"Mrs.",Position:"Controller",Picture:r.avatar_url,BirthDate:new Date("1974/11/15"),HireDate:new Date("2005/05/11"),Notes:n,Address:"4600 N Virginia Rd."};return o&&Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Profile"}),m&&m.avatar_url&&Object(j.jsxs)("div",{className:"content-block dx-card responsive-paddings",children:[Object(j.jsx)("div",{className:"form-avatar",children:Object(j.jsx)("img",{alt:"",src:r.picture})}),Object(j.jsx)("span",{children:n})]}),Object(j.jsx)("div",{className:"content-block dx-card responsive-paddings",children:Object(j.jsx)(E.a,{id:"form",defaultFormData:x,onFieldDataChanged:function(e){return"Notes"===e.dataField&&s(e.value)},labelLocation:"top",colCountByScreen:F})})]})}},{path:"/home",component:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Inicio"}),Object(j.jsx)("div",{className:"content-block",children:Object(j.jsx)("div",{className:"dx-card responsive-paddings"})})]})}},{path:"/signout",component:function(){var e=Object(p.b)().logout;return Object(a.useEffect)((function(){return e({returnTo:window.location.origin+"/devextreme-react-app"})})),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"You clicked signout"})})}}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{component:(t=e.component,function(e){var n=e.match.path,s=m().setNavigationData;return Object(a.useEffect)((function(){s({currentPath:n})}),[n,s]),c.a.createElement(t,e)})});var t})),J=n(224),H=n.n(J),V=n(158),X=n.n(V),q=n(100),W=n.n(q),Y=n(283),G=n.n(Y),K=n(418),Q=n.n(K),Z=(n(876),"sergioadonis.auth0.com"),$=function(e){var t=e.menuMode,n=Object(p.b)(),c=n.user,s=n.logout,i=n.getAccessTokenSilently,r=Object(S.g)(),o=Object(a.useState)(null),u=Object(d.a)(o,2),l=u[0],b=u[1];Object(a.useEffect)((function(){(function(){var e=Object(_.a)(P.a.mark((function e(){var t,n,a,s,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i({audience:"https://".concat(Z,"/api/v2/"),scope:"read:current_user"});case 3:return t=e.sent,n="https://".concat(Z,"/api/v2/users/").concat(c.sub),e.next=7,fetch(n,{headers:{Authorization:"Bearer ".concat(t)}});case 7:return a=e.sent,e.next=10,a.json();case 10:s=e.sent,r=s.user_metadata,b(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[i,c]);var m=Object(a.useCallback)((function(){return r.push("/profile")}),[r]),h=Object(a.useMemo)((function(){return[{text:"Profile",icon:"user",onClick:m},{text:"Logout",icon:"runner",onClick:s}]}),[m,s]);return Object(j.jsxs)("div",{className:"user-panel",children:[Object(j.jsxs)("div",{className:"user-info",children:[l&&l.avatar_url&&Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("div",{style:{background:"url(".concat(c.picture,") no-repeat #fff"),backgroundSize:"cover"},className:"user-image"})}),Object(j.jsx)("div",{className:"user-name",children:c.email})]}),"context"===t&&Object(j.jsx)(G.a,{items:h,target:".user-button",showEvent:"dxclick",width:400,cssClass:"user-menu",children:Object(j.jsx)(Y.Position,{my:"top center",at:"bottom center"})}),"list"===t&&Object(j.jsx)(Q.a,{className:"dx-toolbar-menu-action",items:h})]})},ee=(n(879),n(138)),te=function(e){var t=e.menuToggleEnabled,n=e.title,a=e.toggleMenu;return Object(j.jsx)("header",{className:"header-component",children:Object(j.jsxs)(W.a,{className:"header-toolbar",children:[Object(j.jsx)(q.Item,{visible:t,location:"before",widget:"dxButton",cssClass:"menu-button",children:Object(j.jsx)(A.a,{icon:"menu",stylingMode:"text",onClick:a})}),Object(j.jsx)(q.Item,{location:"before",cssClass:"header-title",text:n,visible:!!n}),Object(j.jsx)(q.Item,{location:"after",locateInMenu:"auto",menuItemTemplate:"userPanelTemplate",children:Object(j.jsx)(A.a,{className:"user-button authorization",width:210,height:"100%",stylingMode:"text",children:Object(j.jsx)($,{menuMode:"context"})})}),Object(j.jsx)(ee.Template,{name:"userPanelTemplate",children:Object(j.jsx)($,{menuMode:"list"})})]})})},ne=(n(880),function(e){var t=Object.assign({},e);return Object(j.jsx)("footer",Object(l.a)({className:"footer"},t))});n(118),n(99);n(882),n(883),n(884);var ae=n(420),ce=n.n(ae),se=[{text:"Inicio",path:"/home",icon:"home"},{text:"Tasks",path:"/tasks",icon:"fields"},{text:"Reportes",icon:"copy",items:[{text:"Reporte de Existencias",path:"/current-balance-report"},{text:"Reporte de Costos",path:"/costs-report"}]},{text:"Transacciones",icon:"detailslayout",items:[{text:"Entradas",path:"/inputs"},{text:"Salidas",path:"/outputs"},{text:"Traslados",path:"/transfers"},{text:"Transformaciones",path:"/transformations"},{text:"Contabilidad",path:"/accounting"}]},{text:"Configuraciones",icon:"preferences",items:[{text:"Ubicaciones",path:"/locations"},{text:"Items",path:"/items"},{text:"Conversiones",path:"/conversions"},{text:"Costos",path:"/costs"},{text:"Veh\xedculos",path:"/vehicles"},{text:"Conductores",path:"/drivers"}]},{text:"Perfil",path:"/profile",icon:"user"},{text:"Salir",path:"/signout",icon:"runner"}],ie=(n(885),n(186)),re=function(e){var t=e.children,n=e.selectedItemChanged,c=e.openMenu,s=e.compactMode,i=e.onMenuReady,r=x().isLarge;function o(){return se.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(l.a)(Object(l.a)({},e),{},{expanded:r})}))}var u=Object(a.useMemo)(o,[o]),d=m().navigationData.currentPath,b=Object(a.useRef)(),h=Object(a.useRef)(),p=Object(a.useCallback)((function(e){var t=h.current;t&&ie.off(t,"dxclick"),h.current=e,ie.on(e,"dxclick",(function(e){c(e)}))}),[c]);return Object(a.useEffect)((function(){var e=b.current&&b.current.instance;e&&(void 0!==d&&(e.selectItem(d),e.expandItem(d)),s&&e.collapseAll())}),[d,s]),Object(j.jsxs)("div",{className:"dx-swatch-additional side-navigation-menu",ref:p,children:[t,Object(j.jsx)("div",{className:"menu-container",children:Object(j.jsx)(ce.a,{ref:b,items:u,keyExpr:"path",selectionMode:"single",focusStateEnabled:!1,expandEvent:"click",onItemClick:n,onContentReady:i,width:"100%"})})]})};n(886);function oe(){var e=x(),t=e.isSmall,n=e.isMedium,c=Object(a.useState)(t||n),s=Object(d.a)(c,2),i=s[0],r=s[1],o=Object(a.useCallback)((function(){i&&setTimeout((function(){return r(!1)}))}),[i]);return[i?"pre-init-blink-fix":"",o]}var ue=function(e){var t=e.title,n=e.children,s=Object(a.useRef)(),i=Object(S.g)(),r=x(),o=r.isXSmall,u=r.isLarge,l=oe(),b=Object(d.a)(l,2),m=b[0],h=b[1],p=Object(a.useState)(u?le.Opened:le.Closed),f=Object(d.a)(p,2),O=f[0],v=f[1],g=Object(a.useCallback)((function(e){var t=e.event;v((function(e){return e===le.Closed?le.Opened:le.Closed})),t.stopPropagation()}),[]),k=Object(a.useCallback)((function(){v((function(e){return e===le.Closed?le.TemporaryOpened:e}))}),[]),C=Object(a.useCallback)((function(){v((function(e){return e===le.Closed||u?e:le.Closed}))}),[u]),y=Object(a.useCallback)((function(e){var t=e.itemData.path,n=e.event,a=e.node;O!==le.Closed&&t&&!a.selected?(i.push(t),s.current.instance.scrollTo(0),u&&O!==le.TemporaryOpened||(v(le.Closed),n.stopPropagation())):n.preventDefault()}),[i,O,u]);return Object(j.jsxs)("div",{className:"side-nav-outer-toolbar",children:[Object(j.jsx)(te,{className:"layout-header",menuToggleEnabled:!0,toggleMenu:g,title:t}),Object(j.jsxs)(H.a,{className:["drawer",m].join(" "),position:"before",closeOnOutsideClick:C,openedStateMode:u?"shrink":"overlap",revealMode:o?"slide":"expand",minSize:o?0:60,maxSize:250,shading:!u,opened:O!==le.Closed,template:"menu",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(X.a,{ref:s,className:"layout-body with-footer",children:[Object(j.jsx)("div",{className:"content",children:c.a.Children.map(n,(function(e){return e.type!==ne&&e}))}),Object(j.jsx)("div",{className:"content-block",children:c.a.Children.map(n,(function(e){return e.type===ne&&e}))})]})}),Object(j.jsx)(ee.Template,{name:"menu",children:Object(j.jsx)(re,{compactMode:O===le.Closed,selectedItemChanged:y,openMenu:k,onMenuReady:h})})]})]})},le={Closed:1,Opened:2,TemporaryOpened:3},de=(n(887),n(888),function(){return Object(j.jsxs)(ue,{title:T,children:[Object(j.jsxs)(S.d,{children:[U.map((function(e){var t=e.path,n=e.component;return Object(j.jsx)(S.b,{exact:!0,path:t,component:n},t)})),Object(j.jsx)(S.a,{to:"/home"})]}),Object(j.jsxs)(ne,{children:["Copyright \xa9 2011-",(new Date).getFullYear()," ",T," Inc.",Object(j.jsx)("br",{}),"All trademarks or registered trademarks are property of their respective owners."]})]})}),je=function(){var e=Object(p.b)().loginWithRedirect;return Object(a.useEffect)(e),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Redirecting to sign in flow..."})})},be="sergioadonis.auth0.com";function me(){var e=Object(p.b)(),t=e.user;return e.isLoading?Object(j.jsx)(u.a,{visible:!0}):t?Object(j.jsx)(de,{}):Object(j.jsx)(je,{})}var he=function(){var e=function(){var e=x();return e.isLarge?"screen-large":e.isMedium?"screen-medium":e.isSmall?"screen-small":"screen-x-small"}();return Object(j.jsx)(r.a,{children:Object(j.jsx)(p.a,{domain:be,clientId:"aF8oh68syqvCtJXf2O2OCs5U9rvakeUq",redirectUri:window.location.origin+"/devextreme-react-app",useRefreshTokens:!0,audience:"https://".concat(be,"/api/v2/"),scope:"read:current_user update:current_user_metadata",children:Object(j.jsx)(h,{children:Object(j.jsx)("div",{className:"app ".concat(e),children:Object(j.jsx)(me,{})})})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,890)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(he,{})}),document.getElementById("root")),pe()}},[[889,1,2]]]);
//# sourceMappingURL=main.3bef3239.chunk.js.map
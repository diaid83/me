(this["webpackJsonpreact-page"]=this["webpackJsonpreact-page"]||[]).push([[0],{60:function(e,t,n){"use strict";(function(e){var o=n(3),r=n(55),a=n(43),c=n(0),i=n(17),s=n(98),l=n(100),d=n(77),b=n(101),p=n(104),u=n(75),j=n(24),h=n(71),x=n.n(h),m=n(70),O=n.n(m),g=n(103),f=n(49),F=Object(g.a)((function(e){return{toolbar:e.mixins.toolbar,drawerIconContainer:Object(a.a)({alignSelf:"center","&:hover":{backgroundColor:"transparent"}},e.breakpoints.down("md"),{padding:0}),drawerIcon:{height:"40px",width:"40px",color:"white"},drawer:{minWidth:"50vw",fontSize:"3rem"},wrapper:{alignItems:"flex-start",fontSize:"1.5rem",textTransform:"capitalize"},right:{}}}));t.a=function(t){var n=F(),a=Object(f.a)(),h=Object(s.a)(a.breakpoints.down("sm")),m=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),g=Object(c.useState)(0),w=Object(r.a)(g,2),k=w[0],v=w[1],y=Object(c.useState)(!1),C=Object(r.a)(y,2),S=C[0],z=C[1],I=function(e,t){v(t),z(!1)},A=Object(c.createRef)();return Object(o.jsxs)(l.a,{ref:A,children:[Object(o.jsx)(d.a,{mdUp:!0,children:Object(o.jsx)(b.a,{onClick:function(){return z(!S)},disableRipple:!0,className:n.drawerIconContainer,children:S?Object(o.jsx)(O.a,{className:n.drawerIcon}):Object(o.jsx)(x.a,{className:n.drawerIcon})})}),h?Object(o.jsxs)(p.a,{disableBackdropTransition:!m,disableDiscovery:m,open:S,onOpen:function(){z(!0)},onClose:function(){z(!1)},classes:{paper:n.drawer},children:[Object(o.jsx)("div",{className:n.toolbar}),Object(o.jsxs)(u.a,{value:k,onChange:I,orientation:"vertical",indicatorColor:"primary",children:[Object(o.jsx)(j.a,{label:"Home",component:i.b,to:"/",classes:{wrapper:n.wrapper}}),Object(o.jsx)(j.a,{label:"Projects",component:i.b,to:"/projects",classes:{wrapper:n.wrapper}}),Object(o.jsx)(j.a,{label:"Games",component:i.b,to:"/games",classes:{wrapper:n.wrapper}}),Object(o.jsx)(j.a,{label:"Snippets",component:i.b,to:"/snippets",classes:{wrapper:n.wrapper}}),Object(o.jsx)(j.a,{label:"About",component:i.b,to:"/about",classes:{wrapper:n.wrapper}})]})]}):Object(o.jsx)(d.a,{smDown:!0,children:Object(o.jsxs)(u.a,{value:k,onChange:I,centered:!0,children:[Object(o.jsx)(j.a,{label:"Home",component:i.b,to:"/"}),Object(o.jsx)(j.a,{label:"Projects",component:i.b,to:"/projects"}),Object(o.jsx)(j.a,{label:"Games",component:i.b,to:"/games"}),Object(o.jsx)(j.a,{label:"Snippets",component:i.b,to:"/snippets"}),Object(o.jsx)(j.a,{label:"About",component:i.b,to:"/about"})]})})]})}}).call(this,n(91))},85:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),a=n.n(r),c=n(11),i=n.n(c),s=(n(85),n(17)),l=n(135),d=n(128),b={MuiAlert:{root:{fontSize:"16px",borderRadius:0},standardError:{color:"#A72121",fontWeight:300,backgroundColor:"#FFA9A9"},standardWarning:{color:"rgba(0, 0, 0, 0.5)",fontWeight:300,backgroundColor:"#FFDDA9"},standardInfo:{color:"#2176A7",fontWeight:300,backgroundColor:"#A9E5FF"},standardSuccess:{color:"#059346",fontWeight:300,backgroundColor:"#BFFFA9"},icon:{display:"flex",opacity:1,fontsize:"16px",marginLeft:"3rem",marginRight:"1rem"},message:{padding:"16px 0 8px 0"}},MuiInputBase:{input:{height:"1.3rem","&:disabled":{background:p,color:p}}},MuiMenuItem:{root:{fontFamily:"Poppins",fontSize:"14px",lineHeight:"19px",textAlign:"left",color:p,padding:".5rem"}},MuiOutlinedInput:{root:{position:"relative","&:hover:not($disabled):not($focused):not($error) $notchedOutline":{border:"1px solid ".concat(p),"@media (hover: none)":{borderColor:p}},"&$focused $notchedOutline":{borderColor:p},"&$disabled $notchedOutline":{background:p,borderColor:"#E5E5E5",opacity:.8,color:p}},notchedOutline:{borderColor:p},input:{background:"#FFFFFF",padding:".5rem",borderRadius:"3px",fontFamily:"Poppins",fontSize:" 14px",lineHeight:"19px",color:p,"&:disabled":{background:p,opacity:.8,color:p},notchedOutline:{border:"transparent"}},multiline:{padding:".5rem !important",border:"0px",margin:0}},MuiSelect:{root:{background:"#FFFFFF",padding:".5rem",borderRadius:"3px",fontFamily:"Poppins",fontSize:"14px",lineHeight:"19px",textAlign:"left",color:p,border:"1px solid ".concat(p),"&:focus":{borderRadius:"3px",borderColor:"transparent",background:"#FFFFFF"}},select:{minWidth:"5.5rem",borderRadius:"3px",border:"1px solid ".concat(p),fontSize:"16px",lineHeight:"19px","&:focus":{borderRadius:"3px",borderColor:p,background:"#FFFFFF"}},selectMenu:{background:"#FFFFFF",color:p,"&:notchedOutline":{borderColor:"transparent !important"}},outlined:{color:"".concat(p," !important"),borderColor:"transparent",fontSize:"14px",lineHeight:"19px","&:hover ":{borderColor:"transparent",outline:"none"},"&:focus":{background:"#FFFFFF",borderColor:"transparent"}},iconOutlined:{color:p},icon:{color:p}},MuiSwitch:{root:{overflow:"visible",width:"4rem"},switchBase:{background:"transparent","&$checked":{transform:"translateX(26px)","&$checked + $track":{backgroundColor:p,border:"none",boxShadow:"none",width:36},"& $thumb":{backgroundColor:p,boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.25)"}}},thumb:{backgroundColor:p,boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.25)",width:20,height:20},track:{backgroundColor:p,width:36},checked:{}}},p=Object(d.a)({palette:{common:{},primary:{main:"#004d40",contrastText:"#eceff1"},secondary:{main:"#a5d6a7",contrastText:"#37474f"},contrastThreshold:3},typography:{h1:{},h2:{},h3:{},h4:{},h5:{},h6:{}},overrides:b}),u=n(10),j=n(134),h=n(67),x=n(68),m=n(73),O=n(72),g=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).state={error:null,errorInfo:null},o}return Object(x.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Something went wrong."}),Object(o.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(o.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(r.Component),f=n(69),F=function(e){var t=e.layout,n=e.component;return Object(o.jsx)(u.a,{render:function(e){return Object(o.jsx)(t,{children:Object(o.jsx)(n,Object(f.a)({},e))})}})},w=n(100),k=n(103),v=n(131),y=n(132),C=n(133),S=n(129),z=n(130),I=function(e){var t=e.children,n=e.window,r=Object(S.a)({target:n?n():void 0});return Object(o.jsx)(z.a,{appear:!1,direction:"down",in:!r,children:t})},A=n(60),H=Object(k.a)((function(e){return{appBar:{zIndex:1301}}})),$=function(){var e=H();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v.a,{}),Object(o.jsx)(I,{children:Object(o.jsx)(y.a,{className:e.appBar,position:"static",children:Object(o.jsx)(C.a,{children:Object(o.jsx)(A.a,{})})})})]})},P=function(){return Object(o.jsx)("div",{style:{marginTop:"auto"},children:"Footer"})},B=Object(k.a)((function(e){return{container:{minHeight:"calc(100vh-128px)",paddingTop:"2rem",paddingBottom:"2rem",fallbacks:[{minHeight:"-moz-calc(100% - 128px)"},{minHeight:"-webkit-calc(100% - 128px)"},{minHeight:"-o-calc(100% - 128px)"}]}}})),M=function(e){var t=e.children,n=B();return Object(o.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[Object(o.jsx)($,{}),Object(o.jsx)(w.a,{className:n.container,children:t}),Object(o.jsx)(P,{})]})},R=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,137))})),T=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,138))})),D=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,139))})),W=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,140))})),E=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,141))})),N=function(){return Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(j.a,{color:"secondary"}),children:Object(o.jsx)(g,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(F,{exact:!0,path:"/",component:R,layout:M}),Object(o.jsx)(F,{exact:!0,path:"/about",component:T,layout:M}),Object(o.jsx)(F,{exact:!0,path:"/projects",component:D,layout:M}),Object(o.jsx)(F,{exact:!0,path:"/games",component:W,layout:M}),Object(o.jsx)(F,{exact:!0,path:"/snippets",component:E,layout:M})]})})})};var L=function(){return Object(o.jsx)(l.a,{theme:p,children:Object(o.jsx)(s.a,{basename:"/react-page",children:Object(o.jsx)(N,{})})})},G=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,136)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root")),G()}},[[95,1,2]]]);
//# sourceMappingURL=main.caba6c7f.chunk.js.map
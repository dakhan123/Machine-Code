(this["webpackJsonpmachine-test"]=this["webpackJsonpmachine-test"]||[]).push([[0],{40:function(e,a,t){e.exports=t(61)},48:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),s=(t(45),t(46),t(47),t(13)),i=t(14),o=t(17),m=t(16),u=(t(48),t(11)),d=t(63),E=t(64),f=t(65),p=t(66),h=t(67),v=t(68),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse, fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/";function O(e){var a=e.datum;return r.a.createElement(d.a,null,r.a.createElement(u.b,{to:"/#"},r.a.createElement(E.a,{width:"100%",height:"100%",src:N+a.image,alt:a.name}),r.a.createElement(f.a,null,r.a.createElement("h3",null,a.name))),r.a.createElement(p.a,null,r.a.createElement(h.a,{close:!0})),r.a.createElement(v.a,null,a.description))}var g=function(e){var a=e.data.data.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-4"},r.a.createElement(O,{datum:e}))}));return e.data.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.data.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.data.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Machine_Code_Test")," By Danish Asad Khan",r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},j=t(22),y=t(69),A=t(70),D=t(74),k=t(71),w=t(72),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(j.a)(n)),n}return Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{onClick:this.toggleNav}),r.a.createElement(D.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(k.a,{navbar:!0},r.a.createElement(w.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/index.html"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Layout1")),r.a.createElement(w.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/about"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(w.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Services")),r.a.createElement(w.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact")))))))}}]),t}(n.Component);var L=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"Copyright \xa9 Danish Asad Khan 2020")))))},M=t(7),T=t(23),_=function(){return{type:"DATA_LOADING"}},C=function(e){return{type:"DATA_FAILED",payload:e}},I=function(e){return{type:"ADD_DATA",payload:e}},F=t(75),B=t(73),G=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(F.a,null,r.a.createElement(B.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/index.html",component:function(){return r.a.createElement(g,{data:e.props.data})}}),r.a.createElement(M.b,{exact:!0,path:"/menu"}),r.a.createElement(M.b,{exact:!0,path:"/about"}),r.a.createElement(M.b,{exact:!0,path:"/menu/:dataId"}),r.a.createElement(M.b,{exact:!0,path:"/contactus"}),r.a.createElement(M.a,{to:"/index.html"})))),r.a.createElement(L,null))}}]),t}(r.a.Component),J=Object(M.g)(Object(T.b)((function(e){return{data:e.data}}),(function(e){return{fetchData:function(){e((function(e){return e(_(!0)),fetch(N+"data").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(I(a))})).catch((function(a){return e(C(a.message))}))}))}}}))(G)),K=t(18),S=t(12),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,data:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DATA":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,errMess:null,data:a.payload});case"DATA_LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0,errMess:null,data:[]});case"DATA_FAILED":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!1,errMess:a.payload,data:[]});default:return e}},z=t(36),H=t(37),P=t.n(H),Q=Object(K.d)(Object(K.c)({data:q}),Object(K.a)(z.a,P.a)),R=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{store:Q},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(J,null))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cb3c5a26.chunk.js.map
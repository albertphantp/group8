(function(t){function e(e){for(var s,o,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0156":function(t,e,n){"use strict";var s=n("530f"),a=n.n(s);a.a},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"530f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"fixed-top app-header"},[n("div",{staticClass:"navbar navbar-light navbar-expand-lg"},[n("div",{staticClass:"navbar-brand"},[t._v("IT-Engrisk by Group 8")]),n("div",{staticClass:"navbar-collapse collapse justify-content-end"},[n("ul",{staticClass:"navbar-nav"},[this.$parent.username?n("li",{staticClass:"nav-item"},[n("div",{staticClass:"nav-link"},[t._v("\n                            "+t._s(this.$parent.username)+"\n                        ")])]):t._e(),this.$parent.username?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.logout}},[t._v("Logout")])])]):t._e()])])])])])},i=[],u=n("bc3a"),l=n.n(u),c=l.a.create({baseURL:"https://nameless-ocean-23020.herokuapp.com/api/g8/",headers:{Authorization:"Bearer {token}"}}),p={name:"Header",methods:{logout:function(){var t=this;c.post("logout",{token:this.$parent.token}).then(function(e){t.$parent.username=null,t.$parent.token=null,t.$router.push({name:"Login"})})}}},d=p,m=(n("8baf"),n("2877")),g=Object(m["a"])(d,o,i,!1,null,null,null),v=g.exports,f={name:"app",components:{Header:v},data:function(){return{username:null,password:null}},watch:{username:{deep:!0,handler:function(){localStorage.setItem("username",this.username)}},password:{deep:!0,handler:function(){localStorage.setItem("password",this.password)}}},created:function(){var t=localStorage.getItem("username"),e=localStorage.getItem("password");t&&(this.username=t),e&&(this.password=e)}},h=f,b=(n("034f"),Object(m["a"])(h,a,r,!1,null,null,null)),_=b.exports,C=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[t.message?n("div",{key:t.timer,staticClass:"message",class:t.className},[n("span",[t._v(t._s(t.message))])]):t._e()]),n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.groups,function(e,s){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),n("td",[t._v(t._s(e.group))]),n("td",[t._v("\n                "+t._s(e.point)+"\n            ")]),n("td",[t._v(t._s(t.getPrize(s)))])])}),0)])],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Group")]),n("th",{attrs:{scope:"col"}},[t._v("Point")]),n("th",{attrs:{scope:"col"}},[t._v("Prize")])])])}],y=(n("7514"),n("55dd"),{name:"Index",data:function(){return{groups:null,prize:[{id:1,prize:"30.000 VNĐ"},{id:2,prize:"20.000 VNĐ"},{id:3,prize:"10.000 VNĐ"}],message:null,timer:null,className:null,requestTime:1e4}},methods:{init:function(){var t=this;c.get("groups").then(function(e){t.requestTime=1e4,t.groups=e.data.groups,t.groups.sort(t.compare),clearTimeout(t.timer),t.message="Data updated",t.className="success",t.timer=setTimeout(function(e){t.message=null},3e3)}).catch(function(e){t.requestTime=6e4,clearTimeout(t.timer),t.message="Too Many Requests",t.className="danger",t.timer=setTimeout(function(e){t.message=null},3e3)})},getPrize:function(t){var e=this.prize.find(function(e){return e.id===t+1});return e?e.prize:"5.000 VNĐ"},compare:function(t,e){var n=0;return n=t.point<e.point?1:-1,n}},created:function(){var t=this;this.init(),setInterval(function(e){t.init()},this.requestTime)}}),$=y,x=Object(m["a"])($,w,k,!1,null,null,null),N=x.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[t.message?n("div",{key:t.timer,staticClass:"message",class:t.className},[n("span",[t._v(t._s(t.message))])]):t._e()]),n("div",{staticClass:"item"},[n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.groups,function(e,s){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),n("td",[t._v(t._s(e.group))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.point,expression:"group.point"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.point},on:{input:function(n){n.target.composing||t.$set(e,"point",n.target.value)}}})]),n("td",[t._v(t._s(t.getPrize(s)))]),n("td",[n("div",{staticClass:"btn-group-link"},[n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.updateGroup(e)}}},[t._v("Update")]),n("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(n){return t.askDeleteGroup(e)}}},[t._v("Delete")])])])])}),0)])]),n("div",{staticClass:"item"},[n("button",{staticClass:"btn btn-primary",on:{click:t.gotoAddGroup}},[t._v("Add group")])]),n("transition",{attrs:{name:"modal"}},[t.group?n("div",{staticClass:"modal",attrs:{id:"modal",role:"dialog"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"modal-title"},[t._v("Do you want to delete "+t._s(t.group.group)+"?")])]),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"btn-group-link"},[n("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.deleteGroup}},[t._v("Delete")]),n("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return t.endShowDelete()}}},[t._v("Cancel")])])])])])]):t._e()])],1)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Group")]),n("th",{attrs:{scope:"col"}},[t._v("Point")]),n("th",{attrs:{scope:"col"}},[t._v("Prize")]),n("th",{attrs:{scope:"col"}},[t._v("Update/Delete")])])])}],E={name:"Admin",props:{send:{typeof:String,default:null}},data:function(){return{groups:null,prize:[{id:1,prize:"30.000 VNĐ"},{id:2,prize:"20.000 VNĐ"},{id:3,prize:"10.000 VNĐ"}],message:null,timer:null,className:null,group:null}},methods:{init:function(){var t=this;c.get("groups").then(function(e){t.groups=e.data.groups,t.groups.sort(t.compare)})},gotoAddGroup:function(){this.$router.push({name:"AddGroup"})},getPrize:function(t){var e=this.prize.find(function(e){return e.id===t+1});return e?e.prize:"5.000 VNĐ"},updateGroup:function(t){var e=this;if(t.point>99999)return clearTimeout(this.timer),this.message="Point is so big. Please try againt",this.className="danger",void(this.timer=setTimeout(function(t){e.message=null},5e3));c.post("update",{group:t.group,point:t.point,token:this.$parent.token}).then(function(t){e.groups=t.data.groups,e.groups.sort(e.compare),clearTimeout(e.timer),e.message=t.data.message,e.className="success",e.timer=setTimeout(function(t){e.message=null},5e3)})},compare:function(t,e){var n=0;return n=t.point<e.point?1:-1,n},askDeleteGroup:function(t){this.group=t,document.addEventListener("mousedown",this.listenEndDelete)},endShowDelete:function(){this.group=null},listenEndDelete:function(t){var e=document.getElementById("modal");t.target===e&&(this.endShowDelete(),document.removeEventListener("mousedown",this.listenEndDelete))},deleteGroup:function(){var t=this;c.post("delete",{group:this.group.group,token:this.$parent.token}).then(function(e){clearTimeout(t.timer),t.message=e.data.message,t.className="success",t.timer=setTimeout(function(e){t.message=null},5e3),t.init(),t.group=null}).catch(function(e){clearTimeout(t.timer),t.message=e.response.data.message,t.className="danger",t.timer=setTimeout(function(e){t.message=null},5e3),t.group=null})}},created:function(){var t=this;this.$parent.username||this.$router.push({name:"Login"}),setTimeout(function(e){t.send&&(clearTimeout(t.timer),t.message=t.send,t.className="success",t.timer=setTimeout(function(e){t.message=null},3e3))},100),this.init()}},z=E,G=(n("0156"),Object(m["a"])(z,T,P,!1,null,null,null)),j=G.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Create new group")]),n("form",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"group"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.group,expression:"group"}],staticClass:"form-control",class:{"is-invalid":t.message},attrs:{type:"text",id:"group"},domProps:{value:t.group},on:{input:function(e){e.target.composing||(t.group=e.target.value)}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                    "+t._s(t.message)+"\n                ")])]),n("div",{staticClass:"btn-group-link"},[n("button",{staticClass:"btn btn-primary",on:{click:t.addGroup}},[t._v("Save")]),n("button",{staticClass:"btn btn-secondary",on:{click:t.gotoAdmin}},[t._v("Cancel")])])])])])},O=[],A={name:"AddGroup",data:function(){return{group:null,message:null}},methods:{addGroup:function(){var t=this;c.post("add",{group:this.group,token:this.$parent.token}).then(function(e){t.$router.push({name:"Admin",params:{send:e.data.message}})}).catch(function(e){t.message=e.response.data.message})},gotoAdmin:function(){this.$router.push({name:"Admin"})}}},S=A,D=Object(m["a"])(S,L,O,!1,null,null,null),I=D.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("from",{staticClass:"row form-login"},[n("div",{staticClass:"col"},[n("h2",[t._v("Login")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.check?n("div",{staticClass:"error"},[t._v("\n                *Email or password not correct\n            ")]):t._e(),n("div",{staticClass:"btn-group-link"},[n("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.login}},[t._v("Login")]),n("button",{staticClass:"btn btn-sm btn-secondary",on:{click:t.gotoIndex}},[t._v("Cancel")])])])])],1)},q=[],M={name:"Login",data:function(){return{email:null,password:null,check:!1}},methods:{login:function(){var t=this;c.post("login",{email:this.email,password:this.password}).then(function(e){document.removeEventListener("keypress",t.listenLogin),t.$parent.username=e.data.username,t.$parent.token=e.data.token,t.$router.push({name:"Admin"})}).catch(function(e){t.check=!0})},gotoIndex:function(){this.$router.push({name:"Index"})},listenLogin:function(t){"Enter"===t.key&&this.login()}},created:function(){document.addEventListener("keypress",this.listenLogin)}},H=M,U=(n("d6db"),Object(m["a"])(H,V,q,!1,null,null,null)),B=U.exports,J=new C["a"]({routes:[{path:"/",component:N,name:"Index"},{path:"/admin",component:j,name:"Admin",props:!0},{path:"/create/group",component:I,name:"AddGroup"},{path:"/login",component:B,name:"Login"}]});s["a"].config.productionTip=!1,s["a"].use(C["a"]),new s["a"]({render:function(t){return t(_)},router:J}).$mount("#app")},"64a9":function(t,e,n){},"782e":function(t,e,n){},"8baf":function(t,e,n){"use strict";var s=n("782e"),a=n.n(s);a.a},a9e7:function(t,e,n){},d6db:function(t,e,n){"use strict";var s=n("a9e7"),a=n.n(s);a.a}});
//# sourceMappingURL=app.cb740901.js.map
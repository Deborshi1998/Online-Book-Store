(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{18:function(e,t,a){},26:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),o=a.n(l),r=(a(18),a(4)),s=a(2),i=a(5),m=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND,a(22)),u=a(1),d=function(e){if(void 0!==typeof window){localStorage.removeItem("cart");localStorage.setItem("cart",JSON.stringify([])),e()}},f=function(){return void 0!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},p=function(e){var t=f()&&f().user.id;if(console.log("USERID: ",t),void 0!==typeof window)return localStorage.removeItem("jwt"),d((function(){})),fetch("http://15.207.218.35:8000/api/user/logout/".concat(t),{method:"GET"}).then((function(t){console.log("Signout success"),e()})).catch((function(e){return console.log(e)}))},E=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}},g=Object(s.g)((function(e){var t=e.history;e.path;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:E(t,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:E(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),f()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:E(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"dashboard")),!f()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:E(t,"/signup"),className:"nav-link",to:"/signup"},"Signup")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:E(t,"/signin"),className:"nav-link",to:"/signin"},"Login"))),f()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{onClick:function(){p((function(){t.push("/")}))},className:"nav-link text-warning"},"Signout"))))})),h=(a(35),function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,l=void 0===n?"My description":n,o=e.className,r=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),c.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css"}),c.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),c.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css",rel:"stylesheet"}),c.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css",rel:"stylesheet"}),c.a.createElement(g,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"display-4"},a),c.a.createElement("p",{className:"lead"},l)),c.a.createElement("div",{className:r},s)),c.a.createElement("footer",{className:"page-footer  font-small pt-4"},c.a.createElement("div",{className:"container text-center text-md-left"},c.a.createElement("div",{class:"row text-center text-md-left mt-3 pb-3"},c.a.createElement("div",{class:"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"},c.a.createElement("h6",{class:"text-uppercase mb-4 font-weight-bold"},"Taxila Book Store"),c.a.createElement("p",null,'"An Online Book Store. Bringing you the best of the titles and pieces of texts, right at your doorstep. With 24X7 free home delivery."')),c.a.createElement("hr",{className:"w-100 clearfix d-md-none"}),c.a.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},c.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Money"),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"Become a seller")),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"Advertise your product")),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"Sponser us"))),c.a.createElement("div",{class:"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3"},c.a.createElement("h6",{class:"text-uppercase mb-4 font-weight-bold"},"Get to Know Us"),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"About us")),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"Careers")),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"Press Releases"))),c.a.createElement("hr",{className:"w-100 clearfix d-md-none"}),c.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3"},c.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Contact"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-home mr-3"}),"Jorhat, Assam 7856001, India"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-envelope mr-3"})," info@gmail.com"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-phone mr-3"})," + 91 234 567 88"),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-print mr-3"})," + 91 234 567 89"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row d-flex align-items-center"},c.a.createElement("div",{className:"col-md-7 col-lg-8"},c.a.createElement("p",{className:"text-center text-md-left"},"\xa9 2020 Copyright:",c.a.createElement("a",{href:"#"},c.a.createElement("strong",null,"TaxilaBookStore.com")))),c.a.createElement("div",{className:"col-md-5 col-lg-4 ml-lg-0"},c.a.createElement("div",{className:"text-center text-md-right"},c.a.createElement("ul",{className:"list-unstyled list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},c.a.createElement("i",{className:"fab fa-facebook-f"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},c.a.createElement("i",{className:"fab fa-twitter"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},c.a.createElement("i",{className:"fab fa-google-plus-g"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))))))))))}),b=function(e){var t=e.product,a=t?t.image:"http://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:a,style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded",alt:""}))},v=function(e){var t=e.product,a=e.addtoCart,l=void 0===a||a,o=e.removeFromCart,r=void 0!==o&&o,s=e.reload,m=void 0===s?void 0:s,d=e.setReload,p=void 0===d?function(e){return e}:d,E=Object(n.useState)(!1),g=Object(i.a)(E,2),h=(g[0],g[1]),v=t?t.name:"A photo from pexels",N=t?t.author:"Default description",O=t?t.price:"Default";return c.a.createElement("div",{className:"card",Style:"width:200px;height:100%"},c.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css",rel:"stylesheet"}),c.a.createElement(b,{product:t}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{class:"card-title"},v),c.a.createElement("p",{className:"card-"},N),c.a.createElement("p",{className:"font-weight-bold"},"\u20b9 ",O),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return l&&c.a.createElement("button",{onClick:e,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}((function(){f()?(!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(u.a)({},e)),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return h(!0)})),console.log("Added to cart")):console.log("Login Please!")}))),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a.id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t.id),p(!m),console.log("Product removed from cart")},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(r)))))};function N(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),r=Object(i.a)(o,2),s=r[0],m=r[1],u=function(){fetch("http://15.207.218.35:8000/api/product",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?(m(e.error),console.log(s)):l(e)}))};return Object(n.useEffect)((function(){u()})),c.a.createElement(h,{title:"Home Page",description:"Welcome to Online Book store",className:"bg-white"},c.a.createElement("h1",{className:"text-primary"},"Books"),c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-3"},c.a.createElement(v,{product:e}))}))))}var O=a(11),w=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=a.name,s=a.email,m=a.password,d=a.error,f=a.success,p=function(e){return function(t){l(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({error:!1},e,t.target.value)))}},E=function(e){var t;e.preventDefault(),l(Object(u.a)(Object(u.a)({},a),{},{error:!1})),(t={name:o,email:s,password:m},fetch("http://15.207.218.35:8000/api/user/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){console.log("DATA",e),e.email===s?l(Object(u.a)(Object(u.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0})):l(Object(u.a)(Object(u.a)({},a),{},{error:!0,success:!1}))})).catch((function(e){return console.log(e)}))};return c.a.createElement(h,{title:"Sign Up Page",description:"A signup for LCO user"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:f?"":"none"}},"New account created successfully. Please ",c.a.createElement(r.b,{to:"/signin"},"login now.")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:d?"":"none"}},"Check all fields again"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Name"),c.a.createElement("input",{className:"form-control",value:o,onChange:p("name"),type:"text"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",value:s,onChange:p("email"),type:"text"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"password"),c.a.createElement("input",{className:"form-control",value:m,onChange:p("password"),type:"password"})),c.a.createElement("button",{onClick:E,className:"btn btn-success btn-block"},"Submit")))),c.a.createElement("p",{className:"text-white text-center"},JSON.stringify(a)))},j=a(25),y=function(e){var t=e.component,a=Object(j.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return f()?c.a.createElement(t,e):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},x=function(){return c.a.createElement(h,{title:"User dashboard"},c.a.createElement("h1",null,"Welcome to user dashboard page"))},S=function(){var e=Object(n.useState)({name:"",email:"ten@hitesh.com",password:"12345",error:"",success:!1,loading:!1,didRedirect:!1}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=(a.name,a.email),r=a.password,d=(a.error,a.success,a.loading),p=(a.didRedirect,function(e){return function(t){l(Object(u.a)(Object(u.a)({},a),{},Object(O.a)({error:!1},e,t.target.value)))}}),E=function(e){e.preventDefault(),l(Object(u.a)(Object(u.a)({},a),{},{error:!1,loading:!0})),function(e){var t=new FormData;for(var a in e)console.log(e[a]),t.append(a,e[a]);var n,c=Object(m.a)(t.keys());try{for(c.s();!(n=c.n()).done;){var l=n.value;console.log("MYKEY: ",l)}}catch(o){c.e(o)}finally{c.f()}return fetch("http://15.207.218.35:8000/api/user/login/",{method:"POST",body:t}).then((function(e){return console.log("SUCCESS",e),e.json()})).catch((function(e){return console.log(e)}))}({email:o,password:r}).then((function(e){console.log("DATA",e),e.token?function(e,t){void 0!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){console.log("TOKKEN ADDED"),l(Object(u.a)(Object(u.a)({},a),{},{didRedirect:!0}))})):l(Object(u.a)(Object(u.a)({},a),{},{loading:!1}))})).catch((function(e){return console.log(e)}))};return c.a.createElement(h,{title:"Welcome to sign in page",description:"A OnlineBook store"},d&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{name:"email",className:"form-control",value:o,onChange:p("email"),type:"text"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"password"),c.a.createElement("input",{name:"password",className:"form-control",value:r,onChange:p("password"),type:"password"})),c.a.createElement("button",{onClick:E,className:"btn btn-success btn-block"},"Submit")))),c.a.createElement("p",{className:"text-center"},JSON.stringify(a)),function(){if(f())return c.a.createElement(s.a,{to:"/"})}())},k=a(24),C=a.n(k),T=function(e){var t=e.products,a=e.reload,l=void 0===a?void 0:a,o=e.setReload,r=void 0===o?function(e){return e}:o,m=Object(n.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{}}),E=Object(i.a)(m,2),g=E[0],h=E[1],b=f&&f().user.id,v=f&&f().token,N=function(e,t){(function(e,t){return fetch("http://15.207.218.35:8000/api/payment/gettoken/".concat(e,"/").concat(t,"/"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){if(e.error)h(Object(u.a)(Object(u.a)({},e),{},{error:e.error})),p((function(){return c.a.createElement(s.a,{to:"/"})}));else{var t=e.clientToken;h({clientToken:t})}}))};Object(n.useEffect)((function(){N(b,v)}),[]);var O=function(){var e=0;return t.map((function(t){e+=parseInt(t.price)})),e},w=function(){h({loading:!0});g.instance.requestPaymentMethod().then((function(e){console.log("MYDATA",e);var a={paymentMethodNonce:e.nonce,amount:O()};(function(e,t,a){var n=new FormData;for(var c in a)n.append(c,a[c]);return fetch("http://15.207.218.35:8000/api/payment/process/".concat(e,"/").concat(t,"/"),{method:"POST",body:n}).then((function(e){return console.log("p-0",e),e.json()}))})(b,v,a).then((function(e){if(console.log("POINT-1",e),e.error)"1"==e.code&&(console.log("PAYMENT Failed!"),p((function(){return c.a.createElement(s.a,{to:"/"})})));else{h(Object(u.a)(Object(u.a)({},g),{},{success:e.success,loading:!1})),console.log("PAYMENT SUCCESS");var a="";t.forEach((function(e){a+=e.name+", "}));var n={products:a,transaction_id:e.transaction.id,amount:e.transaction.amount};(function(e,t,a){var n=new FormData;for(var c in a)n.append(c,a[c]);return fetch("http://15.207.218.35:8000/api/order/add/".concat(e,"/").concat(t,"/"),{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(b,v,n).then((function(e){e.error?"1"==e.code&&(console.log("Order Failed!"),p((function(){return c.a.createElement(s.a,{to:"/"})}))):1==e.success&&console.log("ORDER PLACED!!")})).catch((function(e){h({loading:!1,success:!1}),console.log("Order FAILED",e)})),d((function(){console.log("Did we got a crash?")})),r(!l)}})).catch((function(e){h({loading:!1,success:!1}),console.log("PAYMENT FAILED",e)}))}))};return c.a.createElement("div",null,c.a.createElement("h3",null,"Your bill is $ ",O()),c.a.createElement("div",null,null!==g.clientToken&&t.length>0?c.a.createElement("div",null,c.a.createElement(C.a,{options:{authorization:g.clientToken},onInstance:function(e){return g.instance=e}}),c.a.createElement("button",{onClick:w,className:"btn btn-block btn-success"},"Buy Now")):c.a.createElement("h3",null,"Please login first or add something in cart")))},A=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),r=Object(i.a)(o,2),s=r[0],m=r[1];Object(n.useEffect)((function(){m(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[a]);return c.a.createElement(h,{title:"Cart page",description:"Welcome to checkout"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-6"},s.length>0?function(e){return c.a.createElement("div",null,e.map((function(e,t){return c.a.createElement(v,{key:t,product:e,removeFromCart:!0,addtoCart:!1,reload:a,setReload:l})})))}(s):c.a.createElement("h4",null,"No products")),c.a.createElement("div",{className:"col-6"},s.length>0?c.a.createElement(T,{products:s,setReload:l}):c.a.createElement("h3",null,"Please login or add something in cart"))))},D=function(){return c.a.createElement(r.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:N}),c.a.createElement(s.b,{path:"/signup",exact:!0,component:w}),c.a.createElement(s.b,{path:"/signin",exact:!0,component:S}),c.a.createElement(s.b,{path:"/cart",exact:!0,component:A}),c.a.createElement(y,{path:"/user/dashboard",exact:!0,component:x})))};o.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.04ac49ee.chunk.js.map
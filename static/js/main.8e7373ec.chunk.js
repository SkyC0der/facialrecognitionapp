(this["webpackJsonpfacial-recognition"]=this["webpackJsonpfacial-recognition"]||[]).push([[0],{269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(30),o=a.n(s),r=(a(69),a(7)),l=a(8),c=a(10),m=a(9),u=a(61),p=a.n(u),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onEmailChange=function(t){e.setState({signInEmail:t.target.value})},e.onPasswordChange=function(t){e.setState({signInPassword:t.target.value})},e.onSubmitSignIn=function(){fetch("https://majestic-sequoia-49816.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signInEmail,password:e.state.signInPassword})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e.state={signInEmail:"",signInPassword:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"pointer f6 link dim black db"},"Register")))))}}]),a}(i.a.Component),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSubmitSignIn=function(){fetch("https://majestic-sequoia-49816.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e.state={email:"",password:"",name:""},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset b--black ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(i.a.Component),g=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},b=(a(269),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),f=a(62),w=a.n(f),v=(a(270),a(63)),E=a.n(v),N=function(){return i.a.createElement("div",{className:"ma3 mt3"},i.a.createElement(w.a,{className:"Tilt  br2 shadow-2",options:{max:25},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa1"},i.a.createElement("img",{style:{paddingTop:"5px"},alt:"Brain-logo",src:E.a}))))},C=(a(271),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This brain detects pictures. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"pa4 br3 shadow-5 center form "},i.a.createElement("input",{className:"f4 pa2 w-70 center",onChange:t,type:"text"}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-blue",onClick:a},"Detect"))))}),y=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is ...")),i.a.createElement("div",{className:"white f1 "},a))},k=(a(272),a(273),{particles:{number:{value:30,density:{enable:!0,value_area:800}}}}),S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://majestic-sequoia-49816.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://majestic-sequoia-49816.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch((function(e){return console.log(e)})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){fetch("https://majestic-sequoia-49816.herokuapp.com/").then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"particles",params:{particleOptions:k}}),i.a.createElement(g,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(y,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(b,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a.p+"static/media/brain.a571d66a.png"},64:function(e,t,a){e.exports=a(274)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.8e7373ec.chunk.js.map
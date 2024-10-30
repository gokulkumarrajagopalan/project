"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[819],{819:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(2791),i=a(5294),r=a(1632),n=a(3197),l=(a(6707),a(184));const c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ENV||"production",d=n.Z[c]+"/users/save_usersData",o=n.Z[c]+"/users/list_userdetail",u=()=>{const e=(0,t.useRef)(),[s,a]=(0,t.useState)(""),[n,c]=(0,t.useState)(!1),[u,h]=(0,t.useState)(""),[p,m]=(0,t.useState)(!1),[x,f]=(0,t.useState)(!1),[v,S]=(0,t.useState)(""),[g,j]=(0,t.useState)(!1),[N,w]=(0,t.useState)(!1),[_,E]=(0,t.useState)(""),[y,C]=(0,t.useState)(!1),[b,F]=(0,t.useState)([]),[T,D]=(0,t.useState)(!1),[P,R]=(0,t.useState)(!1),[A,I]=(0,t.useState)(!1),[O,Z]=(0,t.useState)(!1),[B,H]=(0,t.useState)(!1);(0,t.useEffect)((()=>{D(/[A-Z]/.test(u)),R(/[a-z]/.test(u)),I(/[0-9]/.test(u)),Z(/[!@#$%]/.test(u)),H(u.length>=8&&u.length<=24)}),[u]),(0,t.useEffect)((()=>{i.Z.get(o).then((e=>{F(e.data.map((e=>e.email)))})).catch((e=>{console.error("Error fetching existing emails:",e)}))}),[]),(0,t.useEffect)((()=>{const e=["Your Journey Begins Here"];let s=0,a=0;const t=()=>{const i=document.querySelector(".typewriter-text");i&&(i.textContent=e[s].slice(0,a),a++,a>e[s].length&&(a=0,s=(s+1)%e.length),setTimeout(t,1200))};t()}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{}),y?(0,l.jsxs)("div",{className:"success-message",children:[(0,l.jsx)("h1",{children:"Success!"}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"#",children:"Sign In"})})]}):(0,l.jsxs)("div",{className:"Register_container",children:[(0,l.jsx)("div",{className:"left-side",children:(0,l.jsx)("div",{className:"typewriter-text-wrapper",children:(0,l.jsx)("h2",{className:"typewriter-text"})})}),(0,l.jsxs)("div",{className:"register-card",children:[(0,l.jsx)("p",{className:_?"errmsg":"offscreen","aria-live":"assertive",children:_}),(0,l.jsx)("h1",{className:"Header_signup",children:"Sign Up"}),(0,l.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),u===v)if(b.includes(s))E("Email already exists");else try{await i.Z.post(d,{email:s,pwd:u});C(!0)}catch(a){console.error("Error:",a),E("Error occurred while saving data")}else E("Passwords do not match")},children:[(0,l.jsx)("label",{htmlFor:"EmailID",className:"register_label",children:"Email:"}),(0,l.jsx)("input",{type:"text",id:"txtemailID",ref:e,autoComplete:"off",onChange:e=>a(e.target.value),value:s,required:!0,"aria-invalid":p?"false":"true",onFocus:()=>c(!0),onBlur:()=>c(!1),className:"register-input"}),(0,l.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,l.jsx)("input",{type:"password",id:"password",onChange:e=>h(e.target.value),value:u,required:!0,"aria-invalid":p?"false":"true",onFocus:()=>f(!0),onBlur:()=>f(!1),className:"register-input"}),(0,l.jsxs)("p",{className:x?"instructions":"offscreen",children:[(0,l.jsx)("span",{className:B?"valid-condition":"invalid-condition",children:"8 - 24 characters,"}),(0,l.jsx)("span",{className:T?"valid-condition":"invalid-condition",children:"Must include uppercase,"}),(0,l.jsx)("span",{className:P?"valid-condition":"invalid-condition",children:"Must include lowercase,"}),(0,l.jsx)("span",{className:A?"valid-condition":"invalid-condition",children:"Must include a number,"}),(0,l.jsx)("span",{className:O?"valid-condition":"invalid-condition",children:"Must include a special character (!@#$%)"})]}),(0,l.jsx)("label",{htmlFor:"confirm_pwd",className:"register_label",children:"Confirm Password:"}),(0,l.jsx)("input",{type:"password",id:"confirm_pwd",onChange:e=>S(e.target.value),value:v,required:!0,"aria-invalid":g?"false":"true",onFocus:()=>w(!0),onBlur:()=>w(!1),className:"register-input"}),(0,l.jsx)("p",{className:N&&!g?"instructions":"offscreen",children:"Must match the password"}),(0,l.jsx)("button",{children:"Sign Up"})]}),(0,l.jsxs)("p",{className:"instructions",children:["Already registered?",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"line",children:(0,l.jsx)("a",{href:"SignIn",children:"Sign In"})})]})]})]})]})}},6707:()=>{}}]);
//# sourceMappingURL=819.7278c801.chunk.js.map
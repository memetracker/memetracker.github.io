import{_ as w,c as h,b as o,w as s,g as b,r as i,o as y,a as t,f as m,p as V,e as S}from"./index-Cjcyetbv.js";const v={name:"Login",data(){return{form:{email:"",password:"",selected:!1},rules:{email:[{required:!0,message:"please enter email",trigger:"blur"}],password:[{required:!0,message:"please enter password",trigger:"blur"}],selected:[{required:!0,message:"selected",trigger:"blur"}]},loading:!1}},methods:{login(){if(!this.form.selected)return this.$message.error("selected");this.$refs.form.validate(a=>{a&&this.$message.success("登录成功 ！")})}}},u=a=>(V("data-v-90a216a6"),a=a(),S(),a),x={class:"login-container"},k=u(()=>t("h3",{style:{"text-align":"center","margin-bottom":"40px"}},"Create new account",-1)),C=u(()=>t("a",{href:"",class:"font-14 color-0547D7 font-weight-400 font-family-HarmonyOS_Sans_Regular code"},"Get reset code",-1)),z=u(()=>t("div",{class:"width_100"},null,-1)),E=u(()=>t("span",{class:"font-12 color-999999 font-weight-400 font-family-HarmonyOS_Sans_Regular"},[m(" By creating an account you agree with our "),t("a",{href:"",class:"font-12 font-weight-400 font-family-HarmonyOS_Sans_Regular color-0547D7"},"Privacy Policy")],-1)),M={class:"form-footer",style:{"text-align":"center"}},P={class:"desp font-14 font-weight-400 font-family-HarmonyOS_Sans_Regular mt-10"};function R(a,l,U,B,e,f){const d=i("el-input"),n=i("el-form-item"),p=i("el-checkbox"),c=i("el-button"),_=i("router-link"),g=i("el-form");return y(),h("div",x,[o(g,{class:"login-form","label-position":"top","label-width":"auto",ref:"form",model:e.form,rules:e.rules,onSubmit:b(f.login,["prevent"])},{default:s(()=>[k,o(n,{label:"Email",prop:"email"},{default:s(()=>[o(d,{modelValue:e.form.email,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form.email=r),modelModifiers:{trim:!0},placeholder:"Email",size:"large"},null,8,["modelValue"]),C]),_:1}),o(n,{label:"Verification Code",prop:"email"},{default:s(()=>[o(d,{modelValue:e.form.email,"onUpdate:modelValue":l[1]||(l[1]=r=>e.form.email=r),modelModifiers:{trim:!0},placeholder:"Email",size:"large",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"Password",prop:"password"},{default:s(()=>[o(d,{modelValue:e.form.password,"onUpdate:modelValue":l[2]||(l[2]=r=>e.form.password=r),modelModifiers:{trim:!0},type:"password",placeholder:"Enter your password",size:"large",clearable:"","show-password":!0},null,8,["modelValue"]),z]),_:1}),o(n,{label:"Confirm Password",prop:"password"},{default:s(()=>[o(d,{modelValue:e.form.password,"onUpdate:modelValue":l[3]||(l[3]=r=>e.form.password=r),modelModifiers:{trim:!0},type:"password",placeholder:"Confirm Password",size:"large",clearable:"","show-password":!0},null,8,["modelValue"])]),_:1}),o(n,{prop:"selected"},{default:s(()=>[o(p,{modelValue:e.form.selected,"onUpdate:modelValue":l[4]||(l[4]=r=>e.form.selected=r)},{default:s(()=>[E]),_:1},8,["modelValue"])]),_:1}),t("div",M,[o(c,{class:"submit-btn",type:"primary",size:"large",loading:e.loading,"native-type":"submit"},{default:s(()=>[m("Register")]),_:1},8,["loading"]),t("div",P,[m(" Already registered ? "),o(_,{class:"color-0547D7 font-14 ml-6",to:"/login"},{default:s(()=>[m("Sign in")]),_:1})])])]),_:1},8,["model","rules","onSubmit"])])}const I=w(v,[["render",R],["__scopeId","data-v-90a216a6"]]);export{I as default};
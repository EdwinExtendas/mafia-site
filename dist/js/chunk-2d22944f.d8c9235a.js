(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22944f"],{dd70:function(t,a,i){"use strict";i.r(a);var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{id:"regular-forms",fluid:"",tag:"section"}},[i("v-col",{attrs:{cols:"12"}},[i("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"primary",icon:"mdi-text",title:this.$t("nav.point_of_service")}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""}},[i("v-col",[i("vue-editor",{attrs:{required:""},model:{value:t.api.privacy_policy,callback:function(a){t.$set(t.api,"privacy_policy",a)},expression:"api.privacy_policy"}})],1),i("v-col",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("\n            Update\n          ")])],1)],1)],1)],1)],1)},r=[],e=i("5873"),n={name:"Edit",components:{VueEditor:e["a"]},data:function(){return{api:{privacy_policy:""}}},mounted:function(){var t=this;this.$http.get("/portal/user/organization").then((function(a){t.api=a.data}))},methods:{submit:function(){var t=this;this.$refs.form.validate()&&this.$http.post("/portal/user/organization/privacy_policy",JSON.stringify({privacy_policy:this.api.privacy_policy})).then((function(a){t.$toasted.global.success(a.data.message)})).catch((function(a){t.$toasted.global.error(a.response.data.message)}))}}},c=n,s=i("2877"),l=i("6544"),p=i.n(l),u=i("8336"),d=i("62ad"),v=i("a523"),f=i("4bd4"),m=i("2fa4"),y=Object(s["a"])(c,o,r,!1,null,null,null);a["default"]=y.exports;p()(y,{VBtn:u["a"],VCol:d["a"],VContainer:v["a"],VForm:f["a"],VSpacer:m["a"]})}}]);
//# sourceMappingURL=chunk-2d22944f.d8c9235a.js.map
import{_ as l,a8 as u,r as s,e as c,c as i,x as d,s as f}from"./vendor.js";import{C as m}from"./index.js";const _={name:"Category-list",components:{SuperTable:u},props:{noBorder:{type:Boolean,default:()=>!1},parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return m}},methods:{openRecord(a,n,e){e.push({name:"/lists/categories/:rId/:rName",params:{rId:a,rName:a}})}}};function y(a,n,e,p,r,t){const o=s("SuperTable");return c(),i(o,{showMap:!0,model:t.superTableModel,onClickRow:t.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags,noBorder:e.noBorder},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","noBorder"])}const g=l(_,[["render",y],["__file","CategoryList.vue"]]),h={name:"Category-list-controller",components:{categoryList:g},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function C(a,n,e,p,r,t){const o=s("categoryList");return c(),d("div",null,[f(o,{parentKeyValuePair:r.parentKeyValuePair,fetchFlags:r.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])])}const K=l(h,[["render",C],["__file","CategoryListController.vue"]]);export{K as default};

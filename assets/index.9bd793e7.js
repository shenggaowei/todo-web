import{_ as u}from"./index.7e6e6bce.js";import{_ as p,d as c,r,C as d,c as _,a as t,w as C,F as v,b as w,o as $,e as h}from"./index.b3b70106.js";const g=c({components:{Layout:u},setup(){const o=r(""),n=r(!1),a=e=>`${e.getMonth()+1}/${e.getDate()}`;return{date:o,show:n,onConfirm:e=>{n.value=!1,o.value=a(e)}}}}),E=h(" \u6211\u662F\u9996\u9875 ");function F(o,n,a,l,e,k){const i=u,m=d,f=w;return $(),_(v,null,[t(i,null,{default:C(()=>[E]),_:1}),t(m,{title:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",value:o.date,onClick:n[0]||(n[0]=s=>o.show=!0)},null,8,["value"]),t(f,{show:o.show,"onUpdate:show":n[1]||(n[1]=s=>o.show=s),onConfirm:o.onConfirm},null,8,["show","onConfirm"])],64)}var B=p(g,[["render",F]]);export{B as default};

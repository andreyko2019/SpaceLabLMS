import{m as s,E as r,d as a,c as u,b as p,n as c,u as _,F as d,a as o,l as i,o as l,k as m}from"./index-f2c66781.js";function f(e){throw new Error("Could not find provider "+e)}function h(){const e=s(r.AppRoutes);return e||f("AppRoutes"),e}const v=o("div",null,"Not found page",-1),N=o("div",null,"go to home",-1),E=a({__name:"NotFound",setup(e){const t=h();return(g,k)=>{const n=i("router-link");return l(),u(d,null,[v,N,p(n,{to:_(t).getMain()},{default:c(()=>[m("Home")]),_:1},8,["to"])],64)}}});export{E as default};

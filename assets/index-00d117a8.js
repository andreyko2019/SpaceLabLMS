import{A as s,E as r,d as a,c as u,b as p,x as c,u as _,F as d,a as o,y as i,o as l,z as f}from"./index-4528f77c.js";function m(e){throw new Error("Could not find provider "+e)}function h(){const e=s(r.AppRoutes);return e||m("AppRoutes"),e}const v=o("div",null,"Not found page",-1),x=o("div",null,"go to home",-1),E=a({__name:"NotFound",setup(e){const t=h();return(N,g)=>{const n=i("router-link");return l(),u(d,null,[v,x,p(n,{to:_(t).getMain()},{default:c(()=>[f("Home")]),_:1},8,["to"])],64)}}});export{E as default};
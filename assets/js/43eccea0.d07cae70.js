"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Gitea"},i=void 0,l={unversionedId:"applications/development-tools/gitea",id:"applications/development-tools/gitea",title:"Gitea",description:"Homepage:",source:"@site/docs/applications/development-tools/gitea.md",sourceDirName:"applications/development-tools",slug:"/applications/development-tools/gitea",permalink:"/docs/applications/development-tools/gitea",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/development-tools/gitea.md",tags:[],version:"current",frontMatter:{title:"Gitea"},sidebar:"tutorialSidebar",previous:{title:"Code Server",permalink:"/docs/applications/development-tools/code-server"},next:{title:"GitLab",permalink:"/docs/applications/development-tools/gitlab"}},p={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://gitea.io/"},"https://gitea.io/")),(0,o.kt)("p",null,"Gitea is a painless self-hosted Git service."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"gitea_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"The Gitea web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:3001"},"http://ansible_nas_host_or_ip:3001"),"."))}u.isMDXComponent=!0}}]);
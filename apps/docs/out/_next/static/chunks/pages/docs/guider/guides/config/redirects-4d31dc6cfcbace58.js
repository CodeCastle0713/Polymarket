(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{9492:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guider/guides/config/redirects",function(){return a(9513)}])},9513:function(e,t,a){"use strict";a.r(t);var r=a(7458),d=a(8838);function i(e){let t={code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,d.ah)(),...e.components},{Tip:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `Tip` to be defined: you likely forgot to import, pass, or provide it.")}(0,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"redirects",children:"Redirects"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes, you want to redirect from a link to a page. For example, redirecting from ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"/docs"})})})})," to an actual page like ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"/docs/getting-started"})})})}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Next.JS does not provide an easy way if you render as a static site. So Guider has a simple tool to orchestrate redirects."}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-redirect",children:"Creating a redirect"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"createRedirect"})})})})," function can make a page that simply redirects to another page.\r\nSo for example above, you would make a ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"docs/index.mdx"})})})})," file with the following:"]}),"\n",(0,r.jsxs)(t.figure,{"data-rehype-pretty-code-figure":"",children:[(0,r.jsx)(t.figcaption,{"data-rehype-pretty-code-title":"","data-language":"ts","data-theme":"github-dark-dimmed",children:"docs/index.mdx"}),(0,r.jsx)(t.pre,{tabIndex:"0","data-language":"ts","data-theme":"github-dark-dimmed",children:(0,r.jsxs)(t.code,{"data-language":"ts","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,r.jsxs)(t.span,{"data-line":"",children:[(0,r.jsx)(t.span,{style:{color:"#F47067"},children:"import"}),(0,r.jsx)(t.span,{style:{color:"#ADBAC7"},children:" { createRedirect } "}),(0,r.jsx)(t.span,{style:{color:"#F47067"},children:"from"}),(0,r.jsx)(t.span,{style:{color:"#96D0FF"},children:" '@neato/guider/client'"})]}),"\n",(0,r.jsx)(t.span,{"data-line":"",children:" "}),"\n",(0,r.jsxs)(t.span,{"data-line":"",children:[(0,r.jsx)(t.span,{style:{color:"#F47067"},children:"export"}),(0,r.jsx)(t.span,{style:{color:"#F47067"},children:" default"}),(0,r.jsx)(t.span,{style:{color:"#DCBDFB"},children:" createRedirect"}),(0,r.jsx)(t.span,{style:{color:"#F69D50"},children:"({ "}),(0,r.jsx)(t.span,{style:{color:"#ADBAC7"},children:"to: "}),(0,r.jsx)(t.span,{style:{color:"#96D0FF"},children:"'/docs/getting-started'"}),(0,r.jsx)(t.span,{style:{color:"#F69D50"},children:" })"}),(0,r.jsx)(t.span,{style:{color:"#ADBAC7"},children:";"})]})]})})]}),"\n",(0,r.jsx)(a,{children:(0,r.jsxs)(t.p,{children:["Some hosting platforms like Netlify or Cloudflare Pages can give you more control over redirects with a ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"_redirects"})})})})," file.",(0,r.jsx)("br",{}),"\r\nThis is preferable over ",(0,r.jsx)(t.span,{"data-rehype-pretty-code-figure":"",children:(0,r.jsx)(t.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,r.jsx)(t.span,{"data-line":"",children:(0,r.jsx)(t.span,{children:"createRedirect"})})})})," since it uses HTTP redirection instead of Javascript."]})})]})}t.default=(0,d.wm)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,d.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)},pageOpts:{meta:{},headings:[{depth:1,value:"Redirects",data:{hProperties:{id:"redirects"},id:"redirects"}},{depth:2,value:"Creating a redirect",data:{hProperties:{id:"creating-a-redirect"},id:"creating-a-redirect"}}],excerpt:"Sometimes, you want to redirect from a link to a page. For example, redirecting from /docs to an actual page like /docs/getting-started."}})}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=9492)}),_N_E=e.O()}]);
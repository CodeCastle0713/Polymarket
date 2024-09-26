(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4982],{5460:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guider/guides/deploy/github-pages",function(){return n(2651)}])},2651:function(s,e,n){"use strict";n.r(e);var l=n(7458),a=n(8838);function r(s){let e={code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,a.ah)(),...s.components},{Note:n}=e;return n||function(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"git-hub-pages",children:"GitHub Pages"}),"\n",(0,l.jsx)(e.p,{children:"A GitHub Action to deploy a Guider documentation site."}),"\n",(0,l.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Enable GitHub Pages, go to ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"Your repo > Settings > Pages"})})})})," and set ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"Source"})})})})," to ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"GitHub Actions"})})})}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"the-workflow",children:"The workflow"}),"\n",(0,l.jsxs)(e.p,{children:["Add this code to a file in the github workflows folder, for example: ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"/.github/workflows/docs-deploy.yml"})})})}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["There are highlighted words in the code, double check if those match your environment.\r\nThis code sample assumes you use ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"npm"})})})}),", with the branch ",(0,l.jsx)(e.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(e.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(e.span,{"data-line":"",children:(0,l.jsx)(e.span,{children:"main"})})})})," as your release branch and the docs being in the root of your repository."]}),"\n",(0,l.jsxs)(e.figure,{"data-rehype-pretty-code-figure":"",children:[(0,l.jsx)(e.figcaption,{"data-rehype-pretty-code-title":"","data-language":"yml","data-theme":"github-dark-dimmed",children:".github/workflows/docs-deploy.yml"}),(0,l.jsx)(e.pre,{tabIndex:"0","data-language":"yml","data-theme":"github-dark-dimmed",children:(0,l.jsxs)(e.code,{"data-language":"yml","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:'"docs-deploy"'})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#6CB6FF"},children:"on"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"  push"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    branches"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"      - "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"main"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"jobs"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"  build"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"Build"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    runs-on"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"ubuntu-latest"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    steps"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"    - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"uses"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"actions/checkout@v4"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"    - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"uses"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"actions/setup-node@v4"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      with"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"        node-version"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#6CB6FF"},children:"20"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"        cache"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"npm"}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"'"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"    - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"Install dependencies"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      working-directory"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"./"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      run"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"npm"}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:" ci"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"    - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"Build"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      working-directory"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"./"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      run"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"npm"}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:" run build"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"    - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"Upload"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      uses"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"actions/upload-pages-artifact@v3"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      with"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"        path"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},className:"highlighted-word",children:"./"}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"out"})]}),"\n",(0,l.jsx)(e.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"  deploy"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    needs"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"build"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    permissions"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      pages"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"write"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      id-token"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"write"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    environment"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"github-pages"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"      url"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"${{ steps.deployment.outputs.page_url }}"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    runs-on"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"ubuntu-latest"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"    steps"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:"      - "}),(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"Deploy to GitHub Pages"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"        id"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"deployment"})]}),"\n",(0,l.jsxs)(e.span,{"data-line":"",children:[(0,l.jsx)(e.span,{style:{color:"#8DDB8C"},children:"        uses"}),(0,l.jsx)(e.span,{style:{color:"#ADBAC7"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#96D0FF"},children:"actions/deploy-pages@v4"})]})]})})]}),"\n",(0,l.jsx)(n,{children:(0,l.jsx)(e.p,{children:"This GitHub Action is activated on push of your release branch, meaning that once new changes are pushed. The action will automatically update your site."})})]})}e.default=(0,a.wm)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.ah)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(r,{...s})}):r(s)},pageOpts:{meta:{},headings:[{depth:1,value:"GitHub Pages",data:{hProperties:{id:"git-hub-pages"},id:"git-hub-pages"}},{depth:2,value:"Prerequisites",data:{hProperties:{id:"prerequisites"},id:"prerequisites"}},{depth:2,value:"The workflow",data:{hProperties:{id:"the-workflow"},id:"the-workflow"}}],excerpt:"A GitHub Action to deploy a Guider documentation site."}})}},function(s){s.O(0,[2888,9774,179],function(){return s(s.s=5460)}),_N_E=s.O()}]);
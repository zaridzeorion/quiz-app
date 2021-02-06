(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),r=(n(9),n(2)),l=n(0),o=function(e){e.nickname;var t=e.numberOfQuestions,n=(e.category,e.difficulty,e.setDisplay),c=e.handleChange;return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("a",{onClick:function(){return n("main")},href:"/quiz-app",children:Object(l.jsx)("p",{className:"title-center",children:"Quiz App"})}),Object(l.jsx)("p",{className:"subTitle-center",children:"Test Yourself!"})]}),Object(l.jsxs)("form",{id:"container",onSubmit:function(e){e.preventDefault(),t>0&&n("quiz")},children:[Object(l.jsx)("input",{onChange:c,className:"inputs",style:{outline:"0"},type:"text",placeholder:"Your Username",id:"nickname"}),Object(l.jsx)("input",{onChange:c,className:"inputs",type:"number",min:"1",max:"50",placeholder:"Number Of Questions",id:"number-of-questions"}),Object(l.jsxs)("select",{onChange:c,id:"category",className:"inputs",name:"trivia_category",children:[Object(l.jsx)("option",{value:null,children:"Any Category"}),Object(l.jsx)("option",{value:"9",children:"General Knowledge"}),Object(l.jsx)("option",{value:"10",children:"Entertainment: Books"}),Object(l.jsx)("option",{value:"11",children:"Entertainment: Film"}),Object(l.jsx)("option",{value:"12",children:"Entertainment: Music"}),Object(l.jsx)("option",{value:"13",children:"Entertainment: Musicals & Theatres"}),Object(l.jsx)("option",{value:"14",children:"Entertainment: Television"}),Object(l.jsx)("option",{value:"15",children:"Entertainment: Video Games"}),Object(l.jsx)("option",{value:"16",children:"Entertainment: Board Games"}),Object(l.jsx)("option",{value:"17",children:"Science & Nature"}),Object(l.jsx)("option",{value:"18",children:"Science: Computers"}),Object(l.jsx)("option",{value:"19",children:"Science: Mathematics"}),Object(l.jsx)("option",{value:"20",children:"Mythology"}),Object(l.jsx)("option",{value:"21",children:"Sports"}),Object(l.jsx)("option",{value:"22",children:"Geography"}),Object(l.jsx)("option",{value:"23",children:"History"}),Object(l.jsx)("option",{value:"24",children:"Politics"}),Object(l.jsx)("option",{value:"25",children:"Art"}),Object(l.jsx)("option",{value:"26",children:"Celebrities"}),Object(l.jsx)("option",{value:"27",children:"Animals"}),Object(l.jsx)("option",{value:"28",children:"Vehicles"}),Object(l.jsx)("option",{value:"29",children:"Entertainment: Comics"}),Object(l.jsx)("option",{value:"30",children:"Science: Gadgets"}),Object(l.jsx)("option",{value:"31",children:"Entertainment: Japanese Anime & Manga"}),Object(l.jsx)("option",{value:"32",children:"Entertainment: Cartoon & Animations"})]}),Object(l.jsxs)("select",{onChange:c,id:"difficulty",className:"inputs",name:"trivia_difficulty",children:[Object(l.jsx)("option",{value:null,children:"Any Difficulty"}),Object(l.jsx)("option",{value:"easy",children:"Easy"}),Object(l.jsx)("option",{value:"medium",children:"Medium"}),Object(l.jsx)("option",{value:"hard",children:"Hard"})]}),Object(l.jsx)("button",{id:"submit",className:"button",children:"Start!"})]})]})},j=function(e){var t=e.score,n=e.setScore,i=e.api,a=e.setApi,o=e.username,j=e.numberOfQuestions,u=e.category,b=e.difficulty,h=e.setDisplay,d=Object(c.useState)(1),O=Object(r.a)(d,2),m=O[0],p=O[1],x=Object(c.useState)(!1),f=Object(r.a)(x,2),g=f[0],y=f[1],v=Object(c.useState)(0),_=Object(r.a)(v,2),S=(_[0],_[1],i);Object(c.useEffect)((function(){var e="https://opentdb.com/api.php?amount=".concat(j).concat(null!==u?"&category=".concat(u):"").concat(null!==b?"&difficulty=".concat(b):"");fetch(e).then((function(e){return e.json()})).then((function(e){y(!0),a(e.results)})).catch((function(e){y(!0),console.error("Error:",e)}))}),[]);var C=function(){m<j?p(m+1):m.toString()===j&&h("result")};return console.log("api apiii",i),Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("a",{onClick:function(){return h("main")},href:"/quiz-app",children:Object(l.jsx)("p",{className:"title-center",children:"Quiz App"})}),Object(l.jsxs)("p",{className:"subTitle-center",children:["Test Yourself, ",o||"Player","!"]})]}),g?Object(l.jsxs)("span",{id:"container",onSubmit:function(e){},children:[Object(l.jsxs)("h2",{style:{textAlign:"center"},children:["Question ",m,"/","".concat(j)]}),console.log("questions[step]:",S[m-1]),"multiple"===S[m-1].type?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{style:{textAlign:"center"},dangerouslySetInnerHTML:{__html:S[m-1].question}}),Object(l.jsx)("br",{}),m%2===0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[0]},className:"inputs"}),Object(l.jsx)("h6",{onClick:function(){C(),n(t+1)},dangerouslySetInnerHTML:{__html:S[m-1].correct_answer},className:"inputs"}),Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[1]},className:"inputs"}),Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[2]},className:"inputs"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[2]},className:"inputs"}),Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[1]},className:"inputs"}),Object(l.jsx)("h6",{onClick:C,dangerouslySetInnerHTML:{__html:S[m-1].incorrect_answers[0]},className:"inputs"}),Object(l.jsx)("h6",{onClick:function(){C(),n(t+1)},dangerouslySetInnerHTML:{__html:S[m-1].correct_answer},className:"inputs"})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{style:{textAlign:"center"},dangerouslySetInnerHTML:{__html:S[m-1].question}}),Object(l.jsx)("br",{}),m%2===0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h6",{onClick:function(){C(),n(t+1)},className:"inputs",children:S[m-1].correct_answer}),Object(l.jsx)("h6",{onClick:C,className:"inputs",children:S[m-1].incorrect_answers})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h6",{onClick:C,className:"inputs",children:S[m-1].incorrect_answers}),Object(l.jsx)("h6",{onClick:function(){C(),n(t+1)},className:"inputs",children:S[m-1].correct_answer})]})]})]}):Object(l.jsx)("span",{id:"container",children:Object(l.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"25vh"},children:"Loading..."})})]})})},u=function(e){var t=e.setDisplay,n=e.username,c=e.score,s=e.numberOfQuestions;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("a",{onClick:function(){return t("main")},href:"/quiz-app",children:Object(l.jsx)("p",{className:"title-center",children:"Quiz App"})}),Object(l.jsxs)("p",{className:"subTitle-center",children:["Cool, ",n||"Player","!"]})]}),Object(l.jsxs)("span",{id:"container",children:[Object(l.jsxs)("h1",{className:"final-result",children:[c,"/",s]}),Object(l.jsx)("h4",{className:"final-result-description",children:s-c===0?"Amazing Results! You are master!!":c>10?"Excellent Results!":c>0?"Cool Results! Maybe try again?":0===c?"No Worries, Try Again!":null}),Object(l.jsx)("button",{className:"button",onClick:function(){return t("main")},children:"Try Again!"})]})]})},b=function(){var e=Object(c.useState)([{error:"Failed"}]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)("main"),b=Object(r.a)(a,2),h=b[0],d=b[1],O=Object(c.useState)(""),m=Object(r.a)(O,2),p=m[0],x=m[1],f=Object(c.useState)(0),g=Object(r.a)(f,2),y=g[0],v=g[1],_=Object(c.useState)(null),S=Object(r.a)(_,2),C=S[0],N=S[1],k=Object(c.useState)(null),T=Object(r.a)(k,2),A=T[0],M=T[1],w=Object(c.useState)(0),E=Object(r.a)(w,2),q=E[0],H=E[1];return Object(l.jsx)(s.a.Fragment,{children:"main"===h?Object(l.jsx)(o,{username:p,numberOfQuestions:y,category:C,difficulty:A,setDisplay:d,handleChange:function(e){"nickname"===e.target.id?x(e.target.value):"number-of-questions"===e.target.id?v(e.target.value):"category"===e.target.id?N(e.target.value):"difficulty"===e.target.id&&M(e.target.value)}}):"quiz"===h?Object(l.jsx)(j,{score:q,setScore:H,api:n,setApi:i,username:p,numberOfQuestions:y,category:C,difficulty:A,setDisplay:d}):"result"===h?Object(l.jsx)(u,{numberOfQuestions:y,score:q,setDisplay:d,username:p}):null})};a.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.34ba6c31.chunk.js.map
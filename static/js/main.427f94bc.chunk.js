(this.webpackJsonpmymovielist=this.webpackJsonpmymovielist||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/spinner.e9d9e9f1.gif"},27:function(e,t,a){},45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(50),a(36)),s=a(37),i=a(43),m=a(38),u=a(44),d=a(2),f=a(17),p=a(10),E=a(11);a(27);function g(e){var t=e.style,a=Object(p.f)(),c=Object(n.useState)(""),r=Object(E.a)(c,2),o=r[0],s=r[1];return l.a.createElement("div",{className:"text-center",style:t},l.a.createElement("h1",{className:"brand brand-lg"},"My Movie List"),l.a.createElement("div",{className:"search-bar search-bar-lg"},l.a.createElement("input",{className:"form-control form-control-lg search-input search-input-lg",type:"text",value:o,placeholder:"Search for movies...",onChange:function(e){return s(e.target.value)},onKeyDown:function(e){13===e.keyCode&&a.push("/result?title=".concat(o,"&page=1"))}}),l.a.createElement("a",{className:"btn btn-lg btn-search btn-search-lg align-self-center",href:o.length?"/result?title=".concat(o,"&page=1"):"/","data-toggle":"tooltip",title:"Search"},l.a.createElement("i",{className:"fas fa-search"}))))}var b=a(13),h=a.n(b),v=a(19),y=a.n(v),N=y.a.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:2e3,timerProgressBar:!1,onOpen:function(e){e.addEventListener("mouseenter",y.a.stopTimer),e.addEventListener("mouseleave",y.a.resumeTimer)}}),O=function(e){return function(t){var a=localStorage.getItem("list")||"";localStorage.setItem("list",a+" "+e),t({type:"ADD_MOVIE",payload:e}),N.fire({icon:"success",title:"Added movie successfully"})}},L=function(e){return function(t){var a=localStorage.getItem("list")||"";a.length&&localStorage.setItem("list",a.replace(e,"").trim()),t({type:"REMOVE_MOVIE",payload:e}),N.fire({icon:"warning",title:"Removed movie successfully"})}},w=function(e,t){return function(a){var n=localStorage.getItem("list");if(n&&n.length)if(n=n.trim().split(/\s+/),a(0===e?{type:"SET_LOADING_LIST",payload:!0}:{type:"SET_LOADING_MORE",payload:!0}),n.length<=e)a({type:"GET_MORE_FULL_LIST",payload:[]});else{var l=n.slice(e,e+t);console.log(n,l),Promise.all(l.map((function(e){return h.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}))).then((function(e){return setTimeout((function(){a({type:"GET_MORE_FULL_LIST",payload:e})}),1e3)})).catch((function(e){return console.log(e)}))}}};function j(e){var t=e.x2,a=Object(d.b)();Object(n.useEffect)((function(){a((function(e){var t=localStorage.getItem("list");t&&t.length&&e({type:"GET_YOUR_LIST",payload:t.trim().split(/\s+/)})}))}),[]);var c=Object(d.c)((function(e){return e.user.list}));return l.a.createElement("a",{href:"/your-list",className:"text-danger",style:{textDecoration:"none",fontSize:20,fontWeight:500},"data-toggle":"tooltip",title:"".concat(c.length," Movies in Your List")},l.a.createElement("i",{className:"far fa-heart position-relative"+(t?" fa-2x":"")}),l.a.createElement("span",{className:"badge badge-success",style:{position:"absolute",top:t?-5:"auto",fontSize:t?15:10}},c.length))}function I(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right pr-5 mt-5"},l.a.createElement(j,{x2:!0})),l.a.createElement("div",{className:"col-12"},l.a.createElement(g,{style:{position:"fixed",top:"45%",left:"50%",transform:"translate(-50%, -50%)"}}))))}var T=function(e,t){return function(a){a(k(!0)),h.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&s=").concat(e,"&page=").concat(t)).then((function(e){setTimeout((function(){a({type:"GET_MOVIE_LIST",payload:e.data})}),1e3)})).catch((function(e){return console.log(e)}))}},k=function(e){return function(t){t({type:"SET_LOADING",payload:e})}},x=a(18),S=a.n(x);function _(){return l.a.createElement("img",{src:S.a,className:"img-fluid",alt:"...loading",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}var D={},M={backgroundImage:"linear-gradient(to right, #868f96 0%, #596164 100%)",opacity:.9};function R(e){var t=e.title,a=Object(n.useState)(t),c=Object(E.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)({}),i=Object(E.a)(s,2),m=i[0],u=i[1],f=Object(p.f)(),g=Object(d.b)();return Object(n.useEffect)((function(){var e=function(){window.scrollY>80?u("solid"):u("trans")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),l.a.createElement("nav",{className:"navbar sticky-top",style:"solid"===m?M:D},l.a.createElement("a",{className:"navbar-brand ml-sm-2",href:"/"},l.a.createElement("h4",{className:"brand brand-sm"},"My Movie List")),l.a.createElement("span",{className:"search-bar search-bar-sm ml-auto"+("solid"===m?"":" text-dark border-dark")},l.a.createElement("input",{className:"form-control search-input search-input-sm"+("solid"===m?"":" text-dark"),type:"text",value:r,placeholder:"Search for movies...",onChange:function(e){return o(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(f.push("/result?title=".concat(r,"&page=1")),g(T(r,1)))}}),l.a.createElement("button",{className:"btn btn-search btn-search-sm"+("solid"===m?"":" text-dark"),onClick:function(){f.push("/result?title=".concat(r,"&page=1")),g(T(r,1))}},l.a.createElement("i",{className:"fas fa-search"}))),l.a.createElement("span",{className:"mx-sm-4"},l.a.createElement(j,{x2:!1})))}var G={background:"none"};function A(e){var t=e.match,a=Object(d.b)(),c=t.params.id,r=Object(d.c)((function(e){return e.movie.movieSingle})),o=Object(d.c)((function(e){return e.movie.isLoading})),s=Object(d.c)((function(e){return e.user.list.includes(c)}));return Object(n.useEffect)((function(){a(function(e){return function(t){t(k(!0)),h.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e,"&plot=full")).then((function(e){setTimeout((function(){t({type:"GET_MOVIE_SINGLE",payload:e.data})}),1e3)})).catch((function(e){return console.log(e)}))}}(c))}),[]),l.a.createElement("div",null,l.a.createElement(R,null),l.a.createElement("div",{className:"container"},o?l.a.createElement(_,null):r&&"True"===r.Response?l.a.createElement("div",null,l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col-md-4 card card-body",style:G},l.a.createElement("img",{src:"N/A"===r.Poster?"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg":r.Poster,className:"thumbnail position-relative",alt:"Poster"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-start"},l.a.createElement("h2",{className:"mb-4 d-inline-block"},r.Title),s?l.a.createElement("button",{type:"button",className:"btn text-danger",onClick:function(){a(L(r.imdbID))}},l.a.createElement("i",{className:"fas fa-heart fa-2x"})):l.a.createElement("button",{type:"button",className:"btn",onClick:function(){a(O(r.imdbID))}},l.a.createElement("i",{className:"far fa-heart fa-2x"}))),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Year:")," ",r.Year),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Genre:")," ",r.Genre),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Released:")," ",r.Released),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Rated:")," ",r.Rated),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"IMDB Rating:")," ",r.imdbRating," -"," ",l.a.createElement("strong",null,"IMDB Votes:")," ",r.imdbVotes),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Director:")," ",r.Director),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Actors:")," ",r.Actors),l.a.createElement("li",{className:"list-group-item",style:G},l.a.createElement("strong",null,"Awards:")," ",r.Awards)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card card-body mb-5 text-dark",style:G},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,"About "),r.Plot,l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.imdb.com/title/"+r.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"))))):l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},l.a.createElement("h1",{className:"text-danger"},"Oops..."),l.a.createElement("h5",null,"Content not found"))))}function P(e){var t=e.movie;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("img",{src:t.Poster,className:"w-100",alt:"Poster"})),l.a.createElement("div",{className:"col-md-10 d-flex flex-column justify-content-center"},l.a.createElement("a",{href:"/movie/".concat(t.imdbID),style:{textDecoration:"none"},className:"my-1"},l.a.createElement("h5",null,t.Title," ",l.a.createElement("span",{className:"badge badge-danger"},t.Year))),l.a.createElement("p",{className:"my-1"},l.a.createElement("strong",null,"Genre:")," ",t.Genre),l.a.createElement("p",{className:"my-1"},l.a.createElement("strong",null,"IMDB Rating:")," ",t.imdbRating)))}function C(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.user.isLoading})),a=Object(d.c)((function(e){return e.user.fullList})),c=Object(d.c)((function(e){return e.user.isLoadingMore})),r=Object(d.c)((function(e){return e.user.list}));return Object(n.useEffect)((function(){e(w(0,5))}),[]),l.a.createElement("div",null,l.a.createElement(R,null),l.a.createElement("div",{className:"container my-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("h3",null,r.length," Movies In Your List"))),t?l.a.createElement(_,null):a.length?l.a.createElement("table",{className:"table table-hover border border-dark"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Movie"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,a.map((function(t,a){return"True"===t.Response?l.a.createElement("tr",{key:a},l.a.createElement("th",{style:{verticalAlign:"middle"},scope:"row"},a+1),l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement(P,{movie:t})),l.a.createElement("td",{style:{width:"20%",verticalAlign:"middle"}},l.a.createElement("button",{className:"btn btn-danger my-2",onClick:function(){return e(L(t.imdbID))},style:{width:"100%"}},"Remove ",l.a.createElement("i",{className:"fas fa-trash"})),l.a.createElement("a",{className:"btn btn-success my-2",href:"https://www.imdb.com/title/".concat(t.imdbID),style:{width:"100%"},target:"_blank",rel:"noopener noreferrer"},"View on IMDB ",l.a.createElement("i",{className:"fas fa-arrow-right"})))):null}))),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"text-center"},l.a.createElement("td",{colSpan:"3"},c?l.a.createElement("img",{src:S.a,className:"img-fluid",alt:"...loading"}):a.length===r.length?null:l.a.createElement("div",{className:"mx-auto"},l.a.createElement("button",{className:"btn btn-primary w-25",onClick:function(){e(w(a.length,5))}},"Load "+(r.length-a.length>5?5:r.length-a.length)+" more"),l.a.createElement("button",{className:"btn btn-success w-25",onClick:function(){return e((function(e){var t=localStorage.getItem("list");t&&t.length&&(t=t.trim().split(/\s+/),e({type:"SET_LOADING_LIST",payload:!0}),Promise.all(t.map((function(e){return h.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}))).then((function(t){return setTimeout((function(){e({type:"GET_FULL_LIST",payload:t})}),1e3)})).catch((function(e){return console.log(e)})))}))}},"Load all movie in Your List")))))):"Your list is empty"))}var V=a(9),Y=a(41),B=a(42),U=a(6),F={input:"",movieList:null,movieSingle:null,isLoading:!1},W=a(20),z={list:[],isLoading:!1,fullList:[],isLoadingMore:!1},H=Object(V.combineReducers)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_LIST":return Object(U.a)({},e,{movieList:t.payload,isLoading:!1});case"GET_MOVIE_SINGLE":return Object(U.a)({},e,{movieSingle:t.payload,isLoading:!1});case"SET_LOADING":return Object(U.a)({},e,{isLoading:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return Object(U.a)({},e,{list:[].concat(Object(W.a)(e.list),[t.payload])});case"REMOVE_MOVIE":return Object(U.a)({},e,{list:e.list.filter((function(e){return e!==t.payload})),fullList:e.fullList.filter((function(e){return e.imdbID!==t.payload}))});case"GET_YOUR_LIST":return Object(U.a)({},e,{list:t.payload});case"GET_FULL_LIST":return Object(U.a)({},e,{fullList:t.payload,isLoading:!1});case"GET_MORE_FULL_LIST":return 0===t.payload.length?Object(U.a)({},e,{isLoadingMore:!1,isLoading:!1}):Object(U.a)({},e,{fullList:[].concat(Object(W.a)(e.fullList),Object(W.a)(t.payload)),isLoadingMore:!1,isLoading:!1});case"SET_LOADING_LIST":return Object(U.a)({},e,{isLoading:t.payload});case"SET_LOADING_MORE":return Object(U.a)({},e,{isLoadingMore:t.payload});default:return e}}}),J=[B.a],K=Object(V.createStore)(H,{},Object(Y.composeWithDevTools)(V.applyMiddleware.apply(void 0,J)));function $(){return l.a.createElement("button",{className:"btn btn-primary border-primary",style:{position:"fixed",bottom:50,right:20,borderRadius:"50%"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-angle-double-up"}))}a(73);function q(e){var t=e.movie,a=Object(d.b)(),c=Object(n.useState)(!1),r=Object(E.a)(c,2),o=r[0],s=r[1],i=Object(d.c)((function(e){return e.user.list.includes(t.imdbID)}));return l.a.createElement("div",{className:"card  h-100 rounded-0",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},"data-toggle":"tooltip",title:t.Title},l.a.createElement("div",{style:{height:250,background:"none",lineHeight:"250px"}},l.a.createElement("a",{href:"/movie/"+t.imdbID},l.a.createElement("img",{src:"N/A"===t.Poster?"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg":t.Poster,className:"card-img-top rounded-0 position-relative",alt:"poster",style:{maxHeight:"100%",height:"N/A"===t.Poster?"100%":"auto",opacity:o?.7:1,transition:"opacity .15s ease-in-out",verticalAlign:"top"}}),l.a.createElement("span",{className:"badge badge-danger",style:{position:"absolute",top:5,left:5}},t.Year))),l.a.createElement("div",{className:"card-body p-2 d-flex flex-row justify-content-between bg-dark"},l.a.createElement("a",{className:"card-text text-light align-self-center",href:"/movie/"+t.imdbID},t.Title.length>15?t.Title.slice(0,15)+"...":t.Title),i?l.a.createElement("button",{type:"button",className:"btn text-danger p-0","data-toggle":"tooltip",title:"Remove from Your List",onClick:function(){a(L(t.imdbID))}},l.a.createElement("i",{className:"fas fa-heart"})):l.a.createElement("button",{type:"button",className:"btn text-light p-0","ata-toggle":"tooltip",title:"Add to Your List",onClick:function(){a(O(t.imdbID))}},l.a.createElement("i",{className:"far fa-heart"}))))}a(74);function Q(e){var t=e.data,a=e.input,n=e.currentPage,c=t.totalResults,r=10*(n-1)+1,o=10*n<c?10*n:c,s=function(e){for(var t=[],a=e%10===0?e/10:parseInt(e/10)+1,n=1;n<=a;n++)t.push(n);return t}(c),i=function(e,t){var a=t.length;return a<=10?t:e+5<=a?e-6>=0?t.slice(e-6,e+5):t.slice(0,10):e-6>=0?t.slice(e-6,a):t.slice(0,a)}(n,s),m=s.length;return l.a.createElement("div",null,l.a.createElement("div",{className:"row my-5",id:"movie-list"},l.a.createElement("div",{className:"col-md-12 d-flex justify-content-between"},l.a.createElement("h3",null,'Results for "',a,'"'),"True"===t.Response?l.a.createElement("p",null,"Showing ",l.a.createElement("strong",null,r)," to ",l.a.createElement("strong",null,o)," of"," ",l.a.createElement("strong",null,t.totalResults)," results"):null),"True"===t.Response?t.Search.map((function(e,t){return l.a.createElement("div",{className:"col-md-5ths my-2",key:t},l.a.createElement(q,{movie:e}))})):l.a.createElement("div",{className:"col-md-12"},t.Error)),"True"===t.Response?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination justify-content-center"},l.a.createElement("li",{className:"page-item"},l.a.createElement("a",{className:"page-link",href:"/result?title=".concat(a,"&page=1")},"First")),l.a.createElement("li",{className:"page-item"+(1===n?" disabled":"")},l.a.createElement("a",{className:"page-link",href:"/result?title=".concat(a,"&page=").concat(n-1)},"Previous")),i.map((function(e,t){return l.a.createElement("li",{className:"page-item"+(e===n?" active":""),key:t},l.a.createElement("a",{className:"page-link",href:"/result?title=".concat(a,"&page=").concat(e)},e))})),l.a.createElement("li",{className:"page-item"+(n===m?" disabled":"")},l.a.createElement("a",{className:"page-link",href:"/result?title=".concat(a,"&page=").concat(n+1)},"Next")),l.a.createElement("li",{className:"page-item"},l.a.createElement("a",{className:"page-link",href:"/result?title=".concat(a,"&page=").concat(m)},"Last")))))):null)}function X(e){var t=e.location,a=Object(d.b)(),c=Object(d.c)((function(e){return e.movie.movieList})),r=Object(d.c)((function(e){return e.movie.isLoading})),o=new URLSearchParams(t.search),s=o.get("title"),i=parseInt(o.get("page"));return Object(n.useEffect)((function(){a(T(s,i))}),[]),l.a.createElement("div",null,l.a.createElement(R,{title:s}),l.a.createElement("div",{className:"container"},r?l.a.createElement(_,null):c?l.a.createElement(Q,{data:c,input:s,currentPage:i}):null))}var Z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{store:K},l.a.createElement(f.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:I}),l.a.createElement(p.a,{exact:!0,path:"/movie/:id",component:A}),l.a.createElement(p.a,{path:"/result/",component:X}),l.a.createElement(p.a,{path:"/your-list",component:C})),l.a.createElement($,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.427f94bc.chunk.js.map
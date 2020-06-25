(this.webpackJsonpmymovielist=this.webpackJsonpmymovielist||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/spinner.e9d9e9f1.gif"},27:function(e,t,a){},40:function(e,t,a){e.exports=a(70)},49:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=a(2),s=a(3),i=a(10),m=a(37),u=a(38),d=a(7),E={input:"",movieList:null,movieSingle:null,isLoading:!1},g=a(20),p={list:[],isLoading:!1,fullList:[],isLoadingMore:!1},f=Object(i.combineReducers)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_LIST":return Object(d.a)({},e,{movieList:t.payload,isLoading:!1});case"GET_MOVIE_SINGLE":return Object(d.a)({},e,{movieSingle:t.payload,isLoading:!1});case"SET_LOADING":return Object(d.a)({},e,{isLoading:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return Object(d.a)({},e,{list:[].concat(Object(g.a)(e.list),[t.payload])});case"REMOVE_MOVIE":return Object(d.a)({},e,{list:e.list.filter((function(e){return e!==t.payload})),fullList:e.fullList.filter((function(e){return e.imdbID!==t.payload}))});case"GET_YOUR_LIST":return Object(d.a)({},e,{list:t.payload});case"GET_FULL_LIST":return Object(d.a)({},e,{fullList:t.payload,isLoading:!1});case"GET_MORE_FULL_LIST":return 0===t.payload.length?Object(d.a)({},e,{isLoadingMore:!1,isLoading:!1}):Object(d.a)({},e,{fullList:[].concat(Object(g.a)(e.fullList),Object(g.a)(t.payload)),isLoadingMore:!1,isLoading:!1});case"SET_LOADING_LIST":return Object(d.a)({},e,{isLoading:t.payload});case"SET_LOADING_MORE":return Object(d.a)({},e,{isLoadingMore:t.payload});default:return e}}}),b=[u.a],v=Object(i.createStore)(f,{},Object(m.composeWithDevTools)(i.applyMiddleware.apply(void 0,b))),h=(a(49),a(11)),y=a(12);a(27);function N(e){var t=e.style,a=Object(h.f)(),c=Object(n.useState)(""),r=Object(y.a)(c,2),o=r[0],i=r[1];return l.a.createElement("div",{className:"text-center",style:t},l.a.createElement("h1",{className:"brand brand-lg"},"My Movie List"),l.a.createElement("div",{className:"search-bar search-bar-lg"},l.a.createElement("input",{className:"form-control form-control-lg search-input search-input-lg",type:"text",value:o,placeholder:"Search for movies...",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&a.push("/result?title=".concat(o,"&page=1"))}}),l.a.createElement(s.b,{className:"btn btn-lg btn-search btn-search-lg align-self-center",to:o.length?"/result?title=".concat(o,"&page=1"):"/","data-toggle":"tooltip",title:"Search"},l.a.createElement("i",{className:"fas fa-search"}))))}var L=a(14),O=a.n(L),w=a(19),I=a.n(w),j=I.a.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",I.a.stopTimer),e.addEventListener("mouseleave",I.a.resumeTimer)}}),T=function(e){return function(t){var a=localStorage.getItem("list")||"";localStorage.setItem("list",a+" "+e),t({type:"ADD_MOVIE",payload:e}),j.fire({icon:"success",title:"Added movie successfully"})}},k=function(e){return function(t){var a=localStorage.getItem("list")||"";a.length&&localStorage.setItem("list",a.replace(e,"").trim()),t({type:"REMOVE_MOVIE",payload:e}),j.fire({icon:"warning",title:"Removed movie successfully"})}},x=function(e,t){return function(a){var n=localStorage.getItem("list");if(n&&n.length)if(n=n.trim().split(/\s+/),a(0===e?{type:"SET_LOADING_LIST",payload:!0}:{type:"SET_LOADING_MORE",payload:!0}),n.length<=e)a({type:"GET_MORE_FULL_LIST",payload:[]});else{var l=n.slice(e,e+t);console.log(n,l),Promise.all(l.map((function(e){return O.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}))).then((function(e){return setTimeout((function(){a({type:"GET_MORE_FULL_LIST",payload:e})}),500)})).catch((function(e){return console.log(e)}))}}};function S(e){var t=e.x2,a=Object(o.b)();Object(n.useEffect)((function(){a((function(e){var t=localStorage.getItem("list");t&&t.length&&e({type:"GET_YOUR_LIST",payload:t.trim().split(/\s+/)})}))}),[]);var c=Object(o.c)((function(e){return e.user.list}));return l.a.createElement(s.b,{to:"/your-list",className:"text-danger",style:{textDecoration:"none",fontSize:20,fontWeight:500},"data-toggle":"tooltip",title:"".concat(c.length," Movies in Your List")},l.a.createElement("i",{className:"far fa-heart position-relative"+(t?" fa-2x":"")}),l.a.createElement("span",{className:"badge badge-success",style:{position:"absolute",top:t?-5:"auto",fontSize:t?15:10}},c.length))}function _(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right pr-5 mt-5"},l.a.createElement(S,{x2:!0})),l.a.createElement("div",{className:"col-12"},l.a.createElement(N,{style:{position:"fixed",top:"45%",left:"50%",transform:"translate(-50%, -50%)"}}))))}var M=function(e,t){return function(a){a(D(!0)),O.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&s=").concat(e,"&page=").concat(t)).then((function(e){setTimeout((function(){a({type:"GET_MOVIE_LIST",payload:e.data})}),500)})).catch((function(e){return console.log(e)}))}},D=function(e){return function(t){t({type:"SET_LOADING",payload:e})}},R=a(18),G=a.n(R);function A(){return l.a.createElement("img",{src:G.a,className:"img-fluid",alt:"...loading",style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}var P={},C={backgroundImage:"linear-gradient(to right, #868f96 0%, #596164 100%)",opacity:.9};function V(e){var t=e.title,a=Object(n.useState)(t),c=Object(y.a)(a,2),r=c[0],i=c[1],m=Object(n.useState)({}),u=Object(y.a)(m,2),d=u[0],E=u[1],g=Object(h.f)(),p=Object(o.b)();return Object(n.useEffect)((function(){var e=function(){window.scrollY>80?E("solid"):E("trans")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),l.a.createElement("nav",{className:"navbar sticky-top",style:"solid"===d?C:P},l.a.createElement(s.b,{className:"navbar-brand ml-sm-2",to:"/"},l.a.createElement("h4",{className:"brand brand-sm"},"My Movie List")),l.a.createElement("span",{className:"search-bar search-bar-sm ml-auto"+("solid"===d?"":" text-dark border-dark")},l.a.createElement("input",{className:"form-control search-input search-input-sm"+("solid"===d?"":" text-dark"),type:"text",value:r,placeholder:"Search for movies...",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&(g.push("/result?title=".concat(r,"&page=1")),p(M(r,1)))}}),l.a.createElement("button",{className:"btn btn-search btn-search-sm"+("solid"===d?"":" text-dark"),onClick:function(){g.push("/result?title=".concat(r,"&page=1")),p(M(r,1))}},l.a.createElement("i",{className:"fas fa-search"}))),l.a.createElement("span",{className:"mx-sm-4"},l.a.createElement(S,{x2:!1})))}var Y={background:"none"};function B(e){var t=e.match,a=Object(o.b)(),c=t.params.id,r=Object(o.c)((function(e){return e.movie.movieSingle})),s=Object(o.c)((function(e){return e.movie.isLoading})),i=Object(o.c)((function(e){return e.user.list.includes(c)}));return Object(n.useEffect)((function(){a(function(e){return function(t){t(D(!0)),O.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e,"&plot=full")).then((function(e){setTimeout((function(){t({type:"GET_MOVIE_SINGLE",payload:e.data})}),500)})).catch((function(e){return console.log(e)}))}}(c))}),[]),l.a.createElement("div",null,l.a.createElement(V,null),l.a.createElement("div",{className:"container"},s?l.a.createElement(A,null):r&&"True"===r.Response?l.a.createElement("div",null,l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col-md-4 card card-body",style:Y},l.a.createElement("img",{src:"N/A"===r.Poster?"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg":r.Poster,className:"thumbnail position-relative",alt:"Poster"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-start"},l.a.createElement("h2",{className:"mb-4 d-inline-block"},r.Title),i?l.a.createElement("button",{type:"button",className:"btn text-danger",onClick:function(){a(k(r.imdbID))}},l.a.createElement("i",{className:"fas fa-heart fa-2x"})):l.a.createElement("button",{type:"button",className:"btn",onClick:function(){a(T(r.imdbID))}},l.a.createElement("i",{className:"far fa-heart fa-2x"}))),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Year:")," ",r.Year),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Genre:")," ",r.Genre),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Released:")," ",r.Released),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Rated:")," ",r.Rated),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"IMDB Rating:")," ",r.imdbRating," -"," ",l.a.createElement("strong",null,"IMDB Votes:")," ",r.imdbVotes),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Director:")," ",r.Director),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Actors:")," ",r.Actors),l.a.createElement("li",{className:"list-group-item",style:Y},l.a.createElement("strong",null,"Awards:")," ",r.Awards)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card card-body mb-5 text-dark",style:Y},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,"About "),r.Plot,l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.imdb.com/title/"+r.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"))))):l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},l.a.createElement("h1",{className:"text-danger"},"Oops..."),l.a.createElement("h5",null,"Content not found"))))}function U(e){var t=e.movie;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement("img",{src:t.Poster,className:"w-100",alt:"Poster"})),l.a.createElement("div",{className:"col-md-10 d-flex flex-column justify-content-center"},l.a.createElement(s.b,{to:"/movie/".concat(t.imdbID),style:{textDecoration:"none"},className:"my-1"},l.a.createElement("h5",null,t.Title," ",l.a.createElement("span",{className:"badge badge-danger"},t.Year))),l.a.createElement("p",{className:"my-1"},l.a.createElement("strong",null,"Genre:")," ",t.Genre),l.a.createElement("p",{className:"my-1"},l.a.createElement("strong",null,"IMDB Rating:")," ",t.imdbRating)))}function F(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user.isLoading})),a=Object(o.c)((function(e){return e.user.fullList})),c=Object(o.c)((function(e){return e.user.isLoadingMore})),r=Object(o.c)((function(e){return e.user.list}));return Object(n.useEffect)((function(){e(x(0,5))}),[]),l.a.createElement("div",null,l.a.createElement(V,null),l.a.createElement("div",{className:"container my-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("h3",null,r.length," Movies In Your List"))),t?l.a.createElement(A,null):a.length?l.a.createElement("table",{className:"table table-hover border border-dark"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Movie"),l.a.createElement("th",{scope:"col"}))),l.a.createElement("tbody",null,a.map((function(t,a){return"True"===t.Response?l.a.createElement("tr",{key:a},l.a.createElement("th",{style:{verticalAlign:"middle"},scope:"row"},a+1),l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement(U,{movie:t})),l.a.createElement("td",{style:{width:"20%",verticalAlign:"middle"}},l.a.createElement("button",{className:"btn btn-danger my-2",onClick:function(){return e(k(t.imdbID))},style:{width:"100%"}},"Remove ",l.a.createElement("i",{className:"fas fa-trash"})),l.a.createElement("a",{className:"btn btn-success my-2",href:"https://www.imdb.com/title/".concat(t.imdbID),style:{width:"100%"},target:"_blank",rel:"noopener noreferrer"},"View on IMDB ",l.a.createElement("i",{className:"fas fa-arrow-right"})))):null}))),l.a.createElement("tfoot",null,l.a.createElement("tr",{className:"text-center"},l.a.createElement("td",{colSpan:"3"},c?l.a.createElement("img",{src:G.a,className:"img-fluid",alt:"...loading"}):a.length===r.length?null:l.a.createElement("div",{className:"mx-auto"},l.a.createElement("button",{className:"btn btn-primary w-25",onClick:function(){e(x(a.length,5))}},"Load "+(r.length-a.length>5?5:r.length-a.length)+" more"),l.a.createElement("button",{className:"btn btn-success w-25",onClick:function(){return e((function(e){var t=localStorage.getItem("list");t&&t.length&&(t=t.trim().split(/\s+/),e({type:"SET_LOADING_LIST",payload:!0}),Promise.all(t.map((function(e){return O.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}))).then((function(t){return setTimeout((function(){e({type:"GET_FULL_LIST",payload:t})}),500)})).catch((function(e){return console.log(e)})))}))}},"Load all movie in Your List")))))):"Your list is empty"))}function W(){return l.a.createElement("button",{className:"btn btn-primary border-primary",style:{position:"fixed",bottom:50,right:20,borderRadius:"50%"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-angle-double-up"}))}a(68);function z(e){var t=e.movie,a=Object(o.b)(),c=Object(n.useState)(!1),r=Object(y.a)(c,2),i=r[0],m=r[1],u=Object(o.c)((function(e){return e.user.list.includes(t.imdbID)}));return l.a.createElement("div",{className:"card  h-100 rounded-0",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},"data-toggle":"tooltip",title:t.Title},l.a.createElement("div",{style:{height:250,background:"none",lineHeight:"250px"}},l.a.createElement(s.b,{to:"/movie/"+t.imdbID},l.a.createElement("img",{src:"N/A"===t.Poster?"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg":t.Poster,className:"card-img-top rounded-0 position-relative",alt:"poster",style:{maxHeight:"100%",height:"N/A"===t.Poster?"100%":"auto",opacity:i?.7:1,transition:"opacity .15s ease-in-out",verticalAlign:"top"}}),l.a.createElement("span",{className:"badge badge-danger",style:{position:"absolute",top:5,left:5}},t.Year))),l.a.createElement("div",{className:"card-body p-2 d-flex flex-row justify-content-between bg-dark"},l.a.createElement(s.b,{className:"card-text text-light align-self-center",to:"/movie/"+t.imdbID},t.Title.length>15?t.Title.slice(0,15)+"...":t.Title),u?l.a.createElement("button",{type:"button",className:"btn text-danger p-0","data-toggle":"tooltip",title:"Remove from Your List",onClick:function(){a(k(t.imdbID))}},l.a.createElement("i",{className:"fas fa-heart"})):l.a.createElement("button",{type:"button",className:"btn text-light p-0","ata-toggle":"tooltip",title:"Add to Your List",onClick:function(){a(T(t.imdbID))}},l.a.createElement("i",{className:"far fa-heart"}))))}a(69);function H(e){var t=e.input,a=e.currentPage,c=Object(o.b)();Object(n.useEffect)((function(){c(M(t,a))}),[]);var r=Object(o.c)((function(e){return e.movie.movieList}));if(Object(o.c)((function(e){return e.movie.isLoading})))return l.a.createElement(A,null);if(r){var i=r.totalResults,m=function(e){for(var t=[],a=e%10===0?e/10:parseInt(e/10)+1,n=1;n<=a;n++)t.push(n);return t}(i),u=m.length,d=10*(a-1)+1,E=10*a<i?10*a:i,g=function(e,t){var a=t.length;return a<=10?t:e+5<=a?e-6>=0?t.slice(e-6,e+5):t.slice(0,10):e-6>=0?t.slice(e-6,a):t.slice(0,a)}(a,m);return l.a.createElement("div",null,l.a.createElement("div",{className:"row my-5",id:"movie-list"},l.a.createElement("div",{className:"col-md-12 d-flex justify-content-between"},l.a.createElement("h3",null,'Results for "',t,'"'),"True"===r.Response?l.a.createElement("p",null,"Showing ",l.a.createElement("strong",null,d)," to ",l.a.createElement("strong",null,E)," of"," ",l.a.createElement("strong",null,r.totalResults)," results"):null),"True"===r.Response?r.Search.map((function(e,t){return l.a.createElement("div",{className:"col-md-5ths my-2",key:t},l.a.createElement(z,{movie:e}))})):l.a.createElement("div",{className:"col-md-12"},r.Error)),"True"===r.Response?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination justify-content-center"},l.a.createElement("li",{className:"page-item"},l.a.createElement(s.b,{className:"page-link",to:"/result?title=".concat(t,"&page=1")},"First")),l.a.createElement("li",{className:"page-item"+(1===a?" disabled":"")},l.a.createElement(s.b,{className:"page-link",to:"/result?title=".concat(t,"&page=").concat(a-1)},"Previous")),g.map((function(e,n){return l.a.createElement("li",{className:"page-item"+(e===a?" active":""),key:n},l.a.createElement(s.b,{className:"page-link",to:"/result?title=".concat(t,"&page=").concat(e)},e))})),l.a.createElement("li",{className:"page-item"+(a===u?" disabled":"")},l.a.createElement(s.b,{className:"page-link",to:"/result?title=".concat(t,"&page=").concat(a+1)},"Next")),l.a.createElement("li",{className:"page-item"},l.a.createElement(s.b,{className:"page-link",to:"/result?title=".concat(t,"&page=").concat(u)},"Last")))))):null)}return null}function J(e){var t=e.location,a=new URLSearchParams(t.search),n=a.get("title"),c=parseInt(a.get("page"));return l.a.createElement("div",null,l.a.createElement(V,{title:n}),l.a.createElement("div",{className:"container"},l.a.createElement(H,{input:n,currentPage:c,key:n+c})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,{store:v},l.a.createElement(s.a,{basename:"/My-Movie-List"},l.a.createElement((function(e){return l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:_}),l.a.createElement(h.a,{exact:!0,path:"/movie/:id",component:B}),l.a.createElement(h.a,{path:"/result/",component:J}),l.a.createElement(h.a,{path:"/your-list",component:F}),l.a.createElement(W,null))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e9261d8f.chunk.js.map
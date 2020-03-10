(this.webpackJsonpfilmpedia=this.webpackJsonpfilmpedia||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/spinner.2c9683e0.gif"},42:function(e,t,a){e.exports=a(71)},47:function(e,t,a){},52:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(47),a(5)),o=a(6),s=a(8),m=a(7),u=a(9),d=a(11),p=a(14),h=a(15);a(52);var b=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark sticky-top"},r.a.createElement("div",{className:"navbar-nav text-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"FilmPedia")),r.a.createElement("ul",{className:"ml-auto navbar-nav text-light"},r.a.createElement("li",{className:"nav-item mr-3"},r.a.createElement("i",{className:"fab fa-imdb fa-3x"})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("i",{className:"fab fa-react fa-3x"}))))};var v=function(){return r.a.createElement("div",{className:"navbar-dark bg-dark py-1"},r.a.createElement("div",{className:"navbar-nav text-light "},r.a.createElement("p",{className:"m-0 text-center"},"FilmPedia - Developed by Yato, Using ReactJS & ReduxJS integrated with external movies data"," ",r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"API OMDB"))))},E=a(17),g=a(26),f=a.n(g),N=function(){return{type:"SET_LOADING"}},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(E.a)(a)),a.handleChange=a.handleChange.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.props.searchMovie(e.target.value)}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.fetchMovies(this.props.text),this.props.setLoading()}},{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid my-0"},r.a.createElement("div",{className:"container w-75"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"searchInput",className:"display-4"},"Search for movie..."),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",onChange:this.handleChange})),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary w-50 mx-auto d-block",onClick:this.handleClick},"Search ",r.a.createElement("i",{className:"fas fa-search"})))))}}]),t}(n.Component),y={searchMovie:function(e){return function(t){t({type:"SEARCH_REDUCER",payload:e})}},fetchMovies:function(e){return function(t){f.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&s=").concat(e)).then((function(e){t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:N},j=Object(d.b)((function(e){return{text:e.searchMovie.text}}),y)(O),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"col-md-3 mb-3"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement(p.b,{to:"/movie/"+e.imdbID},r.a.createElement("img",{className:"mb-2 card-img-top",style:{width:"100%",height:"350px"},src:"N/A"===e.Poster?"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg":e.Poster,alt:"movie-cover"})),r.a.createElement("div",{class:"card-body text-light p-2"},r.a.createElement("h5",{className:"card-title mb-0"},e.Title))))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.result,t=r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center"},e.Error)),a="True"===e.Response?e.Search.map((function(e,t){return r.a.createElement(k,{key:t,movie:e})})):t;return r.a.createElement("div",{className:"row my-3"},a)}}]),t}(n.Component),x=Object(d.b)((function(e){return{result:e.searchMovie.result}}),{})(w),C=a(39),M=a.n(C);function R(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:M.a,className:"img-fluid",alt:"...loading"})))}var D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(j,null),this.props.loading?r.a.createElement(R,null):r.a.createElement(x,null))}}]),t}(n.Component),I=Object(d.b)((function(e){return{loading:e.searchMovie.loading}}),{})(D),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie;if(a){var n=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 card card-body"},r.a.createElement("img",{src:"N/A"===a.Poster?"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg":a.Poster,className:"thumbnail",alt:"Poster"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h2",{className:"mb-4"},a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",a.Actors)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"About "),a.Plot,r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"),r.a.createElement(p.b,{to:"/",className:"btn btn-default text-light"},"Go Back To Search"))))),c=t?r.a.createElement(R,null):n;return r.a.createElement("div",null,c)}return r.a.createElement("div",null,r.a.createElement(R,null))}}]),t}(n.Component),T={fetchMovie:function(e){return function(t){f.a.get("http://www.omdbapi.com/?apikey=".concat("14d3c998","&i=").concat(e)).then((function(e){t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:N},A=Object(d.b)((function(e){return{loading:e.searchMovie.loading,movie:e.searchMovie.movie}}),T)(S),_=a(13),P=a(40),F=a(41),B=a(19),H={text:"",movies:[],loading:!1,result:{}},L=Object(_.combineReducers)({searchMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_REDUCER":return Object(B.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(B.a)({},e,{result:t.payload,loading:!1});case"FETCH_MOVIE":return Object(B.a)({},e,{movie:t.payload,loading:!1});case"SET_LOADING":return Object(B.a)({},e,{loading:!0});default:return e}}}),G=[F.a],V=Object(_.createStore)(L,{},Object(P.composeWithDevTools)(_.applyMiddleware.apply(void 0,G))),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:V},r.a.createElement(p.a,null,r.a.createElement(b,null),r.a.createElement(h.a,{exact:!0,path:"/",component:I}),r.a.createElement(h.a,{exact:!0,path:"/movie/:id",component:A}),r.a.createElement(v,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.3755227b.chunk.js.map
(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r=c(2),a=c.n(r),n=c(18),s=c.n(n),o=(c(24),c(3)),i=c.n(o),j=c(9),u=c(6),b=c(8),m=c(19),d=c.n(m),p=function(){var e=Object(u.a)(i.a.mark((function e(t){var c,r,a,n,s,o,j,u,b,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"today","tomorrow","day after tomorrow",e.t0=t,e.next="today"===e.t0?6:"tomorrow"===e.t0?8:"day after tomorrow"===e.t0?10:12;break;case 6:case 12:return c=1,e.abrupt("break",14);case 8:return c=2,e.abrupt("break",14);case 10:return c=3,e.abrupt("break",14);case 14:return r="".concat("https://api.weatherapi.com/v1/forecast.json?key=").concat("12a20f85151e42448cb175826212010","&q=}").concat("Odessa,ua","&days=").concat(c),e.next=17,d()(r);case 17:return a=e.sent,e.next=20,a.data;case 20:return n=e.sent,console.log("data ==> ",n),s=c-1,o=n.forecast.forecastday[s].day.avgtemp_c,j=n.forecast.forecastday[s].day.mintemp_c,u=n.forecast.forecastday[s].day.maxtemp_c,b=n.forecast.forecastday[s].day.condition.icon,m={forecast:t,city:n.location.name,temp_current:n.current.temp_c,temp_avg:o,mintemp_c:j,maxtemp_c:u,icon_url:b},e.abrupt("return",m);case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=c(0),x="today",f=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)({forecast:"",city:"",temp_current:"",temp_avg:"",mintemp_c:"",maxtemp_c:"",icon_url:""}),s=Object(b.a)(n,2),o=s[0],m=s[1];Object(r.useEffect)((function(){d(x)}),[]);var d=function(){var e=Object(u.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,p(t);case 3:c=e.sent,a(!1),m(Object(j.a)(Object(j.a)({},o),c));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-top-section",children:[Object(l.jsx)("h2",{children:o.city.toUpperCase()}),Object(l.jsxs)("div",{className:"buttons-section",children:[Object(l.jsx)("button",{className:"forecast-button",onClick:function(){return d(x)},children:"Today"}),Object(l.jsx)("button",{className:"forecast-button",onClick:function(){return d("tomorrow")},children:"Tomorrow"}),Object(l.jsx)("button",{className:"forecast-button",onClick:function(){return d("day after tomorrow")},children:"Day After Tomorrow"})]})]}),Object(l.jsx)("div",{className:"info-section",children:c?Object(l.jsx)("p",{children:"Loading..."}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:o.icon_url,alt:o.city}),Object(l.jsxs)("div",{className:"info-section-temperature",children:[Object(l.jsxs)("p",{className:"text-temperature",children:[o.mintemp_c,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Min"})]}),o.forecast===x?Object(l.jsxs)("p",{className:"text-temperature text-temperature-big",children:[o.temp_current,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Current"})]}):Object(l.jsxs)("p",{className:"text-temperature text-temperature-big",children:[o.temp_avg,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Average"})]}),Object(l.jsxs)("p",{className:"text-temperature",children:[o.maxtemp_c,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Max"})]})]})]})})]})},O=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Weather"})}),Object(l.jsx)(f,{})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.14660306.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{535:function(i,t,n){},568:function(i,t,n){"use strict";n(535)},589:function(i,t,n){"use strict";n.r(t);var e={data:()=>({count2:18,infiniteScrollLoading:!1}),computed:{noMore(){return this.count2>=20},disabled(){return this.infiniteScrollLoading||this.noMore}},methods:{infiniteScrollLoad2(){this.infiniteScrollLoading=!0,setTimeout(()=>{this.count2+=2,this.infiniteScrollLoading=!1},2e3)}}},l=(n(568),n(19)),o=Object(l.a)(e,(function(){var i=this,t=i._self._c;return t("div",{staticClass:"infiniteScroll-limit"},[t("div",{staticClass:"infinite-list-wrapper"},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.infiniteScrollLoad2,expression:"infiniteScrollLoad2"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled"}},i._l(i.count2,(function(n){return t("li",{key:n,staticClass:"list-item"},[i._v(i._s(n))])})),0),i._v(" "),i.infiniteScrollLoading?t("p",[i._v("加载中...")]):i._e(),i._v(" "),i.noMore?t("p",[i._v("没有更多了")]):i._e()])])}),[],!1,null,"2f65c31e",null);t.default=o.exports}}]);
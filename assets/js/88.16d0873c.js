(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{628:function(e,a,t){"use strict";t.r(a);var l={data:()=>({columns2:[{type:"selection",width:60},{title:"Name",key:"name",slot:"name"},{title:"Age",key:"age",sortable:"normal",sortType:"asc"},{title:"Address",key:"address"},{title:"operator",key:"operator",slot:"action"}],tableData2:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}),methods:{handleSelect(e,a){console.log(e,a)},handleSelectAll(e){console.log(e)},handleTableAction(e){console.log(e)}}},o=t(19),n=Object(o.a)(l,(function(){var e=this._self._c;return e("div",{staticClass:"table-custom"},[e("x-table",{attrs:{columns:this.columns2,data:this.tableData2,height:"180px"},on:{"on-select":this.handleSelect,"on-select-all":this.handleSelectAll}},[e("template",{slot:"action"},[e("x-button",{on:{click:this.handleTableAction}},[this._v("删除")])],1)],2)],1)}),[],!1,null,null,null);a.default=n.exports}}]);
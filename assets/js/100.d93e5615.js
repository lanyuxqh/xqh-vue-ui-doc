(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{639:function(e,o,a){"use strict";a.r(o);var l={data:()=>({fileList:[{name:"avatar1.jpg",url:"1.jpg"},{name:"avatar2.jpg",url:"2.jpg"}]}),methods:{handleChange(e){console.log("当前选择了文件",e)},handleExceed(e,o){console.log("您已经超过文件上传个数限制了！")},handleBeforeUpload(e){const o=e.size/1024<500;return o||console.log("上传图片大小不能超过 500kb!"),o},handleProgress(e){console.log("上传中...",e)},handleSuccess(e){console.log("上传成功！",e)},handleError(e){console.log("上传失败,",e)}}},n=a(19),s=Object(n.a)(l,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"upload-basic"},[o("x-upload",{attrs:{"file-list":e.fileList,name:"avatar",accept:"image/jpeg,image/png",multiple:"",limit:3,action:"http://localhost:3000/upload","on-exceed":e.handleExceed,"on-change":e.handleChange,"on-success":e.handleSuccess,"on-error":e.handleError,"on-progress":e.handleProgress,"before-upload":e.handleBeforeUpload}},[o("x-button",{attrs:{icon:"upload","icon-position":"right"}},[e._v("上传文件")]),e._v(" "),o("div",{attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpeg、png文件，且大小不超过500kb")])],1)],1)}),[],!1,null,null,null);o.default=s.exports}}]);
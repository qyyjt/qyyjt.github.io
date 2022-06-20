(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{446:function(e,n,t){"use strict";t.r(n);var a=t(65),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"html-pdf-node-打印插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-pdf-node-打印插件"}},[e._v("#")]),e._v(" html-pdf-node 打印插件")]),e._v(" "),t("html",[e._v("\n文档地址：https://www.npmjs.com/package/html-pdf-node\n")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("插件安装：\nnpm i html-pdf-node\nnpm i puppeteer\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<style>\n    .page-break-before {\n      page-break-before: always; //分页符\n    }\n    .page-break-avoid {\n        page-break-inside: avoid; //避免在元素内部插入分页符\n    }\n</style>\n<script>\n    // 分页逻辑\n    function addPageBreak() {\n        let doc = document.querySelectorAll('.echarts-page'); //获取所有可能需要分页的元素\n        let index_h = document.getElementById('indexHome').offsetHeight;//封面高度\n        let a4_h = 952;  //A4纸：794×1123, 浏览器打印内容高度：588*1040, pdf插件打印内容高度：595*952\n\n        let prev_top = 0; //上个分页节点位置\n        doc.forEach(item => {\n            let t = item.getBoundingClientRect().top,//当前节点所在位置\n                h = item.offsetHeight;//当前节点内容高度\n            let surplus = (t + h - index_h - prev_top) % a4_h; //取余\n\n            if (Math.abs(surplus) < h) {  //当前节点被分页截断\n                item.classList.add(\"page-break-before\");    //添加分页\n               \n                let classList = item.className;\n                if (classList.indexOf('echarts-page-table') != -1) {  //分页标签在表格上面，若表格可被分页截断，执行以下代码\n                    let tab = (h - Math.abs(surplus)) % a4_h; //取余\n                    if (Math.abs(tab) >= 100) { //打印时底部留白区域范围\n                        item.classList.remove(\"page-break-before\");\n                    } else {\n                        prev_top = t - index_h;\n                    }\n                } else {\n                    prev_top = t - index_h;\n                }\n            }\n        });\n    }\n<\/script>\n")])])]),t("h5",{attrs:{id:"html-pdf-node-打印脚本-pdf-print-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-pdf-node-打印脚本-pdf-print-js"}},[e._v("#")]),e._v(" html-pdf-node 打印脚本: pdf-print.js")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var html_to_pdf = require(\'html-pdf-node\');\nvar fs = require("fs");\nlet options = {\n  args: [\n    "--no-sandbox",\n    "--disable-setuid-sandbox",\n    "--allow-file-access-from-file",\n  ],\n  format: "A4", //pdf插件打印内容高度：595* 952, A4纸：794×1123\n  // landscape: true, //是否横向打印\n  // scale: 2, //缩放0.1-2之间\n  margin: {\n    top: "15mm",\n    bottom: "15mm",\n    left: 0,\n    right: 0,\n  },\n  displayHeaderFooter: true, //是否展示页眉页尾\n  \n  /**\n  * 页眉页尾可配置参数\n  * @params title标题 date时间 url路径 pageNumber页码 totalPages总页码\n  */\n  // 页眉模板\n  headerTemplate: `\n <div style="color: #111111;margin: 0 auto;width:12cm;font-size: 2.5mm;border-bottom: 0.1mm\nsolid #d6d6d6;padding-bottom: 0.5mm;">\n    <span class=\'title\'></span>\n </div>\n `,\n\n  // 页尾模板\n  footerTemplate: `\n <div style="color: #111111;width: 12cm; margin: 0 auto; border-top: 0.1mm solid\n#d6d6d6; font-size: 2.5mm; padding-top: 0.5mm; text-align: right;">\n    <span class="pageNumber"></span>/<span class="totalPages"></span>\n </div>\n `,\n  printBackground: true, //打印背景图形\n};\n\nfunction printPDF(param) {\n  let file = param.file || [{ url: "https://example.com", name: \'example.pdf\' }];\n  let distLocation = param.distLocation || (\'./\' + file[0].name);  //pdf文件保存地址\n\n  // 生成PDF文件并保存至当前文件夹\n  html_to_pdf.generatePdfs(file, options).then(output => {\n    console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]\n\n    // fs.writeFile(\'文件路径\'，\'要写入的内容\'，[\'编码\']，\'回调函数\');\n    fs.writeFile(distLocation, output[0].buffer, "binary", function (err) {\n      if (err) {\n        console.error("文件保存失败", err);\n      } else {\n        console.log(" 文件已保存！");\n      }\n    });\n  });\n}\n\n//执行打印\nprintPDF({\n  file: [{ url: "F:/项目文件/企业预警通/bondReports/1.html", name: \'1.pdf\' }],\n  distLocation: \'./1.pdf\'\n});\n\n// export default {\n//   printPDF\n// }\n\n')])])]),t("p",[e._v("cmd终端执行打印pdf命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node .\\pdf-print.js\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
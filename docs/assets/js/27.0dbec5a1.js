(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{451:function(t,a,e){"use strict";e.r(a);var l=e(65),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"html邮件编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html邮件编写"}},[t._v("#")]),t._v(" html邮件编写")]),t._v(" "),e("h4",{attrs:{id:"_1-doctype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-doctype"}},[t._v("#")]),t._v(" 1.  Doctype")]),t._v(" "),e("p",[t._v("目前，兼容性最好的Doctype是XHTML 1.0 Strict，事实上Gmail和Hotmail会删掉你的Doctype，换上这个"),e("code",[t._v("Doctype")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n</html>\n')])])]),e("h4",{attrs:{id:"_2-布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-布局"}},[t._v("#")]),t._v(" 2. 布局")]),t._v(" "),e("p",[t._v("使用table布局，最好使用img,a ,span标签，通过table嵌套的方式，实现网页的布局。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n<table border="0" cellpadding="0" cellspacing="0" width="1016" align="center" style="background-color: #fff;">\n   <tbody>\n       <tr>\n           <td width=\'100%\'>\n              <table border="0" cellpadding="0" cellspacing="0" align="center"\n              width=\'1016\' style="background-color:#fff;table-layout: fixed; ">\n                   <tbody>\n                       <tr height=\'24\'>\n                            </tr>\n                   </tbody>\n              </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n')])])]),e("h4",{attrs:{id:"_3-图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-图片"}},[t._v("#")]),t._v(" 3. 图片")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在某些邮箱中图片不是默认加载的，往往加载前需要用户的许可 。")])]),t._v(" "),e("li",[e("p",[t._v("图片不要使用base64图片，在outlook将会不展示。")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAJECAYAAABZ4FAqAAAABGdBTUEAALGPC/\n")])])]),e("ul",[e("li",[t._v("引用图片使用img标签，"),e("code",[t._v("style")]),t._v(" 内容里面 "),e("code",[t._v("background")]),t._v(" 可以设置 "),e("code",[t._v("color")]),t._v("，但是 "),e("code",[t._v("image")]),t._v(" 会被过滤。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' 使用img标签\n <img border="0" style="display:block;outline:none;text-decoration:none,-ms-interpolation-mode:bicubic;border:none;"> \n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('背景色与背景图同时设置，保证图片不生效的情况下，背景图能展示\n<table align="center" border="0" cellpadding="0" cellspacing="0" width="1120" height="185" style="background-color: #2F8DFD;background-image: url(\'https://cdn.finchina.com/app/sendMail/background@2x.jpg\')">\n')])])]),e("h4",{attrs:{id:"_4-行内样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-行内样式"}},[t._v("#")]),t._v(" 4 .行内样式")]),t._v(" "),e("ul",[e("li",[t._v("css 只有内联样式才能兼容客户端与浏览器邮箱，而外部的style及head标签中的style有可能会客户端被删除。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<span style=" font-size: 24px;font-family: Arial, sans-serif;color: #fff; margin-left: 12px;">企业预警通</span>\n')])])]),e("ul",[e("li",[t._v("css 不支持简写。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('　想要表达\n　 <p style="margin: 1em 0;">\n　要写成下面这样\n　<p style="margin-top: 1em; margin-bottom: 1em; margin-left: 0; margin-right: 0;">\n　 \n')])])]),e("h4",{attrs:{id:"_5-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-js"}},[t._v("#")]),t._v(" 5. js")]),t._v(" "),e("p",[t._v("html 邮箱不能引入js,是为了防止某些攻击。")]),t._v(" "),e("h4",{attrs:{id:"_6-字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-字体"}},[t._v("#")]),t._v(" 6. 字体")]),t._v(" "),e("p",[t._v("在 HTML 邮件中，font-family 只支持系统字体(font-family:  Arial, sans-serif; )，不支持自定义字体。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' <span style=" font-family: PingFangSC, PingFangSC-Light;color: #f7fbff;font-size: 13px;line-height: 18px;display: inline-block;">本报告产生于2021-05-01 08:52:30</span>\n')])])]),e("h4",{attrs:{id:"_7-行高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-行高"}},[t._v("#")]),t._v(" 7. 行高")]),t._v(" "),e("p",[t._v("在 OutLook 中会有个默认的行高最小值，特别是当设置 font-family 为微软雅黑时，默认的行高差不多为 Word 中的两倍行距，如果 line-height 设置的值小于默认的行高，无论你设置的是多少，则始终使用默认值，在很多情况下这是不能忍的，好在有个神奇的 mso-line-height-rule，使用行高时添加 mso-line-height-rule:exactly; 就能使行高始终等于我们所设置的值。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<td style="mso-line-height-rule: exactly; line-height: 36px;">\n    \x3c!-- ... --\x3e\n</td>\n')])])]),e("h4",{attrs:{id:"_8-全局规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-全局规则"}},[t._v("#")]),t._v(" 8. 全局规则")]),t._v(" "),e("ul",[e("li",[t._v('如果需要邮件居中显示，请在table里设定align="center"。')])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' <table align="center" border="0" cellpadding="0" cellspacing="0" width="1120" height=\'185\' </table>\n')])])]),e("ul",[e("li",[e("p",[t._v("若邮件模板内侧边或者上下有空白间距，不要用 padding，必须得用标准的 td 来设定空白间距，否则会导致各个邮箱解析不同。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  <tr align=\"center\" height='15'>\n    <td></td>\n   </tr>\n  <tr align=\"center\" height='42'>\n    <td> </td>\n   </tr>\n")])])])]),t._v(" "),e("li",[e("p",[t._v("不要写"),e("code",[t._v("style")]),t._v("标签、不要写"),e("code",[t._v("class")]),t._v("，所有CSS都用style属性，什么元素需要什么样式就用style写"),e("code",[t._v("内联的CSS")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("大多数css3新技术不能使用，如 阴影，渐变色，hover事件，定位，只能使用常用的属性width,height,line-height,color。")])]),t._v(" "),e("li",[e("p",[t._v("在"),e("code",[t._v("td")]),t._v(" 里设置 "),e("code",[t._v("margin")]),t._v(" 是无效的，不论是 margin-left、margin-right、margin-top 或者 margin-boottom 都没有效果。")])]),t._v(" "),e("li",[e("p",[t._v("outlook对背景图片不识别，只能只用"),e("code",[t._v("img")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("少用float, margin,padding. 绝对定位不能用，清除浮动用"),e("code",[t._v('<table style="clear:both"></table>')]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("少用图片，邮箱不会过滤你的img标签，但是系统往往会默认不载入陌生来信的图片。")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
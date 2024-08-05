# 组件内部样式修改


Quarkd 组件采用了 [::part](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part) 伪类选择器，可以修改组件内部的样式。

<br />

## 示例
1、打开浏览器开发者工具，找到需要修改的组件内部元素，找到 part 属性。


<img src="https://cdn.jsdelivr.net/npm/quark-static@latest/quarkd2-noticebar-part-pseudo-element.png" width="800" />

<br />
2、在 CSS 中使用 `::part(name)` 语法，修改组件内部样式。

```css
quark-noticebar::part(text) {
  color: red;
  font-style: italic;
}
```

<br />
<img src="https://cdn.jsdelivr.net/npm/quark-static@latest/quarkd2-noticebar-part-pseudo-element2.png" width="800" />



## 浏览器兼容性

已兼容主流浏览器，[详情点击这里](https://developer.mozilla.org/en-US/docs/Web/CSS/::part#browser_compatibility)



## 在线示例

访问：https://stackblitz.com/edit/quarkd2?file=index.html

<iframe
  src="https://stackblitz.com/edit/quarkd2?file=index.html"
  width="80%"
  height="500"
></iframe>


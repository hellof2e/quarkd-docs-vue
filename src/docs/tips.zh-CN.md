# 组件内部样式修改

```html
import "quarkd/lib/noticebar";
<!-- 基础用法 -->
<quark-noticebar class="notice-bar" :text="text"></quark-noticebar>
```

假如要修改组件内部的样式，比如修改背景色，可以这样：
```
.notice-bar::part(notice-bar) {
  background-color: red;
}
```

浏览器兼容到：
https://developer.mozilla.org/en-US/docs/Web/CSS/::part#browser_compatibility



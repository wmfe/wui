## 3. sticky组件

### 项目源码地址
npm地址： https://www.npmjs.com/package/vue-sticky-position
github地址：  https://github.com/shiye515/vue-sticky

### 基本用法
```html
    <sticky>
        <div class="stickyed">sticky</div>
    </sticky>
    import Sticky from 'vue-sticky-position'
    export default {
        components: {
            Sticky
        }
    }

```

### 使用示例
```
    <sticky>
        <div class="stickyed">sticky</div>
    </sticky>
    <script>
        import Sticky from 'vue-sticky-position'
        export default {
            components: {
                Sticky
            }
        }
    </script>
```

### 属性介绍 Attributes:
name            |           type     |  default   |                        description
--------------- | -------------:     | :--------: | :--------------------------------------------------------:
top             |   [Number, String] | 'auto'     |                 定位时距离顶部的距离，默认保持跟firefox的实现一致
z-ndex          |         Number     |  10        |                 css中的z-index值

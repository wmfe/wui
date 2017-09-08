<div class="text-area">

  # Cell 

  ### 项目源码地址


  ### 用法

  ```
  import { Cell } from 'w-ui';
  Vue.component(Cell.name, Cell);
  ```

  把想要渲染的dom直接放入carousel标签内即可
  通过responsive设置宽高比例
  auto属性设置是否自动轮播
  indicators设置是否加入屏点, 可以自己设置class覆盖默认样式

  #### 基础用法：
  ```html
    <w-cell title="标题文字"></w-cell>
    <w-cell title="标题文字" value="说明文字"></w-cell>
  ```

  #### 链接：

  ```html
    <w-cell title="标题文字" to="//github.com" is-link value="带链接">
    </w-cell>
  ```

  #### 图标：

  ```html
    <w-cell title="标题文字" icon="more" value="带 icon">
    </w-cell>
  ```

  #### 自定义图标：

  ```html
    <w-cell title="标题文字" icon="more" value="带 icon">
      <span>icon 是图片</span>
      <img slot="icon" src="/assets/wui.png" width="24" height="24">
    </w-cell>
  ```

  #### 自定义内容：

  ```html
    <w-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </w-cell>
  ```

  #### 描述：

  ```html
    <w-cell title="标题文字" label="描述信息" is-link>
    </w-cell>
  ```

  ### 属性介绍 Attributes

  |参数         | 说明      | 类型       | 可选值      | 默认值    |
  |------------|-----------|-----------|------------|----------|
  | icon       | 图标       | String    |            |          |
  | title      | 标题       | String    |            |          |
  | to         | 链接       | String    |            |          |
  | value      | 显示的文字  | String    |            |          |
  | is-link    | 是否有链接  | Boolean   |            |   false  |
  | label      | 描述       | String    |            |          |


  ### Slot介绍

  | 参数       | 说明     | 类型      | 可选值       | 默认值      |
  |-----------|---------|-----------|-------------|------------|
  | icon      | 图标     | String    |             |            |
  | title     | 标题     | String    |             |            |


</div>
<div class="demo-area">
  <div class="demo-phone">
    <template>
      <div>
        <w-cell title="标题文字"></w-cell>
        <w-cell title="标题文字" value="说明文字"></w-cell>
        <w-cell title="标题文字" to="//github.com" is-link value="带链接"></w-cell>
        <w-cell title="标题文字" icon="more" value="带 icon"></w-cell>
        <w-cell title="标题文字">
          <span>icon 是图片</span>
          <img slot="icon" src="/assets/wui.png" width="24" height="24">
        </w-cell>
        <w-cell title="标题文字" label="描述信息" is-link></w-cell>
      </div>
    </template>
  </div>
</div>

<script>
import Cell from 'packages/cell/src/Cell.vue'

export default {
  components: {
    'w-cell': Cell
  }
}
</script>

<style lang="less-loader">
.text-area{
  flex: auto;
  padding: 10px;
}
.demo-area{
  flex: 0 0 310px;
  padding: 10px;
  .demo-phone{
    height: 600px;
    width: 300px;
    padding: 40px 5px;
    border-radius: 20px;
    box-shadow: 0 0 10px #000;
    border: 1px #ccc solid;
    background-color: #e7e8e9;
  }
  .demo-phone>div{
    border: 1px #ccc solid; 
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
}
</style>



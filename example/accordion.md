<div class="text-area">

  # Accordion 手风琴组件 


  ### 基本用法

  ```html
    <w-accordion>
        <w-accordion-item title="李白《月下独酌》">
          <p>花间一壶酒，独酌无相亲。</p>
          <p>举杯邀明月，对影成三人。</p>
          <p>月既不解饮，影徒随我身。</p>
          <p>暂伴月将影，行乐须及春。</p>
          <p>我歌月徘徊，我舞影零乱。</p>
          <p>醒时同交欢，醉后各分散。</p>
          <p>永结无情游，相期邈云汉。</p>
        </w-accordion-item>
        <w-accordion-item title="杜甫《望岳》">
          <p>岱宗夫如何，齐鲁青未了。</p>
          <p>造化钟神秀，阴阳割昏晓。</p>
          <p>荡胸生层云，决眦入归鸟。</p>
          <p>会当凌绝顶，一览众山小。</p>
        </w-accordion-item>
        <w-accordion-item title="王维《青溪》">
          <p>言入黄花川，每逐青溪水。</p>
          <p>随山将万转，趣途无百里。</p>
          <p>声喧乱石中，色静深松里。</p>
          <p>漾漾泛菱荇，澄澄映葭苇。</p>
          <p>我心素已闲，清川澹如此。</p>
          <p>请留盘石上，垂钓将已矣。</p>
        </w-accordion-item>
    </w-accordion>
  ```
  
  ###  AccordionItem 属性介绍 Attributes

  | 参数           | 说明        | 类型       | 可选值        | 默认值     |
  |---------------|-------------|-----------|--------------|-----------|
  | title         | 标题         | String    |              |    true   |
  | contentHeight | 内容高度      | interval  |   Number     |    3000   |


</div>
<div class="demo-area">
  <div class="demo-phone">

    <template>
      <div :style="{width: '300px', height: '120px'}">
        <w-accordion>
          <w-accordion-item title="李白《月下独酌》">
            <p>花间一壶酒，独酌无相亲。</p>
            <p>举杯邀明月，对影成三人。</p>
            <p>月既不解饮，影徒随我身。</p>
            <p>暂伴月将影，行乐须及春。</p>
            <p>我歌月徘徊，我舞影零乱。</p>
            <p>醒时同交欢，醉后各分散。</p>
            <p>永结无情游，相期邈云汉。</p>
          </w-accordion-item>
          <w-accordion-item title="杜甫《望岳》">
            <p>岱宗夫如何，齐鲁青未了。</p>
            <p>造化钟神秀，阴阳割昏晓。</p>
            <p>荡胸生层云，决眦入归鸟。</p>
            <p>会当凌绝顶，一览众山小。</p>
          </w-accordion-item>
          <w-accordion-item title="王维《青溪》">
            <p>言入黄花川，每逐青溪水。</p>
            <p>随山将万转，趣途无百里。</p>
            <p>声喧乱石中，色静深松里。</p>
            <p>漾漾泛菱荇，澄澄映葭苇。</p>
            <p>我心素已闲，清川澹如此。</p>
            <p>请留盘石上，垂钓将已矣。</p>
          </w-accordion-item>
        </w-accordion>
      </div>
    </template>
  </div>
</div>

<script>
import Accordion from 'packages/accordion'
import AccordionItem from 'packages/accordion-item'

export default {
  components: {
    'w-accordion': Accordion,
    'w-accordion-item': AccordionItem
  }
}
</script>



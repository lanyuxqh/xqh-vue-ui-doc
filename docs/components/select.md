# Select 下拉框

### 基础用法

<br/>

<demo-block>
:::slot source
<select-basic></select-basic>
:::

:::slot highlight

```html
<template>
  <div class="select-basic">
    <x-select
      placeholder="请选择"
      :options="selectOptions1"
      v-model="selectValue1"
      @change="handleSelectChange"
    ></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions1: [
          { label: '中国', value: 'zhongguo' },
          { label: '俄罗斯', value: 'eluosi' },
          { label: '美国', value: 'meiguo' },
          { label: '澳大利亚', value: 'aodaliya' },
          { label: '巴基斯坦', value: 'bajisitan' }
        ],
        selectValue1: ''
      }
    },
    methods: {
      handleSelectChange(select, index) {
        console.log(select, index)
      }
    }
  }
</script>
```

:::
</demo-block>

### 禁用状态

<br/>

<demo-block>
:::slot source
<select-disabled></select-disabled>
:::

设置`disabled`属性来实现禁用状态。

:::slot highlight

```html
<template>
  <div class="select-disabled">
    <x-select
      placeholder="请选择"
      :options="selectOptions2"
      v-model="selectValue2"
      disabled
    ></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions2: [
          { label: '中国', value: 'zhongguo' },
          { label: '俄罗斯', value: 'eluosi', disabled: true },
          { label: '美国', value: 'meiguo' },
          { label: '澳大利亚', value: 'aodaliya', disabled: true },
          { label: '巴基斯坦', value: 'bajisitan' }
        ],
        selectValue2: 'zhongguo'
      }
    }
  }
</script>
```

:::
</demo-block>

### 禁用选项

<br/>

<demo-block>
:::slot source
<select-optdisabled></select-optdisabled>
:::

可以针对 options 下某个选项来添加`disabled`属性实现禁用选项。

:::slot highlight

```html
<template>
  <div class="select-disabled">
    <x-select placeholder="请选择" :options="selectOptions3" v-model="selectValue3"></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions3: [
          { label: '中国', value: 'zhongguo' },
          { label: '俄罗斯', value: 'eluosi', disabled: true },
          { label: '美国', value: 'meiguo' },
          { label: '澳大利亚', value: 'aodaliya', disabled: true },
          { label: '巴基斯坦', value: 'bajisitan' }
        ],
        selectValue3: ''
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义选项属性名

<br/>

<demo-block>
:::slot source
<select-optfiled></select-optfiled>
:::

默认 options 接收`label`和`value`属性作为显示和值绑定，你可以设置`labelFiled`和`valueFiled`属性来重新确定字段的绑定。

:::slot highlight

```html
<template>
  <div class="select-optdisabled">
    <x-select
      placeholder="请选择"
      :options="selectOptions4"
      v-model="selectValue4"
      labelFiled="cityName"
      valueFiled="cityCode"
    ></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions4: [
          { cityName: '北京', cityCode: '131' },
          { cityName: '天津', cityCode: '332' },
          { cityName: '上海', cityCode: '289', disabled: true },
          { cityName: '重庆', cityCode: '132' },
          { cityName: '深圳', cityCode: '340' }
        ],
        selectValue4: '132'
      }
    }
  }
</script>
```

:::
</demo-block>

### 可过滤搜索

<br/>

<demo-block>
:::slot source
<select-searchable></select-searchable>
:::

设置`searchable`属性来实现过滤搜索。

:::slot highlight

```html
<template>
  <div class="select-searchable">
    <x-select
      placeholder="请选择"
      :options="selectOptions5"
      v-model="selectValue5"
      searchable
    ></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions5: [
          { label: 'HTML', value: 'HTML', disabled: true },
          { label: 'CSS', value: 'CSS' },
          { label: 'Javascript', value: 'Javascript' },
          { label: 'Npm', value: 'Npm' },
          { label: 'Webpack', value: 'Webpack' },
          { label: 'Node', value: 'Node' },
          { label: 'Java', value: 'Java' },
          { label: 'XML', value: 'XML' },
          { label: 'xqh-vue-ui', value: 'xqh-vue-ui' }
        ],
        selectValue5: ''
      }
    }
  }
</script>
```

:::
</demo-block>

### 可多选

<br/>

<demo-block>
:::slot source
<select-multiple></select-multiple>
:::

设置`multiple`属性来实现多选。

:::slot highlight

```html
<template>
  <div class="select-multiple">
    <x-select
      placeholder="请选择"
      :options="selectOptions6"
      v-model="selectValue6"
      multiple
      @change="handleSelectChange"
      width="400px"
      height="60px"
    ></x-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectOptions6: [
          { label: 'HTML', value: 'HTML' },
          { label: 'CSS', value: 'CSS' },
          { label: 'Javascript', value: 'Javascript' },
          { label: 'Npm', value: 'Npm' },
          { label: 'Webpack', value: 'Webpack' },
          { label: 'Node', value: 'Node' },
          { label: 'Java', value: 'Java' },
          { label: 'XML', value: 'XML' },
          { label: 'xqh-vue-ui', value: 'xqh-vue-ui' }
        ],
        selectValue6: ['HTML', 'CSS', 'Node']
      }
    },
    methods: {
      handleSelectChange(select, index) {
        console.log(select, index)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明                                 | 类型           | 可选值       | 默认值 |
| :---------- | :----------------------------------- | :------------- | :----------- | :----- |
| placeholder | 下拉框占位字符                       | String         | -            | -      |
| value       | 下拉框绑定值，开启多选时类型为 Array | String / Array | -            | -      |
| options     | 下拉框选项                           | Array          | -            | []     |
| disabled    | 是否为禁用状态                       | Boolean        | true / false | false  |
| labelFiled  | 自定义替换 lable 的字段名名          | String         | -            | label  |
| valueFiled  | 自定义替换 value 的字段名名          | String         | -            | value  |
| searchable  | 是否开启过滤搜索                     | Boolean        | true / false | false  |
| multiple    | 是否开启多选                         | Boolean        | true / false | false  |
| width       | 自定义宽度                           | String         | -            | 260px  |
| height      | 自定义高度                           | String         | -            | -      |

### options Attributes 参数

| 参数     | 说明                        | 类型    | 可选值       | 默认值 |
| :------- | :-------------------------- | :------ | :----------- | :----- |
| label    | 下拉框默认 label 展示字段名 | String  | -            | label  |
| value    | 下拉框默认 value 选中值     | String  | -            | value  |
| disabled | 是否禁用选项                | Boolean | true / false | false  |

### Event 事件

| 事件名 | 说明           | 回调参数                     |
| :----- | :------------- | :--------------------------- |
| change | 下拉框选中事件 | (select: Object,index:Number) |

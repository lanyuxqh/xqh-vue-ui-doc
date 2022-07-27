# Table 表格

### 基础用法

<br/>

<demo-block>
:::slot source
<table-basic></table-basic>
:::

:::slot highlight

```html
<template>
  <div class="table-basic">
    <x-table :options="tableOptions1"></x-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableOptions1: {
          fileds: [
            { field: 'id', title: 'ID', align: 'center' },
            { field: 'name', title: '姓名', align: 'center' },
            { field: 'age', title: '年龄', align: 'center' },
            { field: 'address', title: '地址', align: 'center' }
          ],
          datas: [
            { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
            { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
            { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
            { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' }
          ]
        }
      }
    }
  }
</script>
```

:::
</demo-block>

### 尺寸

<br/>

<demo-block>
:::slot source
<table-size></table-size>
:::

:::slot highlight

```html
<template>
  <div class="table-size">
    <x-table :options="tableOptions2" size="sm"></x-table>
    <br />
    <x-table :options="tableOptions2" size="xs"></x-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableOptions2: {
          fileds: [
            { field: 'id', title: 'ID', align: 'center' },
            { field: 'name', title: '姓名', align: 'center' },
            { field: 'age', title: '年龄', align: 'center' },
            { field: 'address', title: '地址', align: 'center' }
          ],
          datas: [
            { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
            { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
            { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
            { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' }
          ]
        }
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义表头及表格样式

<br/>

<demo-block>
:::slot source
<table-custom></table-custom>
:::

:::slot highlight

```html
<template>
  <div class="table-custom">
    <x-table
      :options="tableOptions3"
      :headStyle="headStyle"
      :rowStyle="rowStyle"
      size="sm"
    ></x-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableOptions3: {
          fileds: [
            { field: 'id', title: 'ID', align: 'center' },
            { field: 'name', title: '姓名', align: 'center' },
            { field: 'age', title: '年龄', align: 'center' },
            { field: 'address', title: '地址', align: 'center' }
          ],
          datas: [
            { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
            { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
            { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
            { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' }
          ]
        },
        headStyle: {
          color: '#fff',
          borderColor: '#4c94d1',
          backgroundColor: 'rgba(25,66,120,.9)'
        },
        rowStyle: {
          borderColor: '#4c94d1'
        }
      }
    }
  }
</script>
```

:::
</demo-block>

### 自定义插槽内容

<br/>

<demo-block>
:::slot source
<table-slot></table-slot>
:::

:::slot highlight

```html
<template>
  <div class="table-slot">
    <x-table :options="tableOptions4">
      <template v-slot:head-age="{scope}">
        <div style="color: green">{{ scope.title }}</div>
      </template>
      <template v-slot:id="{scope}">
        <div style="color: #008dff">{{ scope.row.id }}</div>
      </template>
      <template v-slot:action="{scope}">
        <x-button icon="edit" type="primary" :disabled="scope.rowIndex % 2 == 0">编辑</x-button>
        <x-button
          icon="delete"
          status="danger"
          style="margin-left: 5px"
          @click="handleDelete(scope.rowIndex)"
        >
          删除
        </x-button>
      </template>
    </x-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableOptions4: {
          fileds: [
            { field: 'id', title: 'ID', align: 'center' },
            { field: 'name', title: '姓名', align: 'center' },
            { field: 'age', title: '年龄', align: 'center' },
            { field: 'address', title: '地址', align: 'center' },
            { field: 'action', title: '操作', align: 'center' }
          ],
          datas: [
            { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
            { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
            { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
            { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' }
          ]
        }
      }
    },
    methods: {
      handleDelete(index) {
        this.tableOptions4.datas.splice(index, 1)
      }
    }
  }
</script>
```

:::
</demo-block>

### Attributes 参数

| 参数        | 说明                                | 类型    | 可选值       | 默认值                |
| :---------- | :---------------------------------- | :------ | :----------- | :-------------------- |
| options     | 表格数据，包括 fileds 和 datas 属性 | Object  | -            | {fileds:[], datas:[]} |
| size        | 表格尺寸                            | String  | xs / sm / md | md                    |
| showHeader  | 是否显示表头                        | Boolean | true / false | true                  |
| headStyle   | 自定义表头样式                      | Object  | -            | -                     |
| rowStyle    | 自定义表格内容区域的样式            | Object  | -            | -                     |
| customClass | 自定义表格组件整体的 Class 类名     | String  | -            | -                     |

### fileds Attributes 参数

| 参数  | 说明                                        | 类型   | 可选值                | 默认值 |
| :---- | :------------------------------------------ | :----- | :-------------------- | :----- |
| field | 表格列的参数名，对应 datas 数据下某项的键名 | String | -                     | -      |
| title | 表头显示的名称                              | String | -                     | -      |
| align | 表格内容展示位置                            | String | left / center / right | left   |
| width | 表格列的宽度                                | String | -                     | -      |

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
        <x-button icon="delete" status="danger" style="margin-left: 5px" @click="handleDelete(scope.rowIndex)">删除</x-button>
      </template>
    </x-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableOptions4: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
          { field: 'action', title: '操作', align: 'center' },
        ],
        datas: [
          { id: 10, name: 'Joe Black', age: '16', address: 'New York No. 1 Lake Park' },
          { id: 13, name: 'Joe Black', age: '31', address: 'Sydney No. 5 Lake Park' },
          { id: 2, name: 'Jim Green', age: '25', address: 'London No. 2 Lake Park' },
          { id: 11, name: 'Jon Snow', age: '18', address: 'Ottawa No. 1 Lake Park' },
        ]
      },

    }
  },
  methods: {
    handleDelete (index) {
      this.tableOptions4.datas.splice(index, 1)
    },
  },
}
</script>

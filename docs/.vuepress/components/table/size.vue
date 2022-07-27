<template>
  <div class="table-size">
    <x-table :options="tableOptions2" size="sm"></x-table>
    <br>
    <x-table :options="tableOptions2" size="xs"></x-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableOptions2: {
        fileds: [
          { field: 'id', title: 'ID', align: 'center' },
          { field: 'name', title: '姓名', align: 'center' },
          { field: 'age', title: '年龄', align: 'center' },
          { field: 'address', title: '地址', align: 'center' },
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
}
</script>
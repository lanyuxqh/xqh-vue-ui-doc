<template>
  <div class="table-custom">
    <x-table :options="tableOptions3" :headStyle="headStyle" :rowStyle="rowStyle" size="sm"></x-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableOptions3: {
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
      headStyle: {
        color: "#fff",
        borderColor: "#4c94d1",
        backgroundColor: "rgba(25,66,120,.9)",
      },
      rowStyle: {
        borderColor: "#4c94d1",
      },
    }
  },
}
</script>

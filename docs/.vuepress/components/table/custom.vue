<template>
  <div class="table-custom">
    <x-table :columns="columns2" :data="tableData2" height="180px" @on-select="handleSelect" @on-select-all="handleSelectAll">
      <template slot="action">
        <x-button @click="handleTableAction">删除</x-button>
      </template>
    </x-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns2: [
        {
          type: 'selection',
          width: 60
        },
        {
          title: "Name",
          key: "name",
          slot: 'name'
        },
        {
          title: "Age",
          key: "age",
          sortable: 'normal', // iview  默认排序 排序方法 custom（远程排序）
          sortType: 'asc',
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: 'operator',
          key: "operator",
          slot: 'action',
        }
      ],
      tableData2: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
    }
  },
  methods: {
    handleSelect (selection, row) {
      // selection 表示选中的所有的  row 表示当前是哪一个
      console.log(selection, row)
    },
    handleSelectAll (selection) {
      console.log(selection)
    },
    handleTableAction (e) {
      console.log(e)
    },
  },
}
</script>

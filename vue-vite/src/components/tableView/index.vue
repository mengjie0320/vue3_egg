<template>
    <div class="component-table-view">
        <el-table
            fit
            v-bind="tableDef"
            @selection-change="handleSelectionChange"
            :data="data"
            v-loading="loading" 
            element-loading-text="加载中...">
            <slot></slot>
        </el-table>
        <div class="pagination-wrap" v-if='paginationShow'>
            <el-pagination
                @size-change='handleSizeChange'
                @current-change='handleCurrentChange'
                v-bind="paginationOpts">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts">
// export default TableView;
</script>


<style lang='less'>
    .component-table-view {
        .pagination-wrap {
            text-align: center;
            margin-top: 9px;
        }
        .el-table .cell,
        .el-table th > div {
            padding-right: 6px;
            padding-left: 6px;
        }
    }
</style>

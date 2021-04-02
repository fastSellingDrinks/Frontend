<template>
    <div>
        <Header/>
        <div class="title">
            饮品评分
        </div>
        <div class="title">
            套餐评分
        </div>
    </div>
</template>

<script>
    import Header from '../header/Header'
    export default {
        components:{
            Header
        }
    }
</script>

<style scoped>
    .title{
        font-size: large;
        margin-left: 30px;
        margin-top: 20px;
    }
</style>
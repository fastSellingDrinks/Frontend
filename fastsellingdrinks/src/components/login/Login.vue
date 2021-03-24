<template>
    <div>
        <Header/>
        <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        components:{

        },
        data(){ //定义数据
            return{
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            onSubmit(){
                console.log('succ');
            }
        }
    }
</script>

<style scoped>

</style>
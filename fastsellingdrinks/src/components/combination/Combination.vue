<template>
    <div>
        <Header/>
        <el-table
                v-loading="loading"
                :data="this.form"
                border
                style="width:100%">
            <el-table-column
                    prop="name"
                    label="名称"
                    width="220"
                >
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    import Header from '../header/Header'
    import {HOST} from '../../common/js/config'
    import axios from 'axios'
    export default {
        components:{
            Header
        },
        data(){
            return{
                form:{
                    name:'',
                    price:''
                },
                loading:false
            }
        },
        created(){
            this.getData()
        },
        methods:{
            getData(){
                this.loading=true;
                let url=`${HOST}/combination/rank`;
                axios.post(url,this.form).then((res)=>{
                    this.form = res.data;
                    console.log(this.form);
                    this.loading=false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
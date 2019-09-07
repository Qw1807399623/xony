<template>
    <div>
        <div v-if="user=='user'">
            <user-member></user-member>
        </div>
        <div v-else-if="user=='login'">
            <user-login></user-login>
        </div>
        <div v-else>
            <user-reg></user-reg>
        </div>
    </div>    
</template>
<script>
import member from './member'
import login from './login'
import reg from './reg'
export default {
    data () {
        return {
            uid:null,
            user:'',
        }
    },
    components: {
        'user-member':member,
        'user-login':login,
        'user-reg':reg,
    },
    methods: {
        getUid(){
            return this.user=sessionStorage.getItem('user_login')
        },
        login_user:function(login_user){
            this.user=login_user
        }
    },
    created(){
        this.getUid()
    },
}
</script>
<style scoped>

</style>


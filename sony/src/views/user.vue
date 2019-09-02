<template>
    <div>
        <div v-if="user">
            <user-member></user-member>
        </div>
        <div v-else="">
            <user-login></user-login>
        </div>
    </div>    
</template>
<script>
import member from './member'
import login from './login'
export default {
    data () {
        return {
            uid:null,
            user:false
        }
    },
    components: {
        'user-member':member,
        'user-login':login,
    }
}
</script>
<style scoped>

</style>


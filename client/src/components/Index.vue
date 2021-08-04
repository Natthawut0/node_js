<template>
  <div>
  <h1> Get All User</h1>
  <div v-if="users.length">
    <div><h4>จำนวนผู้ใช้งาน : {{users.length}}</h4></div>
    <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้</button></p>
    <div v-for="users in users" v-bind:key="users.id">
      <div>id : {{users.id }} </div>
      <div>ชื่อนามสกุล : {{users.name }} - {{users.lastname}}</div>
      <div>email : {{users.email}}</div>
      <div>password : {{users.password}}</div>
      <button v-on:click="navigateTo('/user/'+users.id)">ดูข้อมูลผู้ใช้</button>
      <button v-on:click="navigateTo('/user/edit/'+users.id)">แก้ไขข้อมูลผู้ใช้</button>
      <button v-on:click="deleteUser(user)">ลบข้อมูลผู้ใช้</button>
      <hr>
    </div>
  </div>
</div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  data(){
    return{
      users:[],
    };
  },
  async created(){
    try{
      this.users = (await UserService.index()).data
    }catch(error){
      console.log(error);
    }
  },
  methods:{
    navigateTo(route){
      this.$router.push(route)
    },
    async deleteUser(user){
      let result = confirm("want to delete")
      if (result){
        try{
          await UserService.delete(user)
        }catch(error){
          console.log(error)
        }
      }
    }
  },
};
</script>
<style scoped>

</style>

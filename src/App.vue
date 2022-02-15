<script setup>
  import {
    useRouter
  } from 'vue-router' //引入router
  import {
    useStore
  } from 'vuex' //引入vuex
  import { //引入生命周期函数
    onMounted
  } from 'vue';
  import { //引入定义的请求
    userLogin
  } from './api/index'
  const router = useRouter()
  const store = useStore()
  //发请求
  onMounted(() => {
    // userLogin({
    //   password: 'Pingan_123',
    //   umFlag: 1,
    //   username: 'admin'
    // }).then(res => {
    //   console.log(res);
    // }).catch(error => {
    //   console.log(error);
    // })
    ElMessage({
      message: 'element-plus按需引入成功',
      type: 'success',
    })
  })
  //路由跳转测试
  function toFoo() {
    router.push({
      path: '/foo'
    })
  }

  function toBar() {
    router.push({
      path: '/bar'
    })
  }
  //修改数据func测试
  function addState() {
    store.commit('add')
  }

  function minState() {
    store.commit('min')
  }
  //异步func测试
  function changeState() {
    store.dispatch('change', 99)
  }
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <button @click="toFoo">to foo</button>
  <button @click="toBar">to bar</button>
  <router-view></router-view>
  <div>
    <button @click="addState">add</button>
    <button @click="minState">min</button>
    <button @click="changeState">change</button>
  </div>
  <el-button type="primary">ele-test</el-button>
</template>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<template>
  <div>导航栏 |
    <router-link to="/">Chx</router-link> |
    <router-link to="/xxx">Chx2</router-link></div>
  <hr/>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

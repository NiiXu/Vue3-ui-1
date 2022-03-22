<template>

  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {provide, ref} from "vue";

export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible) // set
  }
}
</script>

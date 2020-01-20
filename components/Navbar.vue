<template>
<div class="flex fixed bg-gray-800 inset-x-0 top-0 left-0 border-b border-gray-600 h-16 py-2 z-50 items-center">
  <div class="max-w-screen-xl px-2 relative w-full">
    <div class="flex justify-between items-center">
      <h1 class="app-title">
        <nuxt-link to='/'>
        MOVIES
        </nuxt-link> 
      </h1>
      <!-- we hide search bar when in film details -->
      <Search v-if='this.$route.name === "index"' />
    </div>
  </div>
  
</div>
</template>

<script lang='ts'>
import Search from './Search.vue'
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components:{
    Search
  }
})
export default class NavBar extends Vue{
  
}

</script>

<style>
.app-title{
  font-family: 'Alata', sans-serif;
}
</style>
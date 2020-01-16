<template>
<div class="flex fixed bg-white inset-x-0 top-0 left-0 border-b border-gray-200 py-2 z-50">
  <div class="max-w-screen-xl px-2 relative w-full">
    <div class="flex justify-between items-center">
      <h1>MOVIES</h1>
      <Search />
    </div>
  </div>
  
</div>
</template>

<script>
import Search from './Search.vue'

export default {
  components: {
    Search
  }
}

</script>

<style>

</style>
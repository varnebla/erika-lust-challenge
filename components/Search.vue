<template>
  <div class="flex justify-center">
    <input type="text" class="focus:outline-none border-solid border-1 border-gray-500 bg-gray-200 rounded-lg p-2 placeholder-gray-400 text-gray-600" placeholder="Search" @keyup.enter="searchFilms">
    
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

export default class Search extends Vue {    
  searchFilms (event: any) {
    event.target.value.length > 0 &&
    this.$store.dispatch('searchFilms', event.target.value); 
    event.target.value= '';         
}
}
</script>

<style>

</style>
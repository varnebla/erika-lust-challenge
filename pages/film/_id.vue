<template>
  <div class="container mt-20">
    <h2>hello there {{film.title}}</h2>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component({
   async fetch({app:{$accessor}, route}) {
    await $accessor.getFilmDetails(route.params.id);
  }
})
export default class Film extends Vue{
  get film() {
    console.log(this.$accessor.filmDetails,'getting sth');
    return this.$accessor.filmDetails;
  }
}
</script>

<style>

</style>
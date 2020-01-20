<template>
  <div class="container mx-auto pt-24">    
    <div class="flex justify-center flex-wrap">
      <card v-for="film in films" v-bind:key="film.id" :info="film"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Card from '../components/Card.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component(
  {
    async fetch({ app: { $accessor } }) {
      await $accessor.fetchFilms();
    },
    components:{
      Card
    }
  }
)
export default class Index extends Vue {
  get films() {
    return this.$accessor.films;
  }
}

</script>

<style>

</style>

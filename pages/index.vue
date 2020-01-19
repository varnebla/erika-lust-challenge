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
// export default {
  
//   async fetch ({app: {$accessor} }) {
//     console.log('initialising')
//     await $accessor.fetchFilms();
//     //await store.dispatch('fetchFilms');
//     //console.log(this.$store.state.films)
//     },
//   computed: {
//     films () {
//       console.log(this.$store.state.films, 'FILMS')
//       console.log(this.$accessor.films, 'FILMS')
//       //return this.$store.state.films
//     }
//   }
  
// }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

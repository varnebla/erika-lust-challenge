<template>
  <div class="movie_card max-w-sm rounded overflow-hidden shadow m-2 max-w-sm ">
          <img class="w-full" :src="film.backdropPath || '/img_not_available.jpg'" alt="">
          <div class="card_body">
            <span class="">{{film.title}}</span>
            <h2 class="score"></h2>
          </div>
        </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator"


@Component({})
export default class Card extends Vue {
  
  @Prop({ type: Object, required: true })
  film: any

  
}
</script>

<style>
</style>
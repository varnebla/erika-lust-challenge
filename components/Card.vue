<template>
  <div class="movie-card rounded cursor-pointer overflow-hidden shadow m-2">
    <div class="card-header relative" v-bind:style="{backgroundImage: 'url('+imgUrl+')'}">
    <!-- <img class="w-full" :src="imgUrl" alt=""> -->
    <div class="card-info absolute bottom-0 left-0 inset-x-0 flex flex-col">
      <h3 class="text-white font-bold p-2 w-full">{{film.title}}</h3>
      <h2 class="text-white font bold p-2 w-full">{{film.voteAverage}}</h2>
    </div>
    </div>
    
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator"


@Component({

})
export default class Card extends Vue {
  
  @Prop({ type: Object, required: true })
  film: any
  
  imgUrl: string = this.film.posterPath || '/img_not_available.jpg';
}
</script>

<style>
.movie-card{
  width: 200px;
  transition: 0.3s;
}
.card-header{
  /* max-width:200px; */
  max-width:100%;
  height:300px;
  background-repeat: round;
  background-size: 100%;
  transition: 0.3s;
}
.movie-card:hover{
  box-shadow: 2px 2px 10px;
  transform: scale(1.05,1.05); 
}
.card-info{
  opacity:0;
  background-color:rgba(0,0,0,0.7);
  transition: opacity 1s;
}
.movie-card:hover .card-info{
  opacity:1;
}
</style>
<template>
  <div class="card-header relative" v-bind:style="{backgroundImage: 'url('+imgUrl+')'}">
    <div class="card-info absolute bottom-0 left-0 inset-x-0 flex flex-col">
      <h3 class="font-bold p-2 w-full">{{info.title}}</h3>
      <h2 class="p-2 w-full">{{info.subtitle}}</h2>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Vue,Prop} from 'vue-property-decorator';

@Component({})

export default class CardInfo extends Vue {
  
  @Prop({type: Object, required:true})
  info:any;
  imgUrl: string = this.info.poster || '/img_not_available.jpg';
}
</script>

<style>
.card-header{
  /* max-width:200px; */
  max-width:100%;
  height:300px;
  background-repeat: round;
  background-size: 100%;
  transition: 0.3s;
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

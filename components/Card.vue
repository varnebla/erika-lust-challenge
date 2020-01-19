<template>
  <div class="movie-card rounded cursor-pointer overflow-hidden shadow m-2">
    <n-link v-if='info.type==="movie"' :to="`/film/${info.id}`">
      <card-info :info='info'/>
    </n-link>
    <card-info v-else :info='info'/>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator"
import CardInfo from './CardInfo.vue';

@Component({
  components: {
    CardInfo
  }
})
export default class Card extends Vue {
  
  @Prop({ type: Object, required: true })
  info: any;  
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
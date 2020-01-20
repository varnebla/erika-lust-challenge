<template>
  <div class="movie-card rounded cursor-pointer overflow-hidden shadow m-2">
    <!-- if it is a movie, it has a link, otherwise there is no link -->
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
.movie-card:hover{
  box-shadow: 2px 2px 10px;
  transform: scale(1.05,1.05); 
}

</style>
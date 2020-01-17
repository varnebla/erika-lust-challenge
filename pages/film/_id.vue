<template>
<div>
  <div class="backdrop mt-12 h-64" v-bind:style="{backgroundImage: 'url('+backdropUrl+')'}"/>
  <div class="container mx-auto flex">
    <div class="header flex">
      <card :film='film' class="poster flex-none"/>
      <div class="main_info p-6">
        <h1 class=".text-3xl mb-2">{{film.title}} ({{year}})</h1>
        <div class="rating flex">
          <h3 class="mb-2 mr-2">{{film.voteAverage}}</h3>
          <star/>
        </div>
        <span>{{film.overview}}</span>
      </div>
    </div>
    <div class="body">
      
    </div>
  </div>

</div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import Card from '~/components/Card.vue';
import star from '~/static/svg/icon-star.svg'
@Component({
   async fetch({app:{$accessor}, route}) {
    await $accessor.getFilmDetails(route.params.id);
  },
  components:{
    Card,
    star
  }
})
export default class Film extends Vue{

  backdropUrl: string = this.$accessor.filmDetails.backdropPath || '/img_not_available.jpg'
  date: string = this.$accessor.filmDetails.date;
  year: string = this.date.substring(0,this.date.indexOf('-'));

  get film() {
    return this.$accessor.filmDetails;
  }
}
</script>

<style>
.backdrop{
  background-size:100%;
  background-repeat: no-repeat;
}
.poster{
  margin-top: -8rem;
  pointer-events: none;
}
</style>
<template>
  <div>
    <div class="backdrop mt-12 h-64" v-bind:style="{backgroundImage: 'url('+backdropUrl+')'}"/>
    <div class="container mx-auto pb-24 flex flex-col">
      <div class="header flex">
        <div class="movie-card poster rounded flex-none overflow-hidden shadow m-2">
          <div class="card-header relative" v-bind:style="{backgroundImage: 'url('+film.posterPath+')'}">
          </div>
        </div>        
        <div class="p-6">
          <h1 class="mb-2">{{film.title}} ({{year}})</h1>
          <div class="rating flex">
            <h3 class="mb-2 mr-2">{{film.voteAverage}}</h3>
            <star/>
          </div>
          <span>{{film.filmDetails.overview}}</span>
        </div>
      </div>
      <div class="body mt-4">
        <h1>Actors</h1>
        <div class="actors mb-4">
          <div class="flex overflow-x-auto overflow-y-hidden">
            <card class="flex-none" v-for='actor in film.filmDetails.actors' v-bind:key='actor.id' :info='actor'/>
          </div>
        </div>
        <h1>Similar movies</h1>
        <div class="similar">
          <div class="flex overflow-x-auto overflow-y-hidden">
            <card class="flex-none" v-for='relatedFilm in film.filmDetails.relatedFilms' v-bind:key='relatedFilm.id' :info='relatedFilm'/>
          </div>
        </div>
        
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

  backdropUrl: string = this.$accessor.filmDetails.filmDetails.backdropPath || '/img_not_available.jpg'
  date: string = this.$accessor.filmDetails.filmDetails.date;
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
  height:300px;
}
</style>
//import {Module, VuexModule, Action, Mutation} from 'vuex-module-decorators'
//import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { Film, ProfileState, Actor } from '~/types.ts'
import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';

const baseUrl : string = 'https://api.themoviedb.org/3/';
const apiKey : string = '2592933c3ddb2943689179a5a80df403';
const imgUrl: string = 'https://image.tmdb.org/t/p/';



//state
export const state: ProfileState = {
  films: [] as Film[],
  filmDetails: {} as Film
};


//mutations
export const mutations= mutationTree(state,{
  getAllFilms: (state, newState) => {
    return state.films = newState.map((el:any)=>{
      const result: Film = {
        id: el.id,
        title: el.title,
        video: el.video,
        posterPath: el.poster_path ?  imgUrl + 'w500/' + el.poster_path : el.poster_path,
        backdropPath: el.backdrop_path ?  imgUrl + 'w500/' + el.backdrop_path : el.backdrop_path,
        voteAverage: el.vote_average,
        overview: el.overview,
        genres: [],
        actors: [],
        date: el.release_date
      }
      return result;
    })
  },
  getFilm: (state, newState) => {
    
    const film = newState.film;
    const credits:any = newState.credits;
    state.filmDetails = {
      id: film.id,
      title: film.title,
      video: film.video,
      posterPath: film.poster_path ?  imgUrl + 'w500/' + film.poster_path : film.poster_path,
      backdropPath: film.backdrop_path ?  imgUrl + 'original/' + film.backdrop_path : film.backdrop_path,
      voteAverage: film.vote_average,
      overview: film.overview,
      genres: film.genres.map((el:any)=> el.name),
      actors: credits.cast.map((el:any)=>{
        const result: Actor = {
          id: el.id,
          name: el.name,
          character: el.character,
          poster: imgUrl + 'w500/' + el.profile_path
        };
        return result;
      }).slice(0,5),//We only want 5 actors
      date: film.release_date
    };
    return state;
  }  
});


//actions
export const actions = actionTree({state, mutations},{
  fetchFilms: async({commit}) => {
    const url: string = `${baseUrl}movie/popular?api_key=${apiKey}&region=ES`;
    const result = await axios.get(url);
    commit('getAllFilms', result.data.results); 
  },
  searchFilms: async({commit}, name) => {
    const url: string = `${baseUrl}search/movie?api_key=${apiKey}&query=${name}`;
    const result = await axios.get(url);
    commit('getAllFilms', result.data.results);
  },
  getFilmDetails: async({commit}, id) =>{
    const urlFilm: string = `${baseUrl}movie/${id}?api_key=${apiKey}`;
    const urlCast: string = `${baseUrl}movie/${id}/credits?api_key=${apiKey}`;
    const film = await axios.get(urlFilm);
    const credits = await axios.get(urlCast);
    const filmDetails = {film: film.data, credits: credits.data}
    commit('getFilm', filmDetails);
  }
});

export const accessorType = getAccessorType({
  state,
  mutations,
  actions,
  modules: {

  },
})
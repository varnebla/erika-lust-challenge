//import {Module, VuexModule, Action, Mutation} from 'vuex-module-decorators'
//import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { Film, ProfileState } from '~/types.ts'
import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';

const baseUrl : string = 'https://api.themoviedb.org/3/';
const apiKey : string = '2592933c3ddb2943689179a5a80df403';
const imgUrl: string = 'https://image.tmdb.org/t/p/w300';



//state
export const state: ProfileState = {
  films: [] as Film[] 
};


//mutations
export const mutations= mutationTree(state,{
  getAllFilms: (state, newState) => {
    return state.films = newState.map((el:any)=>{
      const result: Film = {
        id: el.id,
        title: el.original_title,
        video: el.video,
        posterPath: el.poster_path ?  imgUrl + el.poster_path : el.poster_path,
        backdropPath: el.backdrop_path ?  imgUrl + el.backdrop_path : el.backdrop_path,
        voteAverage: el.vote_average,
        overview: el.overview
      }
      return result;
    })
  }    
});


//actions
export const actions = actionTree({state, mutations},{
  fetchFilms: async({commit}) => {
    const url: string = `${baseUrl}discover/movie?api_key=${apiKey}`;
    const result = await axios.get(url);
    commit('getAllFilms', result.data.results); 
  },
  searchFilms: async({commit}, name) => {
    const url: string = `${baseUrl}search/movie?api_key=${apiKey}&query=${name}`;
    const result = await axios.get(url);
    commit('getAllFilms', result.data.results);
  }
});

export const accessorType = getAccessorType({
  state,
  mutations,
  actions,
  modules: {

  },
})
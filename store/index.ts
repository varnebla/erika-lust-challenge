import axios from 'axios';
import { Film, ProfileState, CardInfo } from '~/types.ts';
import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';

const baseUrl: string | undefined = process.env.baseUrl;
const apiKey: string | undefined = process.env.apiKey;
const imgUrl: string | undefined = process.env.imageUrl;
const videoUrl: string | undefined = process.env.videoUrl;

// state
export const state: ProfileState = {
  films: [] as CardInfo[],
  filmDetails: {} as Film
};

// mutations
export const mutations = mutationTree(state, {
  getAllFilms: (prevState, newState) => {
    return (prevState.films = newState.map((el: any) => {
      const result: CardInfo = {
        id: el.id,
        type: 'movie',
        title: el.title,
        subtitle: el.vote_average,
        poster: el.poster_path
          ? imgUrl + 'w500/' + el.poster_path
          : el.poster_path
      };
      return result;
    }));
  },
  getFilm: (prevState, newState) => {
    const film: any = newState.film;
    const video: any = newState.video;
    const credits: any = newState.credits;
    const similarMovies: any = newState.similarMovies;
    prevState.filmDetails = {
      id: film.id,
      title: film.title,
      posterPath: film.poster_path
        ? imgUrl + 'w500/' + film.poster_path
        : film.poster_path,
      voteAverage: film.vote_average,
      filmDetails: {
        video: videoUrl + video.results[0].key,
        backdropPath: film.backdrop_path
          ? imgUrl + 'original/' + film.backdrop_path
          : film.backdrop_path,
        overview: film.overview,
        genres: film.genres.map((el: any) => el.name),
        actors: credits.cast
          .map((el: any) => {
            const result: CardInfo = {
              id: el.id,
              type: 'actor',
              title: el.name,
              subtitle: el.character,
              poster: el.profile_path
                ? imgUrl + 'w500/' + el.profile_path
                : el.profile_path
            };
            return result;
          })
          .slice(0, 10), // We only want 5 actors
        date: film.release_date,
        relatedFilms: similarMovies.results.map((el: any) => {
          const result: CardInfo = {
            id: el.id,
            type: 'movie',
            title: el.title,
            subtitle: el.vote_average,
            poster: el.poster_path
              ? imgUrl + 'w500/' + el.poster_path
              : el.poster_path
          };
          return result;
        })
      }
    };
    return state;
  }
});

// actions
export const actions = actionTree(
  { state, mutations },
  {
    fetchFilms: async ({ commit }) => {
      const url: string = `${baseUrl}movie/popular?api_key=${apiKey}&region=ES`;

      const result = await axios.get(url);

      commit('getAllFilms', result.data.results);
    },
    searchFilms: async ({ commit }, name) => {
      const url: string = `${baseUrl}search/movie?api_key=${apiKey}&query=${name}`;

      const result = await axios.get(url);

      commit('getAllFilms', result.data.results);
    },
    getFilmDetails: async ({ commit }, id) => {
      // we need the film, casting of the film, video and related films
      const urlFilm: string = `${baseUrl}movie/${id}?api_key=${apiKey}`;
      const urlVideo: string = `${baseUrl}movie/${id}/videos?api_key=${apiKey}`;
      const urlCast: string = `${baseUrl}movie/${id}/credits?api_key=${apiKey}`;
      const urlRelated: string = `${baseUrl}movie/${id}/similar?api_key=${apiKey}`;

      const film = await axios.get(urlFilm);
      const video = await axios.get(urlVideo);
      const credits = await axios.get(urlCast);
      const similarMovies = await axios.get(urlRelated);

      const filmDetails = {
        film: film.data,
        video: video.data,
        credits: credits.data,
        similarMovies: similarMovies.data
      };
      commit('getFilm', filmDetails);
    }
  }
);

export const accessorType = getAccessorType({
  state,
  mutations,
  actions
});

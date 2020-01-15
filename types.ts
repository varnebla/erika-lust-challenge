//import {GetterTree, MutationTree, ActionTree} from 'vuex';

export interface ProfileState {
  films: Film[]
}

export interface Film {
  id: number,
  title: string,
  video: boolean,
  posterPath: string,
  backdropPath: string,
  voteAverage: number,
  overview: string
}

// export type Getters = GetterTree<ProfileState, any>
// export type Mutations = MutationTree<ProfileState>
// export type Actions = ActionTree<ProfileState, any> 
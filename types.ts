export interface ProfileState {
  films: CardInfo[];
  filmDetails: Film;
}

export interface Film {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
  filmDetails: FilmDetails;
}

export interface FilmDetails {
  video: boolean;
  backdropPath: string;
  overview: string;
  genres: string[];
  actors: Actor[];
  date: string;
  relatedFilms: Film[];
}

export interface Actor {
  id: number;
  name: string;
  character: string;
  poster: string;
}

export interface CardInfo {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  poster: string;
}

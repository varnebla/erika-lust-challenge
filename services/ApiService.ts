const baseUrl : string = 'https://api.themoviedb.org/3/'
const apiKey : string = '2592933c3ddb2943689179a5a80df403'

export function getAllMovies () {
  const url: string = `${baseUrl}discover/movie?api_key=${apiKey}`;
  return fetch(url)
    .then(res=> res.json())
    .catch(error=>console.error(error));
  }
  
  export function searchMovies (name: string) {
    const url: string = `${baseUrl}search/movie?api_key=${apiKey}&${name}`;
    return fetch(url)
      .then(res=> res.json())
      .catch(error=>console.error(error));
    }
    
    export function getMovie (id: number) {
      const url : string = `${baseUrl}movie/${id}?api_key=${apiKey}`;
      return fetch(url)
        .then(res=> res.json())
        .catch(error=>console.error(error));
}
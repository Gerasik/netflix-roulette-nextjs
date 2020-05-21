import * as Models from 'models';

export async function getFilmData(id): Promise<void> {
  const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
  const responseData = await response.json();
  const data = await responseData;
  return data;
}

export function fetchData(url: string): Promise<Models.MoviesResponse> {
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

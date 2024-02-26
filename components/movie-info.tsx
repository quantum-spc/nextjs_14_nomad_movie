import { Suspense } from 'react';
import { API_URL } from '../app/constants';
import potato from '../styles/movie-info.module.css';
import MovieCredits from './movie-credits';

export async function getMovie(id: string) {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>★ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Suspense fallback={<h1>Loading movie credits</h1>}>
          <MovieCredits id={id} />
        </Suspense>
        <div>
          <a
            href={movie.homepage}
            target={'_blank'}
            className={potato.homepage_link}
          >
            HomePage &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

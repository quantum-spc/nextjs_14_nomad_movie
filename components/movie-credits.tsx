import { API_URL } from '../app/constants';
import styles from '../styles/movie-credits.module.css';

export async function getMovieCredits(id: string) {
  return await (await fetch(`${API_URL}/${id}/credits`)).json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const movieCredits = await getMovieCredits(id);
  return (
    <span>
      <span>Actor :</span>
      <span className={styles.credits}>
        {movieCredits.map((credit, index) => (
          <span key={credit.id}>
            {index === 0 ? '' : ', '}
            {credit.name}
          </span>
        ))}
      </span>
    </span>
  );
}

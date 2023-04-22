import {useState, useEffect} from 'react';
import { Credits, movieDetails, Cast } from '../interfaces/movieDetailInterface';
import movieDb from '../api/movieDbApi';


interface MovieDetail {
  isLoading: boolean;
  movieFullDetail?: movieDetails;
  cast: Cast[]
}

export const useMovieDetail = (movieId: number) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>({
    isLoading: true,
    movieFullDetail: undefined,
    cast: [],
  });

  useEffect(() => {
    getMovieDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getMovieDetail = async () => {
    try {
      const movieDetailApi =  movieDb.get<movieDetails>(`${movieId}`);
      const movieCredits =  movieDb.get<Credits>(`${movieId}/credits`);
      const [movieDetailResponse, creditPromiseResponse] = await Promise.all([movieDetailApi, movieCredits]);
      setMovieDetail({
        isLoading: false,
        movieFullDetail: movieDetailResponse.data,
        cast: creditPromiseResponse.data.cast,
      });
    } catch (error) {

    }
  };

  return {
    ...movieDetail,
  };
};

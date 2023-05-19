import { useContext } from 'react';
import { AppContext } from '../App';
import MovieCard from './MovieCard';

export default function CardGenerator(){
    const{movieList} = useContext(AppContext);
    return(
        <div className='container'>
            {movieList.map((movieName,index) => 
            <div>
                <MovieCard image = {`https://image.tmdb.org/t/p/w500/${movieName.poster_path}`} name = {movieName.title} description = {movieName.overview} rating = {movieName.vote_average} voters = {movieName.vote_count} date = {movieName.release_date} />
            </div>
            )
            }
        </div>
    )
}
import { useContext } from 'react';
import { AppContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

export default function LoadMore(){
    const{setMovieList, page, setPage, id, code, currMovie} = useContext(AppContext)
    const updateClickHandler = (e) =>{
        setPage(page+1);
        console.log(page);
        console.log(id);
        const fetch = require('node-fetch');
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&with_original_language=${code}&language=en-US&page=${page+1}&sort_by=popularity.desc&with_genres=${id}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OThjZTFhNmZmMWJhMmU3NWI2NjIzYzgzNWRkMTU4OSIsInN1YiI6IjY0NjViZTQ1YTUwNDZlMDE0NzRiOGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utcr_isv1T9qfxJ-MLYubRPnM02hMfRDLgf-DHF89bg'
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovieList((movieList) => movieList.concat([ ...json.results])))
            .catch(err => console.error('error:' + err));    
    }
    return(
        <div id = "submit-wrapper">
            <Button type='submit' onClick={e => updateClickHandler(e)}>Load more</Button>
        </div>
    )
}
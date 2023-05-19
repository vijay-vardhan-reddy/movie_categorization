import 'bootstrap/dist/css/bootstrap.min.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useContext } from 'react';
import { AppContext } from '../App';
import Genre from '../GenreAndId';



export default function GenreSelector(props){
    const{movieList, setMovieList, page, setPage, id, setId, code, currMovie, setCurrMovie} = useContext(AppContext)
        const handleOptionChange = (e) => {
            setCurrMovie(e);
            setId(Genre[e]);
            console.log(currMovie);
            console.log(id);
        }
    
    return(
        <div>
            <Typeahead
            id="selections-example"
            labelKey="name"
            options={props.list}
            onChange={(e)=>{handleOptionChange(e)}}
            placeholder="Genre"
            />
        </div>
    );
};
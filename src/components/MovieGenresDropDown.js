
import { useState } from 'react';
import Genre from '../GenreAndId'
const MovieDropDrowm=()=>{

    const list=[
        "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western"
    ];

    const [id,setId]=useState(0);

  

    const handleOptionChange=(e)=>{
    setId(Genre[e.target.value]);
    }
    
    return(
        <div>
        <select value={Genre[id]} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
      {list.map((item,index)=>(
        <option key={index} value={item}>{item}</option>
      ))}
      </select>

      <p>the id is {id}</p>
        
      </div>
    )
}
export default MovieDropDrowm;
import Card from 'react-bootstrap/Card';

import './Moviecard.css'
const MovieCard=(props)=>{
    return(
        <Card className = 'movie-card'>
        <Card.Img variant='top' src={props.image} style={{width:'17rem',height:'20rem',marginTop:'5px'}}/>
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer className='card-footer'>Rating: {props.rating} (Voted by {props.voters})</Card.Footer>
        </Card>
    )

}

export default MovieCard;
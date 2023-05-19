
import Card from 'react-bootstrap/Card';
const MovieCard=(props)=>{
    return(
        <Card style={{width:'18rem',backgroundColor:"#e8b80e",  display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '18rem'}}>
        <Card.Img variant='top' src={props.image} style={{width:'10rem',height:'10rem',marginTop:'5px'}}/>
        <Card.Body>
        <Card.Title>Movie Name: {props.name}</Card.Title>
        <Card.Text>About Movie: {props.Description}</Card.Text>
        </Card.Body>
        
        </Card>
    )

}

export default MovieCard;
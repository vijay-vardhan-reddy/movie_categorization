import { useContext } from 'react';
import { AppContext } from '../App';
import GenreSelector from './GenreSelector';
import LanguageSelector from './LanguageSelector';
import Submit from './Submit';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LoadMore from './LoadMore';
import Themebtn from './Themebtn';

export default function Topbar(props){
    const {id,currMovie} = useContext(AppContext)
    return(
    <Navbar style={{backgroundColor:"#494F55", 'margin-bottom' : '10px'}} sticky='top'>
        <Navbar.Brand style={{color: 'white', fontSize: "20px", paddingLeft: "15px"}}>We suggest GOOOOD movies!!</Navbar.Brand>
    <Container>
        <GenreSelector movieId = {id} currMovie = {currMovie} list = {props.list} />
        <LanguageSelector />
        <Submit />
        <LoadMore />
        <Themebtn />
    </Container>
    </Navbar>
    )
}

import { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import CardGenerator from './components/CardGenerator';
import './App.css'

export const AppContext = createContext();

function App(){
  const list=["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
  const [movieList,setMovieList] = useState([]);
  const [currMovie,setCurrMovie] = useState('');
  const [id,setId] = useState(0);
  const [page,setPage] = useState(1);
  const [lang,setLang]=useState('English');
  const [code,setCode]=useState('en');
  const [theme,setTheme] = useState(true);

  return(
    <div style={{'background-color': theme ? 'white' : 'black', 'min-height': '100vh', 'height' : 'auto'}}>
      <AppContext.Provider value = {{movieList, setMovieList, page, setPage, id, setId, code, setCode, currMovie, setCurrMovie, lang, setLang, theme, setTheme}}>
          <Topbar list = {list} />
          <CardGenerator />
        </AppContext.Provider>
    </div>
  );
};

export default App;
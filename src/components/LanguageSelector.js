import { useContext } from 'react';
import { AppContext } from '../App';
import { Typeahead } from 'react-bootstrap-typeahead';
import languageList from '../LanguageList';
import Language from '../LanguageAndCode';
import './Languageselector.css'

export default function LanguageSelector(props){
    const{lang, setLang, code, setCode} = useContext(AppContext)
    const langSelect=(e)=>{
        setLang(e);
        setCode(Language[e]);
        console.log(lang);
        console.log(code);
    }

    return(
        <Typeahead
            id="selections-example"
            labelKey="name"
            options={languageList}
            onChange={(e)=>{langSelect(e)}}
            placeholder="Language"
        />
    );
}
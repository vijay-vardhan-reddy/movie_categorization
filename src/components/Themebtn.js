import { useContext } from "react";
import { AppContext } from "../App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";

export default function Themebtn(){
    const {theme, setTheme} = useContext(AppContext);
    const themeHandler = (e) => {
        setTheme(theme => !theme)
    }
    return(
        <Button onClick = {e => themeHandler(e)}>Change Theme</Button>
    )
}
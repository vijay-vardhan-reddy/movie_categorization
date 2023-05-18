import './App.css';
import MovieDropDrowm from "./components/MovieGenresDropDown";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <div className="App">
    <MovieDropDrowm></MovieDropDrowm>

    <MovieCard className="Movie-Card" name="Vardhan" Description="very good boy" image="https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg?cs=srgb&dl=pexels-george-desipris-2055100.jpg&fm=jpg"></MovieCard>
    </div>
  );
}

export default App;

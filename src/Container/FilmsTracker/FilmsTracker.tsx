import {useState} from 'react';
import FilmItem from '../../Components/FilmItem/FilmItem';

const FilmsTracker = () => {

  const [films, setFilms] = useState([ 
    {name: 'Focus', id: 1},
    {name: 'Spider man', id: 2},
    {name: 'Bad boys', id: 3},
  ]);

  return (
    <>
      {films.map(anyFilm =>(
        <FilmItem key={anyFilm.id} film={anyFilm}/>
      ))}
    </>
  );
};



export default FilmsTracker;
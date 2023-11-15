import React, {useEffect, useState} from 'react';
import FilmItem from '../../Components/FilmItem/FilmItem';

const FilmsTracker = () => {

  const [films, setFilms] = useState([ 
    {name: 'Focus', id: 1},
    {name: 'Spider man', id: 2},
    {name: 'Bad boys', id: 3},
  ]);

  useEffect(() => {
    console.log(films)
  }, [films]);

  const deleteFilmItem = (id: number) => {
    setFilms(films.filter(filmObject=> filmObject.id !== id));
  };
  
  const changeFilmName = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setFilms(films.map(filmObject => {
      if (id === filmObject.id) {
        return {
          ...filmObject,
          name: e.target.value
        };
      }
      return filmObject;
    }));
  };

  return (
    <>
      {films.map(anyFilm =>(
        <FilmItem key={anyFilm.id} film={anyFilm} deleteFilmItem={deleteFilmItem} changeFilmName={changeFilmName}/>
      ))}
    </>
  );
};



export default FilmsTracker;
import React, {useEffect, useState} from 'react';
import FilmItem from '../../Components/FilmItem/FilmItem';
import AddFilmForm from '../../Components/AddFilmForm/AddFilmForm';
import {Film} from '../../types';

const FilmsTracker = () => {

  const [films, setFilms] = useState([ 
    {name: 'Focus', id: 1},
    {name: 'Spider man', id: 2},
    {name: 'Bad boys', id: 3},
  ]);

  useEffect(() => {
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
  
  const onAddFilm = (film: Film) => {
    setFilms([...films, film]);
  };

  return (
    <>
      <AddFilmForm onAddFilm={onAddFilm}/>
      {films.map(anyFilm =>(
        <FilmItem key={anyFilm.id} film={anyFilm} deleteFilmItem={deleteFilmItem} changeFilmName={changeFilmName}/>
      ))}
    </>
  );
};



export default FilmsTracker;
import React from 'react';
import {Film} from '../../types';

export interface FilmItemProps {
  film: Film;
  deleteFilmItem: (id: number) => void;
  changeFilmName: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}


const FilmItem: React.FC<FilmItemProps> = React.memo(function FilmItemTest({film, deleteFilmItem, changeFilmName}) {
  return (
    <div>
      <input type="text" value={film.name} onChange={e => changeFilmName(film.id, e)}/>
      <button type="button" onClick={() => deleteFilmItem(film.id)}>X</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.film.name !== nextProps.film.name && prevProps.film.id !== nextProps.film.id;
});
export default FilmItem;
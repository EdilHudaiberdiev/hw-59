import React from 'react';
import {Film} from '../../types';

export interface FilmItemProps {
  film: Film;
}

const FilmItem: React.FC<FilmItemProps> = React.memo(function FilmItem({film}) {
  return (
    <div>
      <input type="text" value={film.name}/>
      <button type="button">X</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.film.name === nextProps.film.name;
});
export default FilmItem;
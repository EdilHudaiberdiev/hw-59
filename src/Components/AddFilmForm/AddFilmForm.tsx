import React, {useState} from 'react';
import {Film} from '../../types';

interface Props {
  onAddFilm: (film: Film) => void;
}
const AddFilmForm:React.FC<Props> = ({onAddFilm}) => {
  const [inputValue, setInputValue] = useState('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim().length > 0) {
      onAddFilm({
        name: inputValue,
        id: Math.random(),
      });
      setInputValue('');
    } else (
      alert('поде не может быть пустым')
    );
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <button type="submit">+</button>
    </form>
  );
};

export default AddFilmForm;
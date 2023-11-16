import {useEffect, useState} from 'react';
import JokeItem from '../../Components/JokeItem/JokeItem';

const url = 'https://api.chucknorris.io/jokes/random';

const JokeTracker = () => {

    const [jokes, setJokes] = useState<string>('');

  const fetchData = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const jokes = await response.json();
      if ('value' in jokes && typeof jokes.value === "string") {
        setJokes(jokes.value);}
    }
  };

  useEffect(() => {
    if (jokes === '') {
      void fetchData();
    }
  }, [jokes]);

    return (
      <>
        <JokeItem jokes={jokes}/>
        <button type="button" onClick={fetchData}>Get new joke</button>
      </>
    );
  };

export default JokeTracker;
import {useEffect, useState} from 'react';
import {Jokes} from '../../types';


const url = 'https://api.chucknorris.io/jokes/random';
const JokeTracker = () => {


    const [jokes, setJokes] = useState<string>('');


  useEffect(() => {
    console.log(jokes)
  }, [jokes]);

    useEffect(() => {
      const fetchData = async () => {

        const response = await fetch(url);

        if (response.ok) {

          const jokes = await response.json();
          console.log(jokes);

          if ('value' in jokes && typeof jokes.value === "string") {
            setJokes(jokes.value);}

        }
      };
      void fetchData();
    }, []);



    return (
      <>
        <p>{jokes}</p>

      </>
    );
  };

export default JokeTracker;
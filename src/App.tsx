import './App.css';
import FilmsTracker from './Container/FilmsTracker/FilmsTracker';
import JokeTracker from './Container/JokeTracker/JokeTracker';
import {useState} from 'react';

const App = () => {
  const [page, setPage] = useState<number>(1);


  return (
    <>
      {page === 1?
        <>
          <h1>Film Tracker</h1>
          <FilmsTracker/>
        <button onClick={() => setPage(2)}>Go to ex.2</button>
        </>
        :
        <>
          <h1>Get joke</h1>
          <JokeTracker/>
          <button onClick={() => setPage(1)}>Go to ex.1</button>
        </>}
    </>
  );
};




export default App;

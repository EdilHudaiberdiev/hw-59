import React from 'react';

interface Props {
  jokes: string;
}

const JokeItem:React.FC<Props> = ({jokes}) => {
  return (
    <>
      <p>{jokes}</p>
    </>
  );
};

export default JokeItem;
import React from 'react';

function Card({name , email , id}) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow5' >
      <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <p></p>
      </div>
    </div>
  );
}

export default Card;

import React from 'react';
import './index.css';

const Person = ({img, name, job}) => {
  const url = (`https://randomuser.me/api/portraits/men/${img}.jpg`)

  return (
    <div>
      <img src={url} alt="Person-1" />
      <h5>{name}</h5>
      <h4>{job}</h4>
    </div>
  );
}


function PersonCard() {
  return (
    <div className="App">
      <Person img="45" name="John" job="developer"/>
      <Person img="55" name="Mel" job="Frontend"/>
      <Person img="70" name="Jax" job="Fullstack"/>
      
    </div>
  );
}

export default PersonCard;

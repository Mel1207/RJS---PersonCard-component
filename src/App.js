import React from 'react';
import './index.css';

const Person = ({img, name, job, children}) => {
  // const url = (`https://randomuser.me/api/portraits/men/${img}.jpg`)
  const url = (`https://picsum.photos/200/300?random=${img}`)


  return (
    <div className="card">
      <img src={url} alt={`Person ${name}`} className="card-avatar"/>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{job}</h5>
        {children}
      </div>
    </div>
  );
}


function PersonCard() {
  return (
    <div className="App">
      <section>
        <Person img="15" name="John Orton" job="Backend developer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
        <Person img="75" name="Mel Dimitry" job="Frontend developer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
        <Person img="50" name="Jack Nolan" job="Fullstack developer">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
      </section>
    </div>
  );
}

export default PersonCard;

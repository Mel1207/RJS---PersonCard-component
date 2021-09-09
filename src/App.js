import React from 'react';
import './index.css';

const Button = () => {
  const btnStyle = {
    background: '#2C9FD0',
    color: '#fff',
    outline: 'none',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    width: '100%',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '600'
  }

  return (
    <button style={btnStyle}>Contact</button>
  );
}

const Person = ({img, name, children, job, set}) => {
  // const url = (`https://randomuser.me/api/portraits/men/${img}.jpg`)
  const url = (`https://picsum.photos/300/200?random=${img}`)

  return (
    <div className="card" id={set}>
      <img src={url} alt={`Person ${name}`} className="card-avatar"/>
      <div className="card-body">
        <h3>{name}</h3>
        <h5>{job}</h5>
        {children}
        <Button />
      </div>
    </div>
  );
}

function PersonCard() {
  return (
    <div className="App">
      <section>
        <Person img="15" name="John Orton" job="Backend developer" set="set-1">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
        <Person img="75" name="Mel Dimitry" job="Frontend developer" set="set-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
        <Person img="50" name="Jack Nolan" job="Fullstack developer" set="set-3">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officia excepturi at autem minus quas atque officiis maxime quidem ad.</p>
        </Person>
      </section>
    </div>
  );
}

export default PersonCard;

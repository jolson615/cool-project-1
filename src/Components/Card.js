import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button onClick={()=>{props.handleClick(props.title)}}>Pick me!</button>
    </div>
  )
}

export default Card;
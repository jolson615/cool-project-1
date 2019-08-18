import React from 'react';
import './App.css';
import Card from './Components/Card.js';

const App = () => {
  const component = new React.Component();
  component.state = {
    currentPokemon: null
  }
  
  component.handleClick = (pokemon) => {
    component.setState({currentPokemon: pokemon})
  }

  component.render = () => {
    let classes = "App"
    if (component.state.currentPokemon === "Pikachu") {
      classes += " electric"
    } else if (component.state.currentPokemon === "Eevee") {
      classes += " normal"
    }
    return (
      <div className={classes}>
        <h1>Hello React</h1>
        <h3>Your choice: {component.state.currentPokemon}</h3>
        <Card
          handleClick={component.handleClick}
          title="Pikachu" 
          desc="Pikachu evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. However, the starter Pikachu in Pokémon Yellow will refuse to evolve into Raichu unless it is traded and evolved on another save file."
          />
        <Card 
          handleClick={component.handleClick}
          title="Eevee" 
          desc="Eevee is the game mascot and starter Pokémon in Pokémon: Let's Go, Eevee!, as well as for the main characters of Pokémon XD: Gale of Darkness and Pokémon Conquest. It is also the rival's starter Pokémon in Pokémon Yellow, although Professor Oak originally intended to give it to the player."
          />
      </div>
    );
  }

  return component
}

export default App;

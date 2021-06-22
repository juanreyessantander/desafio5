import React, { Component } from 'react';
import './App.css';

//Componentes
import Header from './Components/Header/Header';
import UserCard from './Components/UserCard/UserCard';
import Footer from './Components/Footer/Footer';
// Semantic UI
import { Button } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    //this.handleCounterUp = this.handleCounterUp.bind(this);
  }
  // handleCounterUp() {
  //  console.log('Hiciste Click!');
  // }

  handleCounterUp = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter + 1 });
  };

  handleCounterDown = () => {
    // console.log('Hiciste Click!');
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className='App'>
        <Header
          title={'Equipo de Psicólogos'}
          color={'yellow'}
          subtitle={'Bienvenido a nuestra página'}
        />
        <div className='UserSection'>
          <UserCard
            name={'Juan Reyes'}
            date={'6 años de experiencia'}
            description={
              'Psicólogo profesional, Master en mediación y gestión del conflicto, Web Dev'
            }
            img={
              'https://react.semantic-ui.com/images/avatar/large/matthew.png'
            }
          />
          <UserCard
            name={' Andres Perez'}
            date={'6 años de experiencia'}
            description={'Psicólogo profesional, experto en trabajos con madera y cuero artistico'}
            img={'https://react.semantic-ui.com/images/avatar/large/elliot.jpg'}
          />
          <UserCard
            name={'Maria José'}
            date={'6 años de experiencia'}
            description={
              'Psicooga Profesional, especialista en investigación de mercados'
            }
            img={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'}
          />
        </div>
        <div className='CounterSection'>
          <h3>Contador:</h3>
          <span className='span-counter'>{this.state.counter}</span>
          <div className='btn-section'>
            <Button primary onClick={this.handleCounterUp}>
              +
            </Button>
            <Button secondary onClick={this.handleCounterDown}>
              -
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

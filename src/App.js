
import React, { Component } from 'react';
import './App.css';

//componentes
import Header from './Componentes/Header/Header';
import UserCard from './Componentes/UserCard/UserCard';

class App extends Component {
render() {
return ( <div className='container'><Header title={'User IT App'} subtitle={"Welcome to our page"} />;

<div className='user-section'>
  <UserCard/>
  <UserCard/>
  <UserCard/>
</div>
</div>)
} }

export default App;

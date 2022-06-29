import './App.css';
import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      nome: '',
      email: '',
      city: '',
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.checkCity = this.checkCity.bind(this);
  }

  changeHandler(event) {
  const { name, value } = event.target;
  this.setState({ [name]: value })
  }

  checkCity(event) {
    let { value } = event.target;
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const validator = numbers.some((number) => number === value[0]);
    // if(typeof value[0] === 'number') {
      if (validator === true) {
      console.log(typeof value[0]);
      this.setState({ city: '' })
      }
    // }
  }
  render () {
  return (
  <div>
    <Form value={this.state} changeHandler={this.changeHandler} checkCity={this.checkCity}/>
    <h1>{this.state.nome}</h1>
  </div>
  )
}
}

export default App;

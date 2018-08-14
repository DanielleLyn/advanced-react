import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Swapi from './Components/Swapi';
import withLoader from './Components/Loader_HOC';
import Poke from './Components/Poke';
import LoaderRP from './Components/loader_render';

import Carousel from './Components/ChildProps';


let SwapiWithLoader = withLoader(Swapi);
let PokeWithLoader = withLoader(Poke);

class App extends Component {
  constructor(){
    super()
    this.state ={
      pokemon: [],
      swapi: [],
      swapiInput: '',
      pokeInput: ''
    }
  }


  componentDidMount(){
    axios.get('https://swapi.co/api/people/')
    .then(({data: {results: swapi}}) => {
      setTimeout(()=>{
        this.setState(
          {swapi}
      )}, 4000);
  })
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(({data: {results: pokemon}}) => {
    
    setTimeout(()=>{
        this.setState(
          {pokemon}
    )}, 4000);
})
  }


  handleChange = ({target:{name,value}}) => {   //arrow functions figure out what this is when they are declared instead of invocation (where it's run not where it's made)
    this.setState({
      [name] : value //dont need a separate handle change for each onClick
    })
  }


  render() {
    console.log('this.state', this.state)
    console.log('props', this.props)
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
     
        <Carousel>
          <img src='https://media.giphy.com/media/RGrbmiiFDwpjO/giphy.gif'></img>
          <img src='https://uproxx.files.wordpress.com/2015/08/rick-morty-jailbreak.gif?w=650'></img>
          <img src='https://uproxx.files.wordpress.com/2015/08/rick-morty-jerry-hell.gif?w=650'></img>
          <img src='https://media.giphy.com/media/l41lNT5u8hCI92nQc/giphy.gif'></img>
          <img src='https://gifer.com/i/KYNK.gif'></img>
        </Carousel>

        <input name="swapiInput" 
        value={this.state.swapiInput}
         onChange={this.handleChange}
         />


       <LoaderRP
       data={this.state.swapi}
       name={this.state.swapiInput}
       loadingImage='https://78.media.tumblr.com/4a7f41b028c91c22c95b604c1430e5ab/tumblr_nzpqepflyf1rqw2rio1_500.gif'
       render={(props) => <Swapi data={props} />}
       />
       
       <input 
       name="pokeInput" 
       value={this.state.pokeInput}
        onChange={this.handleChange}
         />


        <LoaderRP 
        data={this.state.pokemon}
        name={this.state.pokeInput}
        loadingImage='https://orig00.deviantart.net/697b/f/2013/056/e/7/e72caad0c3ce55e3ad7775168d3970db-d5w6i8k.gif'
        render={(props) => <Poke data={props} />}
        />
      
    

      </div>
    );
  }
}

export default App;

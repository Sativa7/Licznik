import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Counter.css';
import Counter from './Counter';

class App extends Component {

  //countInitValue = () => {
  //  let init3 = 15;
  //  return (init3*3);
  //}


  render() {
    //let imie = "WiolkaS"
    //let init1 = 31;
   // let wlasciciel1 = "Krystiana";

    return (
      <div className="App">
      <header className="App-header">
      <h1>Licznik w ReactJS</h1>
      </header>
      <Counter initValue={10} /> {/*state*/}
      <Counter /> {/*state*/}
    

      </div>
      //reuzycie componentu naszego
    );
  }
}

export default App;

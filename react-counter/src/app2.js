import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {

  countInitValue = () => {
    let init3 = 15;
    return (init3*3);
  }

  render() {
    //let imie = "WiolkaS"
    let init1 = 31;
    let init2 = 108;
    let wlasciciel1 = "Krystiana";
    let wlasciciel2 = "Karoliny";
    let wlasciciel3 = "Agaty";
    return (
      <div className="App">
<header className="App-header">
<h1>Licznik w ReactJS</h1>
</header>
<Counter wlasciciel={wlasciciel1} initValue={init1} counterId="A" /> {/*propsy*/}
<Counter wlasciciel={wlasciciel2} initValue={init2} counterId="B"/>
<Counter wlasciciel={wlasciciel3}  initValue="31" d="C"/>
<Counter initValue={init1 + init2} />
<Counter initValue={this.countInitValue()} /> {/*napislismy swaja metode i ja wywolalismy*/}

</div>
      //reuzycie componentu naszego
    );
  }
}

export default App;

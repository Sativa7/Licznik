//najpierw importujemy obiekty reacta

import React, {Component} from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

//tworzymy nową funkcję
//import React from 'react';
//komponent funkcyjny - najprostszy
//const Counter = () => {
   //komponent musi cos zwrocic:
  // return(
  //       <div className = "counter">Licznik</div>
 //  );
//}
//zeby tego uzywac w innych plikach, to robimy export

//komponent klasowy
class Counter extends Component {

      constructor(props) {
            super(props);

            let initValue = 0;
            
            this.state = {
              counterValue: initValue,
              step: 1
            }
      }

//==================== ZMIANA KROKU ================//

      changeStep = (nextStep) => {

      //      let step = 1;
      //      if ( ! isNaN(this.props.nextStep ) ) {
      //       step = parseInt(this.props.nextStep);
      // }
            this.setState(() => {
                  return ({
                        step: parseInt(nextStep)
                  })
            });
      }   

//==================== ZMIANA WARTOŚCI LICZNIKA  ================//

      changeValue = () => {
            //console.log("test");  

            this.setState( (prevValue) => {
              return({
                counterValue: prevValue.counterValue + this.state.step,
              })
            });
      }

//====================  RESET LICZNIKA  ================//

      resetCounter = (resetCounter) => {
            //console.log(resetCounter); - sprawdzac takie rzeczy consollogiem
            let initValue = 0;

            if (! resetCounter) {
                   if ( ! isNaN(this.props.initValue) ) {
                        initValue = parseInt(this.props.initValue);
                   }     
            }

            this.setState({
                counterValue: initValue,
            });
      }


      render() {
            return (
                  <div className = "counter">
                        Licznik: 
                        <span className = "value"> {/*nazwy klas są takie jak w JS - tak się robi koment w tej samej linijce*/}
                              {this.state.counterValue}
                        </span>
                        <ButtonsPanel 
                              changeCounterValue={this.changeValue} 
                              resetCounterValue={this.resetCounter}
                              />
                        <Step  
                              changeStep = {this.changeStep} 
                              step = {this.state.step}
                              />
                  </div>
            );
      }
}

export default Counter;
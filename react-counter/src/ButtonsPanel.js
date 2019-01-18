
import React, {Component} from 'react';

class ButtonsPanel extends Component {

   //bedziemy przekazywac do gory, czy ma zresetowac, cz zwiekszyc

   resetOrReinitCounter = (reset) => {
      this.props.resetCounterValue(reset);
      //console.log("restet or reinit " + reset);
   }

   render() {
      return(
         <div className="buttons-panel">
         <button onClick={this.props.changeCounterValue}>Zwiększ licznik o krok</button> 
         <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button> 
      {/*w momencie kliknięcia uruchom anonimową funkcję jw. - skrotowy zapis*/}
         </div>
      )
   }
}

export default ButtonsPanel;
import React, {Component} from 'react';

class Step extends Component {

  updateStep = event => {

   //console.log("test")
      this.props.changeStep(this._inputStep.value);
      }

   render() {
      
      return(
      <div className="step-counter">
         <form> 
            <label className="label">Krok: </label>
            <input 
            className="krok"
            ref={(inputdata) => {this._inputStep = inputdata}} 
            onChange={this.updateStep}
            type="number" 
            value = {this.props.step}
            min = "1" />
         </form>
      </div>
      )
   }
}

export default Step;
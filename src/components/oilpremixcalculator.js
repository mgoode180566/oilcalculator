import React, {component, Component} from "react";
import '../styles/oilcalculator.css';
import {Button, InputGroup} from 'react-bootstrap';

class OilPremixCalculator extends Component {

    state = {
        amount : 10,
        ratio : 40,
        oil : 0,
        unit : "Metric",
    }

    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this);
    }
    
    onHandleAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    onHandleRatioChange = (e) => {
        this.setState({ ratio: e.target.value });
    } 

    calculate() {
        console.log("Unit="+this.state.unit);
        if (this.state.unit === "Metric") {
            this.setState( {oil : this.state.amount * ( 1 / this.state.ratio )} );
            console.log("Metric "+ this.state.oil);
        } else if (this.state.unit === "Imperial") {
            this.setState( {oil : (this.state.amount * 154) * ( 1 / this.state.ratio )} );
        }
        else {
            this.setState( {oil : (this.state.amount * 128) * ( 1 / this.state.ratio )} );
        }
    }

    onHandleUnitChange = (e) => {
        console.log("Unit=" + e.target.value);
        this.setState({ unit: e.target.value });
        this.setState( { oil : 0 })
    } 

    render() {
        let fuelUnit;
        let oilUnit;

        if (this.state.unit == "Metric") {
            fuelUnit = "litres"
            oilUnit = "litres"
        } else if (this.state.unit == "Imperial") {
            fuelUnit = "gallons"
            oilUnit = "fluid ounces"
        }
        else {
            fuelUnit = "us gallons"
            oilUnit = "US fluid ounces"
        }

        return ( 
        <div className="calculator">
            <h2>New version Two Stroke Premix Calculator</h2>
            <div>
                <div class="btn-group" role="group" onChange={this.onHandleUnitChange.bind(this)}>
                    <button type="button" class="btn btn-secondary" value="Metric" onClick={this.onHandleUnitChange.bind(this)}>Litres</button>
                    <button type="button" class="btn btn-secondary" value="Imperial" onClick={this.onHandleUnitChange.bind(this)}>Gallons</button>
                    <button type="button" class="btn btn-secondary" value="US" onClick={this.onHandleUnitChange.bind(this)}>US Gallons</button>
                </div>
            </div>
            <div>
            <p>Fuel amount</p>
            <input type="text" name="fuel" onChange={this.onHandleAmountChange} value={this.state.amount} /> {fuelUnit}
            <p>Fuel/Oil Ratio</p>
            <input type="text" name="ratio" onChange={this.onHandleRatioChange} value={this.state.ratio}/> : 1 
            <div className="results">Oil volume {this.state.oil} {oilUnit}</div>
            <Button onClick={this.calculate}>Calculate</Button>
            </div>
        </div>
        );
    }


}

export default OilPremixCalculator
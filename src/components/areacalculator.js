import React, { Component } from "react";

import '../styles/calculator.css';

class AreaCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = { input: '', result: ''};
    }

    onHandleValueChange = (e) => {
        this.setState({ input: e.target.value });
    }

    onHandleClick = (e) => {
        const area = this.state.input * Math.PI
        console.log("The area is " + area)
        this.setState({ result: this.state.input * Math.PI})
    }

    render() {
        console.log("this is the calculator")
        return (
            <div>
                <h1>Calculate the area of a circle</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Diameter of circle <input onChange={this.onHandleValueChange}/></td><td><button onClick={this.onHandleClick}>Calculate</button></td>
                    </tr>
                    <tr>
                        <td>The area is {this.state.result}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default AreaCalculator;
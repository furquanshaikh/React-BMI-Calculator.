import React, { Component } from "react";
import "./BMI.css";

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      result: "",
      message1: "",
      message2: "",
      result2: ""
    };
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.checkBMI = this.checkBMI.bind(this);
  }

  handleWeightChange(e) {
    this.setState({
      weight: e.target.value
    });
  }

  handleHeightChange(e) {
    this.setState({
      height: e.target.value
    });
  }

  checkBMI(e) {
    e.preventDefault();
    const w = this.state.weight;
    const h = this.state.height;
    if (w === "" && h === "") {
      alert("Enter Weight and Height");
    } else {
      const finalBMI = ((w / [h]) * 2).toFixed(1);
      // console.log("Your Body Mass Index is", finalBMI.toFixed(2));
      var res2;
      if (finalBMI < 18.5) {
        res2 = "Underweight";
      } else if (finalBMI > 18.5 && finalBMI < 24.9) {
        res2 = "Normal";
      } else if (finalBMI > 25.0 && finalBMI < 29.9) {
        res2 = "Overweight";
      } else if (finalBMI > 30.0) {
        res2 = "Obese";
      }

      this.setState({
        result: finalBMI,
        message1: "Your Body Mass Index is",
        message2: "This is considered as ",
        result2: res2
      });
    }
  }

  render() {
    return (
      <div id="mydiv">
        <form onSubmit={this.checkBMI}>
          Enter Weight In Kg:
          <br />
          <input
            type="text"
            value={this.state.weight}
            onChange={this.handleWeightChange}
            name="weight"
            className="input1"
          />
          <br />
          <br />
          Enter Height in meters:
          <br />
          <input
            type="text"
            value={this.state.height}
            onChange={this.handleHeightChange}
            name="height"
            className="input1"
          />
          <br />
          <br />
          <button className="btn">Calculate BMI</button>
          <br />
          <br />
          <div>
            {this.state.message1} <b>{this.state.result}</b>
            <br />
            {this.state.message2} <b>{this.state.result2}</b>
          </div>
        </form>
      </div>
    );
  }
}

export default BMI;

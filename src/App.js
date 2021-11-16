import React from "react";
import "./App.css";
import Result from "./components/Result";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: "",
      displayValue: "0",
      previousValue: 0,
      operation: "",
      userInput: 0,
      equal: "",
      percentage: "",
    };
  }

  getValue = (event) => {
    this.setState({
      displayValue: (this.state.currentValue += event.target.value),
      userInput: Number(this.state.currentValue),
    });
  };

  getOperation = (event) => {
    // resets current value and operation when a number is selected after the equal sign.
    if (this.state.equal === "=") {
      this.setState({
        operation: event.target.value,
        currentValue: "",
      });

      // calculates percentage
    } else if (
      (event.target.value === "*" && this.state.percentage === "%") ||
      (event.target.value === "+" && this.state.percentage === "%") ||
      (event.target.value === "-" && this.state.percentage === "%") ||
      (event.target.value === "/" && this.state.percentage === "%")
    ) {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue,
        currentValue: "",
      });
    }
    //divides userInput to previous value and clears currentValue.
    else if (this.state.operation === "/" && event.target.value === "/") {
      this.setState({
        displayValue: this.state.userInput / this.state.previousValue,
        currentValue: "",
        previousValue: this.state.previousValue,
        // equal: "",
      });
    }
    //divides userInput to previous value if user switched from division to addition.
    else if (event.target.value === "+" && this.state.operation === "/") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue / this.state.userInput,
        displayValue: this.state.previousValue / this.state.userInput,
        currentValue: "",
      });
    }
    //divides userInput to previous value if user switched from division to minus.
    else if (event.target.value === "-" && this.state.operation === "/") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue / this.state.userInput,
        displayValue: this.state.previousValue / this.state.userInput,
        currentValue: "",
      });
    }
    //divides userInput to previous value if user switched from division to multiplication.
    else if (event.target.value === "*" && this.state.operation === "/") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue / this.state.userInput,
        displayValue: this.state.previousValue / this.state.userInput,
        currentValue: "",
      });
    }
    // Saves the userInput into the previous value when multiplication is selected for the first time.
    else if (event.target.value === "/") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.userInput / 1,
        currentValue: "",
      });
    }

    //multiplies userInput to previous value and clears currentValue.
    else if (this.state.operation === "*" && event.target.value === "*") {
      this.setState({
        displayValue: this.state.userInput * this.state.previousValue,
        currentValue: "",
        previousValue: this.state.previousValue,
        // equal: "",
      });
    }
    //multiplies userInput from previous value if user switched from multiplication to addition.
    else if (event.target.value === "+" && this.state.operation === "*") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue * this.state.userInput,
        displayValue: this.state.previousValue * this.state.userInput,
        currentValue: "",
      });
    }
    //multiplies userInput to previous value if user switched from multiplication to minus.
    else if (event.target.value === "-" && this.state.operation === "*") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue * this.state.userInput,
        displayValue: this.state.previousValue * this.state.userInput,
        currentValue: "",
      });
    }
    // Saves the userInput into the previous value when multiplication is selected for the first time.
    else if (event.target.value === "*") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.userInput * 1,
        currentValue: "",
      });
    }
    //adds userInput to previous value and clears currentValue.
    else if (this.state.operation === "+" && event.target.value === "+") {
      this.setState({
        displayValue: this.state.userInput + this.state.previousValue,
        currentValue: "",
        previousValue: this.state.previousValue,
        equal: "",
      });
    }
    //deducts userInput from previous value if user switched from minus to plus.
    else if (event.target.value === "+" && this.state.operation === "-") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.previousValue - this.state.userInput,
        displayValue: this.state.previousValue - this.state.userInput,
        currentValue: "",
      });
    }
    // Saves the userInput into the previous value when the + is selected for the first time
    else if (event.target.value === "+") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.userInput + this.state.previousValue,
        currentValue: "",
      });
    }
    //deducts userInput from previous value and clears currentValue.
    else if (this.state.operation === "-" && event.target.value === "-") {
      this.setState({
        displayValue: this.state.previousValue - this.state.userInput,
        currentValue: "",
        // operation: event.target.value,
        previousValue: this.state.previousValue,
        // equal: "",
      });
    }
    //adds userInput to previous value if user switched from plus to minus.
    else if (event.target.value === "-" && this.state.operation === "+") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.userInput + this.state.previousValue,
        displayValue: this.state.userInput + this.state.previousValue,
        currentValue: "",
      });
    }
    // Saves the userInput into the previous value when the - is selected for the first time.
    else if (event.target.value === "-") {
      this.setState({
        operation: event.target.value,
        previousValue: this.state.userInput - this.state.previousValue,
        currentValue: "",
      });
    }
  };

  GetPercentage = () => {
    //
    if (this.state.operation === "+" && !this.state.equal) {
      this.setState({
        displayValue: this.state.userInput,
        userInput: this.state.userInput,
        percentage: "%",
      });
    } else if (this.state.operation === "-" && !this.state.equal) {
      this.setState({
        displayValue: this.state.userInput,
        userInput: this.state.userInput,
        percentage: "%",
      });
    } else if (this.state.operation === "*" && !this.state.equal) {
      this.setState({
        displayValue: this.state.userInput / 100,
        userInput: this.state.userInput / 100,
        percentage: "%",
      });
    } else if (this.state.operation === "/" && !this.state.equal) {
      this.setState({
        displayValue: this.state.userInput / 100,
        userInput: this.state.userInput / 100,
        percentage: "%",
      });
    } else if (this.state.equal === "=") {
      console.log(this.state);
      this.setState({
        displayValue: this.state.previousValue / 100,
        percentage: "%",
        previousValue: this.state.previousValue / 100,
      });
    } else if (this.state.userInput) {
      this.setState({
        displayValue: this.state.userInput / 100,
        percentage: "%",
        previousValue: this.state.userInput / 100,
      });
    }
  };

  MinusPlus = (event) => {
    // switches previous number from a positive to a negative or vice versa.
    if (this.state.equal === "=") {
      this.setState({
        displayValue: this.state.previousValue - this.state.previousValue * 2,
        previousValue: this.state.previousValue - this.state.previousValue * 2,
      });
    }

    // switches userInput number from a positive to a negative.
    else if (this.state.userInput) {
      this.setState({
        displayValue: this.state.userInput - this.state.userInput * 2,
        userInput: this.state.userInput - this.state.userInput * 2,
        previousValue: this.state.currentValue - this.state.currentValue,
      });
    }
  };

  GetResult = (event) => {
    // prints the total of the addition equation and saves it in previous value.
    if (this.state.operation === "+") {
      this.setState({
        equal: event.target.value,
        displayValue: this.state.userInput + this.state.previousValue,
        previousValue: this.state.userInput + this.state.previousValue,
        currentValue: "",
      });
    }
    // prints the total of the deduction equation and saves it in previous value.
    else if (this.state.operation === "-") {
      this.setState({
        equal: event.target.value,
        displayValue: this.state.previousValue - this.state.userInput,
        previousValue: this.state.previousValue - this.state.userInput,
        currentValue: "",
      });
    }
    // prints the total of the deduction equation and saves it in previous value.
    else if (this.state.operation === "*") {
      this.setState({
        equal: event.target.value,
        displayValue: this.state.previousValue * this.state.userInput,
        previousValue: this.state.previousValue * this.state.userInput,
        currentValue: "",
      });
    }
    // prints the total of the division equation and rounds it to the nearest number.
    else if (this.state.operation === "/") {
      this.setState({
        equal: event.target.value,
        displayValue: Math.round(this.state.previousValue / this.state.userInput),
        previousValue: this.state.previousValue / this.state.userInput,
        currentValue: "",
      });
    }
  };

  clear = () => {
    // Resets all values.
    this.setState({
      displayValue: "0",
      currentValue: "",
      previousValue: 0,
      operation: "",
      equal: "",
      percentage: "",
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Result GetResult={this.state.displayValue} />
        <Buttons
          getValue={this.getValue}
          clear={this.clear}
          getOperation={this.getOperation}
          GetResult={this.GetResult}
          MinusPlus={this.MinusPlus}
          GetPercentage={this.GetPercentage}
        />
      </div>
    );
  }
}

export default App;

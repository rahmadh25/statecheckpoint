import react, {Component } from "react";
import './App.css';
import Person from "./components/Person";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Show: false,
    };
    this.handleShow = () => {
      this.setState({ Show: !this.state.Show });
    };
  };
  
 render (){
  return (
    <div className="App">
      <h1> this is the first state </h1>
      <button onClick={this.handleShow}> Show </button>
      {this.state.Show ? <Person /> : <h1>click the button</h1>}
      
    </div>
  );
}
}

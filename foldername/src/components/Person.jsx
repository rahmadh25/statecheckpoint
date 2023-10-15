import React, { Component } from 'react'

export default class Person extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rahma",
      counter: 0,
      imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIMWcYp7E5Lbh3bu2DcViHRfHU_q3t0LnVBYv8ZAlUHMcFmEXN3_LfehlBw&s",
      bio: "my code works",
      profession: "Futur Developper",
    };
    this.handleCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
   
    componentDidMount()
    {setInterval(() => { this.handleCounter(); }, 1000)
    };

  }
   render() {
      return (
        <div className='container'>
          <h1> {this.state.name}</h1>
          <img src={this.state.imgsrc} alt='width=100px, height=120px' />
          <h2> {this.state.bio}</h2>
          <h2> {this.state.profession}</h2>
          <h3> {this.state.counter} secondes</h3>
        </div>
      );
    }
  }


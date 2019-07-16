import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
    state = { textkeren: 'Keren cuy' }

    ubahState = (objectnya) => {
      this.setState(objectnya)
    }
    render() {
      return (
        <div>
          <Header judul='Latihan Redux' fnpengubahappstate={this.ubahState} textker={this.state.textkeren}/>
          <h3>{this.state.textkeren}</h3>
        </div>
      )
    }
}

export default App;
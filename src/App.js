import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

class App extends Component {
    // state = { textkeren: 'Keren cuy' }

    ubahState = (objectnya) => {
      this.setState(objectnya)
    }
    render() {
      return (
        <div>
          <Header judul='Latihan Redux' fnpengubahappstate={this.ubahState} textker={this.props.keren}/>
          <h3>{this.props.keren}</h3>
          <h2>{this.props.deadpool}</h2>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return { deadpool: state.pikachu, keren: state.textkeren }
}

export default connect(mapStateToProps)(App);
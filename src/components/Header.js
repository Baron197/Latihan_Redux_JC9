import React, { Component } from 'react';
import JudulKece from './JudulKece';

class Header extends Component {
    render() {
        return (
            <div style={{ border: '1px solid black'}}>
                <JudulKece judulnya={this.props.judul} pengubahappstate={this.props.fnpengubahappstate} textkeru={this.props.textker} />
            </div>
        )
    }
}

export default Header;
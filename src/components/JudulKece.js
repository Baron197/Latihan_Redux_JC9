import React, { Component } from 'react';

class JudulKece extends Component {
    onBtnUbahClick = () => {
        if(this.props.textkeru === 'Keren cuy') {
            this.props.pengubahappstate({ textkeren: 'Keren coy' });
        }
        else {
            this.props.pengubahappstate({ textkeren: 'Keren cuy' });
        }
      }

    render() {
        return (
            <div>
                <h1>{this.props.judulnya}</h1>
                <input type="button" value="Ubah" onClick={this.onBtnUbahClick}/>
            </div>
        )
    }
}

export default JudulKece;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ubahStateTextKeren } from '../actions';

class JudulKece extends Component {
    onBtnUbahClick = () => {
        if(this.props.textkeru === 'Keren cuy') {
            this.props.ubah('Keren coy');
        }
        else {
            this.props.ubah('Keren cuy');
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

const mapStateToProps = (state) => {
    return { textkeru: state.textkeren }
}

export default connect(mapStateToProps, { ubah: ubahStateTextKeren })(JudulKece);
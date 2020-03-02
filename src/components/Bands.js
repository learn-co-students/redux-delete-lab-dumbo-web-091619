import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {

    renderBands = () => this.props.bands.map(band=> <Band delete={this.props.delete} key={band.id} band={band}/>)
    render(){
        return(
            <div>
                {this.renderBands()}
            </div>
        )
    }
}
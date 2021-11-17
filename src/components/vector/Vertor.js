import React, { Component } from 'react'
import Vectorimg from '../../images/Vector.svg'
import { VectorStyle } from '../vector/VectorStyled'

export default class Vertor extends Component {
    render() {
        return (
            <div>
                <VectorStyle src={Vectorimg} alt="Flecha hacia atras"/>
            </div>
        )
    }
}

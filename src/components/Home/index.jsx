import React, { Component }  from 'react'
import Swapi from '../Swapi/index'
import Pokemon from '../Pokemon/index'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="container">
                    <h1>HOME</h1>
                    <Swapi />
                    <Pokemon />
                </div>
            </div>
        )
    }
}

export default Home;
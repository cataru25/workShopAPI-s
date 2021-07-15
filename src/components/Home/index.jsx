import React, { Component }  from 'react'
import Swapi from '../Swapi/index'
import Pokemon from '../Pokemon/index'
import RickAndMorty from '../RickAndMorty'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="container">
                    <h1 className="title-home">WORKSHOP APIs</h1>
                    <Swapi />
                    <Pokemon />
                    <RickAndMorty />
                </div>
            </div>
        )
    }
}

export default Home;
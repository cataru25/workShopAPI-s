import React, { Component }  from 'react'
// import Header from '../Header'
// import Swapi from '../Swapi/index'
// import Pokemon from '../Pokemon/index'
// import RickAndMorty from '../RickAndMorty'

// const SWAPI_URL = 'https://swapi.dev/api/';
// const POKEMON_URL = 'https://pokeapi.co/api/v2/';
// const URL_RICKANDMORTY = 'https://rickandmortyapi.com/api/';

import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     people: [],
        //     pokemon: [],
        //     rickAndMorty: []
        // }
    }
    
    // endpointSwapiPromise = () => {
    //     const endpointSwapi = SWAPI_URL + 'people/';
    //     return fetch(endpointSwapi)
    //         .then(res => res.json())
    // }
    // endpointPokemonPromise = () => {
    //     const endpointPokemon = POKEMON_URL + 'pokemon/?offset=0&limit=10';
    //     return fetch(endpointPokemon)
    //         .then(res => res.json())
    // }
    // endpointRickyPromise = () => {
    //     const endpointRicky = URL_RICKANDMORTY + 'character/';
    //     return fetch(endpointRicky)
    //         .then(res => res.json())
    // }
    // async allPromise() {
    //     try{
    //         const [peopleData, pokemonData, rickyData] = await Promise.all([this.endpointSwapiPromise(), this.endpointPokemonPromise(), this.endpointRickyPromise()]);
    //         this.setState({ people: peopleData.results, pokemon: pokemonData.results, rickAndMorty: rickyData.results })
    //     }catch(error){
    //         this.setState({ people: [], pokemon: [], rickAndMorty: [] })
    //         console.log('@error: ', error)
    //     }
    // }

    componentDidMount() {
        // this.allPromise();
    }
    render() {
        return (
            <div className="container">
                {/* <Header /> */}
                <div className="container">
                    <h1 className="title-home">WORKSHOP APIs</h1>
                    {/* <Swapi people={this.state.people}/>
                    <Pokemon pokemon={this.state.pokemon}/>
                    <RickAndMorty rickAndMorty={this.state.rickAndMorty}/> */}
                </div>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import Card from '../../components/Card';
import './RickAndMorty.css';
const URL_RICKANDMORTY = 'https://rickandmortyapi.com/api/';

class RickAndMorty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rickAndMorty: []
        }
    }

    componentDidMount() {
        const endpoint = URL_RICKANDMORTY + 'character/';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ rickAndMorty: results });
            });
        // async function fetchData(self) {
        //     const endpoint = SWAPI_URL + 'people/';
        //     const res = await fetch(endpoint);
        //     const data = await res.json();
        //     console.log('@data: ', data)
        //     const results = data && data.results || [];
        //     console.log('@results: ', results);
        //     self.setState({ people: results });
        // }
        // fetchData(this);
    }

    render() {
        return (
            <div className="home">
                <section className="app__people">
                    {
                        this.state.rickAndMorty.map((p, index) => {
                            if(index<10) {
                                return (
                                    <Card name={p.name}
                                        birth_year={p.birth_year}
                                        gender={p.gender}
                                        key={index} />
                                );
                            }
                        })
                    }
                </section>
            </div>
        );
    }
}

export default RickAndMorty;
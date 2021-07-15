import React, { Component } from 'react'
import Card from '../Card/index';

// const URL_RICKANDMORTY = 'https://rickandmortyapi.com/api/';

class RickAndMorty extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     rickAndMorty: []
        // }
    }

    componentDidMount() {
        // const endpoint = URL_RICKANDMORTY + 'character/';
        // fetch(endpoint)
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log('@data: ', data)
        //         const results = data && data.results || [];
        //         // console.log('@results: ', data);
        //         this.setState( { rickAndMorty: results });
        //     });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <p>Ricky and Morty</p>
                </div>
                <section className="app__people">
                    {
                        this.props.rickAndMorty.map((p, index) => {
                            if(p.id < 11) {
                                return (
                                    <Card name={p.name}
                                        key={index} />
                                );
                            }
                        })
                    }
                </section>
            </div>
        )
    }
}

export default RickAndMorty;
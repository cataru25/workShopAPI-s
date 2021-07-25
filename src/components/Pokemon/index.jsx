import React, { Component } from 'react'
import './pokemon.css'
import Card from '../Card/index';

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Pokemon</p>
                </div>
                <section className="app__people">
                    {
                        this.props.pokemon.map((p, index) => {
                            return (
                                <Card name={p.name}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Pokemon;
import React, { Component } from 'react'
import Card from '../Card/index';

class RickAndMorty extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
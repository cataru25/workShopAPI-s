import React, { Component } from 'react'
import './swapi.css'
import Card from '../Card/index';

class Swapi extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render(){
        return (
            <div>
                <div className="title">
                    <p>Swapi</p>
                </div>
                <section className="app__people">
                    {
                        this.props.people.map((p, index) => {
                            return (
                                <Card name={p.name}
                                    birth_year={p.birth_year}
                                    gender={p.gender}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Swapi;
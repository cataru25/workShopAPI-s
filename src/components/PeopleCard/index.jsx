import React, { Component } from 'react'
import './peopleCard.css';

class PeopleCard extends Component {
    render() {
        return (
            <div className="peopleCard">
                <div className="description">
                    <p className="paragraph">Name: {this.props.name}</p >
                    <p className="paragraph">Birth Year: {this.props.birth_year}</p >
                    <p className="paragraph">Gender: {this.props.gender}</p >
                </div>
            </div>
        );
    }
}

export default PeopleCard
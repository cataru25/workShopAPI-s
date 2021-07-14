import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './peopleCard.css';

class Card extends Component {
    // static propTypes = {
    //     name: PropTypes.String.isRequired,
    //     birth_year: PropTypes.String,
    //     gender: PropTypes.String,
    // }
    // static defaultProps = {
    //     birth_year: "",
    //     gender: "",
    // }
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

export default Card;
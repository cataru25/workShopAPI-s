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
        const { name, birth_year, gender } = this.props;
        return (
            <div className="peopleCard">
                <div className="description">
                    {name && <p className="paragraph">Name: {name}</p >}
                    {birth_year && <p className="paragraph">Birth Year: {birth_year}</p>}
                    {gender && <p className="paragraph">Gender: {gender}</p >}
                </div>
            </div>
        );
    }
}

export default Card;
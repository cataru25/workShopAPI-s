import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import headerOptions from './headerOptions.json';
import HeaderOption from '../HeaderOption';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeOption: 'home'
        }    
    }

    onClick = (activeOption, pathOption) => {
        this.setState({activeOption: activeOption});
        this.props.history(pathOption);
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav nav">
                    <ul className="nav__list list">
                        {
                            headerOptions.map((hopt, index) => {
                                return(
                                    <HeaderOption activeOption={this.state.activeOption}
                                    onClick={this.onClick}
                                    optionText={hopt.optionText}
                                    option={hopt.option}
                                    path={hopt.path}
                                    key={index}/>
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);

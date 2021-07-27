import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import './Swapi.css';
const SWAPI_URL = 'https://swapi.dev/api/';

function Swapi() {

    const [people, setPeople] = useState();

    useEffect(() => {
        const endpoint = SWAPI_URL + 'people/';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                setPeople(results);
            });
    }, []);

    return (
        <div className="home">
            <section className="app__people">
                {
                    // Remember null checking
                    people && people.map((p, index) => {
                        return (
                            <Card name={p.name}
                                birth_year={p.birth_year}
                                gender={p.gender}
                                key={index} 
                            />
                        );
                    })
                }
            </section>
        </div>
    )
}

export default Swapi;

// import React, { Component } from 'react';
// import Card from '../../components/Card';
// import './Swapi.css';
// const SWAPI_URL = 'https://swapi.dev/api/';

// class Swapi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             people: []
//         }
//     }

//     componentDidMount() {
//         const endpoint = SWAPI_URL + 'people/';
//         fetch(endpoint)
//             .then(res => res.json())
//             .then(data => {
//                 console.log('@data: ', data)
//                 const results = data && data.results || [];
//                 console.log('@results: ', results);
//                 this.setState({ people: results });
//             });
//         // async function fetchData(self) {
//         //     const endpoint = SWAPI_URL + 'people/';
//         //     const res = await fetch(endpoint);
//         //     const data = await res.json();
//         //     console.log('@data: ', data)
//         //     const results = data && data.results || [];
//         //     console.log('@results: ', results);
//         //     self.setState({ people: results });
//         // }
//         // fetchData(this);
//     }

//     render() {
//         return (
//             <div className="home">
//                 <section className="app__people">
//                     {
//                         this.state.people.map((p, index) => {
//                             return (
//                                 <Card name={p.name}
//                                     birth_year={p.birth_year}
//                                     gender={p.gender}
//                                     key={index} />
//                             );
//                         })
//                     }
//                 </section>
//             </div>
//         );
//     }
// }

// export default Swapi;
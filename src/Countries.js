import React, { Component } from 'react';
import axios from 'axios';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/countries')
            .then(response => {
                console.log(response);
                this.setState({ countries: response.data });
            })
            .catch(error => {
                console.error('There was an error fetching the countries!', error);
            });
    }


    render() {
        const countries = this.state.countries;
        return (
            <>
                <div className={'container'}>
                    <h3>Countries List</h3>
                    <table className={'table table-striped table-hover table-advance table-responsive'}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Capital</th>
                            <th>Code</th>
                            <th>Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {countries.map(function renderCountryRow(country) {
                            return (
                                <tr key={country.id}>
                                    <td>{country.id}</td>
                                    <td>{country.description}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.code}</td>
                                    <td>{country.continent}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }


}

export default Countries;


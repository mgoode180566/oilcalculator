import React, { Component } from 'react';

import '../styles/employee.css';

class Employees extends Component {

    state = {
        loading: true,
        persons: [],
    };

    constructor(props) {
        super(props)
        console.log("Employees constructor")
    }

    async componentDidMount() {
        const url = 'https://randomuser.me/api/?results=10';
        const url2 = 'https://gorest.co.in/public-api/users?_format=json&access-token=27dGdE8i2MaCTzRff0IQpn6m3KaLbDuMXwr0';
        
        // await fetch(url)
        //    .then(response => response.json())
        //    .then(result => this.setState({
        //        persons: result,
        //        loading: false
        //    }));

        const response = await fetch(url2);
        const data = await response.json();
        console.log("DATA is " + data);
        this.setState({persons : data.result, loading: false});
        console.log(this.state.persons);
        // console.log("PERSONS=" + this.state.persons);
    }

    render() {
        const p = this.state.persons.map((employee) => <p className="Employee" key={employee.id}>{employee.id} {employee.first_name} {employee.last_name} {employee.email} {employee.gender}</p>)
        //console.log("P is " + p)
        return (
            <div>{p}</div>
        )
    }
}

export default Employees;

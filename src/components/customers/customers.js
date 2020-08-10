import React, { Component } from 'react';

import {getAll} from '../../services/customers/customersService';
import { CustomerList } from './customerList';

class Customers extends Component {
    state = {
        customers: []
    };

    async componentDidMount() {
        var baseUrl = "https://jsonplaceholder.typicode.com";
        var self = this;
        getAll(baseUrl + "/users").then(data => self.setState({customers : data}));
    }

    render() {
        const display = this.state.customers.map((customer) => <p className="Customer" key={customer.id}>{customer.id} {customer.name} {customer.email} </p>)
        return (
            <CustomerList customers={this.state.customers} />
        )
    }
}
export default Customers
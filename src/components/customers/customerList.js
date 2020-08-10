import React from 'react';
import {Customer} from './customer';

export const CustomerList = props => (
    <div>
        {props.customers.map(customer => (<Customer key={customer.id} customer={customer} />))}
    </div>
)
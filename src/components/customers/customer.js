import React from 'react';

import '../../styles/customer.css';

export const Customer = ( props ) => (
    <p className="Customer">{props.customer.name} {props.customer.email}</p>
)
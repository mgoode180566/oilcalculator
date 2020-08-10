import React, {component, Component} from "react";

import MyFooter from '../components/myfooter';
import Navigation from '../components/navigation';
import Header from '../components/header';
import AreaCalculator from '../components/areacalculator';
import Employees from '../components/employees';
import Customers from './customers/customers';
import Images from '../components/images';
import OilPremixCalculator from '../components/oilpremixcalculator';

class MyBody extends Component {

    render() {
        return (
        <body>
            <Navigation/><Customers/><OilPremixCalculator/>
        </body>)
    }

}

export default MyBody
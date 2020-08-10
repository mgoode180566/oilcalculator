import React, { Component } from 'react';
import Header from '../components/header';
import '../styles/navigation.css';

class Navigation extends Component {
    render() {

        const sections = ['Home', 'Bio', 'Blog', 'Projects', 'Calculator', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li key={section}><a href={'#' + section}>{section}</a></li>
            )
        });

        return (
            <div>
                <nav>
                    <h2 className="title">Michael Goode - Portfolio</h2>
                    <ul>{navLinks}</ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;


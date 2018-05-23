import React, { Component } from 'react';
import './style.scss' 

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        return (
            <section className="entry-content">
                <Component route={route}/>
            </section>
        );
    } 
}
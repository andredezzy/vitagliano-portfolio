import React, { Component } from "react";

import "./styles.css";

import NavItem from "./NavItem";

export default class Nav extends Component {
    static propTypes = {
        children: function(props, propName, componentName) {
            const prop = props[propName];

            let error = null;
            React.Children.forEach(prop, function(child) {
                if (child.type !== NavItem) {
                    error = new Error(
                        "`" +
                            componentName +
                            "` children should be of type `NavItem`."
                    );
                }
            });
            return error;
        }
    };

    constructor() {
        super();
        this.state = {isOpen: false};
    }

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <div id="nav-items">
                <ul className={`nav-collapse ${this.state.isOpen}`}>{this.props.children}</ul>
                <div className={`nav-toggler ${this.state.isOpen}`} onClick={this.toggleCollapse} />
            </div>
        );
    }
}

export { Nav, NavItem };

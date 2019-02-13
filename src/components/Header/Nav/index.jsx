import React from "react";

import "./styles.css";

import NavItem from "./NavItem";

const Nav = props => {
    return (
        <div id="nav-items">
            <ul>{props.children}</ul>
            <button id="nav-toggler" />
        </div>
    );
};

Nav.propTypes = {
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

export { Nav, NavItem };

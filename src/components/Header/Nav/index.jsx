import React from "react";

import "./styles.css";

import NavItem from "./NavItem";

const Nav = (props) => (<ul>{props.children}</ul>);

Nav.propTypes = {
    children: function(props, propName, componentName) {
      const prop = props[propName];
      console.log("test");

      let error = null;
      React.Children.forEach(prop, function(child) {
        if (child.type !== NavItem) {
          error = new Error(
            "`" + componentName + "` children should be of type `NavItem`."
          );
        }
      });
      return error;
    }
  };

export { Nav, NavItem };

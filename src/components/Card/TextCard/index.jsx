import React from "react";

import "./styles.css";

import { Col } from "react-bootstrap";

const TextCard = props => {
    var { md = 4, multiline, color, height, maxHeight = height, width } = props;

    if (window.innerWidth < 400) height = height + 50;
    else if (window.innerWidth < 768) height = height + 20;

    height = height > maxHeight ? maxHeight + "px" : height + "px";

    const style = {
        display: multiline ? "block" : "flex",
        background: color,
        height,
        width
    };

    return (
        <Col md={md}>
            <div id="card" style={style}>
                {props.children}
            </div>
        </Col>
    );
};

export default TextCard;

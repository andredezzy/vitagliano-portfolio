import React from 'react';

import './styles.css';

import { Col } from 'react-bootstrap';

import ImageCard from './ImageCard';

const Card = (props) => {

    const { md = 4, multiline, color, height, width } = props;

    const display = multiline ? "block" : "flex";

    const style = {
        background: color,
        height, width, display
    }

    return (
        <Col md={md}>
            <div id="card" style={style}>
                {props.children}
            </div>
        </Col>
    )
};

export default Card;
export { ImageCard };
import React from 'react';

import './styles.css';

import { Col } from 'react-bootstrap';

const ImageCard = (props) => {
    const {  md = 4, image, color, height, width } = props;

    const style = {
        background: color,
        height, width
    }

    return (
        <Col md={md}>
            <div id="image-card" style={style}>
                <img src={image} alt={image} />
                <div id="info">
                    {props.children}
                </div>
            </div>
        </Col>
    )
};

export default ImageCard;

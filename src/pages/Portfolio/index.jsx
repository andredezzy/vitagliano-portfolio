import React from "react";

import "./styles.css";

import { Card } from "../../components/";

import { Container, Row } from "react-bootstrap";

const Portfolio = () => (
    <Container id="container">
        <Row>
            <Card.TextCard multiline md={12} color="#2c2c2c" height={"165px"}>
                <h1>Portfolio</h1>
                <p>Uma amostra de todos os meus trabalhos</p>
            </Card.TextCard>
        </Row>
    </Container>
);

export default Portfolio;

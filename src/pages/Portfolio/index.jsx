import React from "react";

import "./styles.css";

import { Card } from "../../components/";

import { Container, Row } from "react-bootstrap";
import MaterialIcon from 'material-icons-react';

const Portfolio = () => (
    <Container id="container">
        <Row>
            <Card.TextCard multiline md={12} color="#2c2c2c" height={"165px"}>
                <h1>Portfolio</h1>
                <p>Uma amostra de todos os meus trabalhos</p>
            </Card.TextCard>

            <div id="work-table">
                <Card.ScrollableImageCard image="https://i.imgur.com/knzB621.jpg">
                    <p>html/css/js/php</p>
                    <h1>Cloud Craft</h1>
                </Card.ScrollableImageCard>

                <Card.ScrollableImageCard image="https://i.imgur.com/TFCZcvW.jpg">
                    <p>html/css/js/php</p>
                    <h1>Rede Cosmic</h1>
                </Card.ScrollableImageCard>

                <Card.ScrollableImageCard image="https://i.imgur.com/6E5gLlh.png">
                    <p>html/css/js/php</p>
                    <h1>Craft Mine</h1>
                </Card.ScrollableImageCard>

                <Card.ScrollableImageCard image="https://i.imgur.com/FFwcLyW.png">
                    <p>html/css/js/php</p>
                    <h1>Craft Shop</h1>
                </Card.ScrollableImageCard>

                <Card.ScrollableImageCard image="https://i.imgur.com/MKuXKUL.jpg">
                    <p>html/css/js/php</p>
                    <h1>Modded MC</h1>
                </Card.ScrollableImageCard>

                <Card.ScrollableImageCard image="https://i.imgur.com/SXEnz51.png">
                    <p>html/css/js/php</p>
                    <h1>Modded MC</h1>
                </Card.ScrollableImageCard>
            </div>

            <Card.TextCard multiline md={12} color="#4E314E" height={"165px"}>
                <h1>Gostou do meu trabalho?</h1>
                <p>Entre em contato comigo pelo Discord: Vitagliano#7027</p>
            </Card.TextCard>
        </Row>
    </Container>
);

export default Portfolio;

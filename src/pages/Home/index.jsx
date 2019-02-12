import React, { Component } from 'react';

import './styles.css';

import { Card } from '../../components/';

import { Container, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container id="container">
        <Row>
          <Card.ImageCard md={4} image="https://i.imgur.com/knzB621.jpg" color='#2c2c2c' height={'340px'}>
            <p>htlm/css/js/php</p>
            <h1>Cloud Craft</h1>
          </Card.ImageCard>

          <Card.TextCard md={8} color='#2c2c2c' height={141}>
            <h1>Olá!</h1>
          </Card.TextCard>
        </Row>
      </Container>
    );
  }
}

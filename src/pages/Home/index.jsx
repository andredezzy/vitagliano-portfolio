import React, { Component } from 'react';

import './styles.css';

import Card, { ImageCard } from '../../components/Card';

import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container id="container">
        <Row>
          <ImageCard md={4} image="https://i.imgur.com/knzB621.jpg" color='#2c2c2c' height={'340px'}>
            <p>htlm/css/js/php</p>
            <h1>Cloud Craft</h1>
          </ImageCard>
          <Card md={8} color='#2c2c2c' height={'141px'}>
            <h1>Olá!</h1>
          </Card>
        </Row>
      </Container>
    );
  }
}
import React, { Component } from "react";
// import API from "../utils/API";
import Login from "../components/Login";
import { Col, Row, Container } from "../components/Grid";

export default class Index extends Component {

  //   const googleOauth = () => {
  //     API.getGoogle()
  //       .then((res) => console.log(res))
  //       .catch((err) => console.error(err));
  //   };

  render (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default Index;

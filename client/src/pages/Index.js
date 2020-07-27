import React, {Component} from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

export default class Index extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };
  componentClicked = () => console.log("clicked")
  responseFacebook = response => console.log(response)
  render(){
    let googleContent
    if(state.isLoggedIn){

    } else {
      googleContent =  (<GoogleLogin appId="" autoLoad={true} autoLoad={true} fields="name,email,picture" onClick={this.componentClicked}
      callback={this.responseGoogle}/>)
    }
  }
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <a href="auth/google">
            <i class="fa fa-google" aria-hidden="true"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

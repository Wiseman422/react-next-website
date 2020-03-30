import React, { Component } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'


class AccountFooter extends Component {

  render () {

    return (
        <footer>
        {/* <!-- Lists --> */}
        <div className="border-bottom">
          <Container className="space-2">
            <Row className="justify-content-md-between text-center text-sm-left">
              <Col sm="4" lg="2" className="mb-4 mb-lg-0">
                <h4 className="h6 font-weight-semi-bold">About</h4>
    
                {/* <!-- List Group --> */}
                <ListGroup className="list-group-flush list-group-borderless mb-0">
                  <ListGroupItem><a className="list-group-item-action" href="../pages/about-agency.html">About</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="../pages/services-agency.html">Services</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="../pages/careers.html">Careers</a></ListGroupItem>
                </ListGroup>
                {/* <!-- End List Group --> */}
              </Col>
    
              <Col sm="4" lg="2" className="mb-4 mb-lg-0">
                <h4 className="h6 font-weight-semi-bold">Account</h4>
    
                {/* <!-- List Group --> */}
                <ListGroup className="list-group-flush list-group-borderless mb-0">
                  <ListGroupItem><a className="list-group-item-action" href="dashboard.html">Account</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="my-tasks.html">My tasks</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="projects.html">Projects</a></ListGroupItem>
                </ListGroup>
                {/* <!-- End List Group --> */}
              </Col>
    
              <Col sm="4" lg="2" className="mb-4 mb-lg-0">
                <h4 className="h6 font-weight-semi-bold">Resources</h4>
    
                {/* <!-- List Group --> */}
                <ListGroup className="list-group-flush list-group-borderless mb-0">
                  <ListGroupItem><a className="list-group-item-action" href="../pages/help.html">Help</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="../pages/terms.html">Terms</a></ListGroupItem>
                  <ListGroupItem><a className="list-group-item-action" href="../pages/privacy.html">Privacy</a></ListGroupItem>
                </ListGroup>
                {/* <!-- End List Group --> */}
              </Col>
    
              <Col md="6" lg="4">    
                {/* <!-- Button --> */}
                <Button size="xs" className="btn btn-xs btn-dark btn-wide transition-3d-hover text-left mb-2 mr-1">
                  <span className="media align-items-center">
                    <FontAwesomeIcon icon={faApple} className="fa-2x mr-3" />
                    <span className="media-body">
                      <span className="d-block">Download on the</span>
                      <strong className="font-size-1">App Store</strong>
                    </span>
                  </span>
                </Button>
                {/* <!-- End Button --> */}
    
                {/* <!-- Button --> */}
                <Button size="xs" className="btn-dark btn-wide transition-3d-hover text-left mb-2">
                  <span className="media align-items-center">
                    <FontAwesomeIcon icon={faGooglePlay} className="fa-2x mr-3" />
                    <span className="media-body">
                      <span className="d-block">Get it on</span>
                      <strong className="font-size-1">Google Play</strong>
                    </span>
                  </span>
                </Button>
                {/* <!-- End Button --> */}
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- End Lists --> */}
    
        {/* <!-- Copyright --> */}
        <div className="container text-center space-1">
          {/* <!-- Logo --> */}
          <a className="d-inline-flex align-items-center mb-2" href="../home/index.html" aria-label="SolveOnline">
            <img src="../../static/img/icon-dark.png" height="140" style={{margin: '30px'}} />
          </a>
          {/* <!-- End Logo --> */}
          <p className="small text-muted">&copy; Copyright 2019 SolveOnline, Inc. All rights reserved.</p>
        </div>
        {/* <!-- End Copyright --> */}
      </footer>
    );
  }
}

export default AccountFooter;

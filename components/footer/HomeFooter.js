import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import ReactSVG from 'react-svg'

const HomeFooter = () => (

    <footer id="SVGFooter" className="gradient-overlay-half-indigo-v1 overflow-hidden">
        <Container className="space-2">
            {/* <!-- CTA --> */}
            <Row className="justify-content-lg-between align-items-lg-center text-center text-lg-left">
                <Col lg="5" className="mb-3 mb-lg-0">
                    <h2 className="font-weight-medium">One tool for all of your success. Get started now!</h2>
                </Col>
                <Col lg="5" className="text-lg-right">
                    <a className="btn btn-primary transition-3d-hover" href="#">Get Started</a>
                    <small className="text-muted mx-3">or</small>
                    <a className="btn btn-soft-indigo transition-3d-hover" href="#">Explore</a>
                </Col>
            </Row>
            {/* <!-- End CTA --> */}

            <hr className="my-9" />

            {/* <!-- Content --> */}
            <Row className="text-center text-sm-left">
                <Col xs="6" lg="3" className="order-lg-2 mb-7 mb-lg-0">
                    <h4 className="h6">Company</h4>

                    {/* <!-- List Group --> */}
                    <ListGroup className="list-group-flush list-group-borderless list-group-transparent mb-0">
                        <ListGroupItem><a className="list-group-item-action" href="../pages/about-agency.html">About</a></ListGroupItem>
                        <ListGroupItem><a className="list-group-item-action" href="../pages/services-agency.html">Services</a></ListGroupItem>
                        <ListGroupItem><a className="list-group-item-action" href="../pages/careers.html">Careers</a></ListGroupItem>
                        <ListGroupItem><a className="list-group-item-action" href="../pages/grid-right-sidebar.html">Blog</a></ListGroupItem>
                    </ListGroup>
                    {/* <!-- End List Group --> */}
                </Col>

                <Col xs="6" lg="3" className="order-lg-3 mb-7 mb-lg-0">
                    <h4 className="h6">Legal</h4>

                    {/* <!-- List Group --> */}
                    <ListGroup className="list-group-flush list-group-borderless list-group-transparent mb-0">
                        <ListGroupItem><a className="list-group-item-action" href="../pages/help.html">Help</a></ListGroupItem>
                        <ListGroupItem><a className="list-group-item-action" href="../pages/terms.html">Terms &amp; Conditions</a></ListGroupItem>
                        <ListGroupItem><a className="llist-group-item-action" href="../pages/privacy.html">Privacy &amp; Policy</a></ListGroupItem>
                    </ListGroup>
                    {/* <!-- End List Group --> */}
                </Col>

                <Col xs="6" lg="3" className="order-lg-1 mb-7 mb-lg-0">
                    {/* <!-- Logo --> */}
                    <a className="d-inline-flex align-items-center" href="index.html" aria-label="Front">
                        <img src="../../static/img/icon-dark.png" height="140" />
                    </a>
                    {/* <!-- End Logo --> */}
                </Col>

                <Col xs="6" lg="3" className="order-lg-4">
                    <p className="small">&copy; Copyright 2019 SolveOnline, Inc.</p>
                    <p className="small">All rights reserved.</p>
                </Col>
            </Row>
        </Container>
        {/* <!-- End Content --> */}

        {/* <!-- SVG Background Shape --> */}
        <figure className="ie-half-circle-1-1 w-35 position-absolute top-0 right-0 z-index-n1 mt-n11 mr-n11">
            <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-1.svg" alt="Image Description"
                data-parent="#SVGFooter" />
        </figure>

        <figure className="ie-half-circle-2-1 w-25 position-absolute bottom-0 left-0 z-index-n1 mb-n11 ml-n11">
            <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-2.svg" alt="Image Description"
                data-parent="#SVGFooter" />
        </figure>
        {/* <!-- End SVG Background Shape --> */}
    </footer>
)

export default HomeFooter
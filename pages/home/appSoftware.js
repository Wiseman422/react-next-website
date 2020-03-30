import HomeLayout from '../../components/layouts/HomeLayout';
import { Container, Row, Col, Button } from 'reactstrap'
import { faArrowRight, faCheck, faAlignCenter, faCodeBranch, faShapes, faClone, faCheckCircle, faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSVG from 'react-svg'
import '../../static/style.scss'

const Page = () => (

    <React.Fragment>
        {/* <!-- Hero Section --> */}
        <div id="SVGHero" className="gradient-overlay-half-indigo-v1 position-relative overflow-hidden">
            <Container className="space-2 space-top-md-5 space-top-lg-4">
                <div className="w-lg-60 text-center mx-lg-auto">
                <div className="mb-5">
                    <h1 className="">Say Hello to <b>Solve</b>Online</h1>
                    <p className="lead">Your <span className="text-primary">success hub</span> for digital marketing & technology solutions.</p>
                </div>
                <Button className="btn btn-wide transition-3d-hover" href="#">
                    Learn More
                </Button>
                <small className="d-block d-sm-inline-block text-muted my-3 my-sm-0 mx-sm-3">or</small>
                <Button color="primary" className="btn btn-primary btn-wide transition-3d-hover" href="#">
                    Signup
                    <FontAwesomeIcon icon={faArrowRight} className="small ml-2" />
                </Button>
                </div>
            </Container>

            {/* <!-- Mockup --> */}
            <Container className="space-2">
                <div className="position-relative w-lg-75 text-center mx-lg-auto">
                    <div className="position-relative shadow-lg z-index-2 rounded-lg">
                        <img className="img-fluid rounded-lg" src="../../static/img/rubiks-test.png" alt="Image Description" />
                    </div>

                    <figure className="max-width-15 w-100 position-absolute top-0 right-0">
                        <div className="mt-n11 mr-n11">
                        <ReactSVG className="js-svg-injector" src="../../static/svg/components/dots.svg" alt="Image Description"
                            data-parent="#SVGHero" />
                        </div>
                    </figure>
                    <figure className="max-width-15 w-100 position-absolute bottom-0 left-0">
                        <div className="mb-n7 ml-n7">
                        <ReactSVG className="js-svg-injector" src="../../static/svg/components/dots.svg" alt="Image Description"
                            data-parent="#SVGHero" />
                        </div>
                    </figure>
                </div>
            </Container>
            {/* <!-- End Mockup --> */}

            {/* <!-- SVG Background Shape --> */}
            <figure className="ie-half-circle-1-1 w-35 position-absolute top-0 right-0 z-index-n1 mt-n11 mr-n11">
                <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-1.svg" alt="Image Description"
                    data-parent="#SVGHero" />
            </figure>

            <figure className="ie-half-circle-2-1 w-25 position-absolute bottom-0 left-0 z-index-n1 mb-n11 ml-n11">
                <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-2.svg" alt="Image Description"
                    data-parent="#SVGHero" />
            </figure>
            {/* <!-- End SVG Background Shape --> */}
        </div>
        {/* <!-- End Hero Section --> */}

        {/* <!-- Clients Section --> */}
        <Container className="space-1">
            <div className="w-lg-75 mx-lg-auto">
                <div className="text-center mb-4">
                    <h2 className="u-divider u-divider--text">Solutions tailored for success</h2>
                </div>

                <Row className="justify-content-between text-center">
                    <Col xs="4" lg="2" className="mb-5 mb-lg-0">
                        <div className="mx-4">
                        <img className="u-clients" src="../../static/img/LeadSolve512x512.png" alt="Image Description" />
                        </div>
                    </Col>
                    <Col xs="4" lg="2" className="mb-5 mb-lg-0">
                        <div className="mx-4">
                        <img className="u-clients" src="../../static/img/RealtorSolve512x512.png" alt="Image Description" />
                        </div>
                    </Col>
                    <Col xs="4" lg="2" className="mb-5 mb-lg-0">
                        <div className="mx-4">
                            <img className="u-clients" src="../../static/img/DevelopSolve512x512.png" alt="Image Description" />
                        </div>
                    </Col>
                    <Col xs="4" lg="2" className="mb-5 mb-lg-0">
                        <div className="mx-4">
                            <img className="u-clients" src="../../static/img/PageSolve512x512.png" alt="Image Description" />
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
        {/* <!-- End Clients Section --> */}

        {/* <!-- Features Section --> */}
        <Container className="space-2 space-lg-3">
            <Row className="align-items-lg-center">
                <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                <div className="mb-5">
                    <h2 className="font-weight-medium">LeadSolve</h2>
                    <p>LeadSolve solutions enable businesses to rely on a team with years of experience in marketing technology to generate more leads, more revenue and improve their users experience and happiness.</p>
                </div>

                {/* <!-- Info --> */}
                <ul className="list-unstyled">
                    <li className="media align-items-center pb-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Managed Marketing</p>
                    </div>
                    </li>
                    <li className="media align-items-center py-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Self Service Marketing</p>
                    </div>
                    </li>
                    <li className="media align-items-center pt-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Digital Marketing Software</p>
                    </div>
                    </li>
                </ul>
                {/* <!-- End Info --> */}
                </div>

                <div className="col-lg-7 order-lg-1">
                    {/* <!-- Card Block --> */}
                    <div id="featuresSVG1" className="pr-lg-4">
                        <div className="card border-0 bg-leadsolve-dark text-white text-center w-lg-75 overflow-hidden pt-9 px-5 mx-lg-auto">

                        {/* <!-- SVG Phone Mockup --> */}
                        <div className="w-85 u-devices-v2__phone-svg mx-auto">
                            <figure className="ie-half-iphone-x-1-iphone">
                            <img className="js-svg-injector" src="../../static/img/leadsolve-stacked-dark.png" style={{height:225}} alt="Image Description"
                                data-parent="#featuresSVG1" />
                            </figure>
                        </div>
                        {/* <!-- End SVG Phone Mockup --> */}
                            <div className="px-5 mb-5">
                                <h3 className="h6">Digital Marketing Technology</h3>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card Block --> */}
                </div>
            </Row>
        </Container>
        {/* <!-- End Features Section --> */}

        {/* <!-- CTA Section --> */}
        {/*<Container>
        <div className="w-lg-85 mx-lg-auto">
            <div id="SVGCTA" className="card border-0 shadow overflow-hidden p-5">
            <Row className="justify-content-md-start align-items-md-center text-center text-md-left">
                <div className="col-md-8 col-lg-5 offset-lg-3 mb-3 mb-md-0">
                <h3 className="h4 text-indigo font-weight-medium mb-0">Solutions tailored for success. Explore them now!</h3>
                </div>

                <div className="col-md-4 text-md-right">
                <a className="btn btn-primary transition-3d-hover" href="#">Explore Solutions</a>
                </div>
            </Row>

            <figure className="ie-half-circle-2-2 w-35 position-absolute top-0 left-0 mt-n11 ml-n11">
                <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-2.svg" alt="Image Description"
                    data-parent="#SVGCTA" />
            </figure>
            </div>
        </div>
        </Container>*/}
        {/* <!-- End CTA Section --> */}

        {/* <!-- Features Section --> */}
        <Container className="space-2">
        <Row className="align-items-lg-center">
            <div className="col-lg-5 mb-7 mb-lg-0">
                <div className="mb-5">
                    <h2 className="font-weight-medium">RealtorSolve</h2>
                    <p>Peer-to-Peer Real Estate, buy and sell your home without a real estate agent. Covering 100% of home buying and selling process.</p>
                </div>

                {/* <!-- Info --> */}
                <ul className="list-unstyled">
                    <li className="media pb-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-4">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Home Buyers</p>
                    </div>
                    </li>
                    <li className="media py-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-4">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Home Sellers</p>
                    </div>
                    </li>
                    <li className="media pt-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-4">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body">
                        <p className="text-dark mb-0">Self Serve Real Estate</p>
                    </div>
                    </li>
                </ul>
                {/* <!-- End Info --> */}
            </div>

            <div className="col-lg-7">
            {/* <!-- Card Block --> */}
            <div id="featuresSVG2" className="pl-lg-4">
                <div className="card border-0 bg-realtorsolve-dark text-white text-center w-lg-75 overflow-hidden pt-9 px-5 mx-lg-auto">
                <div className="px-5 mb-5">
                    <h3 className="h6">Self Serve Real Estate</h3>
                </div>

                {/* <!-- SVG Phone Mockup --> */}
                <div className="w-85 u-devices-v2__phone-svg mx-auto">
                    <figure className="ie-half-iphone-x-1-iphone">
                    <img className="js-svg-injector" src="../../static/img/realtorsolve-stacked-dark.png" style={{height:225}} alt="Image Description"
                        data-parent="#featuresSVG2" />
                    </figure>
                </div>
                {/* <!-- End SVG Phone Mockup --> */}
                </div>
            </div>
            {/* <!-- End Card Block --> */}
            </div>
        </Row>
        </Container>
        {/* <!-- End Features Section --> */}

        {/* <!-- Features Section --> */}
        <Container className="space-2">
            <Row className="align-items-lg-center">
                <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                    <div className="mb-5">
                        <h2 className="font-weight-medium">DevelopSolve</h2>
                        <p>DevelopSolve desc</p>
                    </div>

                    {/* <!-- Info --> */}
                    <ul className="list-unstyled">
                        <li className="media align-items-center pb-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                            <div className="media-body">
                                <p className="text-dark mb-0">Managed Marketing</p>
                            </div>
                        </li>
                        <li className="media align-items-center py-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                            <div className="media-body">
                                <p className="text-dark mb-0">Self Service Marketing</p>
                            </div>
                        </li>
                        <li className="media align-items-center pt-3">
                    <span className="btn btn-icon btn-sm btn-soft-indigo rounded-circle mr-3">
                        <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                            <div className="media-body">
                                <p className="text-dark mb-0">Digital Marketing Software</p>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- End Info --> */}
                </div>

                <div className="col-lg-7 order-lg-1">
                    {/* <!-- Card Block --> */}
                    <div id="featuresSVG1" className="pr-lg-4">
                        <div className="card border-0 bg-developsolve-dark text-white text-center w-lg-75 overflow-hidden pt-9 px-5 mx-lg-auto">

                            {/* <!-- SVG Phone Mockup --> */}
                            <div className="w-85 u-devices-v2__phone-svg mx-auto">
                                <figure className="ie-half-iphone-x-1-iphone">
                                    <img className="js-svg-injector" src="../../static/img/developsolve-stacked-dark.png" style={{height:225}} alt="Image Description"
                                         data-parent="#featuresSVG1" />
                                </figure>
                            </div>
                            {/* <!-- End SVG Phone Mockup --> */}
                            <div className="px-5 mb-5">
                                <h3 className="h6">Software Development Solutions</h3>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card Block --> */}
                </div>
            </Row>
        </Container>
        {/* <!-- End Features Section --> */}

        {/* <!-- Icons Section --> */}
        <div className="position-relative gradient-overlay-half-primary-v3 overflow-hidden">
            <Container className="space-top-2 space-top-lg-3">
                {/* <!-- Title --> */}
                <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
                <h2 className="text-dark font-weight-medium">Go Front with ease.</h2>
                <p className="text-dark-70">Whether you’re a seasoned agile expert, or just getting started, Jira Software unlocks the power of agile.</p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Icon Blocks --> */}
                <div className="w-lg-80 mx-lg-auto mb-11">
                    <Row className="mb-9">
                        <div className="col-6 col-md-4 mb-7">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faAlignCenter} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Flexible planning</h4>
                        <p className="text-dark-70">Front Software's rich planning features enable your team to flexibly plan.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>

                        <div className="col-6 col-md-4 mb-7">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faCodeBranch} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Accurate estimations</h4>
                        <p className="text-dark-70">Use story points, hours, t-shirt sizes, or your own estimation technique.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>

                        <div className="col-6 col-md-4 mb-7 mb-md-0">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faShapes} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Value-driven prioritization</h4>
                        <p className="text-dark-70">Order user stories, issues, and bugs in your product backlog with simple dragging.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>

                        <div className="col-6 col-md-4 mb-7 mb-md-0">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faClone} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Transparent execution</h4>
                        <p className="text-dark-70">Front Software brings a new level of transparency to your team's work.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>

                        <div className="col-6 col-md-4">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Actionable results</h4>
                        <p className="text-dark-70">Extensive reporting functionality gives your team critical insight into their agile process.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>

                        <div className="col-6 col-md-4">
                        {/* <!-- Icon Block --> */}
                        <span className="d-block text-dark font-size-2 mb-3">
                            <FontAwesomeIcon icon={faCompress} />
                        </span>
                        <h4 className="h6 text-dark font-weight-semi-bold mb-3">Scalable evolution <span className="badge badge-warning font-weight-medium badge-pill ml-1">Coming soon</span></h4>
                        <p className="text-dark-70">Front Software is agile project management designed for any teams.</p>
                        {/* <!-- End Icon Block --> */}
                        </div>
                    </Row>

                    {/* <!-- Buttons --> */}
                    <div className="text-center">
                        <div className="mb-3">
                            <a className="btn btn-sm btn-white btn-wide text-primary transition-3d-hover" href="#">Sign up and Start Building</a>
                            <small className="d-block d-sm-inline-block text-dark-70 my-3 my-sm-0 mx-sm-3">or</small>
                            <a className="btn btn-sm btn-indigo btn-wide transition-3d-hover" href="#">Talk to our Experts</a>
                        </div>
                        <p className="small text-dark-70">Start free trial. * No credit card required.</p>
                    </div>
                    {/* <!-- End Buttons --> */}
                </div>
                {/* <!-- End Icon Blocks --> */}

                <div className="w-85 w-md-75 w-lg-65 text-center mx-auto">
                    <ReactSVG className="img-fluid" src="../../static/svg/illustrations/ai-creation.svg" alt="Image Description" />
                </div>
            </Container>

            {/* <!-- SVG Background Shape --> */}
            <figure className="w-35 position-absolute top-0 right-0 z-index-n1">
                <div className="mt-n11 mr-n11">
                    <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-3.svg" alt="Image Description"
                        data-parent="#SVGHero" />
                </div>
            </figure>
            <figure className="w-25 position-absolute bottom-0 left-0 z-index-n1">
                <div className="mb-n11 ml-n11">
                    <ReactSVG className="js-svg-injector" src="../../static/svg/components/half-circle-2.svg" alt="Image Description"
                        data-parent="#SVGHero" />
                </div>
            </figure>
            {/* <!-- End SVG Background Shape --> */}
        </div>
        {/* <!-- End Icons Section --> */}

        {/* <!-- Pricing Section --> */}
        <Container className="space-2">
        {/* <!-- Title --> */}
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
            <h2 className="font-weight-medium">Choose a plan that's right for you.</h2>
            <p>Everything you need. From front to back.</p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Table --> */}
        <div className="table-responsive-lg w-lg-75 mx-lg-auto">
            <table className="table table-striped table-borderless">
            <thead className="text-center">
                <tr>
                <th scope="col" className="w-40"></th>
                <th scope="col" className="w-20">
                    Starter
                    <small className="d-block text-secondary">$0/mon</small>
                </th>
                <th scope="col" className="w-20 border-left border-right">
                    Growth
                    <span className="badge badge-warning font-weight-medium badge-pill ml-1">Hot</span>
                    <small className="d-block text-secondary">$60/mon</small>
                </th>
                <th scope="col" className="w-20">
                    Scale
                    <small className="d-block text-secondary">Custom</small>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-top border-bottom">
                <th scope="row" className="h6 bg-white pt-5 pb-3 px-4 mb-0">Cross-platform UI toolkit</th>
                <td className="bg-white"></td>
                <td className="bg-white border-left border-right"></td>
                <td className="bg-white"></td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">14-days free trial</th>
                <td className="text-center text-success p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-center text-success border-left border-right p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">No user limit</th>
                <td className="text-center text-secondary p-3"></td>
                <td className="text-center text-success border-left border-right p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">Long-term support</th>
                <td className="text-center text-secondary py-3 px-4"></td>
                <td className="text-center text-secondary border-left border-right py-3 px-4"></td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">Email support</th>
                <td className="text-center text-secondary p-3">
                    <span className="btn btn-xs btn-soft-primary btn-pill font-weight-medium text-uppercase py-1 px-2">Add-on available</span>
                </td>
                <td className="text-center text-secondary border-left border-right py-3 px-4"></td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="h6 bg-white pt-5 pb-3 px-4 mb-0">Developer tools</th>
                <td className="bg-white"></td>
                <td className="bg-white border-left border-right"></td>
                <td className="bg-white"></td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">Removal of Front branding</th>
                <td className="text-center text-secondary p-3"></td>
                <td className="text-center text-success border-left border-right p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">Active maintenance &amp; support</th>
                <td className="text-center text-success p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-center text-success border-left border-right p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="font-size-1 font-weight-normal py-3 px-4">Data storage for 365 days</th>
                <td className="text-center text-secondary p-3"></td>
                <td className="text-center text-secondary border-left border-right p-3">
                    <span className="btn btn-xs btn-soft-primary btn-pill font-weight-medium text-uppercase py-1 px-2">Add-on available</span>
                </td>
                <td className="text-success text-center p-3">
                    <FontAwesomeIcon icon={faCheck} className="small" />
                </td>
                </tr>
                <tr>
                <th scope="row" className="bg-white p-3"></th>
                <td className="bg-white text-center p-3">
                    <button type="button" className="btn btn-xs btn-soft-indigo text-nowrap transition-3d-hover">Choose Plan</button>
                </td>
                <td className="bg-white text-center border-left border-right p-3">
                    <button type="button" className="btn btn-xs btn-soft-indigo text-nowrap transition-3d-hover">Choose Plan</button>
                </td>
                <td className="bg-white text-center p-3">
                    <button type="button" className="btn btn-xs btn-primary text-nowrap transition-3d-hover">Contact Us</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        {/* <!-- End Table --> */}
        </Container>
        {/* <!-- End Pricing Section --> */}
    </React.Fragment>
)
export default HomeLayout(Page)

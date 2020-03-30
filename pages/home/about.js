import HomeLayout from '../../components/layouts/HomeLayout';
import { Container, Row, Col, Button } from 'reactstrap'
import ReactSVG from 'react-svg'
import '../../static/style.scss'

const About = () => (

    <React.Fragment>
        {/* {/*  Hero Section */}
        <Container>
        {/*  Process Section */}
    <div id="featuresSection" className="container text-center space-2 space-md-3">
      {/*  Title */}
      <div className="w-md-80 w-lg-50 mx-auto mb-9">
        <span className="btn btn-xs btn-soft-success btn-pill mb-2">Why Front</span>
        <h2 className="text-primary">Built for <span className="font-weight-semi-bold">everyone</span></h2>
        <p>Our goal is to power innovation, wherever that may be.</p>
      </div>
      {/*  End Title */}

      <div className="row">
        <div className="col-md-4 mb-7 mb-md-0">
          {/*  Process */}
          <div className="text-center">
            <div className="position-relative">
              <div id="SVGcircleProcess1" className="svg-preloader u-indicator-dots min-height-155 mb-2">
                {/*  Icon */}

                {/*  SVG Shape */}
                  <img src="../../static/img/leadsolve-icon.png" alt="Image Description"
                       data-parent="#SVGcircleProcess1" />
                
                {/*  End SVG Shape */}
              </div>
            </div>

            <h3 className="h5">Professional Design</h3>
            <p className="mb-md-0">Achieve virtually any design and layout from within the one template.</p>
          </div>
          {/*  End Process */}
        </div>

        <div className="col-md-4 mb-7 mb-md-0">
          {/*  Process */}
          <div className="text-center">
            <div className="position-relative">
              <div id="SVGcircleProcess2" className="svg-preloader u-indicator-dots min-height-155 mb-2">
                {/*  Icon */}
                <span className="text-primary btn btn-lg btn-icon mt-7">
                  <span className="fas fa-fire font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span>
                </span>
                {/*  End Icon */}

                {/*  SVG Shape */}
                <figure className="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                  <ReactSVG src="../../static/svg/components/circle-process-2.svg" alt="Image Description"
                       data-parent="#SVGcircleProcess2" />
                </figure>
                {/*  End SVG Shape */}
              </div>
            </div>

            <h3 className="h5">Front Strategy</h3>
            <p className="mb-md-0">We strive to figure out ways to help your business grow through all platforms.</p>
            {/*  End Process */}
          </div>
        </div>

        <div className="col-md-4">
          {/*  Process */}
          <div className="text-center">
            <div id="SVGcircleProcess3" className="svg-preloader min-height-155 mb-2">
              {/*  Icon */}
              <span className="text-danger btn btn-lg btn-icon mt-7">
                <span className="fab fa-whmcs font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span>
              </span>
              {/*  End Icon */}

              {/*  SVG Shape */}
                <figure className="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                  <ReactSVG className="js-svg-injector" src="../../static/svg/components/circle-process-3.svg" alt="Image Description"
                       data-parent="#SVGcircleProcess3" />
                </figure>
                {/*  End SVG Shape */}
            </div>

            <h3 className="h5">Unlimited Power</h3>
            <p className="mb-md-0">Find what you need in one template and combine features at will.</p>
            {/*  End Process */}
          </div>
        </div>
      </div>
    </div>
    {/* End Process Section */}
        </Container>
        {/* End Pricing Section */}
    </React.Fragment>
)
export default HomeLayout(About)

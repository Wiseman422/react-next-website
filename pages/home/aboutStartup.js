import HomeLayout from '../../components/layouts/HomeLayout';
import { faYelp, faFire, faWhmcs} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

import ReactSVG from 'react-svg'
import '../../static/style.scss'

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="SVGwave1BottomSM" className="position-relative bg-light bg-img-hero-background">
          <div className="d-md-flex bg-img-hero">
            {/* <!-- Hero Carousel --> */}
            {/* <div className="js-slick-carousel u-slick container d-md-flex align-items-md-center space-top-2 space-bottom-4 space-md-4 space-lg-0 height-md-100vh"
                data-infinite="true"
                data-autoplay="true"
                data-speed="7000"
                data-fade="true">


            </div> */}
            <div style={{margin:'0 auto', height: 550}}>
                {/* <!-- Slide #1 --> */}
                <div className="text-center space-top-2 w-lg-60 mx-auto">
                  <div className="mb-7">
                    <h1 className="display-3 font-size-md-down-5 text-primary font-weight-semi-bold">Make Front do it.</h1>
                    <p className="lead">Start knowing what your attendees value, and win more business with Front template.</p>
                  </div>
                  <a className="btn btn-primary btn-wide btn-pill transition-3d-hover" href="login-simple.html">Get Started</a>
                </div>
                {/* <!-- End Slide #1 --> */}
              </div>
            {/* <!-- End Hero Carousel --> */}
          </div>

          {/* <!-- SVG Background --> */}
          <figure className="position-absolute right-0 bottom-0 left-0">
            <ReactSVG className="js-svg-injector" src="../../static/svg/components/wave-1-bottom-sm.svg" alt="Image Description"
                data-parent="#SVGwave1BottomSM"/>
          </figure>
          {/* <!-- End SVG Background Section --> */}
        </div>
        {/* <!-- End Hero Section --> */}

        {/* <!-- Process Section --> */}
        <div id="featuresSection" className="container text-center space-2 space-md-3">
          {/* <!-- Title --> */}
          <div className="w-md-80 w-lg-50 mx-auto mb-9">
            <span className="btn btn-xs btn-soft-success btn-pill mb-2">Why Front</span>
            <h2 className="text-primary">Built for <span className="font-weight-semi-bold">everyone</span></h2>
            <p>Our goal is to power innovation, wherever that may be.</p>
          </div>
          {/* <!-- End Title --> */}

          <div className="row">
            <div className="col-md-4 mb-7 mb-md-0">
              {/* <!-- Process --> */}
              <div className="text-center">
                <div className="position-relative">
                  <div id="SVGcircleProcess1" className="u-indicator-dots min-height-155 mb-2">
                    {/* <!-- Icon --> */}
                    <span className="text-success btn btn-lg btn-icon mt-7">
                      {/* <span className="fab fa-yelp font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span> */}
                      <FontAwesomeIcon icon={faYelp} className="btn-icon__inner" />
                    </span>
                    {/* <!-- End Icon --> */}

                    {/* <!-- SVG Shape --> */}
                    <figure className="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                      <ReactSVG className="js-svg-injector" src="../../static/svg/components/circle-process-1.svg" alt="Image Description"
                          data-parent="#SVGcircleProcess1"/>
                    </figure>
                    {/* <!-- End SVG Shape --> */}
                  </div>
                </div>

                <h3 className="h5">Professional Design</h3>
                <p className="mb-md-0">Achieve virtually any design and layout from within the one template.</p>
              </div>
              {/* <!-- End Process --> */}
            </div>

            <div className="col-md-4 mb-7 mb-md-0">
              {/* <!-- Process --> */}
              <div className="text-center">
                <div className="position-relative">
                  <div id="SVGcircleProcess2" className="u-indicator-dots min-height-155 mb-2">
                    {/* <!-- Icon --> */}
                    <span className="text-primary btn btn-lg btn-icon mt-7">
                      {/* <span className="fas fa-fire font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span> */}
                      <FontAwesomeIcon icon={faFire} className="btn-icon__inner" />
                    </span>
                    {/* <!-- End Icon --> */}

                    {/* <!-- SVG Shape --> */}
                    <figure className="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                      <ReactSVG className="js-svg-injector" src="../../static/svg/components/circle-process-2.svg" alt="Image Description"
                          data-parent="#SVGcircleProcess2"/>
                    </figure>
                    {/* <!-- End SVG Shape --> */}
                  </div>
                </div>

                <h3 className="h5">Front Strategy</h3>
                <p className="mb-md-0">We strive to figure out ways to help your business grow through all platforms.</p>
                {/* <!-- End Process --> */}
              </div>
            </div>

            <div className="col-md-4">
              {/* <!-- Process --> */}
              <div className="text-center">
                <div id="SVGcircleProcess3" className="min-height-155 mb-2">
                  {/* <!-- Icon --> */}
                  <span className="text-danger btn btn-lg btn-icon mt-7">
                    {/* <span className="fab fa-whmcs font-size-5 btn-icon__inner btn-icon__inner-bottom-minus"></span> */}
                    <FontAwesomeIcon icon={faWhmcs} className="btn-icon__inner" />
                  </span>
                  {/* <!-- End Icon --> */}

                  {/* <!-- SVG Shape --> */}
                    <figure className="w-100 position-absolute top-0 right-0 left-0 z-index-n1">
                      <ReactSVG className="js-svg-injector" src="../../static/svg/components/circle-process-3.svg" alt="Image Description"
                          data-parent="#SVGcircleProcess3"/>
                    </figure>
                    {/* <!-- End SVG Shape --> */}
                </div>

                <h3 className="h5">Unlimited Power</h3>
                <p className="mb-md-0">Find what you need in one template and combine features at will.</p>
                {/* <!-- End Process --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Process Section --> */}

        {/* <!-- Testimonials Section --> */}
        <div className="bg-img-hero img12">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 col-xl-4 space-2">
                {/* <!-- Testimonials --> */}
                <div className="card shadow-sm">
                  <div className="card-body p-7">
                    <CarouselProvider
                      naturalSlideWidth={300}
                      naturalSlideHeight={400}  //575 595 615 400
                      totalSlides={2}
                      // step={1}
                      // dragStep={1}
                      visibleSlides={1}
                      className="js-slick-carousel u-slick"
                    >        
                      {/* <!-- Testimonials --> */}
                      <Slider>
                      <Slide className="pure-slide" index={0}>
                        {/* <!-- SVG Quote --> */}
                        <figure className="mb-4">
                          <ReactSVG className="js-svg-injector" src="../../static/svg/components/dot-1.svg" alt="Image Description"
                              data-parent="#SVGHero" />
                        </figure>
                        {/* <!-- End SVG Quote --> */}

                        {/* <!-- Text --> */}
                        <blockquote className="h6 font-weight-normal text-lh-md mb-4">The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!</blockquote>
                        {/* <!-- End Text --> */}

                        {/* <!-- Author --> */}
                        <div className="media">
                          <div className="u-avatar mr-3">
                             <img className="img-fluid rounded-circle" src="../../static/img/100x100/img1.jpg" alt="Image Description"/>
                          </div>
                          <div className="media-body">
                            <h4 className="h6 mb-0">Maria Muszynska</h4>
                            <p className="small">Google</p>
                          </div>
                        </div>
                        {/* <!-- End Author --> */}
                      </Slide>
                      {/* <!-- End Testimonials --> */}

                      {/* <!-- Testimonials --> */}
                      <Slide className="pure-slide" index={1}>
                        {/* <!-- SVG Quote --> */}
                        <figure className="mb-4">
                          <ReactSVG className="js-svg-injector" src="../../static/svg/components/dot-1.svg" alt="Image Description"
                              data-parent="#SVGHero" />
                        </figure>
                        {/* <!-- End SVG Quote --> */}

                        {/* <!-- Text --> */}
                        <blockquote className="h6 font-weight-normal text-lh-md mb-4">If you can design one thing you can design everything with Front. Just believe it.</blockquote>
                        {/* <!-- End Text --> */}

                        {/* <!-- Author --> */}
                        <div className="media">
                          <div className="u-avatar mr-3">
                             <img className="img-fluid rounded-circle" src="../../static/img/100x100/img3.jpg" alt="Image Description"/>
                          </div>
                          <div className="media-body">
                            <h4 className="h6 mb-0">Alex Pottorf</h4>
                            <p className="small">Github</p>
                          </div>
                        </div>
                        {/* <!-- End Author --> */}
                      </Slide>
                      {/* <!-- End Testimonials --> */}
                      </Slider>
                      <div style={{textAlign:'center'}}>
                        <Dot slide={0}/>
                        <Dot slide={1}/>                        
                      </div>                      
                    </CarouselProvider>
                  </div>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Testimonials Section --> */}
        {/* <!-- Features Section --> */}
        <div id="SVGelements" className="">
          {/* <!-- SVG Background --> */}
          <figure className="position-absolute right-0 bottom-0 left-0">
            <ReactSVG className="js-svg-injector" src="../../static/svg/components/wave-1-bottom-sm.svg" alt="Image Description"
                data-parent="#SVGelements" />
          </figure>
          {/* <!-- End SVG Background --> */}

          <div className="gradient-half-primary-v3">
            <div className="container space-top-2 space-top-md-3 space-bottom-1">
              <div className="row justify-content-lg-between align-items-lg-start">
                <div className="col-lg-5 mb-9 mb-lg-0">
                  {/* <!-- Title --> */}
                  <div className="pr-md-4 mb-4">
                    <span className="btn btn-xs btn-soft-success btn-pill mb-2">Join Front</span>
                    <h2 className="text-primary">Let's get you <span className="font-weight-semi-bold">started</span></h2>
                    <p>Start knowing what your attendees value, and win more business with Front template.</p>
                  </div>
                  {/* <!-- End Title --> */}

                  <a className="btn btn-primary btn-wide btn-pill transition-3d-hover mr-1 mb-2" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">Buy Now</a>
                  <a className="btn btn-soft-primary btn-wide btn-pill transition-3d-hover ml-1 mb-2" href="login-simple.html">Get Started</a>
                </div>

                <div className="col-lg-6 mt-auto">
                  {/* <!-- SVG Icon --> */}
                  <figure className="ie-working-men">
                    <ReactSVG className="js-svg-injector" src="../../static/svg/illustrations/working-men.svg" alt="SVG Illustration"
                        data-parent="#SVGelements"/>
                  </figure>
                  {/* <!-- End SVG Icon --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Features Section --> */}
      </React.Fragment>
    )
  }
}

export default HomeLayout(Page)

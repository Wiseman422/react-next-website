import HomeLayout from '../../components/layouts/HomeLayout';
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

import ReactSVG from 'react-svg'
import '../../static/style.scss'

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      visibleSlides: 4,
      slideHeight: 615,//575 595 615 400
    };
  }
  updateDimensions = () => {
    const innerWidth = window.innerWidth
    const visibleSlides = innerWidth > 1000 ? 4 :
                          innerWidth > 820 ? 3 :
                          innerWidth > 730 ? 2 : 1
    const slideHeight = innerWidth > 1000 ? 575 :
                        innerWidth > 820 ? 675 :
                        innerWidth > 730 ? 615 : 400
    this.setState({
      visibleSlides,
      slideHeight,
      width: window.innerWidth
    });
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  dotGroup = () => {
    const { visibleSlides } = this.state
    const dotGroup3 = (
      <React.Fragment>
        <Dot slide={0}/>
        <Dot slide={3}/>
      </React.Fragment>      
    )
    const dotGroup2 = (
      <React.Fragment>
        <Dot slide={0}/>
        <Dot slide={3}/>
      </React.Fragment>      
    )
    const dotGroup1 = (
      <React.Fragment>
        <Dot slide={0}/>
        <Dot slide={1}/>
        <Dot slide={2}/>
        <Dot slide={3}/>
      </React.Fragment>      
    )    
    if ( visibleSlides == 4 ) return null
    if ( visibleSlides == 3 ) return dotGroup3
    if ( visibleSlides == 2 ) return dotGroup2
    if ( visibleSlides == 1 ) return dotGroup1
  }
  render() {
    const { visibleSlides, slideHeight } = this.state
    return (
      <React.Fragment>
         {/* <!-- Hero Section --> */}
          <div id="SVGHero" className="position-relative bg-primary">
            <div className="container space-3 space-top-md-4 space-top-lg-3 space-bottom-lg-0">
              <div className="row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-5 mb-7 mb-lg-0">
                  {/* <!-- Info --> */}
                  <h1 className="display-4 font-size-md-down-5 text-white font-weight-semi-bold"><span className="text-warning">Improve</span> &amp; boost your services</h1>
                  <p className="text-white-70">Front provides all kinds of services and will help your audience grow through all platforms.</p>
                  {/* <!-- End Info --> */}
                </div>

                <div className="col-lg-6 d-none d-lg-inline-block">
                  {/* <!-- SVG Icon --> */}
                  <figure className="ie-knowledgebase-community-2">
                    <ReactSVG className="js-svg-injector" src="../../static/svg/illustrations/knowledgebase-community-2.svg" alt="SVG Illustration"
                        data-parent="#SVGHero" />
                  </figure>
                  {/* <!-- End SVG Icon --> */}
                </div>
              </div>
            </div>

            {/* <!-- SVG Bottom Shape --> */}
            <figure className="position-absolute right-0 bottom-0 left-0">
              <ReactSVG className="js-svg-injector" src="../../static/svg/components/curved-1-lg.svg" alt="Image Description"
                  data-parent="#SVGHero" />
            </figure>
            {/* <!-- End SVG Bottom Shape --> */}
          </div>
          {/* <!-- End Hero Section --> */}

          {/* <!-- Services Section --> */}
          <div className="container space-2 space-top-md-3">
            {/* <!-- Title --> */}
            <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
              <span className="btn btn-xs btn-soft-warning btn-pill mb-2">Services</span>
              <h2 className="text-primary">Service we <span className="font-weight-semi-bold">provide</span></h2>
              <p>Enhance your brand with easy-to-use powerful customization features</p>
            </div>
            {/* <!-- End Title --> */}

            <div className="row justify-content-md-between align-items-center">
              <div className="col-md-6 col-lg-5 mb-7 mb-md-0">
                <ul className="list-unstyled u-indicator-vertical-dashed pr-md-4">
                  {/* <!-- Info --> */}
                  <li className="media u-indicator-vertical-dashed-item">
                    <span className="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                      <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body mt-n1">
                      <h3 className="h5 text-primary">Responsive design</h3>
                      <p>Responsive design has grown from a preference to a necessity.</p>
                    </div>
                  </li>
                  {/* <!-- End Info --> */}

                  {/* <!-- Info --> */}
                  <li className="media u-indicator-vertical-dashed-item">
                    <span className="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                      <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body mt-n1">
                      <h3 className="h5 text-primary">Hosting</h3>
                      <p>We know that business never stops, and neither should your website.</p>
                    </div>
                  </li>
                  {/* <!-- End Info --> */}

                  {/* <!-- Info --> */}
                  <li className="media u-indicator-vertical-dashed-item">
                    <span className="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                      <FontAwesomeIcon icon={faCheck} className="btn-icon__inner" />
                    </span>
                    <div className="media-body mt-n1">
                      <h3 className="h5 text-primary">Search engine optimization</h3>
                      <p>Improve your website's ranking in search results with our comprehensive SEO packages and services.</p>
                    </div>
                  </li>
                  {/* <!-- End Info --> */}
                </ul>
              </div>

              <div id="SVGellipseMockup" className="col-md-6">
                {/* <!-- Fancybox --> */}
                <a className="js-fancybox u-media-player u-media-player--centered" href="javascript:;"
                  data-src="//vimeo.com/167434033"
                  data-speed="700"
                  data-animate-in="zoomIn"
                  data-animate-out="zoomOut"
                  data-caption="Front - Responsive Website Template">
                <span className="u-media-player__icon u-media-player__icon--xl text-primary">
                  {/* <span className="fas fa-play u-media-player__icon-inner"></span> */}
                  <FontAwesomeIcon icon={faPlay} className="btn-icon__inner" />
                </span>
                </a>
                {/* <!-- End Fancybox --> */}

                {/* <!-- SVG Mockup --> */}
                <figure className="ie-ellipse-mockup">
                  <ReactSVG className="js-svg-injector" src="../../static/svg/illustrations/ellipse-mockup.svg" alt="Image Description"
                      data-img-paths='[
                        {"targetId": "#SVGellipseMockupImg1", "newPath": "../../static/img/615x750/img3.jpg"}
                      ]'
                      data-parent="#SVGellipseMockup" />
                </figure>
                {/* <!-- End SVG Mockup --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Services Section --> */}

          {/* <!-- Pricing Section --> */}
          <div id="SVGpricingSectionBgShapes" className="position-relative bg-primary">
            <div className="container space-top-3 space-top-md-5">
              {/* <!-- Title --> */}
              <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
                <h2 className="text-white">All plans include a <span className="font-weight-semi-bold">30 day free</span> trial</h2>
                <p className="text-white-70">Choose the most suitable service for your needs with reasonable price.</p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- Pricing Carousel --> */}
              <CarouselProvider
                naturalSlideWidth={300}
                naturalSlideHeight={slideHeight}  //575 595 615 400
                totalSlides={4}
                // step={1}
                // dragStep={1}
                visibleSlides={visibleSlides}
                className="js-slick-carousel u-slick u-slick--gutters-2 z-index-2 mb-4"
              >        
              <Slider>          
                <Slide className="pure-slide" index={0}>
                  {/* <!-- Pricing --> */}
                  <div className="card">
                    {/* <!-- Header --> */}
                    <header className="card-header text-center p-5">
                      <h4 className="h6 text-primary mb-3">Starter</h4>
                      <span className="d-block">
                        <span className="display-4 text-dark font-weight-normal">
                          <span className="align-top font-size-2">$</span>22
                        </span>
                        <span className="d-block text-secondary font-size-1">per month</span>
                      </span>
                    </header>
                    {/* <!-- End Header --> */}

                    {/* <!-- Content --> */}
                    <div className="card-body p-5">
                      <ul className="list-group list-group-flush list-group-borderless mb-4">
                        <li className="list-group-item">Community support</li>
                        <li className="list-group-item">400+ pages</li>
                      </ul>

                      <button type="button" className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Starter</button>
                    </div>
                    {/* <!-- End Content --> */}
                  </div>
                  {/* <!-- End Pricing --> */}
                </Slide>

                <Slide className="pure-slide" index={1}>
                  {/* <!-- Pricing --> */}
                  <div className="card">
                    {/* <!-- Header --> */}
                    <header className="card-header text-center p-5">
                      <h4 className="h6 text-warning mb-3">Basic</h4>
                      <span className="d-block">
                        <span className="display-4 text-dark font-weight-normal">
                          <span className="align-top font-size-2">$</span>44
                        </span>
                        <span className="d-block text-secondary font-size-1">per month</span>
                      </span>
                    </header>
                    {/* <!-- End Header --> */}

                    {/* <!-- Content --> */}
                    <div className="card-body p-5">
                      <ul className="list-group list-group-flush list-group-borderless mb-4">
                        <li className="list-group-item">Community support</li>
                        <li className="list-group-item">400+ pages</li>
                        <li className="list-group-item">100+ header variations</li>
                      </ul>

                      <button type="button" className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Basic</button>
                    </div>
                    {/* <!-- End Content --> */}
                  </div>
                  {/* <!-- End Pricing --> */}
                </Slide>

                <Slide className="pure-slide" index={2}>
                  {/* <!-- Pricing --> */}
                  <div className="card">
                    {/* <!-- Header --> */}
                    <header className="card-header text-center p-5">
                      <h4 className="h6 text-success mb-3">Company</h4>
                      <span className="d-block">
                        <span className="display-4 text-dark font-weight-normal">
                          <span className="align-top font-size-2">$</span>69
                        </span>
                        <span className="d-block text-secondary font-size-1">per month</span>
                      </span>
                    </header>
                    {/* <!-- End Header --> */}

                    {/* <!-- Content --> */}
                    <div className="card-body p-5">
                      <ul className="list-group list-group-flush list-group-borderless mb-4">
                        <li className="list-group-item">Community support</li>
                        <li className="list-group-item">400+ pages</li>
                        <li className="list-group-item">100+ header variations</li>
                        <li className="list-group-item">20+ home page options</li>
                      </ul>

                      <button type="button" className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Free Trial</button>
                    </div>
                    {/* <!-- End Content --> */}
                  </div>
                  {/* <!-- End Pricing --> */}
                </Slide>

                <Slide className="pure-slide" index={3}>
                  {/* <!-- Pricing --> */}
                  <div className="card">
                    {/* <!-- Header --> */}
                    <header className="card-header text-center p-5">
                      <h4 className="h6 text-danger mb-3">Enterprise</h4>
                      <span className="d-block">
                        <span className="h2 text-dark font-weight-normal">
                          Contact Us
                        </span>
                        <span className="d-block text-secondary font-size-1">no user limit</span>
                      </span>
                    </header>
                    {/* <!-- End Header --> */}

                    {/* <!-- Content --> */}
                    <div className="card-body p-5">
                      <ul className="list-group list-group-flush list-group-borderless mb-4">
                        <li className="list-group-item">Community support</li>
                        <li className="list-group-item">400+ pages</li>
                        <li className="list-group-item">100+ header variations</li>
                        <li className="list-group-item">20+ home page options</li>
                        <li className="list-group-item">Priority Support</li>
                      </ul>

                      <button type="button" className="btn btn-sm btn-block btn-warning transition-3d-hover">Contact Us</button>
                    </div>
                    {/* <!-- End Content --> */}
                  </div>
                  {/* <!-- End Pricing --> */}
                </Slide>
              </Slider>     
              <div style={{textAlign:'center'}}>
                { this.dotGroup() }   
              </div>
              </CarouselProvider>
              {/* <!-- End Pricing Carousel --> */}
            </div>

            {/* <!-- SVG Top Shape --> */}
            <figure className="position-absolute top-0 right-0 left-0 z-index-2">
              <ReactSVG className="js-svg-injector" src="../../static/svg/components/wave-5-top.svg" alt="Image Description"
                  data-parent="#SVGHero" />
            </figure>
            {/* <!-- End SVG Top Shape --> */}

            {/* <!-- SVG Bottom Shape --> */}
            <figure className="position-absolute right-0 bottom-0 left-0">
              <ReactSVG className="js-svg-injector" src="../../static/svg/components/curved-1-lg.svg" alt="Image Description"
                  data-parent="#SVGHero" />
            </figure>
            {/* <!-- End SVG Bottom Shape --> */}
          </div>
          {/* <!-- End Pricing Section --> */}

          {/* <!-- Testimonials --> */}
          <div className="bg-img-hero bg-img-hero-background">

            <div className="container space-2 space-md-3">
              {/* <!-- SVG Quote --> */}
              <figure className="text-center mb-5 mx-auto">
              <ReactSVG className="js-svg-injector" src="../../static/svg/components/dot-1.svg" alt="Image Description"
                            data-parent="#SVGHero" />
              </figure>

              {/* <!-- End SVG Quote --> */}

              {/* <!-- Testimonials Carousel Main --> */}
              <CarouselProvider
                naturalSlideWidth={930}
                naturalSlideHeight={200}  //575 595 615 400
                totalSlides={3}
                // step={1}
                // dragStep={1}
                interval={2000}
                visibleSlides={1}
                className="js-slick-carousel u-slick u-slick--transform-off mb-4"
              >        
              <Slider>      
                <Slide className="pure-feedback-slide">
                  {/* <!-- Testimonials --> */}
                  <div className="w-md-80 w-lg-60 text-center mx-auto">
                    <blockquote className="h3 mb-5">The template is really nice and offers quite a large set of options. Thank you!</blockquote>
                    <h4 className="h6 text-muted">Maria Muszynska, Google</h4>
                  </div>
                  {/* <!-- End Testimonials --> */}
                </Slide>                
                <Slide className="pure-feedback-slide">
                  {/* <!-- Testimonials --> */}
                  <div className="w-md-80 w-lg-60 text-center mx-auto">
                    <blockquote className="h3 mb-5">It's beautiful and the coding is done quickly and seamlessly. Keep it up!</blockquote>
                    <h4 className="h6 text-muted">James Austin, Slack</h4>
                  </div>
                  {/* <!-- End Testimonials --> */}
                </Slide>
                <Slide className="pure-feedback-slide">
                  {/* <!-- Testimonials --> */}
                  <div className="w-md-80 w-lg-60 text-center mx-auto">
                    <blockquote className="h3 mb-5">I love Front! I love the ease of use, I love the fact that I have total creative freedom...</blockquote>
                    <h4 className="h6 text-muted">Charlotte Moore, Amazon</h4>
                  </div>
                  {/* <!-- End Testimonials --> */}
                </Slide>
              </Slider>
              <div style={{textAlign:'center', marginTop: 50}}>
                <Dot slide={0} className='avatar__dot' children={<img className='avatar' src='../../static/img/100x100/img1.jpg'/>}/>
                <Dot slide={1} className='avatar__dot' children={<img className='avatar' src='../../static/img/100x100/img2.jpg'/>}/>
                <Dot slide={2} className='avatar__dot' children={<img className='avatar' src='../../static/img/100x100/img3.jpg'/>}/>
              </div>
              </CarouselProvider>
              </div>
              {/* <!-- End Testimonials Carousel Main --> */}

              {/* <!-- Testimonials Carousel Pagination --> */}
              {/* <!-- End Testimonials Carousel Pagination --> */}
          </div>
          {/* <!-- End Testimonials --> */}

          {/* <!-- Articles Section --> */}
          <div className="container space-bottom-2">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                {/* <!-- Card --> */}
                <article className="card h-100 shadow-soft">
                  <div className="w-sm-65 p-5">
                    <h3 className="h4 mb-3">Have a project?</h3>
                    <div className="mb-4">
                      <p>Hire us. Our top professionals are ready to help with your business.</p>
                    </div>
                    <a className="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="hire-us.html">Hire Us</a>
                  </div>

                  <div className="position-absolute bottom-0 right-0 w-sm-35 max-width-27">
                    <figure id="projectSVG" className="ie-support-man">
                      <img className="js-svg-injector" src="../../static/svg/illustrations/support-man.svg" alt="Image Description"
                          data-parent="#projectSVG"/>
                    </figure>
                  </div>
                </article>
                {/* <!-- End Card --> */}
              </div>

              <div className="col-lg-6">
                {/* <!-- Card --> */}
                <article className="card h-100 shadow-soft">
                  <div className="w-sm-65 p-5">
                    <h3 className="h4 mb-3">Get in touch</h3>
                    <div className="mb-4">
                      <p>If you would like to find out more about how we can help you, please give us a call or drop us an email.</p>
                    </div>
                    <a className="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="contacts-agency.html">Contact Us</a>
                  </div>

                  <div className="position-absolute bottom-0 right-0 w-sm-35 max-width-27">
                    <figure id="ContactsSVG" className="ie-list-app">
                      <ReactSVG className="js-svg-injector" src="../../static/svg/illustrations/list-app.svg" alt="Image Description"
                          data-parent="#SVGHero"/>
                    </figure>
                  </div>
                </article>
                {/* <!-- End Card --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Articles Section --> */}
      </React.Fragment>
    )
  }
}

export default HomeLayout(Page)

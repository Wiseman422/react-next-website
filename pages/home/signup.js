import HomeLayout from '../../components/layouts/HomeLayout';
import { Label, Input } from 'reactstrap'
import ReactSVG from 'react-svg'
import Head from 'next/head'
import React, {Component} from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {signup} from '../../services/services';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      checkedAgreed: false
    }

    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  componentDidMount() {
    window.loadCarousel();
    // window.pluginInit();
  }

  async onSignUpClick( event) {
    event.preventDefault();

    const { email, password, confirmPassword, checkedAgreed } = this.state;
    const {router} = this.props;

    const params = {
      email: email,
      password: password,
      name: email
    };

    if(password === confirmPassword && checkedAgreed) {
      const response = await signup(params);
      console.log(response);
      if(response.status === 201){
        console.log("SignUp success");
        router.push("/");
      } else {
        console.log("SignUp failed");
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="../static/css/theme.css" />
        </Head>
        {/* ========== HEADER ========== */}
        <header id="header" className="u-header u-header--bg-transparent u-header--abs-top">
          <div className="u-header__section">
            <div id="logoAndNav" className="container-fluid">
              {/* -- Nav -- */}
              <nav className="navbar navbar-expand u-header__navbar">
                {/* -- White Logo -- */}
                <Link href="/">
                  <a className="d-none d-lg-flex navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white" aria-label="Front">
                    <span className="u-header__navbar-brand-text">SolveOnline</span>
                  </a>
                </Link>
                {/* -- End White Logo -- */}

                {/* -- Default Logo -- */}
                <Link href="/">
                  <a className="d-flex d-lg-none navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" aria-label="Front">
                    <span className="d-inline-block u-header__navbar-brand-text">SolveOnline</span>
                  </a>
                </Link>
                {/* -- End Default Logo -- */}
              </nav>
              {/* -- End Nav -- */}
            </div>
          </div>
        </header>
        {/* ========== END HEADER ========== */}
        {/* ========== MAIN ========== */}
        <main id="content" role="main">
          {/* -- Form -- */}
          <div className="d-flex align-items-center position-relative height-lg-100vh">
            <div className="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center gradient-half-primary-v1 height-lg-100vh px-0">
              <div className="w-100 p-5">
                {/* -- SVG Quote -- */}
                <figure className="text-center mb-5 mx-auto">

                </figure>
                {/* -- End SVG Quote -- */}

                {/* -- Testimonials Carousel Main -- */}
                <div id="testimonialsNavMain" className="js-slick-carousel u-slick mb-4"
                    data-infinite="true"
                    data-autoplay="true"
                    data-speed="5000"
                    data-fade="true"
                    data-nav-for="#testimonialsNavPagination">
                  <div className="js-slide">
                  {/* -- Testimonials -- */}
                  <div className="w-md-80 w-lg-60 text-center mx-auto">
                    <div className="h5 text-white font-weight-normal mb-4">The template is really nice and offers quite a large set of options. Thank you!</div>
                    <h1 className="h6 text-white-70">Maria Muszynska, Google</h1>
                  </div>
                  {/* -- End Testimonials -- */}
                  </div>

                  <div className="js-slide">
                    {/* -- Testimonials -- */}
                    <div className="w-md-80 w-lg-60 text-center mx-auto">
                      <div className="h5 text-white font-weight-normal mb-4">It's beautiful and the coding is done quickly and seamlessly. Keep it up!</div>
                      <h2 className="h6 text-white-70">James Austin, Slack</h2>
                    </div>
                    {/* -- End Testimonials -- */}
                  </div>
                  <div className="js-slide">
                    {/* -- Testimonials -- */}
                    <div className="w-md-80 w-lg-60 text-center mx-auto">
                      <div className="h5 text-white font-weight-normal mb-4">I love SolveOnline! I love the ease of use, I love the fact that I have total creative freedom...</div>
                      <h3 className="h6 text-white-70">Charlotte Moore, Amazon</h3>
                    </div>
                    {/* -- End Testimonials -- */}
                  </div>
                </div>
                {/* -- End Testimonials Carousel Main -- */}

                {/* -- Testimonials Carousel Pagination -- */}
                <div id="testimonialsNavPagination" className="js-slick-carousel u-slick u-slick--transform-off u-slick--pagination-modern u-slick--transform-off mx-auto"
                    data-infinite="true"
                    data-autoplay="true"
                    data-speed="5000"
                    data-center-mode="true"
                    data-slides-show="3"
                    data-is-thumbs="true"
                    data-focus-on-select="true"
                    data-nav-for="#testimonialsNavMain">
                  <div className="js-slide">
                    <div className="u-avatar mx-auto">
                      <img className="img-fluid rounded-circle" src="../../static/img/100x100/img1.jpg" alt="Image Description" />
                    </div>
                  </div>

                  <div className="js-slide">
                    <div className="u-avatar mx-auto">
                      <img className="img-fluid rounded-circle" src="../../static/img/100x100/img3.jpg" alt="Image Description" />
                    </div>
                  </div>

                  <div className="js-slide">
                    <div className="u-avatar mx-auto">
                      <img className="img-fluid rounded-circle" src="../../static/img/100x100/img2.jpg" alt="Image Description" />
                    </div>
                  </div>
                </div>
                {/* -- End Testimonials Carousel Pagination -- */}

                {/* -- Clients -- */}
                <div className="position-absolute right-0 bottom-0 left-0 text-center p-5">
                  <h4 className="h6 text-white-70 mb-3">SolveOnline partners</h4>
                  <div className="d-flex justify-content-center">
                    <div className="mx-4">
                      <img className="u-clients" src="../../static/img/slack-white.svg" alt="Image Description" />
                    </div>
                    <div className="mx-4">
                      <img className="u-clients" src="../../static/img/google-white.svg" alt="Image Description" />
                    </div>
                    <div className="mx-4">
                      <img className="u-clients" src="../../static/img/spotify-white.svg" alt="Image Description" />
                    </div>
                  </div>
                </div>
                {/* -- End Clients -- */}
              </div>
            </div>

            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3 space-lg-0">
                  {/* -- Form -- */}
                  <form className="js-validate mt-5" onSubmit={this.onSignUpClick} action="/">
                    {/* -- Title -- */}
                    <div className="mb-7">
                      <h1 className="h3 text-primary font-weight-normal mb-0">Welcome to <span className="font-weight-semi-bold">SolveOnline</span></h1>
                      <p>Fill out the form to get started.</p>
                    </div>
                    {/* -- End Title -- */}

                    {/* -- Form Group -- */}
                    <div className="js-form-message form-group">
                      <label className="form-label" htmlFor="signinSrEmail">Email address</label>
                      <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required
                            data-msg="Please enter a valid email address."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})} />
                    </div>
                    {/* -- End Form Group -- */}

                    {/* -- Form Group -- */}
                    <div className="js-form-message form-group">
                      <label className="form-label" htmlFor="signupPassword">Password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        name="password" 
                        id="signupPassword" 
                        placeholder="********" 
                        aria-label="********" 
                        required
                        data-msg="Your password is invalid. Please try again."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})} />
                    </div>
                    {/* -- End Form Group -- */}

                    {/* -- Form Group -- */}
                    <div className="js-form-message form-group">
                      <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="********" 
                        aria-label="********" 
                        required
                        data-rule-equalto="#signinSrPassword"
                        data-msg="Password does not match the confirm password."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                        value={this.state.confirmPassword}
                        onChange={e => this.setState({confirmPassword: e.target.value})} />
                    </div>
                    {/* -- End Form Group -- */}

                    {/* -- Checkbox -- */}
                    <div className="js-form-message mb-5">
                      <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input 
                          type="checkbox" 
                          className="custom-control-input" 
                          id="termsCheckbox" 
                          name="termsCheckbox" 
                          checked={this.state.checkedAgreed}
                          onChange={() => {
                            this.setState({
                              checkedAgreed: !this.state.checkedAgreed
                            })
                          }}
                          required
                          data-msg="Please accept our Terms and Conditions."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success" />
                        <label className="custom-control-label" htmlFor="termsCheckbox">
                          <small>
                            I agree to the
                            <a className="link-muted" href="../pages/terms.html"> Terms and Conditions</a>
                          </small>
                        </label>
                      </div>
                    </div>
                    {/* -- End Checkbox -- */}

                    {/* -- Button -- */}
                    <div className="row align-items-center mb-5">
                      <div className="col-5 col-sm-6">
                        <span className="small text-muted">Already have an account? </span>
                        <Link href="/home/login">
                          <a className="small"> Login</a>
                        </Link>
                      </div>

                      <div className="col-7 col-sm-6 text-right">
                        <button className="btn btn-primary transition-3d-hover">Get Started</button>
                      </div>
                    </div>
                    {/* -- End Button -- */}
                  </form>
                  {/* -- End Form -- */}
                </div>
              </div>
            </div>
          </div>
          {/* -- End Form -- */}
        </main>
        {/* ========== END MAIN ========== */}
        {/* {
          this.state.load === true ? 
            <script>
              loadCarousel();
            </script>
          : null
        } */}
      </React.Fragment>
    );
  }
}

export default withRouter(Signup);

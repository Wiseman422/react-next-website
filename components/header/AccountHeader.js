import { Container, Row, Col, Button, UncontrolledCollapse,
        Nav, NavLink, NavbarToggler, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
import { useState } from 'react'

export default function AccountHeader() {
    return (
    <React.Fragment>
            {/* <!-- Breadcrumb Section --> */}
            <div className="bg-secondary">
                <Container className="space-top-1 pb-3">
                    <Row>
                        <Col lg="5" className="order-lg-2 text-lg-right mb-4 mb-lg-0">
                            <div className="d-flex d-lg-inline-block justify-content-between justify-content-lg-end align-items-center align-items-lg-start">
                                {/* <!-- Breadcrumb --> */}
                                <ol className="breadcrumb breadcrumb-white breadcrumb-no-gutter mb-0">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="#">My SolveOnline</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                                {/* <!-- End Breadcrumb --> */}

                                {/* <!-- Breadcrumb Nav Toggle Button --> */}
                                <div className="d-lg-none" >
                                    <NavbarToggler className="btn u-hamburger u-hamburger--white"
                                            aria-label="Toggle navigation"
                                            aria-expanded="false"
                                            aria-controls="breadcrumbNavBar"
                                            data-toggle="collapse"
                                            data-target="#breadcrumbNavBar">
                                        <span id="breadcrumbHamburgerTrigger" className="u-hamburger__box">
                                            <span className="u-hamburger__inner" ></span>
                                        </span>
                                    </NavbarToggler>
                                </div>
                                {/* <!-- End Breadcrumb Nav Toggle Button --> */}
                            </div>
                        </Col>

                        <Col lg="7" className="order-lg-1">
                            {/* <!-- User Info --> */}
                            <div className="media d-block d-sm-flex align-items-sm-center">
                                <div className="u-lg-avatar position-relative mb-3 mb-sm-0 mr-3">
                                    <img className="img-fluid rounded-circle" src="../../static/img/160x160/img2.jpg" alt="Image Description" />
                                    <span className="badge badge-md badge-outline-success badge-pos badge-pos--bottom-right rounded-circle">
                                    <span className="fas fa-check"></span>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h1 className="h3 text-white font-weight-medium mb-1">Welcome back, Justin!</h1>
                                    <span className="d-block text-white">justin@solveonline.com</span>
                                </div>
                            </div>
                            {/* <!-- End User Info --> */}
                        </Col>
                    </Row>
                </Container>

                <Container className="space-bottom-1 space-bottom-lg-0">
                    <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
                        {/* <!-- Navbar --> */}
                        <div className="u-header u-header-left-aligned-nav u-header--bg-transparent-lg u-header--white-nav-links z-index-4">
                            <div className="u-header__section bg-transparent">
                                <nav className="js-breadcrumb-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
                                    <UncontrolledCollapse id="breadcrumbNavBar" className="collapse navbar-collapse u-header__navbar-collapse" toggler="#breadcrumbHamburgerTrigger">
                                        <Nav className="navbar-nav u-header__navbar-nav">
                                            {/* <!-- General --> */}
                                            <MenuItem 
                                                navItemClass="hs-has-sub-menu u-header__nav-item"
                                                linkId="generalDropdown"
                                                linkClass="u-header__nav-link u-header__nav-link-toggle"
                                                linkTitle="General"
                                                itemId="generalDropdownMenu"
                                                itemClass="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer"
                                                min="230px"
                                            >
                                                    <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Dashboard</NavLink></DropdownItem>
                                                    <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Profile</NavLink></DropdownItem>
                                                    <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">My tasks</NavLink></DropdownItem>
                                                    <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Projects</NavLink></DropdownItem>
                                                    <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Members</NavLink></DropdownItem>
                                            </MenuItem>
                                            {/* <!-- General --> */}

                                            {/* <!-- Account Settings --> */}
                                            <MenuItem 
                                                navItemClass="nav-item hs-has-sub-menu u-header__nav-item"
                                                linkId="accountSettingsDropdown"
                                                linkClass="u-header__nav-link u-header__nav-link-toggle"
                                                linkTitle="Account settings"
                                                itemId="accountSettingsDropdownMenu"
                                                itemClass="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer"
                                                min="230px"
                                            >
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Edit profile</NavLink></DropdownItem>
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Change password</NavLink></DropdownItem>
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Notifications</NavLink></DropdownItem>
                                            </MenuItem>
                                            
                                            {/* <!-- Account Settings --> */}

                                            {/* <!-- Billing --> */}
                                            <MenuItem 
                                                navItemClass="nav-item hs-has-sub-menu u-header__nav-item"
                                                linkId="billingDropdown"
                                                linkClass="u-header__nav-link u-header__nav-link-toggle"
                                                linkTitle="Billing"
                                                itemId="billingDropdownMenu"
                                                itemClass="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer"
                                                min="230px"
                                            >
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Activity</NavLink></DropdownItem>
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Payment methods</NavLink></DropdownItem>
                                            </MenuItem>
                                            {/* <!-- Billing --> */}

                                            {/* <!-- Accessibility --> */}
                                            <MenuItem 
                                                navItemClass="nav-item hs-has-sub-menu u-header__nav-item"
                                                linkId="accessibilityDropdown"
                                                linkClass="u-header__nav-link u-header__nav-link-toggle"
                                                linkTitle="Accessibility"
                                                itemId="accessibilityDropdownMenu"
                                                itemClass="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer"
                                                min="230px"
                                            >
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">Invite friends</NavLink></DropdownItem>
                                                <DropdownItem><NavLink className="u-header__sub-menu-nav-link" href="#">API Token</NavLink></DropdownItem>
                                            </MenuItem>
                                            {/* <!-- Accessibility --> */}

                                            {/* <!-- Others --> */}
                                            <MenuItem 
                                                navItemClass="nav-item u-header__nav-item"
                                                linkClass="u-header__nav-link"
                                                linkTitle="Plans"
                                                signleItem={true}
                                            ></MenuItem>
                                            {/* <!-- Others --> */}
                                        </Nav>
                                    </UncontrolledCollapse>
                                </nav>
                            </div>
                        </div>
                        {/* <!-- End Navbar --> */}

                        <div className="ml-lg-auto">
                            {/* <!-- Button --> */}
                            <Button className="btn btn-sm btn-soft-white text-nowrap transition-3d-hover" href="#requestPaymentModal"
                            data-modal-target="#requestPaymentModal">
                                <FontAwesomeIcon icon={faPlus} className="small mr-2"></FontAwesomeIcon>
                                Request a Payment
                            </Button>
                            {/* <!-- End Button --> */}
                        </div>
                    </div>
                </Container>
            </div>
            {/* <!-- End Breadcrumb Section --> */}
        </React.Fragment>
    )
}


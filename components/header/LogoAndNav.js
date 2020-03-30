import { Container, Row, Col,
        Nav, Navbar, NavItem, NavLink, NavbarToggler, NavbarBrand, UncontrolledCollapse, Button } from 'reactstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight, faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import Link from 'next/link'
import MenuItem from '../header/MenuItem'

const styles = {
    displayNoneOpacity0: {
        display: 'none',
        opacity: 0
    },
    backgroundImage: {
        backgroundImage: 'url(../../static/img/750x750/img1.jpg)'
    }
}
const ItemWith = styled.div`
    ${ props => props.min ? `min-width: ${props.min};` : '' }
    ${ props => props.max ? `max-width: ${props.max};` : '' }
    ${ props => props.positionRight 
    ? `
        right: 0;
        left: auto;
    ` : '' }
`

export default function LogoAndNav(props) {
    const headerClass = (props.page == 'account') ? 'u-header' : 'u-header u-header--bg-transparent u-header--abs-top-md'

    return (
        <React.Fragment>
            <header id="header" className={headerClass}>
            <div className="u-header__section">
                <Container id="logoAndNav">
                     {/* <!-- Nav --> */}
                     <Navbar className="js-mega-menu navbar-expand-md u-header__navbar u-header__navbar--no-space">
                         {/* <!-- White Logo --> */}
                         <NavbarBrand className="u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default" aria-label="SolveOnline" href="/">
                             <img src="../../static/img/solveonline.png" />
                         </NavbarBrand>
                         {/* <!-- End White Logo --> */}

                         {/* <!-- Responsive Toggle Button --> */}
                         <NavbarToggler className="btn u-hamburger"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="navBar"
                                data-toggle="collapse"
                                data-target="#navBar"
                                id="toggler">
                            <span id="hamburgerTrigger" className="u-hamburger__box">
                                <span className="u-hamburger__inner"></span>
                            </span>
                        </NavbarToggler>
                        {/* <!-- End Responsive Toggle Button --> */}

                        {/* <!-- Navigation --> */}
                        <UncontrolledCollapse id="navBar" toggler="#toggler"  navbar className="u-header__navbar-collapse">
                            <Nav navbar className="u-header__navbar-nav">
                                {/* <!-- Home --> */}
                                <MenuItem 
                                    navItemClass="hs-has-mega-menu u-header__nav-item"  
                                    navPosition="left" 
                                    linkId="homeMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Home" 
                                    itemClass="hs-mega-menu w-100 u-header__sub-menu" >
                                    <Row noGutters>
                                        <Col lg="6">
                                            {/* <!-- Banner Image --> */}
                                            <div className="u-header__banner" style={styles.backgroundImage}>
                                                <div className="u-header__banner-content">
                                                    <div className="mb-4">
                                                        <span className="u-header__banner-title">Branding Works</span>
                                                        <p className="u-header__banner-text">Experience a level of our quality in both design &amp; customization works.</p>
                                                    </div>
                                                    <Button color="primary" size="sm" className="transition-3d-hover" href="#">Learn More <FontAwesomeIcon icon={faAngleRight} className="ml-2" /></Button>
                                                </div>
                                            </div>
                                            {/* <!-- End Banner Image --> */}
                                        </Col>

                                        <Col lg="6">
                                            <Row className="u-header__mega-menu-wrapper">
                                                <Col sm="6" className="mb-3 mb-sm-0">
                                                    <span className="u-header__sub-menu-title">Classic</span>
                                                    <Nav className="u-header__sub-menu-nav-group mb-3">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic Agency</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic Business</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic Marketing</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic Consulting</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic Start-up</NavLink></li>
                                                    </Nav>

                                                    <span className="u-header__sub-menu-title">Corporate</span>
                                                    <Nav className="u-header__sub-menu-nav-group mb-3">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Corporate Agency</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Corporate Start-Up</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Corporate Business</NavLink></li>
                                                    </Nav>

                                                    <span className="u-header__sub-menu-title">Portfolio</span>
                                                    <Nav className="u-header__sub-menu-nav-group">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Portfolio Agency</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Portfolio Profile</NavLink></li>
                                                    </Nav>
                                                </Col>

                                                <Col sm="6">
                                                    <span className="u-header__sub-menu-title">App</span>
                                                    <Nav className="u-header__sub-menu-nav-group mb-3">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">App SaaS <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">App Workflow <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">App Payment <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="/home/appSoftware">App Software <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                                    </Nav>

                                                    <span className="u-header__sub-menu-title">Onepages</span>
                                                    <Nav className="u-header__sub-menu-nav-group mb-3">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Onepage Creative</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Onepage SaaS</NavLink></li>
                                                    </Nav>

                                                    <span className="u-header__sub-menu-title">Blog</span>
                                                    <Nav className="u-header__sub-menu-nav-group">
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Blog Agency</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Blog Start-Up</NavLink></li>
                                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Blog Business</NavLink></li>
                                                    </Nav>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </MenuItem>
                                {/* <!-- End Home --> */}

                                {/* <!-- Pages --> */}
                                {/*<MenuItem 
                                    navItemClass="hs-has-sub-menu u-header__nav-item"  
                                    linkId="pagesMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Pages" 
                                    itemAs="Nav" 
                                    itemId="pagesSubMenu" 
                                    itemClass="hs-sub-menu u-header__sub-menu" 
                                    itemMin="230px">
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesAccount" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Account" 
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesAccount" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        itemMin="230px">
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="/account/dashboard">Dashboard</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Profile</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">My tasks</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Projects</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Members</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Edit profile</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Change password</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Notifications</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Activity</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Payment methods</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Invite friends</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Plans</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">API Token</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesPortfolio" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Portfolio" 
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesPortfolio" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">All layouts</NavLink></li>
                                        <li className="dropdown-divider"></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Case Studies Simple</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Case Studies Modern</NavLink></li>
                                        <li className="dropdown-divider"></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Single Page Simple</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Single Page Grid</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Single Page Masonry</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesAbout" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="About" 
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesAbout" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">About Agency</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">About Start-Up</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesServices" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Services" 
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesServices" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Services Agency</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Services Start-Up</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesCareers" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Careers" 
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesCareers" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Careers</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Careers Single</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Hire Us</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesLogin" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Login &amp; Signup"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesLogin" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Login</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Signup</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Recover Account</NavLink></li>
                                            <li className="dropdown-divider"></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Login Simple</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Signup Simple</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Recover Account Simple</NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkContactsServices" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Contacts"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuContactsServices" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Contacts Agency</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Contacts Start-Up</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesResources" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Resources"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesResources" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Help</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Help article</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">FAQ</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Customers <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Customer story <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                    </MenuItem>
                                    
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesUtilities" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Utilities"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesUtilities" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Pricing</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Terms &amp; Conditions</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Privacy &amp; Policy</NavLink></li>
                                    </MenuItem>
                                
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkPagesSpecialty" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Specialty"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuPagesSpecialty" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Cover Page</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Coming Soon</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Maintenance Mode</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Status <span className="badge badge-success badge-pill ml-1">New</span></NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Invoice</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Error 404</NavLink></li>
                                    </MenuItem>
                                </MenuItem>*/}
                                {/* <!-- End Pages --> */}
                                
                                {/* <!-- Blog --> */}
                                {/*<MenuItem 
                                    navItemClass="nav-item hs-has-sub-menu u-header__nav-item"  
                                    linkId="blogMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Blog"  
                                    itemAs="Nav" 
                                    itemId="blogSubMenu" 
                                    itemClass="hs-sub-menu u-header__sub-menu" 
                                    min="230px" >
                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogClassic" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Classic"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogClassic" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Left Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Right Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Full Width</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogGrid" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Grid"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogGrid" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Left Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Right Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Full Width</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogList" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Classic"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogList" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Left Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Right Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Full Width</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogCard" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Modern"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogCard" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Left Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Right Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Full Width</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogGridMinimal" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkControls="navSubmenuBlogGridMinimal" 
                                        linkTitle="Masonry"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogGridMinimal" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Left Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Right Sidebar</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Full Width</NavLink></li>
                                    </MenuItem>

                                    <MenuItem 
                                        navItemClass="hs-has-sub-menu" 
                                        linkId="navLinkBlogGridMasonry" 
                                        linkClass="u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle" 
                                        linkTitle="Masonry"  
                                        itemAs="Nav" 
                                        itemId="navSubmenuBlogGridMasonry" 
                                        itemClass="hs-sub-menu u-header__sub-menu" 
                                        min="230px" >
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Classic</NavLink></li>
                                        <li><NavLink className="u-header__sub-menu-nav-link" href="#">Simple</NavLink></li>
                                    </MenuItem>
                                </MenuItem>*/}
                                {/* <!-- End Blog --> */}

                                {/* <!-- Solutions --> */}
                                <MenuItem 
                                    navItemClass="nav-item hs-has-mega-menu u-header__nav-item" 
                                    linkId="demosMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Solutions"   
                                    itemClass="hs-mega-menu w-100 u-header__sub-menu" 
                                    max="600px"positionright>
                                    <Row noGutters>
                                        <Col md="7">
                                        {/* <!-- Promo Item --> */}
                                        <div className="u-header__promo-item">
                                            <a className="u-header__promo-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="js-svg-injector u-header__promo-icon" src="../../static/img/LeadSolve512x512.png" alt="Image Description" />
                                                <div className="media-body">
                                                <span className="u-header__promo-title"><b>LeadSolve</b></span>
                                                <small className="u-header__promo-text">Digital Marketing Technology</small>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        {/* <!-- End Promo Item --> */}

                                        {/* <!-- Promo Item --> */}
                                        <div className="u-header__promo-item">
                                            <a className="u-header__promo-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="js-svg-injector u-header__promo-icon" src="../../static/img/RealtorSolve512x512.png" alt="Image Description" />
                                                <div className="media-body">
                                                <span className="u-header__promo-title"><b>RealtorSolve</b></span>
                                                <small className="u-header__promo-text">Self Serve Real Estate Technology</small>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        {/* <!-- End Promo Item --> */}

                                        {/* <!-- Promo Item --> */}
                                        <div className="u-header__promo-item">
                                            <a className="u-header__promo-link" href="#">
                                            <div className="media align-items-center">
                                                <img className="js-svg-injector u-header__promo-icon" src="../../static/img/DevelopSolve512x512.png" alt="Image Description" />
                                                <div className="media-body">
                                                <span className="u-header__promo-title"><b>DevelopSolve</b></span>
                                                <small className="u-header__promo-text">Development Services</small>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        {/* <!-- End Promo Item --> */}

                                            {/* <!-- Promo Item --> */}
                                            <div className="u-header__promo-item">
                                                <a className="u-header__promo-link" href="#">
                                                    <div className="media align-items-center">
                                                        <img className="js-svg-injector u-header__promo-icon" src="../../static/img/PageSolve512x512.png" alt="Image Description" />
                                                        <div className="media-body">
                                                            <span className="u-header__promo-title"><b>PageSolve</b></span>
                                                            <small className="u-header__promo-text">Instant Pages & Managed Sites</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!-- End Promo Item --> */}
                                        </Col>

                                        {/* <!-- Promo --> */}
                                        <Col md="5" className="u-header__promo">
                                        <a className="d-block u-header__promo-inner" href="#">
                                            <div className="position-relative">
                                                <img className="img-fluid rounded mb-3" src="../../static/img/icon-dark.png" alt="Image Description" />
                                            </div>
                                        </a>
                                        </Col>
                                        {/* <!-- End Promo --> */}
                                    </Row>
                                </MenuItem>
                                {/* <!-- End Solutions --> */}

                                {/* <!-- Manage --> */}
                                <MenuItem 
                                    navItemAs="NavItem" 
                                    navItemClass="nav-item hs-has-mega-menu u-header__nav-item" 
                                    linkId="shopMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Manage"   
                                    itemClass="hs-mega-menu u-header__sub-menu u-header__mega-menu-position-right-fix--md" 
                                    max="440px"positionright>
                                    <div className="u-header__mega-menu-wrapper">
                                        <span className="u-header__sub-menu-title">My SolveOnline</span>

                                        <Row>
                                        <Col sm="6">
                                            <Nav className="u-header__sub-menu-nav-group">
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Dashboard</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Solutions</NavLink></li>
                                            </Nav>
                                        </Col>

                                        <Col sm="6">
                                            <Nav className="u-header__sub-menu-nav-group">
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Support</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Account</NavLink></li>
                                            <li><NavLink className="u-header__sub-menu-nav-link" href="#">Billing</NavLink></li>
                                            </Nav>
                                        </Col>
                                        </Row>
                                    </div>

                                    {/* <!-- Mega Menu Banner --> */}
                                    <div className="u-header__product-banner">
                                        <div className="d-flex align-items-end">
                                        <img className="img-fluid mr-4" src="../../static/img/icon-dark.png" style={{height:160}} alt="Image Description" />
                                        <div className="u-header__product-banner-content">
                                            <div className="mb-4">
                                            <span className="u-header__product-banner-title">One tool, many solutions.</span>
                                            <p className="u-header__product-banner-text">Explore your success hub now.</p>
                                            </div>
                                            <Button size="sm" className="btn-soft-primary transition-3d-hover" href="#">Login Now <FontAwesomeIcon icon={faAngleRight} className="ml-2" /></Button>
                                        </div>
                                        </div>
                                    </div>
                                </MenuItem>
                                {/* <!-- End Manage --> */}

                                {/* <!-- Docs --> */}
                                <MenuItem 
                                    navItemClass="nav-item hs-has-mega-menu u-header__nav-item" 
                                    linkId="docsMegaMenu" 
                                    linkClass="u-header__nav-link u-header__nav-link-toggle" 
                                    linkTitle="Docs"  
                                    itemClass="hs-mega-menu u-header__sub-menu" 
                                    min="330px" max="260px"positionright>
                                    {/* <!-- Promo Item --> */}
                                    <div className="u-header__promo-item">
                                        <a className="u-header__promo-link" href="#">
                                        <div className="media align-items-center">
                                            <ReactSVG className="js-svg-injector u-header__promo-icon" src="../../static/svg/icons/icon-2.svg" alt="SVG" />
                                            <div className="media-body">
                                            <span className="u-header__promo-title">
                                                Documentation
                                                <span className="badge badge-primary badge-pill ml-1">v2.5</span>
                                            </span>
                                            <small className="u-header__promo-text">Development guides</small>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    {/* <!-- End Promo Item --> */}

                                    {/* <!-- Promo Item --> */}
                                    <div className="u-header__promo-item">
                                        <a className="u-header__promo-link" href="#">
                                        <div className="media align-items-center">
                                            <ReactSVG className="js-svg-injector u-header__promo-icon" src="../../static/svg/icons/icon-1.svg" alt="SVG" />
                                            <div className="media-body">
                                            <span className="u-header__promo-title">Get started</span>
                                            <small className="u-header__promo-text">Components and snippets</small>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    {/* <!-- End Promo Item --> */}

                                    <div className="u-header__promo-footer">
                                        {/* <!-- List --> */}
                                        <Row noGutters>
                                            <Col col="6">
                                                <div className="u-header__promo-footer-item">
                                                <small className="text-muted d-block">Check what's new</small>
                                                <a className="small" href="#">
                                                    Changelog
                                                </a>
                                                </div>
                                            </Col>
                                            <Col col="6" className="u-header__promo-footer-ver-divider">
                                                <div className="u-header__promo-footer-item">
                                                <small className="text-muted d-block">Have a question?</small>
                                                <a className="small" href="#">
                                                    Contact us
                                                </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/* <!-- End List --> */}
                                    </div>
                                </MenuItem>
                                {/* <!-- End Docs --> */}

                                {/* <!-- Search --> */}
                                <NavItem className="nav-item u-header__nav-last-item">
                                    <a id="searchSlideDownInvoker" className="btn btn-xs btn-icon btn-text-secondary u-search-slide-down-trigger" role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            aria-controls="searchSlideDown"
                                            data-unfold-type="css-animation"
                                            data-unfold-hide-on-scroll="false"
                                            data-unfold-target="#searchSlideDown"
                                            data-unfold-animation-in="active"
                                            data-unfold-animation-out="fadeOutUp"
                                            data-unfold-delay="0"
                                            data-unfold-duration="800"
                                            data-unfold-overlay='{
                                            "className": "u-search-slide-down-bg-overlay",
                                            "background": "rgba(55, 125, 255, .1)",
                                            "animationSpeed": 400
                                        }'>
                                        <FontAwesomeIcon icon={faSearch} className="btn-icon__inner u-search-slide-down-trigger__icon" />
                                    </a>
                                </NavItem>
                                {/* <!-- End Search --> */}

                                {/* <!-- Button --> */}
                                <NavItem className="nav-item u-header__nav-last-item">
                                    <div className="position-relative">
                                    <Link href="/home/signup">
                                        <a id="signUpDropdownInvoker" className="btn btn-sm btn-outline-primary" role="button"
                                            aria-controls="signUpDropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-unfold-event="click"
                                            data-unfold-target="#signUpDropdown"
                                            data-unfold-type="css-animation"
                                            data-unfold-duration="300"
                                            data-unfold-delay="300"
                                            data-unfold-hide-on-scroll="true"
                                            data-unfold-animation-in="slideInUp"
                                            data-unfold-animation-out="fadeOut">
                                            Sign Up<FontAwesomeIcon icon={faAngleRight} className="ml-1" />
                                        </a>
                                    </Link>
                                    <ItemWith as="NavItem" as="div" id="signUpDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right py-0" min="350px">
                                        <div className="card">
                                        <form className="js-validate">
                                            {/* <!-- Login --> */}
                                            <div id="login" data-target-group="idForm">
                                            {/* <!-- Header --> */}
                                            <div className="card-header bg-light text-center py-3 px-5">
                                                <h3 className="h6 mb-0">Login to Front</h3>
                                            </div>
                                            {/* <!-- End Header --> */}

                                            <div className="card-body p-5">
                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                <div className="js-form-message js-focus-state">
                                                    <label className="sr-only" htmlFor="signinSrEmail">Email</label>
                                                    <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signinEmail">
                                                        <FontAwesomeIcon icon={faUser} />
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" name="email" id="signinSrEmail" placeholder="Email" aria-label="Email" aria-describedby="signinEmail" required
                                                            data-msg="Please enter a valid email address."
                                                            data-error-classname="u-has-error"
                                                            data-success-classname="u-has-success" />
                                                    </div>
                                                </div>
                                                </div>
                                                {/* <!-- End Form Group --> */}

                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                <div className="js-form-message js-focus-state">
                                                    <label className="sr-only" htmlFor="signinSrPassword">Password</label>
                                                    <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signinPassword">
                                                        <FontAwesomeIcon icon={faLock} />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" name="password" id="signinSrPassword" placeholder="Password" aria-label="Password" aria-describedby="signinPassword" required
                                                            data-msg="Your password is invalid. Please try again."
                                                            data-error-classname="u-has-error"
                                                            data-success-classname="u-has-success" />
                                                    </div>
                                                </div>
                                                </div>
                                                {/* <!-- End Form Group --> */}

                                                <div className="d-flex justify-content-end mb-4">
                                                <a className="js-animation-link link-muted" 
                                                    data-target="#forgotPassword"
                                                    data-link-group="idForm"
                                                    data-animation-in="fadeIn">Forgot Password?</a>
                                                </div>

                                                <div className="mb-2">
                                                <Button size="sm" block color="primary" className="transition-3d-hover">Login</Button>
                                                </div>

                                                <div className="text-center">
                                                <span className="text-muted">Do not have an account?</span>
                                                <a className="js-animation-link" 
                                                    data-target="#signup"
                                                    data-link-group="idForm"
                                                    data-animation-in="fadeIn">Signup
                                                </a>
                                                </div>
                                            </div>
                                            </div>

                                            {/* <!-- Signup --> */}
                                            <div id="signup" style={styles.displayNoneOpacity0} data-target-group="idForm">
                                            {/* <!-- Header --> */}
                                            <div className="card-header bg-light text-center py-3 px-5">
                                                <h3 className="h6 mb-0">Create a free Front account</h3>
                                            </div>
                                            {/* <!-- End Header --> */}

                                            <div className="card-body p-5">
                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                    <div className="js-form-message js-focus-state">
                                                        <label className="sr-only" htmlFor="signupSrEmail">Email</label>
                                                        <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="signupEmail">
                                                            <FontAwesomeIcon icon={faUser} />
                                                            </span>
                                                        </div>
                                                        <input type="email" className="form-control" name="email" id="signupSrEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmail" required
                                                                data-msg="Please enter a valid email address."
                                                                data-error-classname="u-has-error"
                                                                data-success-classname="u-has-success" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Input --> */}

                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                <div className="js-form-message js-focus-state">
                                                    <label className="sr-only" htmlFor="signupSrPassword">Password</label>
                                                    <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signupPassword">
                                                        <FontAwesomeIcon icon={faLock} />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" name="password" id="signupSrPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPassword" required
                                                            data-msg="Your password is invalid. Please try again."
                                                            data-error-classname="u-has-error"
                                                            data-success-classname="u-has-success" />
                                                    </div>
                                                </div>
                                                </div>
                                                {/* <!-- End Input --> */}

                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                <div className="js-form-message js-focus-state">
                                                    <label className="sr-only" htmlFor="signupSrConfirmPassword">Confirm Password</label>
                                                    <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="signupConfirmPassword">
                                                        <FontAwesomeIcon icon={faKey} />
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" name="confirmPassword" id="signupSrConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPassword" required
                                                            data-msg="Password does not match the confirm password."
                                                            data-error-classname="u-has-error"
                                                            data-success-classname="u-has-success" />
                                                    </div>
                                                </div>
                                                </div>
                                                {/* <!-- End Input --> */}

                                                <div className="mb-2">
                                                <Button size="sm" block color="primary" className="transition-3d-hover">Get Started</Button>
                                                </div>

                                                <div className="text-center">
                                                <span className="text-muted">Already have an account?</span>
                                                <a className="js-animation-link" 
                                                    data-target="#login"
                                                    data-link-group="idForm"
                                                    data-animation-in="fadeIn">Login
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            {/* <!-- End Signup --> */}

                                            {/* <!-- Forgot Password --> */}
                                            <div id="forgotPassword" style={styles.displayNoneOpacity0} data-target-group="idForm">
                                            {/* <!-- Header --> */}
                                            <div className="card-header bg-light text-center py-3 px-5">
                                                <h3 className="h6 mb-0">Recover password</h3>
                                            </div>
                                            {/* <!-- End Header --> */}

                                            <div className="card-body p-5">
                                                {/* <!-- Form Group --> */}
                                                <div className="form-group">
                                                <div className="js-form-message js-focus-state">
                                                    <label className="sr-only" htmlFor="recoverSrEmail">Your email</label>
                                                    <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="recoverEmail">
                                                        <FontAwesomeIcon icon={faUser} />
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" name="email" id="recoverSrEmail" placeholder="Your email" aria-label="Your email" aria-describedby="recoverEmail" required
                                                            data-msg="Please enter a valid email address."
                                                            data-error-classname="u-has-error"
                                                            data-success-classname="u-has-success" />
                                                    </div>
                                                </div>
                                                </div>
                                                {/* <!-- End Form Group --> */}

                                                <div className="mb-2">
                                                <Button size="sm" block color="primary" className="transition-3d-hover">Recover Password</Button>
                                                </div>

                                                <div className="text-center">
                                                <span className="text-muted">Remember your password?</span>
                                                <a className="js-animation-link" 
                                                    data-target="#login"
                                                    data-link-group="idForm"
                                                    data-animation-in="fadeIn">Login
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            {/* <!-- End Forgot Password --> */}
                                        </form>
                                        </div>
                                    </ItemWith>
                                    </div>
                                </NavItem>
                                {/* <!-- End Button --> */}
                            </Nav>
                        </UncontrolledCollapse>
                        {/* <!-- End Navigation --> */}
                    </Navbar>
                    {/* <!-- End Nav --> */}
                </Container>
                </div>
            </header> 

        </React.Fragment>
    )
}
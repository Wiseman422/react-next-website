import React, { Component } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const ItemWith = styled.div`
    ${ props => props.min ? `min-width: ${props.min};` : '' }
    ${ props => props.max ? `max-width: ${props.max};` : '' }
    ${ props => props.positionright 
    ? `
        right: 0;
        left: auto;
    ` : '' }
`

export default class MenuItem extends Component {
    constructor (props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            open: false
        };
        this.toggleChildMenu = this.toggleChildMenu.bind(this);
    }

    componentDidMount = () => { 
        document.addEventListener("click", this.handleClickOutside, true);
    };
    
    componentWillUnmount = () => { 
        document.removeEventListener("click", this.handleClickOutside, true);
    };
            
    handleClickOutside = e => {
        if (!this.myRef.current.contains(e.target)) {
            this.setState({ open: false });
        }
    };

    handleClickInside = () => { 
        this.setState({ open: true });
    };

    toggleChildMenu = () => {
        this.setState(state => ({
            open: !state.open
        }));
    };

    render = () => {
        const { children } = this.props;
        return (
            <div ref={this.myRef}>
            <NavItem 
                as={this.props.navItemAs} 
                className={this.props.navItemClass} 
                data-position={this.props.navPosition} >
                    <NavLink 
                        id={this.props.linkId} 
                        className={this.props.linkClass}
                        onClick={this.toggleChildMenu}
                        >
                            {this.props.linkTitle}
                            { !this.props.signleItem &&
                                    <FontAwesomeIcon icon={this.state.open ? faAngleLeft : faAngleDown}/>}
                    </NavLink>
                    <ItemWith 
                        as={this.props.itemAs}
                        id={this.props.itemId}
                        className={[this.state.open ? 'disp-block' : 'disp-none', this.props.itemClass]}
                        min={this.props.min}
                        max={this.props.max}
                        positionright={this.props.positionright}>
                            { children }
                    </ItemWith>
            </NavItem>
            </div>
        );
    }
}
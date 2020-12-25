import React, { Component } from 'react';

class Header extends Component {
    state = {
        menuState: true,
    }
    toggle = () => {
        this.setState({
            menuState: !this.state.menuState
        })
    }
    render() {
        const { menuState } = this.state;

        const menu = `menu ${menuState ? '': 'menu--active'}`;
        const menuList = `header__list ${menuState ? '': 'header__list--active'}`;

        return (
            <div className="header__content">
                <div className="header__menu">
                    <a className="home" href="index.html">JnA.</a>
                    <a className={menu} href="#menu" onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={menuList}>
                    <a href="index.html">Home.</a>
                    <a href="index.html">Work.</a>
                    <a href="index.html">Contact.</a>
                </div>
            </div>
        );
    }
}

export default Header;
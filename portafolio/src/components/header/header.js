import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            
            <header className='s-header'>
                <div id='top' className='row s-header__nav-wrap'>
                    <nav id='nav-wrap' className='s-header__nav'>
                        <ul id='nav' className='nav'>
                            <li className='current'><a className='s-header.scrolling' href='#hero'>Home</a></li>
                            <li><a className='smoothscroll' href='#about'>About</a></li>
                            <li><a className='smoothscroll' href='#resume'>Resume</a></li>
                            <li><a className='smoothscroll' href='#portfolio'>Works</a></li>
                            <li><a className='smoothscroll' href='#contact'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <a className='s-header__menu-toggle' href='#0' title='Menu'>
                    <span className='s-header__menu-icon'></span>
                </a>
            </header>
        )
    }
}

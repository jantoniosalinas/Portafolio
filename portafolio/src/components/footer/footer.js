import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <footer className='s-footer'>
                <div className='row'>
                    <div className='column large-4 medium-6 w-1000-stack s-footer__social-block'>
                        <ul className='s-footer__social'>
                            <li><a href='https://www.instagram.com/jasosalinas/'><i className='fab fa-instagram' aria-hidden='true'></i></a></li>
                            <li><a href='https://www.linkedin.com/in/josé-antonio-salinas-ochoa-95567855'><i className='fab fa-linkedin-in' aria-hidden='true'></i></a></li>
                        </ul>
                    </div>

                    <div className='column large-7 medium-6 w-1000-stack ss-copyright'>
                        <span>©Copyright JASO 2021-2025</span> 
                        <span>Design by <a href='#hero'>JASO</a></span>
                    </div>

                    <div className='s-hero__scroll'>
                        <a href='#hero' className='s-hero__scroll-link smoothscroll'>
                            <span className='scroll-arrow'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z'></path></svg>
                            </span>
                            <span className='scroll-text'>Scroll Up</span>
                        </a>
                    </div>
                </div>
            </footer>  
        )
    }
}
/*
                <div className='ss-go-top'>
                    <a href='#hero' className='smoothscroll' title='Back to Top'><
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z' /></svg>
                    </a>
                </div>

                */
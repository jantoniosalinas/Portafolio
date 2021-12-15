import React, { Component } from 'react'

export default class aboutMe extends Component {
    render() {
        return (
            <section id='about' className='s-about target-section'>
                <div className='row'>
                    <div className='column large-3 tab-12'>
                        <img className='s-about__pic' src='images/avatars/userme-02.jpg' alt='JASO' />
                    </div>
                    <div className='column large-9 tab-12 s-about__content'>
                        <h3>About Me</h3>
                        <p>
                        I'm an honest and responsible person, who always seeks to get the best of himself
                        and of the work teams where he is. I like to learn from all my colleagues and do my
                        best to bring each of the projects in which I have the opportunity to participate 
                        to a successful conclusion.
                        </p>
                        <p>
                        I'm autodidact, I like the technological challenges because I learn a lot of them,
                        I like to share knowledge in this way you learn more and help people's professional growth. 
                        </p>
                        <hr />
                        <div className='column folio-item'>
                            <div className='column large tab-12'>
                                    <a href='#resume' className='s-hero__scroll-link smoothscroll'>
                                        <span className='scroll-arrow'>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z'></path></svg>
                                        </span>
                                        <span className='scroll-text'>Scroll Down</span>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
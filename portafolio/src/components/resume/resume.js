import React, { Component } from 'react'

export default class resume extends Component {
    render() {
        return (
            <section id='resume' className='s-resume target-section'>
                <div className='row s-resume__section'>
                    <div className='column large-3 tab-12'>
                        <h3 className='section-header-allcaps'>Career</h3>
                    </div>
                    <div className='column large-9 tab-12'>
                        <div className='resume-block'>

                            <div className='resume-block__header'>
                                <h4 className='h3'>Validata Servicios de Captura S.A. de C.V.</h4>
                                <p className='resume-block__header-meta'>
                                    <span>System Manager</span> 
                                    <span className='resume-block__header-date'>
                                        June 2000 - Present
                                    </span>
                                </p>
                            </div>
                            <p>
                            I work as a systems manager since 2015.
                            We are a data capture, standardization and normalization services company.
                            Here we promote the principles of honesty, commitment and respect that we
                            reflect towards customers, so that they feel completely safe and satisfied,
                            thereby creating a collaborative environment that allows us to exceed 
                            customer expectations.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='row s-resume__section'>
                    <div className='column large-3 tab-12'>
                        <h3 className='section-header-allcaps'>Education</h3>
                    </div>
                    <div className='column large-9 tab-12'>
                        <div className='resume-block'>
                            <div className='resume-block__header'>
                                <h4 className='h3'>UCAMP - UTEL</h4>
                                <p className='resume-block__header-meta'>
                                    <span>FULLSTACK MERN</span><br />
                                    <span><strong>M</strong>ongoDB - <strong>E</strong>xpress - <strong>R</strong>eact - <strong>N</strong>ode</span><br />
                                    <span className='resume-block__header-date'>
                                        December 2021
                                    </span>
                                </p>
                            </div>
                            <p>
                             UCAMP<br />
                             Front End using HTML, CSS, JS
                             Full Stack Apps with ReactJS && NodeJS,
                             Data Bases NoSQL - MongoDB
                             BackEnd using NodeJS
                            </p>
                        </div>

                        <div className='resume-block'>
                            <div className='resume-block__header'>
                                <h4 className='h3'>Benemérita Universidad Autónoma de Puebla</h4>
                                <h4 className='h3'>BUAP</h4> 
                                <p className='resume-block__header-meta'>
                                    <span>Bachelor of Computer Science</span> 
                                    <span className='resume-block__header-date'>
                                        December 2000
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row s-resume__section'>
                    <div className='column large-3 tab-12'>
                        <h3 className='section-header-allcaps'>Soft Skills</h3>
                    </div>
                    <div className='column large-9 tab-12'>
                        <div className='resume-block'>
                            <ul className='resume-block'>
                                <li>
                                    <strong>Reliability/Honesty</strong>
                                </li>
                                <li>
                                    <strong>Organization</strong>
                                </li>
                                <li>
                                    <strong>Leadership</strong>
                                </li>
                                <li>
                                    <strong>Teamwork</strong>
                                </li>
                                <li>
                                    <strong>Assertive communication</strong>
                                </li>
                                <li>
                                    <strong>Problem resolution</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='column large-3 tab-12'>
                        <h3 className='section-header-allcaps'>Hard Skills</h3>
                    </div>
                    <div className='column large-1-4 tab-5'>
                        <div className='row'>
                            <div className='resume-block'>
                                <ul className='resume-block'>
                                    <li>
                                        <strong>HTML</strong>
                                    </li>
                                    <li>
                                        <strong>CSS</strong>
                                    </li>
                                    <li>
                                        <strong>Git</strong>
                                    </li>
                                    <li>
                                        <strong>Linux</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className='resume-block'>
                                <ul className='resume-block'>
                                    <li>
                                        <strong>PHP</strong>
                                    </li>
                                    <li>
                                        <strong>Perl</strong>
                                    </li>
                                    <li>
                                        <strong>Javascript</strong>
                                    </li>
                                    <li>
                                        <strong>NodeJS</strong>
                                    </li>
                                    <li>
                                        <strong>ReactJS</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className='resume-block'>
                                <ul className='resume-block'>
                                    <li>
                                        <strong>Bootstrap</strong>
                                    </li>
                                    <li>
                                        <strong>Bulma</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className='resume-block'>
                                <ul className='resume-block'>
                                    <li>
                                        <strong>MySQL</strong>
                                    </li>
                                    <li>
                                        <strong>MongoDB</strong>
                                    </li>
                                    <li>
                                        <strong>Firebase</strong>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        <div className='column large tab-12'>
                            <a href='#portfolio' className='s-hero__scroll-link smoothscroll'>
                                <span className='scroll-arrow-black'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z'></path></svg>
                                </span>
                                <span className='scroll-text-black'>Scroll Down</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

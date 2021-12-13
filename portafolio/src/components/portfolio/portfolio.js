import React, { Component } from 'react'

export default class portfolio extends Component {
    render() {
        return (

            <section id='portfolio' className='s-portfolio target-section'>

            <div className='row s-portfolio__header'>
                <div className='column large-12'>
                    <h3>A Few Of My Latest Creations</h3>
                </div>
            </div>
    
            <div className='row collapse block-large-1-3 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
                <div className='column folio-item'>
                    <div className='column large tab-12'>
                        <h3 className='section-header-allcaps'>Landing Page</h3>
                    </div>
                    <a href='https://jantoniosalinas.github.io/JAntonio_Salinas_Ochoa.github.io' className='folio-item__thumb'>
                        <img src='images/portfolio/T-DanceAcademy.png' alt='T-DanceAcademy' />
                    </a>
                    <h8>Using
                        HTML <i className='fab fa-html5'></i>,
                        CSS <i className='fab fa-css3'></i>
                    </h8>
                </div>
    
                <div className='column folio-item'>
                    <div className='column large tab-12'>
                        <h3 className='section-header-allcaps'>CRUD Application</h3>
                    </div>
                    <a href='https://jantoniosalinas.github.io/Proyecto2-CRUD.github.io/' className='folio-item__thumb'>
                        <img src='images/portfolio/CRUD.jpg' alt='CRUD' />
                    </a>
                    <h8>Using
                        HTML <i className='fab fa-html5'></i>,
                        CSS <i className='fab fa-css3'></i>,
                        JavaScript <i className='fab fa-js'></i>,
                        LocalStorage <i className='fal fa-container-storage'></i>,
                        Bulma
                    </h8>
                </div>
    
                <div className='column folio-item'>
                    <div className='column large tab-12'>
                        <h3 className='section-header-allcaps'>Dashboard</h3>
                    </div>
                    <a href='https://equipo2-ucamp.github.io/dashboardequipo2.github.io/' className='folio-item__thumb'>
                        <img src='images/portfolio/MC.jpg' alt='Dashboard' />
                    </a>
                    <h8>Using
                        HTML <i className='fab fa-html5'></i>,
                        CSS <i className='fab fa-css3'></i>,
                        JavaScript <i className='fab fa-js'></i>,
                        LocalStorage <i className='fad fa-archive'></i>,
                        Bulma,
                        NodeJs <i className='fab fa-node-js'></i>
                    </h8>
                </div>
                <hr></hr>
                <div className='column folio-item'>
                    <div className='column large tab-12'>
                        <h3 className='section-header-allcaps'>Restaurante App</h3>
                    </div>
                    <a href='https://determined-shaw-761fc3.netlify.app/' className='folio-item__thumb'>
                        <img src='images/portfolio/Restaurante.jpg' alt='Restaurante' />
                    </a>
                    <h8>Using
                        HTML <i className='fab fa-html5'></i>,
                        CSS <i className='fab fa-css3'></i>,
                        JavaScript <i className='fab fa-js'></i>,
                        Bulma,
                        NodeJS <i className='fab fa-node-js'></i>,
                        ReactJS <i className='fab fa-react'></i>,
                        Firebase <i className='fas fa-database'></i>
                    </h8>
                </div>
    
                <div className='column folio-item'>
                    <div className='column large tab-12'>
                        <h3 className='section-header-allcaps'>Shopping Cart</h3>
                    </div>
                    <a href='https://awesome-fermat-e7e258.netlify.app/' className='folio-item__thumb'>
                        <img src='images/portfolio/ShoppingCart.png' 
                             width='600' height='200'
                             alt='ShoppingCart' />
                    </a>
                    <h8>Using
                        HTML <i className='fab fa-html5'></i>,
                        CSS <i className='fab fa-css3'></i>,
                        JavaScript <i className='fab fa-js'></i>,
                        Bulma,
                        NodeJS <i className='fab fa-node-js'></i>,
                        ReactJS <i className='fab fa-react'></i>,
                        MongoDB <i className='fas fa-database'></i>
                    </h8>
                </div>

                <div className='column folio-item'>
                    <div className='column large tab-12'>
                            <a href='#contact' className='s-hero__scroll-link smoothscroll'>
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
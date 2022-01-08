import React from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Contact() {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>RENNES</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0610101010">
                                <span className="clickInput"
                                onClick={() => {
                                    alert('n° de téléphone copié !')
                                }}>07 81 04 93 45</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="monmail@coucou.fr">
                                <span className="clickInput"
                                onClick={() => {
                                    alert('l adresse mail est copié !')
                                }}>vincent.bernier@hotmail.fr</span>
                            </CopyToClipboard>
                        </li>
                    
                    </ul>
               
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/vincent-bernier-906278168/" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/VincentBernier35" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Codepen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>

            </div>

        </div>
    )
}

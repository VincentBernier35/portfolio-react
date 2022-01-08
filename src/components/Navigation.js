import React from 'react';
import {Link} from 'react-router-dom';


export default function Navigation() {
    return (
        <div className="sidebar">
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/avatar150².png" alt="profil-pic" />
                    <h3>Vincent BERNIER</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li><Link to ="/"><i className="fas fa-home"></i><span>Acceuil</span></Link></li>
                    <li><Link to ="/Contact"><i className="fas fa-mountain"></i><span>Contact</span></Link></li>
                    <li><Link to ="/Knowledges"><i className="fas fa-images"></i><span>Knowledges</span></Link></li>
                    <li><Link to ="/Portfolio"><i className="fas fa-address-book"></i><span>Portfolio</span></Link></li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/vincent-bernier-906278168/" target="_blank" rel="noopener norefferrer noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/VincentBernier35g" target="_blank" rel="noopener norefferrer norefferer noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener norefferrer noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener norefferrer noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p>Vincent Bernier - 2021</p>
            </div>

        </div>


    )
}

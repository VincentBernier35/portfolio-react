import React from 'react'
import Navigation from '../components/Navigation'


export default function Home() {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Vincent BERNIER</h1>
                    <h2>Développeur Full-stack Javascript</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

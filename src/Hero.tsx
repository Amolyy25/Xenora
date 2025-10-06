import './Hero.css'
import Ctabutton from './Ctabutton'
import Card3D from './Card3D'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-bg" aria-hidden="true"></div>
                <div className="hero-content">
                    <div className="textcontent ">
                    <h1 className="fat-title">Bienvenue sur <span className="gradient-text">Xenora</span></h1>
                    <p className="vpx">Vous avez besoin d'un site web ou d'une application mobile ?</p>
                    <p className="vpx">Nous sommes là pour vous aider.</p>
                    <Ctabutton />
                    </div>
                    <div className="cardcontent">
                        <Card3D />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
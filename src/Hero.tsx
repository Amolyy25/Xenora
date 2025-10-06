import './Hero.css'
import Ctabutton from './Ctabutton'
const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-bg" aria-hidden="true"></div>
                <div className="hero-content bordertest">
                    <div className="textcontent bordertest">
                    <h1>Bienvenue sur Xenora</h1>
                    <p>Vous avez besoin d'un site web ou d'une application mobile ?</p>
                    <p>Nous sommes là pour vous aider.</p>
                    <Ctabutton />
                    </div>
                    <div className="cardcontent bordertest">
                        <div className="card mr1">
                            <h2>Des sites pensée sur mesure</h2>
                            <li>Développement par 2 passionnés</li>
                            <li>Des sites performants et optimisés</li>
                            <li>Des sites adaptés à vos besoins</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
import { useState, useRef, MouseEvent } from 'react';
import './Card3D.css';

const Card3D = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glareX, setGlareX] = useState(50);
    const [glareY, setGlareY] = useState(50);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateXValue = ((y - centerY) / centerY) * -15;
        const rotateYValue = ((x - centerX) / centerX) * 15;
        
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setGlareX((x / rect.width) * 100);
        setGlareY((y / rect.height) * 100);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlareX(50);
        setGlareY(50);
    };

    return (
        <div 
            ref={cardRef}
            className="card-3d"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY - 12}deg)`
            }}
        >
            <div 
                className="card-glare"
                style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                }}
            ></div>
            
            <div className="card-shine"></div>
            
            <div className="card-inner">
                <div className="card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                <h2 className="card-title">Des sites pensés sur mesure</h2>
                
                <ul className="card-list">
                    <li className="card-item">
                        <span className="card-bullet">✦</span>
                        <span>Développement par 2 passionnés</span>
                    </li>
                    <li className="card-item">
                        <span className="card-bullet">✦</span>
                        <span>Des sites performants et optimisés</span>
                    </li>
                    <li className="card-item">
                        <span className="card-bullet">✦</span>
                        <span>Des sites adaptés à vos besoins</span>
                    </li>
                </ul>
                
                <div className="card-gradient-bottom"></div>
            </div>
        </div>
    );
};

export default Card3D;


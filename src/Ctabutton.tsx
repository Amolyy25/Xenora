import styled from 'styled-components';

const Ctabutton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button-bg"></span>
        <span className="button-shine"></span>
        <span className="button-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
          <span className="text">Visiter le site</span>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes gradient-shift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes shine-move {
    0% {
      left: -100%;
    }
    100% {
      left: 200%;
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 
        0 0 20px rgba(163, 112, 240, 0.4),
        0 0 40px rgba(66, 191, 221, 0.2),
        0 8px 20px rgba(75, 102, 255, 0.3);
    }
    50% {
      box-shadow: 
        0 0 30px rgba(163, 112, 240, 0.6),
        0 0 60px rgba(66, 191, 221, 0.3),
        0 8px 30px rgba(75, 102, 255, 0.4);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  .button {
    position: relative;
    background: linear-gradient(135deg, #A370F0 0%, #5B7FFF 50%, #42BFDD 100%);
    background-size: 200% 200%;
    color: #fff;
    width: 14em;
    height: 3.2em;
    border: none;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    animation: gradient-shift 4s ease infinite, pulse-glow 3s ease-in-out infinite, float 3s ease-in-out infinite;
    box-shadow: 
      0 0 20px rgba(163, 112, 240, 0.4),
      0 0 40px rgba(66, 191, 221, 0.2),
      0 8px 20px rgba(75, 102, 255, 0.3);
  }

  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .button:hover::before {
    opacity: 1;
  }

  .button-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #8B5FD9 0%, #4A6BE8 50%, #3AADC7 100%);
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  .button:hover .button-bg {
    opacity: 1;
  }

  .button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    transform: skewX(-25deg);
    z-index: 1;
    pointer-events: none;
  }

  .button:hover .button-shine {
    animation: shine-move 0.8s ease-in-out;
  }

  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8em;
    width: 100%;
    height: 100%;
  }

  .icon {
    width: 1.5em;
    height: 1.5em;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  .button:hover .icon {
    transform: translateX(8px) rotate(5deg) scale(1.1);
  }

  .text {
    letter-spacing: 0.02em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .button:hover .text {
    letter-spacing: 0.05em;
  }

  .button:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 0 40px rgba(163, 112, 240, 0.6),
      0 0 80px rgba(66, 191, 221, 0.4),
      0 12px 35px rgba(75, 102, 255, 0.5);
  }

  .button:active {
    transform: translateY(-2px) scale(1);
    box-shadow: 
      0 0 20px rgba(163, 112, 240, 0.4),
      0 0 40px rgba(66, 191, 221, 0.2),
      0 6px 15px rgba(75, 102, 255, 0.4);
  }

  @media (prefers-reduced-motion: reduce) {
    .button {
      animation: none;
    }
    
    .button:hover .button-shine {
      animation: none;
    }
  }

  @media (max-width: 768px) {
    .button {
      width: 12em;
      height: 3em;
      font-size: 0.9rem;
    }
  }
`;

export default Ctabutton;

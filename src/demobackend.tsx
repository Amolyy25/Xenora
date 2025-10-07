import React from 'react'
import './essentials.css'

function demobackend() {
  return 
  <>
  <div className="main flex">
    <div className="form">
        <div className="form-signUp">
            <input type="email" placeholder='Votre email'/>
            <input type="password" placeholder='Votre mots de passe'/>
            <button>Se connecter</button>
        </div>
    </div>
    <div className="code">
        <div className="display-code">
            <span> div className="main flex"</span>
            <span> div className="form"</span>
            <span> div className="form-signUp"</span>
            <span> input type="email" placeholder='Votre email'</span>
            <span> input type="password" placeholder='Votre mots de passe'</span>
            <span> button Se connecter button</span>
            <span> /button</span>
            <span> /div</span>
            <span> /div</span>
        </div>
    </div>
  </div>
  </>
}

export default demobackend

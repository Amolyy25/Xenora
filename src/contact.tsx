import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
    return (
        <main className="contact-main">
            <section className="contact-container">
                <h1 className="contact-title">Discutons ensemble&nbsp;!</h1>
                <p className="contact-description">
                    Une question, une suggestion ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement !
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required placeholder="Votre nom" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Votre email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required placeholder="Votre message" />
                    </div>
                    <button type="submit" className="contact-btn">Envoyer</button>
                </form>
            </section>
        </main>
    );
};

export default Contact;
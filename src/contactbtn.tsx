import React from 'react';
import './contact.css';

const ContactForm: React.FC = () => {
    return (
        <main className="contact-main">
            <div className="contact-wrapper"> {/* met le formulaire à droite */}
                <section className="contact-container small">
                    <h1 className="contact-title">Contactez-nous</h1>
                    <p className="contact-description">
                        Nous serions ravis de répondre à vos questions. Remplissez le formulaire ci-dessous !
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
                        <button type="submit" className="contact-btn">Envoyer</button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ContactForm;
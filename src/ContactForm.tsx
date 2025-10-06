import React from 'react';
import './contact.css';

const ContactForm: React.FC = () => {
    return (
        <main className="contact-main">
            <section className="contact-container">
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
                    <div className="form-group">
                        <label htmlFor="subject">Sujet</label>
                        <select id="subject" name="subject" required>
                            <option value="">Sélectionnez un sujet</option>
                            <option value="inquiry">Demande d'information</option>
                            <option value="support">Support technique</option>
                            <option value="partnership">Partenariat</option>
                            <option value="other">Autre</option>
                        </select>
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

export default ContactForm;
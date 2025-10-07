import React, { useState } from 'react';
import './contact.css';

const Contact: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<string>('selection');

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubject(e.target.value);
    };

    const getAdditionalTextareaContent = () => {
        switch (selectedSubject) {
            case 'inquiry':
                return {
                    label: 'Détails de votre demande',
                    placeholder: 'Décrivez en détail votre demande d\'information...',
                    rows: 4
                };
            case 'support':
                return {
                    label: 'Description du problème',
                    placeholder: 'Décrivez le problème technique rencontré, les étapes pour le reproduire, etc...',
                    rows: 5
                };
            case 'other':
                return {
                    label: 'Précisions',
                    placeholder: 'Donnez plus de détails sur votre demande...',
                    rows: 4
                };
            default:
                return null;
        }
    };

    const additionalContent = getAdditionalTextareaContent();

    return (
        <main className="contact-main" id="contact">
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
                        <label htmlFor="subject">Sujet</label>
                        <select 
                            id="subject" 
                            name="subject" 
                            required 
                            value={selectedSubject}
                            onChange={handleSubjectChange}
                        >
                            <option value="selection">Sélectionnez un sujet</option>
                            <option value="inquiry">Demande d'information</option>
                            <option value="support">Support technique</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    
                    {/* Zone de texte conditionnelle */}
                    {additionalContent && (
                        <div className="form-group additional-textarea">
                            <label htmlFor="additional-details">{additionalContent.label}</label>
                            <textarea 
                                id="additional-details" 
                                name="additional-details" 
                                rows={additionalContent.rows} 
                                placeholder={additionalContent.placeholder}
                                className="additional-textarea-field"
                            />
                        </div>
                    )}
                    
                    <button type="submit" className="contact-btn">Envoyer</button>
                </form>
            </section>
        </main>
    );
};

export default Contact;

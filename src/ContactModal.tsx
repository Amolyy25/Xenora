import React, { useState } from 'react';
import './contact.css';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {/* ...le reste du formulaire... */}
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Autres éléments de la barre de navigation */}
      <button onClick={() => setContactOpen(true)}>Contact</button>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </nav>
  );
};

export default NavBar;
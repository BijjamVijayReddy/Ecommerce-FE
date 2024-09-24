import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Deactivate account</h2>
        <p>Are you sure you want to logout your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

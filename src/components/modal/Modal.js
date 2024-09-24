import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <p>Are You Sure You Want To logout Your Account? </p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

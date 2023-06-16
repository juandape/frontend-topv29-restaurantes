import React, { useState } from 'react';

const Modal = () => {
  const [modal, setModal] = useState({ isOpen: false, type: '' });

  const openModal = (type) => {
    setModal({ isOpen: true, type });
    };

  const closeModal = () => {
    setModal({ isOpen: false, type: '' });
  };

  return (
    <div>
      <button onClick={() => openModal('login')}>Abrir modal de inicio de sesión</button>
      <button onClick={() => openModal('signup')}>Abrir modal de registro</button>

      {modal.isOpen && (
        <div className="modal">
          <h2>{`Modal ${modal.type}`}</h2>
          <button onClick={closeModal}>Cerrar modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;

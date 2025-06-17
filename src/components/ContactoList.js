import React from 'react';

const ContactoList = ({ contactos, onEliminar, onEditar }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white">
        <h5 className="mb-0">Lista de Contactos</h5>
      </div>
      <ul className="list-group list-group-flush">
        {contactos.map(contacto => (
          <li key={contacto._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{contacto.nombre}</strong> - {contacto.telefono}
              <br />
              <small>{contacto.email}</small>
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEditar(contacto)}>✏️ Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => onEliminar(contacto._id)}>🗑️ Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactoList;

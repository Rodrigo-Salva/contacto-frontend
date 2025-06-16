import React from 'react';

const ContactoList = ({ contactos }) => {
  return (
    <div className="row">
      {contactos.length === 0 ? (
        <p className="text-muted text-center">No hay contactos aún. Agrega uno.</p>
      ) : (
        contactos.map((c) => (
          <div className="col-md-6" key={c._id}>
            <div className="card mb-4 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-primary">{c.nombre}</h5>
                <ul className="list-unstyled">
                  <li><strong>📞 Teléfono:</strong> {c.telefono}</li>
                  {c.email && <li><strong>📧 Email:</strong> {c.email}</li>}
                  {c.direccion && <li><strong>🏠 Dirección:</strong> {c.direccion}</li>}
                  {c.fechaNacimiento && (
                    <li className="text-muted">🎂 {new Date(c.fechaNacimiento).toLocaleDateString()}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactoList;

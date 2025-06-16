import React, { useState } from 'react';

const API_URL = 'https://api-contactos-j0wn.onrender.com/api/contactos';

const ContactoForm = ({ onAgregar }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: ''
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formulario)
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Error al crear contacto');
      }

      setFormulario({
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        fechaNacimiento: ''
      });

      onAgregar();
    } catch (err) {
      alert('⚠️ ' + err.message);
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Agregar Contacto</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input type="text" name="nombre" className="form-control" required value={formulario.nombre} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input type="text" name="telefono" className="form-control" required value={formulario.telefono} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formulario.email} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Dirección</label>
              <input type="text" name="direccion" className="form-control" value={formulario.direccion} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" name="fechaNacimiento" className="form-control" value={formulario.fechaNacimiento} onChange={handleChange} />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-success">Guardar Contacto</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoForm;

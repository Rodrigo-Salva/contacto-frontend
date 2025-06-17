import React, { useState, useEffect } from 'react';

const API_URL = 'https://api-contactos-j0wn.onrender.com/api/contactos';

const ContactoForm = ({ onAgregar, contactoSeleccionado, onLimpiar }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    fechaNacimiento: ''
  });

  useEffect(() => {
    if (contactoSeleccionado) {
      setFormulario(contactoSeleccionado);
    }
  }, [contactoSeleccionado]);

  const handleChange = e => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const metodo = formulario._id ? 'PUT' : 'POST';
      const url = formulario._id ? `${API_URL}/${formulario._id}` : API_URL;

      const res = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formulario)
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Error al guardar');
      }

      setFormulario({
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        fechaNacimiento: ''
      });

      onAgregar();
      onLimpiar();
    } catch (err) {
      alert('⚠️ ' + err.message);
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">{formulario._id ? 'Editar Contacto' : 'Agregar Contacto'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input name="nombre" className="form-control" value={formulario.nombre} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono</label>
            <input name="telefono" className="form-control" value={formulario.telefono} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formulario.email} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Dirección</label>
            <input name="direccion" className="form-control" value={formulario.direccion} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Fecha de Nacimiento</label>
            <input type="date" name="fechaNacimiento" className="form-control" value={formulario.fechaNacimiento?.substring(0, 10)} onChange={handleChange} />
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-success me-2">{formulario._id ? 'Actualizar' : 'Guardar'}</button>
            {formulario._id && <button type="button" className="btn btn-secondary" onClick={() => {
              setFormulario({ nombre: '', telefono: '', email: '', direccion: '', fechaNacimiento: '' });
              onLimpiar();
            }}>Cancelar</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoForm;

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactoForm from './components/ContactoForm';
import ContactoList from './components/ContactoList';

const API_URL = 'https://api-contactos-j0wn.onrender.com/api/contactos';


function App() {
  const [contactos, setContactos] = useState([]);

  const obtenerContactos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContactos(data);
    } catch (err) {
      console.error('Error al obtener contactos:', err.message);
    }
  };

  useEffect(() => {
    obtenerContactos();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">📒 Agenda de Contactos</h1>
      <div className="row">
        <div className="col-md-4">
          <ContactoForm onAgregar={obtenerContactos} />
        </div>
        <div className="col-md-8">
          <ContactoList contactos={contactos} />
        </div>
      </div>
    </div>
  );
}

export default App;

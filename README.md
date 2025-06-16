# 📒 Frontend Agenda de Contactos

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

Frontend moderno para gestionar tu agenda de contactos. Permite agregar, buscar y visualizar contactos de manera sencilla y rápida.

---

## 🚀 Características

- Formulario para agregar nuevos contactos
- Listado de contactos en tarjetas
- Validación de campos requeridos
- Interfaz responsiva y atractiva con Bootstrap
- Comunicación con API RESTful

---

## 🛠️ Instalación

1. **Clona el repositorio**
   ```sh
   git clone https://github.com/tu-usuario/frontend-contactos.git
   cd frontend-contactos
   ```

2. **Instala las dependencias**
   ```sh
   npm install
   ```

3. **Inicia la aplicación**
   ```sh
   npm start
   ```
   La app estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🖥️ Estructura del Proyecto

```
src/
├── components/
│   ├── ContactoForm.js   # Formulario para agregar contactos
│   └── ContactoList.js   # Listado de contactos
├── App.js                # Componente principal
├── index.js              # Punto de entrada
└── App.css               # Estilos personalizados
```

---

## 📚 Componentes Destacados

### [`components/ContactoForm.js`](src/components/ContactoForm.js)

Formulario para agregar un nuevo contacto.  
Campos: nombre, teléfono, email, dirección y fecha de nacimiento.  
Envía los datos al backend y actualiza la lista.

```js
// Ejemplo de uso
<ContactoForm onAgregar={actualizarContactos} />
```

---

## 📦 Dependencias

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

---

## 📄 Notas

- Asegúrate de que el backend esté corriendo en `http://localhost:3000/api/contactos`.
- Puedes personalizar los estilos en `App.css`.

---

> Hecho con ❤️ por [tu nombre o usuario]

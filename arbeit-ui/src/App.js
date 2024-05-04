import React from 'react';
import './App.css';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';

function App() {
  const serviceItems = [
    "Registro de Usuarios",
    "Gestión de Perfiles",
    "Reserva de Horas",
    "Gestión de Reservas",
    "Registro de Transacciones",
    "Generación de Boletas",
    "Notificaciones por Correo Electrónico",
    "Gestión de Usuarios",
    "Calendario de Disponibilidad",
    "Seguridad de Datos"
  ];

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    event.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "";
    event.target.style.boxShadow = "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="app-title">Agenda de Consultas Psicológicas</h1>
          <div className="buttons-container">
            <Button label="Iniciar Sesión" className="p-button-sm p-button-rounded p-button-primary" />
            <Button label="Registrarse" className="p-button-sm p-button-rounded p-button-secondary" />
          </div>
        </div>
        <div className="services-container">
          <h2 className="section-title">Servicios Disponibles</h2>
          <div className="services-grid">
            {serviceItems.map((service, index) => (
              <div
                key={index}
                className="service-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <div className="p-field">
            <label htmlFor="username">Nombre de Usuario</label>
            <InputText id="username" />
          </div>
          <div className="p-field">
            <label htmlFor="password">Contraseña</label>
            <InputText id="password" type="password" />
          </div>
        </div>
        <div className="calendar-container">
          <h2 className="section-title">Calendario</h2>
          <Calendar id="basic" value={new Date()} className="calendar" />
        </div>
      </header>
    </div>
  );
}

export default App;
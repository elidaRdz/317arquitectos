import React from 'react';
import './Nosotros.css';

/* Reemplazar los nombres, puestos y poner imagen de cada empleado */
const employees = [
  {
    name: 'Empleado 1',
    position: 'Puesto 1',
    image: '/img/empleado.jpg'
  },
  {
    name: 'Empleado 2',
    position: 'Puesto 2',
    image: '/img/empleado.jpg'
  },
  {
    name: 'Empleado 3',
    position: 'Puesto 3',
    image: '/img/empleado.jpg'
  }
];

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1>Nosotros</h1>
      <section className="historia">
        <h1>Historia de la Empresa</h1>
        <p>
          Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa. Párrafo de historia de la empresa.
        </p>
      </section>

      <section className="empleados">
        <h2>Empleados</h2>
        <div className="empleados-grid">
          {employees.map((employee, index) => (
            <div key={index} className="empleado">
              <img src={employee.image} alt={employee.name} />
              <h3>{employee.name}</h3>
              <p>{employee.position}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mision-vision">
        <div className="mision">
          <h2>Misión</h2>
          <p>
            Nuestra misión es...
          </p>
        </div>
        <div className="vision">
          <h2>Visión</h2>
          <p>
            Nuestra visión es...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
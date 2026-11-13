import { obtenerTareas, moverTarea, eliminarTarea } from './estado.js';
import { crearTarjetaTarea } from './componentes.js';

const COLUMNAS_CONFIG = [
  { id: 'pendiente', titulo: 'Pendiente' },
  { id: 'curso', titulo: 'En curso' },
  { id: 'hecho', titulo: 'Hecho' }
];

export function render() {
  const contenedorTablero = document.getElementById('tablero');
  contenedorTablero.innerHTML = ''; 

  const todasLasTareas = obtenerTareas();

  COLUMNAS_CONFIG.forEach(col => {
    // Filtra las tareas que pertenecen a esta columna
    const tareasDeColumna = todasLasTareas.filter(t => t.estado === col.id);

    // Crea la estructura de la columna
    const divColumna = document.createElement('section');
    divColumna.className = 'columna';

    const header = document.createElement('div');
    header.className = 'columna-header';
    header.innerHTML = `
      <h2>${col.titulo}</h2>
      <span class="contador">${tareasDeColumna.length}</span>
    `;

    divColumna.appendChild(header);

    // Crea y agrega cada tarjeta dentro de la columna
    tareasDeColumna.forEach(tarea => {
      const tarjetaDOM = crearTarjetaTarea(
        tarea,
        (id, direccion) => {
          moverTarea(id, direccion);
          render(); 
        },
        (id) => {
          eliminarTarea(id);
          render(); 
        }
      );
      divColumna.appendChild(tarjetaDOM);
    });

    contenedorTablero.appendChild(divColumna);
  });
}
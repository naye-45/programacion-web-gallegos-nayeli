import { agregarTarea } from './estado.js';
import { render } from './render.js';

const formulario = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que la página se recargue
  
  const texto = inputTarea.value;
  if (texto.trim() === '') return;

  agregarTarea(texto);
  inputTarea.value = ''; // Limpia el input
  render(); // Actualiza la vista
});

// Dibujo inicial al abrir la aplicación
render();
export function crearTarjetaTarea(tarea, alMover, alEliminar) {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta';

  const textoSpan = document.createElement('span');
  textoSpan.textContent = tarea.texto;

  const divAcciones = document.createElement('div');
  divAcciones.className = 'acciones';

  // Botón Izquierda 
  const btnIzq = document.createElement('button');
  btnIzq.textContent = '←';
  btnIzq.title = 'Mover atrás';
  btnIzq.disabled = tarea.estado === 'pendiente'; // Deshabilitado si ya está al inicio
  btnIzq.addEventListener('click', () => alMover(tarea.id, -1));

  // Botón Derecha 
  const btnDer = document.createElement('button');
  btnDer.textContent = '→';
  btnDer.title = 'Mover adelante';
  btnDer.disabled = tarea.estado === 'hecho'; // Deshabilitado si ya está al final
  btnDer.addEventListener('click', () => alMover(tarea.id, 1));

  // Botón Eliminar 
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '✕';
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.title = 'Eliminar tarea';
  btnEliminar.addEventListener('click', () => alEliminar(tarea.id));

  divAcciones.append(btnIzq, btnDer, btnEliminar);
  tarjeta.append(textoSpan, divAcciones);

  return tarjeta;
}
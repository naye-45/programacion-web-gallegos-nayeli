// Arreglo principal que actúa como estado de la aplicación
let tareas = [
  { id: 1, texto: 'Revisar requisitos de la tarea', estado: 'pendiente' },
  { id: 2, texto: 'Dividir el código en módulos', estado: 'curso' }
];

const ORDEN_COLUMNAS = ['pendiente', 'curso', 'hecho'];

export function obtenerTareas() {
  return tareas;
}

export function agregarTarea(texto) {
  const nuevaTarea = {
    id: Date.now(), 
    texto: texto.trim(),
    estado: 'pendiente' // Siempre entra en Pendiente
  };
  tareas.push(nuevaTarea);
}

export function moverTarea(id, direccion) {
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return;

  const indiceActual = ORDEN_COLUMNAS.indexOf(tarea.estado);
  const nuevoIndice = indiceActual + direccion; // direccion es -1 (izq) o +1 (der)

  if (nuevoIndice >= 0 && nuevoIndice < ORDEN_COLUMNAS.length) {
    tarea.estado = ORDEN_COLUMNAS[nuevoIndice];
  }
}

export function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
}
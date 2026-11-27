// Guardar datos
export const guardarDatos = async (lista) => {
  localStorage.setItem('usuarios', JSON.stringify(lista));
};

// Leer datos
export const leerDatos = async () => {
  const datos = localStorage.getItem('usuarios');
  if (datos) {
    return JSON.parse(datos);
  }
  return [];
};

// Borrar todo
export const borrarDatos = async () => {
  localStorage.removeItem('usuarios');
};
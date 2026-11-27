import { guardarDatos, leerDatos } from '../storage/localStorage';

// Traer todos
export const obtenerUsuarios = async () => {
  return await leerDatos();
};

// Agregar nuevo
export const agregarUsuario = async (nombre, edad) => {
  if (nombre.trim() === '' || edad.trim() === '') {
    return false;
  }

  const lista = await leerDatos();
  const nuevo = {
    id: Date.now().toString(),
    nombre: nombre,
    edad: Number(edad),
  };

  lista.push(nuevo);
  await guardarDatos(lista);
  return true;
};

// Actualizar
export const modificarUsuario = async (id, nombre, edad) => {
  if (nombre.trim() === '' || String(edad).trim() === '') {
    return false;
  }

  const lista = await leerDatos();
  const nuevaLista = lista.map((u) => {
    if (u.id === id) {
      return { id: id, nombre: nombre, edad: Number(edad) };
    }
    return u;
  });

  await guardarDatos(nuevaLista);
  return true;
};

// Eliminar
export const borrarUsuario = async (id) => {
  const lista = await leerDatos();
  const nuevaLista = lista.filter((u) => u.id !== id);
  await guardarDatos(nuevaLista);
};
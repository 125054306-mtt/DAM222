const listaPedidos = new Map();

// Función para agregar productos
function agregarProductoACaja(nombreCliente, nombreProducto, precio) {
  if (!nombreCliente || nombreCliente === "") return;
  if (!nombreProducto || nombreProducto === "") return;
  if (precio <= 0) return;

  if (!listaPedidos.has(nombreCliente)) {
    listaPedidos.set(nombreCliente, { listaProductos: [], totalAcumulado: 0 });
  }

  const pedidoCliente = listaPedidos.get(nombreCliente);
  pedidoCliente.listaProductos.push({ nombreProducto: nombreProducto, precio: precio });
}

// Función para calcular subtotal, IVA y total 
function calcularCaja(nombreCliente) {
  if (!listaPedidos.has(nombreCliente)) {
    console.log("Error: No existe pedido para " + nombreCliente);
    return;
  }

  const pedidoCliente = listaPedidos.get(nombreCliente);
  const productos = pedidoCliente.listaProductos;

  if (productos.length === 0) {
    console.log("No hay productos registrados.");
    return;
  }

  const subtotal = productos.reduce(function (acumulado, { precio }) {
    return acumulado + precio;
  }, 0);

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  pedidoCliente.totalAcumulado = subtotal;

  console.log("--- CAJA (" + nombreCliente + ") ---");
  console.log("Subtotal: $" + subtotal);
  console.log("IVA (16%): $" + iva);
  console.log("Total a pagar: $" + total);
}

// Submenú de Caja 
async function menuCaja(pedidosMap, preguntar) {
    const mapaUso = pedidosMap || listaPedidos;
    let continuar = true;

    while (continuar) {
        console.log("\n--- MENÚ DE CAJA ---");
        console.log("1. Mostrar caja de cliente");
        console.log("2. Regresar al menú principal");

        const opcion = await preguntar("Selecciona una opción: ");

        switch (opcion.trim()) {
            case '1':
                const cliente = await preguntar("Nombre del cliente: ");

                if (!cliente || !mapaUso.has(cliente)) {
                    console.log("\nNo existe pedido para " + cliente);
                } else {
                    const datosCliente = mapaUso.get(cliente);
                    const productos = Array.isArray(datosCliente) ? datosCliente : (datosCliente.listaProductos || []);

                    if (productos.length === 0) {
                        console.log("\nNo hay productos registrados.");
                    } else {
                        //Listar pedidos
                        console.log(`\n--- LISTA DE PEDIDOS (${cliente}) ---`);
                        productos.forEach(prod => {
                            const nombre = prod.nombreProducto || prod.nombre;
                            console.log(`- ${nombre}: $${prod.precio}`);
                        });

                    
                        const subtotal = productos.reduce((acc, { precio }) => acc + precio, 0);
                        const iva = subtotal * 0.16;
                        const total = subtotal + iva;

                        console.log(`\nTotal acumulado (subtotal): $${subtotal.toFixed(2)}`);
                        console.log(`IVA (16%): $${iva.toFixed(2)}`);
                        console.log(`Total: $${total.toFixed(2)}`);
                    }
                }
                break;

            case '2':
                continuar = false;
                break;

            default:
                console.log("\nOpción no válida.");
                break;
        }
    }
}
module.exports = { 
    menuCaja, 
    agregarProductoACaja, 
    calcularCaja, 
    listaPedidos 
};

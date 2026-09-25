// Menu de opciones de caja 
function menuCaja() {
        console.log("\n--- Menu de caja ---");
        console.log("1. Mostrar caja de cliente");
        console.log("2. Regresar al menú principal");
}

//Status del pedido usando callback 
function verificarEstatusPedido(pedido callbackNotificacion) {
    if(!pedido.cancelado == true) {
        callbackNotificacion("El pedido fue cancelado por cocina");
        return false;
    }

    if(!pedido.status) {
        callbackNotificacion("El pedido sigue en preparacion");
        return false;
    }
        callbackNotificacion("El pedido esta listo");
        return true;
}

//Promociones 
function mostrarProductosCliente(productos, promociones) {
    console.log("\n--- Detalle del pedido ---");
    productos.forEach(function(prod) {
        const nombre = prod.nombreProducto || prod.nombre;
        const precio = prod.precio || 0;
        
        // Verifica si esta en promocion
        const tienePromo = promociones && promociones.some && promociones.some(function(promo) {
            return promo.productoEnPromocion === nombre || (promo.mensaje && promo.mensaje.includes("2x1"));
        }); 

        if (tienePromo) {
            console.log("- " + nombre + ": $" + precio + " (Aplica 2x1)");
        } else {
            console.log("- " + nombre + ": $" + precio);
        }
    });
}

// Calcula el subtotal con reduce, luego suma el IVA del 16 por ciento
function calcularTotalPedido(productos) {
    const subtotal = productos.reduce(function(acumulado, prod) {
        return acumulado + (prod.precio || 0);
    }, 0);

    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    return {
        subtotal: subtotal,
        iva: iva,
        total: total
    };
}

//Caja

async function menuCaja(listaPedidos, listaPromociones, preguntar) {
    let continuar = true;

    while (continuar) {
        mostrarMenu();
        const opcion = await preguntar("Selecciona una opcion: ");

        switch (opcion.trim()) {
            case '1':
                const cliente = await preguntar("Nombre del cliente: ");

                if (!cliente || !listaPedidos || !listaPedidos.has(cliente)) {
                    console.log("\nNo existe pedido registrado para " + cliente);
                } else {
                    const pedidoCliente = listaPedidos.get(cliente);
                    
                    // Notifica y el status del pedido
                   const estaListo = verificarEstatusPedido(pedidoCliente, function(mensaje) {
                        console.log("\nNotificacion: " + mensaje);
                    });

                    // Si esta listo el producto procede a mostrar detalles y el cobro
                    if (estaListo) {
                        const productos = pedidoCliente.listaProductosDelPedido || [];

                        if (productos.length === 0) {
                            console.log("No hay productos registrados en este pedido.");
                        } else {
                            mostrarProductosCliente(productos, listaPromociones);

                            const totales = calcularTotalPedido(productos);

                            console.log("\nSubtotal: $" + totales.subtotal.toFixed(2));
                            console.log("IVA (16%): $" + totales.iva.toFixed(2));
                            console.log("Total a pagar: $" + totales.total.toFixed(2));
                        }
                    }
                }
                break;

            case '2':
                continuar = false;
                break;

            default:
                console.log("\nOpcion no valida.");
                break;
        }
    }
}

module.exports = { 
    menuCaja 
};
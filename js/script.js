let productos = [];

//ingreso de la cantidad de productois
function obtenerCantidadProductos() {
    return parseInt(prompt('Ingrese la cantidad de productos que desea calcular'));
}

//ingreso de datos
function ingresarDatosProductos(indice) {
    let peso = parseFloat(prompt(`Ingrese el peso de su producto numero ${indice + 1} `));
    let destino = prompt(`Ingrese el destino de su producto numero ${indice + 1}  (nacional o internacional)`);
    if (!validarDatos(peso, destino)) {
        // En caso de datos no válidos, volver a solicitar
        ingresarDatosProductos(indice);
    } else {
        // Agregar producto a la lista
        productos.push({ peso, destino });
    }
}

//validacion de datos
function validarDatos(peso, destino) {
    if (isNaN(peso) || peso < 0) {
        alert('Error: el peso debe ser un número positivo.');
        return false;
    }
    if (destino !== 'nacional' && destino !== 'internacional') {
        alert('Error: el destino debe ser nacional o internacional.');
        return false;
    }
    return true;
}

// Función para calcular el costo de envío de un producto
function calcularCostoEnvio(peso, destino) {
    let costoProducto = 0;
    //envio nacional
    if (destino === 'nacional') {
        if (peso <= 1) costoProducto = 8500;
        else if (peso <= 5) costoProducto = 9900;
        else if (peso <= 10) costoProducto = 13400;
        else if (peso <= 15) costoProducto = 16600;
        else if (peso <= 20) costoProducto = 19400;
        else if (peso <= 25) costoProducto = 23500;
    } 
        /*
    Tabla de costos:
    Hasta 1kg	$ 8.500,00	$ 11.400,00
    Hasta 5kg	$ 9.900,00	$ 13.800,00
    Hasta 10kg	$ 13.400,00	$ 19.500,00
    Hasta 15kg	$ 16.600,00	$ 24.400,00
    Hasta 20kg	$ 19.400,00	$ 28.500,00
    Hasta 25kg	$ 23.500,00	$ 34.900,00
    */

   //envio internacional
    else {
        if (peso <= 1) costoProducto = 11400;
        else if (peso <= 5) costoProducto = 13800;
        else if (peso <= 10) costoProducto = 19500;
        else if (peso <= 15) costoProducto = 24400;
        else if (peso <= 20) costoProducto = 28500;
        else if (peso <= 25) costoProducto = 34900;
    }
    return costoProducto;
}

//mostrar resultados
function mostrarResultados(indice, peso, destino, costoProducto) {
    alert(`Producto ${indice + 1}: Peso ${peso} kg, Destino: ${destino}, Costo: $${costoProducto}`);
}

//mostrar costo de envio
function mostrarCostoEnvio(costoEnvio) {
    alert(`Costo total del envío: $${costoEnvio}`);
}

//ejecucion del simulador\
let cantidadProductos = obtenerCantidadProductos();
for (let i = 0; i < cantidadProductos; i++) {
    ingresarDatosProductos(i);
}

let costoEnvio = 0;
for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let costoProducto = calcularCostoEnvio(producto.peso, producto.destino);
    costoEnvio += costoProducto;
    mostrarResultados(i, producto.peso, producto.destino, costoProducto);
}
mostrarCostoEnvio(costoEnvio);
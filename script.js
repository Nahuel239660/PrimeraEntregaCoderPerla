const mostrarMensaje = (texto) => alert(texto);

const calcularCuotaSeguro = (precioVehiculo, cantidadCuotas, opcion) => {
  const montoBase = (precioVehiculo / 1500) * cantidadCuotas;

  switch (opcion) {
    case 1:
      return montoBase + 3000;
    case 2:
      return montoBase + 2000;
    case 3:
      return montoBase + 1000;
    default:
      mostrarMensaje("Opción no válida.");
      return;
  }
};

function ingresarDatosSeguro() {
  while (true) {
    const opcion = parseInt(prompt("Elija una opción:\n1 - Cobertura completa\n2 - Cobertura estándar\n3 - Cobertura básica"));

    const nombreVehiculo = prompt("Ingrese la marca y modelo del vehículo:");
    const precioVehiculo = Number(prompt("Ingrese el precio estimado del vehículo:"));

    if (isNaN(precioVehiculo)) {
      mostrarMensaje("Por favor, ingrese un valor numérico válido para el precio.");
      continue;
    }

    const cantidadCuotas = parseInt(prompt("Ingrese la cantidad de meses de contrato:"));

    if (isNaN(cantidadCuotas)) {
      mostrarMensaje("Por favor, ingrese un valor numérico válido para la cantidad de meses de contrato.");
      return;
    }

    const cuotaSeguro = calcularCuotaSeguro(precioVehiculo, cantidadCuotas, opcion);

    mostrarMensaje(`La cuota mensual para el vehículo ${nombreVehiculo} es: ${cuotaSeguro}`);
  }
}

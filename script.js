// Variables de datos
let nombreGuardado = "";
let apellidoGuardado = "";
let dniGuardado = "";
let correoGuardado = "";

// Clase Vehiculo
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
}

// Array de vehículos
const vehiculos = [
  new Vehiculo("Chevrolet"),
  new Vehiculo("Ford"),
  new Vehiculo("Peugeot"),
  new Vehiculo("Citroën"),
  new Vehiculo("Renault"),
  new Vehiculo("Volkswagen"),
  new Vehiculo("Toyota"),
  new Vehiculo("Honda"),
  new Vehiculo("Hyundai"),
  new Vehiculo("Kia"),
  new Vehiculo("Mercedes-Benz"),
  new Vehiculo("BMW"),
  new Vehiculo("Audi"),
];

// Elementos select
const selectMarca = document.getElementById("marca");
const selectModelo = document.getElementById("modelo");
const selectAnio = document.getElementById("anio");

// Función para llenar el select de marcas
function llenarSelectMarca() {
  vehiculos.forEach(vehiculo => {
    const option = document.createElement("option");
    option.value = vehiculo.marca;
    option.textContent = vehiculo.marca;
    selectMarca.appendChild(option);
  });
}

// Llenar el select de marcas al cargar la página
llenarSelectMarca();

// Precios base para cada marca
const preciosBase = {
  Chevrolet: 15000,
  Ford: 16000,
  Peugeot: 17000,
};

// Opciones de año para cada marca y modelo
const opcionesAnio = {
  Chevrolet: {
    Agile: [2020, 2021, 2022],
    Aveo: [2019, 2020, 2021],
  },
  Ford: {
    EcoSport: [2020, 2021, 2022],
    Escape: [2019, 2020, 2021],
  },
  Peugeot: {
    "208": [2020, 2021, 2022],
    "2008": [2019, 2020, 2021],
  },
};

// Función para llenar el select de año y modelo dependiendo de la marca
function llenarSelectAnio(marca, modelo) {
  const opciones = opcionesAnio[marca][modelo] || [];
  selectAnio.innerHTML = '<option value="">Año...</option>';

  opciones.forEach((anio) => {
    const option = document.createElement("option");
    option.value = anio;
    option.text = anio;
    selectAnio.appendChild(option);
  });
}

// Event listener para el cambio en el select de marca
selectMarca.addEventListener("change", () => {
  selectModelo.disabled = false;
  const marcaSeleccionada = selectMarca.value;

  if (marcaSeleccionada in opcionesAnio) {
    llenarSelectAnio(marcaSeleccionada, selectModelo.value);
  } else {
    selectAnio.innerHTML = '<option value="">Año...</option>';
    selectAnio.disabled = true;
  }
});

// Event listener para el cambio en el select de modelo
selectModelo.addEventListener("change", () => {
  const marcaSeleccionada = selectMarca.value;
  const modeloSeleccionado = selectModelo.value;

  if (marcaSeleccionada in opcionesAnio) {
    llenarSelectAnio(marcaSeleccionada, modeloSeleccionado);
  } else {
    selectAnio.innerHTML = '<option value="">Año...</option>';
    selectAnio.disabled = true;
  }
});

// Event listener para el botón "Siguiente" en la primera pestaña
document.getElementById("botonSiguiente").addEventListener("click", () => {
  document.getElementById("home-tab-pane").classList.remove("show", "active");
  document.getElementById("home-tab").classList.remove("active");

  document.getElementById("profile-tab-pane").classList.add("show", "active");
  document.getElementById("profile-tab").classList.add("active");
});

// Event listener para el botón "Siguiente" en la segunda pestaña
document.getElementById("botonSiguiente2").addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("profile-tab-pane").classList.remove("show", "active");
  document.getElementById("profile-tab").classList.remove("active");

  document.getElementById("contact-tab-pane").classList.add("show", "active");
  document.getElementById("contact-tab").classList.add("active");
  mostrarPerfil1();
});

// Función para mostrar la segunda pestaña
function mostrarPerfil1() {
  nombreGuardado = document.getElementById("nombre").value;
  apellidoGuardado = document.getElementById("apellido").value;
  dniGuardado = document.getElementById("dni").value;
  correoGuardado = document.getElementById("correo").value;

  if (nombreGuardado && apellidoGuardado && dniGuardado && correoGuardado) {
    document.getElementById("contact-tab").removeAttribute("disabled");
    document.getElementById("contact-tab").classList.add("active");
    document.getElementById("contact-tab-pane").classList.add("show", "active");

    calcularCotizacion();
  } else {
    alert("Por favor, complete todos los campos antes de continuar.");
  }
}

// Event listener para el botón "Contratar"
document.getElementById("botonContratar").addEventListener("click", () => {
  alert("¡Contratación exitosa!");
});

// Función para calcular la cotización
function calcularCotizacion() {
  let resultadoHTML = "<h2>Costo:</h2>";
  resultadoHTML += "<p>Nombre: " + nombreGuardado + "</p>";
  resultadoHTML += "<p>Apellido: " + apellidoGuardado + "</p>";
  resultadoHTML += "<p>DNI: " + dniGuardado + "</p>";
  resultadoHTML += "<p>Correo: " + correoGuardado + "</p>";

  const marca = selectMarca.value;
  const modelo = selectModelo.value;
  const anio = selectAnio.value;

  let precioBase = preciosBase[marca] || 0;

  if (modelo === "Agile") {
    precioBase += 1000;
  } else if (modelo === "Aveo") {
    precioBase += 1200;
  }

  if (anio === "2022") {
    precioBase += 800;
  } else if (anio === "2021") {
    precioBase += 600;
  }

  resultadoHTML += "<p>Precio Total: $" + precioBase + "</p>";

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = resultadoHTML;
}

console.log(new Date());

function calcularPension() {
    var ingresoMensual = parseFloat(document.getElementById("contact_ingreso").value);
    var edad = parseInt(document.getElementById("contact_edad").value);
    var saldoActual = parseFloat(document.getElementById("contact_saldo").value);

    // Calculando la pensión estimada
    var tasaReemplazo = 0.6; // Tasa de reemplazo del 60%
    var pensionEstimada = (ingresoMensual * edad * tasaReemplazo) / 12;

    // Calculando el fondo estimado
    var fondoEstimado = edad * ingresoMensual + saldoActual;
	document.getElementById('Estimada').textContent = `S/.${pensionEstimada.toFixed(2)}`;
	document.getElementById('FondoEs').textContent = `S/.${fondoEstimado.toFixed(2)}`;
	document.getElementById('SaldoD').textContent = `S/.${saldoActual.toFixed(2)}`;

}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularPension();
  });

function calculo() {
        // Validación del estado seleccionado del vehículo
        var estado = document.querySelector('input[name="estado"]:checked');
        if (!estado) {
            alert('Error: Por favor, seleccione el estado del vehículo.');
            return false;
        }
    
        // Validación del precio del vehículo
        var precio = parseFloat(document.getElementById('precio').value);
        if (isNaN(precio) || precio <= 0) {
            alert('Error: Ingrese un precio de vehículo válido.');
            return false;
        }
    
        // Cálculo del monto máximo de crédito disponible (75% del precio del vehículo)
        var maxCredito = precio * 0.75;
    
        // Validación del monto de crédito solicitado
        var credito = parseFloat(document.getElementById('credito').value);
        if (isNaN(credito) || credito <= 0 || credito > maxCredito) {
            alert('Error: El monto solicitado excede el máximo permitido. Máximo: $' + maxCredito.toFixed(2));
            return false;
        }
    
        // Validación del plazo del préstamo
        var años = parseInt(document.getElementById('años').value);
        if (isNaN(años) || años <= 0 || años > 5) {
            alert('Error: Ingrese un plazo de préstamo válido (1-5 años).');
            return false;
        }
    
        // Cálculo del pago total utilizando la fórmula de interés compuesto
        var cantidadCuotas = años * 12;
        var interes = 0.02;
        var interesCompuesto = Math.pow(1 + interes, cantidadCuotas) * credito;
    
        // Mostrar el resultado
        var resultado = 'El monto solicitado es de: $' + credito.toFixed(2) + '. ';
        resultado += 'Con un total a pagar de: $' + interesCompuesto.toFixed(2) + '. ';
        resultado += 'Y tendrá un plazo de: ' + cantidadCuotas + ' meses.';
        alert(resultado);
    
        // Evitar la presentación de formulario predeterminada
        return false;
    }
    
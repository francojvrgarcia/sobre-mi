// Funciones para realizar las operaciones
function suma(operando1, operando2) {
    return operando1 + operando2;
}

function resta(operando1, operando2) {
    return operando1 - operando2;
}

function multiplicacion(operando1, operando2) {
    return operando1 * operando2;
}

function division(operando1, operando2) {
    if (operando2 === 0) {
        return NaN;
    }
    return operando1 / operando2;
}

// Función para validar los operandos
function validarOperandos(operando1, operando2) {
    if (isNaN(operando1) || isNaN(operando2)) {
        return false;
    }
    return true;
}

// Función para realizar el cálculo según la operación seleccionada
function calcular() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const operador = document.getElementById('operador').value;
    let resultado;

    if (!validarOperandos(operando1, operando2)) {
		document.getElementById('resultado').style.color = 'red';
        document.getElementById('resultado').textContent = 'Error: Ingresa valores numéricos válidos en ambos operandos.';
        return;
    }

    switch (operador) {
        case 'suma':
            resultado = suma(operando1, operando2);
            break;
        case 'resta':
            resultado = resta(operando1, operando2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(operando1, operando2);
            break;
        case 'division':
            resultado = division(operando1, operando2);
            break;
        default:
            resultado = 'Operador inválido';
            break;
    }

	const resultadoMaximo = 10000000; // Límite predefinido para el resultado
	const resultadoMinimo = 0.0000000000000000001; // Valor mínimo para el resultado muy pequeño

	if (isNaN(resultado)) {
	  document.getElementById('resultado').style.color = 'red';
	  document.getElementById('resultado').textContent = 'Error: La operación no es válida.';
	}
	
	else if (Math.abs(resultado) > resultadoMaximo) {
	  document.getElementById('resultado').style.color = 'red';
	  document.getElementById('resultado').textContent = 'Error: El resultado es demasiado grande.';
	} 
	
	else if (Math.abs(resultado) < resultadoMinimo && resultado !== 0){
	  document.getElementById('resultado').style.color = 'red';
	  document.getElementById('resultado').textContent = 'Error: El resultado es demasiado pequeño.';
	}
	

	else{
		document.getElementById('resultado').style.color = 'blue';
		document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
	}
}

// Función para borrar los campos de texto y resultado
function limpiarCampos() {
    document.getElementById('operando1').value = '';
    document.getElementById('operando2').value = '';
    document.getElementById('resultado').textContent = 'Resultado: ';
}

const opciones = ['piedra', 'papel', 'tijera'];
const resultados = ['Empate', 'Gana la computadora', 'Gana el jugador'];

let nombreJugador = '';
let numJugadas = 0;
let jugadaComputadora, jugadaJugador;
let ganadorComputadora = 0;
let ganadorJugador = 0;
let empates = 0;
let jugadasRealizadas = 0;

const opcionesElement = document.getElementById('opciones');
const resultadosDiv = document.getElementById('resultados');
const jugadaModal = new bootstrap.Modal(document.getElementById('jugadaModal'));

const optionButtons = document.querySelectorAll('.optionButton');
optionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    jugadaJugador = opciones[index];
    jugadaComputadora = opciones[obtenerJugadaComputadora()];
    const resultado = determinarGanador(opciones.indexOf(jugadaComputadora), index);

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('resultado-jugada');

    resultadoDiv.innerHTML = `
    <div id="resultados">
      <p class="jugada-numero">Jugada ${jugadasRealizadas + 1}:</p>
      <p class="jugada-info">${nombreJugador} eligió: ${jugadaJugador}</p>
      <p class="jugada-info">La computadora eligió: ${jugadaComputadora}</p>
      <p class="jugada-info">El resultado fue: <span class="${resultado === 'Ganaste' ? 'ganador' : 'perdedor'}">${resultado}</span></p>
    </div>
  `;

    if (resultado === resultados[1]) {
      ganadorComputadora++;
    } else if (resultado === resultados[2]) {
      ganadorJugador++;
    } else {
      empates++;
    }

    resultadosDiv.appendChild(resultadoDiv);
    resultadosDiv.scrollTop = resultadosDiv.scrollHeight;

    jugadasRealizadas++;

    if (jugadasRealizadas === numJugadas) {
      const resultadosFinalesDiv = document.createElement('div');
      resultadosFinalesDiv.innerHTML = `
      <div id="resultados-finales">
        <h2>Resultados finales</h2>
        <p class="resultado-final">Computadora: ${ganadorComputadora} jugada(s) ganada(s)</p>
        <p class="resultado-final">${nombreJugador}: ${ganadorJugador} jugada(s) ganada(s)</p>
        <p class="resultado-final">Empates: ${empates} jugada(s)</p>
      </div>
    `;
      resultadosDiv.appendChild(resultadosFinalesDiv);
      resultadosDiv.scrollTop = resultadosDiv.scrollHeight;
      opcionesElement.style.display = 'none';
      //jugadaModal.hide();
    } else {
      jugadaModal.show();
    }
  });
});

document.getElementById('startButton').addEventListener('click', () => {
  opcionesElement.style.display = 'block';
  nombreJugador = document.getElementById('nombreJugador').value.trim();
  numJugadas = parseInt(document.getElementById('numJugadas').value);

  if (nombreJugador === '') {
    alert('Ingresa tu nombre antes de comenzar.');
    return;
  }

  if (isNaN(numJugadas) || numJugadas < 1 || numJugadas > 5) {
    alert('Cantidad de jugadas inválida. Debes ingresar un número válido (1, 2, 3, 4, o 5).');
    return;
  }

  jugadasRealizadas = 0;
  ganadorComputadora = 0;
  ganadorJugador = 0;
  empates = 0;
  resultadosDiv.innerHTML = '';
  jugadaModal.show();
});

document.getElementById('resetButton').addEventListener('click', () => {
  nombreJugador = '';
  numJugadas = 0;
  jugadasRealizadas = 0;
  ganadorComputadora = 0;
  ganadorJugador = 0;
  empates = 0;
  resultadosDiv.innerHTML = '';
  document.getElementById('nombreJugador').value = '';
  document.getElementById('numJugadas').value = '';
});

function obtenerJugadaComputadora() {
  return Math.floor(Math.random() * 3);
}

function determinarGanador(jugadaComputadora, jugadaJugador) {
  if (jugadaComputadora === jugadaJugador) {
    return resultados[0]; // Empate
  } else if (
    (jugadaComputadora === 0 && jugadaJugador === 2) ||
    (jugadaComputadora === 1 && jugadaJugador === 0) ||
    (jugadaComputadora === 2 && jugadaJugador === 1)
  ) {
    return resultados[1]; // Gana la computadora
  } else {
    return resultados[2]; // Gana el jugador
  }
}
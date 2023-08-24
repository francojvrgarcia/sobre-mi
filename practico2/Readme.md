# Juego de Piedra, Papel, Tijera

Este es un juego simple de Piedra, Papel o Tijera implementado en JavaScript. Los jugadores pueden enfrentarse a la computadora en una serie de jugadas y determinar quién gana en función de las elecciones de piedra, papel o tijera.

## Cómo jugar


1. Ingresa tu nombre y selecciona la cantidad de jugadas que deseas realizar (1, 2 o 3).
2. Haz clic en el botón "Comenzar" para iniciar el juego.
3. Selecciona tu opción (piedra, papel o tijera) haciendo clic en el botón correspondiente.
4. Se mostrará el resultado de la jugada, indicando quién ganó (computadora o jugador) o si hubo un empate.
5. Continúa realizando las jugadas hasta que se completen todas las rondas.
6. Al finalizar todas las rondas, se mostrarán los resultados finales con el recuento de las jugadas ganadas por la computadora y el jugador, así como los empates.

## Reglas del juego

- Piedra vence a tijera.
- Tijera vence a papel.
- Papel vence a piedra.

## Código fuente

El código JavaScript implementa la lógica del juego. Se utilizan arrays para almacenar las opciones y los resultados, y se utilizan contadores para llevar un registro de las jugadas ganadas por la computadora y el jugador, así como los empates. La función `obtenerJugadaComputadora` genera una jugada aleatoria para la computadora, y la función `determinarGanador` decide quién gana cada ronda.

**Nota**: Este juego se ejecuta en el navegador y utiliza Bootstrap para la presentación.

---

Este proyecto es un ejemplo simple de un juego de Piedra, Papel o Tijera. Siéntete libre de explorar el código y realizar mejoras o modificaciones según tus necesidades.

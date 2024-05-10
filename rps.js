// Hacer un juego de piedra, papel, o tijera.

let victoriasJugador1 = 0, victoriasJugador2 = 0;

function determinarGanador(jugada1, jugada2) {
    
    if (jugada1 === jugada2) {
        console.log("empate");
    } else if (
        (jugada1 === "piedra" && jugada2 === "tijera") ||
        (jugada1 === "papel" && jugada2 === "piedra") ||
        (jugada1 === "tijera" && jugada2 === "papel")
    ) {
        victoriasJugador1++;
        console.log("Puntos jugador 1:", victoriasJugador1);
        if(victoriasJugador1 === 3){
           
            console.log("Gana Jugador 1")
        }
    } else {
        victoriasJugador2++;
        console.log("Puntos jugador 2:", victoriasJugador2);
        if(victoriasJugador2 === 3){
            
            console.log("Gana Jugador 2")
        }
    }
}

determinarGanador("tijera", "tijera");
determinarGanador("tijera", "piedra");
determinarGanador("piedra", "tijera");
determinarGanador("piedra", "tijera");
determinarGanador("piedra", "tijera");
determinarGanador("piedra", "tijera");

const game = () => {
    let puntuacioJugador = 0;
    let puntuacioMaquina = 0;
    let moves = 0;
 
 

    const playGame = () => {
        const botopedra = document.querySelector('.pedra');
        const botoPaper = document.querySelector('.paper');
        const botoTissores = document.querySelector('.tissores');
        const opcionsJugador = [botopedra,botoPaper,botoTissores];
        const opcionsMaquina = ['pedra','paper','tissores']

        opcionsJugador.forEach(opcions => {
            opcions.addEventListener('click',function(){
 
 
                 
 
                const eleccio = Math.floor(Math.random()*3);
                const eleccioMaquina = opcionsMaquina[eleccio];
 

                winner(this.innerText,eleccioMaquina)
                 
                
            })
        })
         
    }
 
    const winner = (jugador,maquina) => {
        const resultat = document.querySelector('.resultat');
        const marcadorJugador = document.querySelector('.p-count');
        const marcadorMaquina = document.querySelector('.c-count');
        jugador = jugador.toLowerCase();
        maquina = maquina.toLowerCase();
        if(jugador === maquina){
            resultat.textContent = 'Empat'
        }
        else if(jugador == 'pedra'){
            if(maquina == 'paper'){
                resultat.textContent = 'Maquina Guanya';
                puntuacioMaquina++;
                marcadorMaquina.textContent = puntuacioMaquina;
 
            }else{
                resultat.textContent = 'Jugador Guanya'
                puntuacioJugador++;
                marcadorJugador.textContent = puntuacioJugador;
            }
        }
        else if(jugador == 'tissores'){
            if(maquina == 'pedra'){
                resultat.textContent = 'Maquina Guanya';
                puntuacioMaquina++;
                marcadorMaquina.textContent = puntuacioMaquina;
            }else{
                resultat.textContent = 'Jugador Guanya';
                puntuacioJugador++;
                marcadorJugador.textContent = puntuacioJugador;
            }
        }
        else if(jugador == 'paper'){
            if(maquina == 'tissores'){
                resultat.textContent = 'Maquina Guanya';
                puntuacioMaquina++;
                marcadorMaquina.textContent = puntuacioMaquina;
            }else{
                resultatat.textContent = 'Jugador Guanya';
                puntuacioJugador++;
                marcadorJugador.textContent = puntuacioJugador;
            }
        }
    }
    const gameOver = (opcionsJugador) => {
 
        const chooseMove = document.querySelector('.move');
        const resultatat = document.querySelector('.resultat');
        const reloadBtn = document.querySelector('.reload');
 
        opcionsJugador.forEach(opcions => {
            opcions.style.display = 'none';
        })
 
 
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })

    }
    
 
 
    playGame();
     
}
 
game();
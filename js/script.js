const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');
const nuvem = document.querySelector('.nuvem');
const nuvem2 = document.querySelector('.nuvem2');
const gameover = document.querySelector('.game-over img');
const clique = document.querySelector('.clique');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}

    let count = 0;



const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const pipePosition2 = pipe2.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvemPosition = +window.getComputedStyle(nuvem).right.replace('px', '');
    const nuvemPosition2 = +window.getComputedStyle(nuvem2).right.replace('px', '');

    if (pipePosition > -70) {
        count++;
        var element = document.querySelector("#score");
        var text = document.createTextNode(count);
        element.innerText = "";
        element.appendChild(text);

        
        if(count > 1500) {
            pipe2.style.animation = 'pipe-animation 1s infinite linear';
        }
        
        if(count > 3000) {
            pipe.style.visibility = 'hidden';
            pipe2.style.visibility = 'hidden';
        }

    }

    if (pipePosition <= 120  && pipePosition > 20 && marioPosition < 100 || pipePosition2 <= 120  && pipePosition2 > 20 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
 
        pipe2.style.animation = 'none';
        pipe2.style.left = `${pipePosition2}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        nuvem.style.animation = 'none';
        nuvem.style.right = `${nuvemPosition}px`;

        nuvem2.style.animation = 'none';
        nuvem2.style.right = `${nuvemPosition2}px`;

        clearInterval(loop);

        gameover.style.visibility = 'visible';
        clique.style.visibility = 'visible';

    }

},10)

document.addEventListener('keypress', jump);
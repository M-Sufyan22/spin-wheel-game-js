function game() {
    const arrow = document.getElementById('arrow');
    const roulette = document.querySelector('#roulette');
    const play_button = document.querySelector('#play');

    let x = 1024;
    let y = 9999;
    let deg = 0;

    play_button.addEventListener('click', function() {
        play_button.style.pointerEvents = 'none';
        play_button.style.background = "black"
        arrow.classList.remove("myanimation");
        deg = Math.floor(Math.random() * 5000 + 5000);
        roulette.style.transition = 'all 8s ease-out';
        roulette.style.transform = 'rotate(' + deg + 'deg';
        roulette.classList.add("blur");
    })

    roulette.addEventListener('transitionend', function() {
        arrow.classList.add("myanimation");
        play_button.style.pointerEvents = 'auto';
        play_button.style.background = "rgba(20, 251, 143, 0.767)"
        roulette.style.transition = 'none';
        actualdeg = deg % 360;
        roulette.style.transform = 'rotate(' + actualdeg + 'deg)';
        roulette.classList.remove("blur");
    })

};
game();
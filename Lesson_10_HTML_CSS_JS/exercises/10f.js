function turnOnOff(className){
    const turn = document.querySelector(`.${className}`);
    turn.classList.toggle('is-toggled');
};
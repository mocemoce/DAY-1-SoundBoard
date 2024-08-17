function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio || !key) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
if (e.propertyName !== 'transform') return; // Check if the transition is on the 'transform' property
this.classList.remove('playing');
}
document.querySelectorAll('.key').forEach(key => {
key.addEventListener('click', function() {
    alert('You need to press the key on your keyboard, not click it!');
});
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
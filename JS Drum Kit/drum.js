function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together 
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing'); //In jQuery this would be written like this -> key.addClass('playing'); For just JS, there is also key.remove, and key.toggle for some examples. 
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //You have to loop through each key to add the event listener. The listener we are listening for in this 
//case is 'transitionend' and when that ends, we are going to run the function called remove transition.

window.addEventListener('keydown', playSound);

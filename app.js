const cases = document.getElementsByClassName('case');
const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;
let player = document.getElementById('won');

document.addEventListener('contextmenu', function (e){
   e.preventDefault();
});

for (let i = 0; i < cases.length ; i++){
    cases[i].addEventListener('mouseup',function (event){
        if(event.button === LEFT_BUTTON){
            if(this.innerHTML === ""){
                insertText(this, 'X' ,'green')
                player.innerText = "C'est au tour du joueur O"
            }
        }
        else if(event.button === RIGHT_BUTTON){
            if(this.innerHTML === "") {
                insertText(this, 'O', 'red')
                player.innerText = "C'est au tour du joueur X"
            }
        }
    })
}

/**
 *
 * @param element
 * @param lettreJouer
 * @param classCss
 */
function insertText(element, lettreJouer, classCss){
    element.innerHTML = lettreJouer;
    element.classList.add(classCss);
}

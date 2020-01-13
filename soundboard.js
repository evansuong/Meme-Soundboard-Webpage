
function search_meme () {

    // assign vars to elements in index.html
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('container');

    // display containers that match user input
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-block";
        }
    }
}

var audio = new Audio();

function play_sound (file) {
    audio.src = file;
    audio.play();
}
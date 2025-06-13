const human = document.querySelector(".human");

let h_image = document.createElement("img");
let h_text = document.createElement("h3");

const computer = document.querySelector(".computer");

let c_image = document.createElement("img");
let c_text = document.createElement("h3");

let play = document.createElement("button");

// Rock = 1, Paper = 2, Scissors = 3

function rock_paper_scissors(h,c) {
    // const h = Math.floor(Math.random() * (3)) + 1;
    // const c = Math.floor(Math.random() * (3)) + 1;

    if (h==c) {
        return "It's a tie.";
    }

    if ((h==2 && c==1) || (h==3 && c==2) ||( h==1 && c==3)) {
        return "You win!!";
    }
    else{
        return "You lose.";
    }
}



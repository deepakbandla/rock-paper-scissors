const human = document.querySelector(".human");

const h_image = document.getElementById("h_img");
const h_text = document.querySelector(".human .text");

const computer = document.querySelectorAll(".computer");

const c_image = document.getElementById("c_img");
const c_text = document.querySelector(".computer .text");

const play = document.querySelector("button");
const s = document.querySelector(".statement");

// Rock = 1, Paper = 2, Scissors = 3

function rock_paper_scissors(h, c) {
    if (h == c) {
        return "It's a tie.";
    }
    if ((h == 2 && c == 1) || (h == 3 && c == 2) || (h == 1 && c == 3)) {
        return "You win!!";
    } else {
        return "You lose.";
    }
}

play.addEventListener("click", () => {
    const h = Math.floor(Math.random() * 3) + 1;
    const c = Math.floor(Math.random() * 3) + 1;

    if (h == 1) {
        h_image.src = "https://via.placeholder.com/100?text=Rock";
        h_text.textContent = "Rock";
    } else if (h == 2) {
        h_image.src = "https://via.placeholder.com/100?text=Paper";
        h_text.textContent = "Paper";
    } else if (h == 3) {
        h_image.src = "https://via.placeholder.com/100?text=Scissors";
        h_text.textContent = "Scissors";
    }

    if (c == 1) {
        c_image.src = "https://via.placeholder.com/100?text=Rock";
        c_text.textContent = "Rock";
    } else if (c == 2) {
        c_image.src = "https://via.placeholder.com/100?text=Paper";
        c_text.textContent = "Paper";
    } else if (c == 3) {
        c_image.src = "https://via.placeholder.com/100?text=Scissors";
        c_text.textContent = "Scissors";
    }

    s.textContent = rock_paper_scissors(h, c);
});

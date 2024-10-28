let redBtn = document.querySelector(".red");
let blueBtn = document.querySelector(".blue");
let greenBtn = document.querySelector(".green");
let yellowBtn = document.querySelector(".yellow");
let screen = document.querySelector(".screen");
let colours = document.querySelectorAll(".colours div");
let btn = document.querySelector("button");

if (window.localStorage.getItem("color")) {
    screen.style.backgroundColor = window.localStorage.getItem("color");
} else {
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            screen.style.backgroundColor = color.classList[0];
        }
    })
}

redBtn.onclick = function() {
    window.localStorage.setItem("color","red");
    screen.style.backgroundColor = window.localStorage.getItem("color");
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            color.removeAttribute("state")
        }
        redBtn.setAttribute("state","active");
    });
};
blueBtn.onclick = function() {
    window.localStorage.setItem("color","blue");
    screen.style.backgroundColor = window.localStorage.getItem("color");
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            color.removeAttribute("state")
        }
        blueBtn.setAttribute("state","active");
    });
};
greenBtn.onclick = function() {
    window.localStorage.setItem("color","green");
    screen.style.backgroundColor = window.localStorage.getItem("color");
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            color.removeAttribute("state")
        }
        greenBtn.setAttribute("state","active");
    });
};
yellowBtn.onclick = function() {
    window.localStorage.setItem("color","yellow");
    screen.style.backgroundColor = window.localStorage.getItem("color");
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            color.removeAttribute("state")
        }
        yellowBtn.setAttribute("state","active");
    });
};

btn.onclick = function() {
    window.localStorage.clear();
    window.location.reload();
}

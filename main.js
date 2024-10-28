let redBtn = document.querySelector(".red");
let blueBtn = document.querySelector(".blue");
let greenBtn = document.querySelector(".green");
let yellowBtn = document.querySelector(".yellow");
let screen = document.querySelector(".screen");
let colours = document.querySelectorAll(".colours div");
let btn = document.querySelector("button");

if (window.localStorage.getItem("color")) {
    screen.style.backgroundColor = window.localStorage.getItem("color");
    colours.forEach(color => {
        if (color.classList[0] === screen.style.backgroundColor) {
            color.style.opacity = "100%";
        } else {
            color.style.opacity = "40%";
        }
    })
} else {
    colours.forEach(color => {
        if (color.hasAttribute("state")) {
            screen.style.backgroundColor = color.classList[0];
            color.style.opacity = "100%";
        } else {
            color.style.opacity = "40%";
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
        colours.forEach(color => {
            if (color.hasAttribute("state")) {
                color.style.opacity = "100%";
            } else {
                color.style.opacity = "40%";
            }
        })
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
        colours.forEach(color => {
            if (color.hasAttribute("state")) {
                color.style.opacity = "100%";
            } else {
                color.style.opacity = "40%";
            }
        })
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
        colours.forEach(color => {
            if (color.hasAttribute("state")) {
                color.style.opacity = "100%";
            } else {
                color.style.opacity = "40%";
            }
        })
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
        colours.forEach(color => {
            if (color.hasAttribute("state")) {
                color.style.opacity = "100%";
            } else {
                color.style.opacity = "40%";
            }
        })
    });
};

btn.onclick = function() {
    window.localStorage.clear();
    window.location.reload();
}

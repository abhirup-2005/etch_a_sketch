let n = 16;
let color = "white";
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const reset = document.querySelector(".reset");
const penColor = document.querySelector(".penColor");
const darkPen = document.querySelector(".darker").addEventListener("click", () => {
    color = "Dark";
    
});


gridMaker(n);

function gridMaker(n) {
    let isDrawing = false;
    // Track pointer state
    document.addEventListener("mousedown", () => isDrawing = true);
    document.addEventListener("mouseup", () => isDrawing = false);
    for (let i = 1; i <= n; i++) {
        const row = document.createElement("div");
        row.classList.add("rowDisplay");
        container.append(row);

        for (let j = 1; j <= n; j++) {
            const col = document.createElement("div");
            col.classList.add("columnDisplay");

            let opac = 1;
            //color first square
            col.addEventListener("mousedown", () => {
                col.style.backgroundColor = pickColor(opac);
                if (color === "Dark" && opac > 0) {
                        opac = opac - 0.1;
                    }
            });
            // color while dragging across
            col.addEventListener("mouseover", () => {
                if (isDrawing) {
                    col.style.backgroundColor = pickColor(opac);
                    if (color === "Dark" && opac > 0) {
                        opac = opac - 0.1;
                    }
                }
            });

            row.append(col);
        }
    }
}

grid.addEventListener("click", () => {
    let m = prompt("Enter number of squares per side(1 to 100)");
    if (m < 1 || m > 100) {
        alert("Please enter a between [1 to 100]");
        return;
    }
    n = m;
    deleteGrid(container);
    gridMaker(n);
});

reset.addEventListener("click", () => {
    deleteGrid(container);
    gridMaker(n);
});

function deleteGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

penColor.addEventListener("click", () => {
    // if(color == "Dark") {
    //     deleteGrid(container);

    // }
    if (penColor.textContent === "Rainbow") {
        color = "Rainbow";
        penColor.textContent = "White";
    } else {
        color = "White";
        penColor.textContent = "Rainbow";
    }
});

function pickColor(opac) {
    let red = 255, green = 255, blue = 255;
    if (color === "Rainbow") {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        opac = 1;
    } else if(color === "White") opac = 1;

    return `rgba(${red}, ${green}, ${blue}, ${opac})`;
}

const container = document.querySelector(".container");

let isDrawing = false;
// Track pointer state
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.classList.add("rowDisplay");
    container.append(row);

    for (let j = 1; j <= 16; j++) {
        const col = document.createElement("div");
        col.classList.add("columnDisplay");

        //color first square
        col.addEventListener("mousedown", () => {
            col.style.backgroundColor = "white";
        });
        // color while dragging across
        col.addEventListener("mouseover", () => {
            if (isDrawing) {
                col.style.backgroundColor = "white";
            }
        });

        row.append(col);
    }
}

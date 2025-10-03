const container = document.querySelector(".container");

let isDrawing = false;
document.addEventListener("pointerdown", () => isDrawing = true);
document.addEventListener("pointerup", () => isDrawing = false);

for(let i = 1; i<=16; i++) {
    const row = document.createElement("div");
    row.classList.add("rowDisplay");
    container.append(row);
    for(let j = 1; j<=16; j++) {
        const col = document.createElement("div");
        col.classList.add("columnDisplay");

        col.addEventListener("pointerover", ()=>{
            if(isDrawing) {
            col.style.backgroundColor = `rgb(255, 255, 255)`;
            }
        });

        row.append(col);
    }
}


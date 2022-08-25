document.addEventListener("DOMContentLoaded", (e) => {
    let size = 16;
    let rows = [];
    let drawColor = "black"
    const canvas = document.getElementById("sketchContainer");
    mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);
    const btnSize = document.querySelector("#btnSize");
    const btnEraser = document.querySelector("#btnEraser");
    const btnRainbow = document.querySelector("#btnRainbow");
    createCanvas();

    function changeCanvasSize(input) {
        size = input;
        clearCanvas();
        createCanvas();
    }

    function clearCanvas() {
        canvas.innerHTML = ``;
        rows = [];
    }

    function createCanvas() {


        for (let i = 0; i < size; i++) {
            let row = document.createElement("div");
            row.className = "sketchRow";
            row.id = i + 1;
            rows.push(row)

            document.getElementById("sketchContainer").appendChild(row);
        };


        for (let row in rows) {
            for (let i = 0; i < size; i++) {
                let div = document.createElement("div");
                div.className = "sketchGrid";
                rows[i].appendChild(div);
            };
        }
    }



    document.addEventListener("mouseover", (e) => {
        if (e.target.className == "sketchGrid") {
            if (e.type == "mouseover" && mouseDown) {
                e.target.style.backgroundColor = drawColor;
            }

        }
    })

    document.addEventListener("click", (e) => {
        if (e.target.className == "sketchGrid") {
            if (e.type == "click") {
                e.target.style.backgroundColor = drawColor;
            }
        }
    })

    btnSize.addEventListener("click", function () {
        let input = prompt("Enter a canvas size between 1-100");
        if (input > 100) {
            input = 100;
        }
        changeCanvasSize(input);
    })

    btnEraser.addEventListener("click", (e) => {
        drawColor = "antiquewhite";
    })

    btnRainbow.addEventListener("click", (e) => {
        drawColor = Math.floor(Math.random()*16777215).toString(16);
    })




});



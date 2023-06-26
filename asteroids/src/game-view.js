

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.height = 1000;
    canvas.width = 500;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 1000);
});
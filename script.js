document.addEventListener("click", function(event) {
    var ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.top = event.clientY - 25 + "px";
    ball.style.left = event.clientX - 25 + "px";
    document.body.appendChild(ball);
    setTimeout(function() {
        document.body.removeChild(ball);
    }, 1000);
});
document.addEventListener("click", function(event){
    var ball = document.createElement('div');
    ball.classList.add("ball");
    ball.style.top = event.clientY - 25 + "px";
    ball.style.left = event.clientX - 24 + "px";
    document.body.appendChild(ball);
    setTimeout(function(){
        document.body.remove(ball);
    }, 1000);
})
document.querySelector("#yes").addEventListener("click", function() {
    alert("letsgoooooooo");
});

function move(element) {
    document.querySelector(element).style.left = Math.random() * 100 + "%";
    document.querySelector(element).style.top = Math.random() * 100 + "%";
}
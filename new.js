document.getElementById('clickimg').addEventListener("click", function () {
    const card = document.getElementById('card1');
    card.classList.remove("d-none");
    document.getElementById("mam").classList.add('d-none');
})
document.getElementById('lastclick').addEventListener("click", function () {
    document.getElementById("card2").classList.remove("d-none");
})
document.getElementById('lastclick1').addEventListener("click", function () {
    document.getElementById("card1").classList.add("d-none");
    document.getElementById("card3").classList.remove("d-none");

})
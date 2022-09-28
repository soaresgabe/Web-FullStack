let h1 = document.querySelector("h1");
let checkBox = document.querySelector("#checkbox");

addEventListener("click", (e) => {

    checkBox.checked = checkBox.checked ? false : true;

    if(h1.innerHTML != "Clique.")
        h1.innerHTML = "Clique.";
    else
        h1.innerHTML = "Desclique.";

})
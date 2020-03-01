let menuBar = document.getElementById("menu-bar");
let menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", _=>{
    menuBar.classList = (menuBar.className.split(" ").indexOf("menu-closed") > -1) ? "menu-open" : "menu-closed";
});

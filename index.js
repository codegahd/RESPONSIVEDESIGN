function mynav() {
    var bar = document.getElementById("nav");
    if (bar.className === "nav-links") {
        bar.className = "close";
    } else {
        bar.className = "nav-links";
    }
    
}
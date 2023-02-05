function changeElement(id) {
    var theInput = document.getElementById(id);
    theInput.addEventListener("input", function () {
        document.documentElement.style.setProperty('--' + id, theInput.value);
        localStorage.setItem(id, theInput.value)
    }, false);
}
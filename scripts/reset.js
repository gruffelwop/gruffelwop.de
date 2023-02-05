function reset() {
    for (var i = 0; i < IDs.length; i++) {
        document.documentElement.style.setProperty('--' + IDs[i], Colors[i]);
        localStorage.removeItem(IDs[i])
        document.getElementById(IDs[i]).value = Colors[i];
    }
}
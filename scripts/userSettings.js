for (var i = 0; i < IDs.length; i++) {
    document.documentElement.style.setProperty('--' + IDs[i], localStorage.getItem(IDs[i]));
}
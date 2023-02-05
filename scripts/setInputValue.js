for (var i = 0; i < IDs.length; i++) {
    if(localStorage.getItem(IDs[i]) != undefined) {
        document.getElementById(IDs[i]).value = localStorage.getItem(IDs[i]);
        console.log(0)
    }
    else {
        console.log(1)
    }
}
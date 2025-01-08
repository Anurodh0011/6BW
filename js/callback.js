setInterval(() => {
    let today = new Date();
    let h = today.getHours()
    let i = today.getMinutes()
    let s = today.getSeconds()

    document.getElementById('clock').innerHTML = h + ":" + i + ":" + s

}, 1000)
const updateClock = () => {
    const clock = new Date();
    document.querySelector('#clock').innerHTML = clock.toLocaleString();
}
setInterval(updateClock, 1000);
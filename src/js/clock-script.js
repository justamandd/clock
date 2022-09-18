let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');

let clock = setInterval(() => {
    const time = new Date();

    time.getHours().toString().length == 1 ? hours.textContent = `0${time.getHours().toString()}` : hours.textContent = time.getHours().toString();

    time.getMinutes().toString().length == 1 ? minutes.textContent = `0${time.getMinutes().toString()}` : minutes.textContent = time.getMinutes().toString();
}, 1000);



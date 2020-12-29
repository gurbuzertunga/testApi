const div = document.querySelector('div');
const input = document.getElementById('degree');
const button = document.getElementById('clickDegree');
const myApiKey = ''

// async await
button.addEventListener('click',(e) => {
    const weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=827dd5ea0e30919f428e83ad227c3851`;
    (async function getWeather() {
        const promise = await fetch(weatherLink, {mode: 'cors'})
        
        promise.json().then((data) => {
            div.innerHTML = fahToCel(data.main.temp);
            const p = document.createElement('p');
            p.innerHTML = data.weather[0].description;
            document.body.appendChild(p);
        })
    })();
})


// plain promise
button.addEventListener('click',(e) => {
    const weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=827dd5ea0e30919f428e83ad227c3851`;
    fetch(weatherLink, {mode: 'cors'}).then((response) => {
        response.json().then((data) => {
            console.log(data);
            div.innerHTML = fahToCel(data.main.temp);
            const p = document.createElement('p');
            p.innerHTML = data.weather[0].description;
            document.body.appendChild(p);
        });
    });
    
});


function fahToCel(fah) {
    cels = parseInt(fah - 273.15);
    console.log(cels);
    return cels;
}



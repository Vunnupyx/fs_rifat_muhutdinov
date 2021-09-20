class Weather {
    constructor(city) {
        this.apiKey = "577b3bd2eec54e5a84a1ae825e746783";
        this.city = city;
    }

    // Fetch Weather From API
    async getWeather() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}&lang=ru`)
            xhr.responseType = 'json'
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.send()
        })

    }

    //`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru`

    async getWeatherForecast() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${this.apiKey}&lang=ru`)
            xhr.responseType = 'json'
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
            xhr.send()
        })


    }

    changeLocation(city) {
        this.city = city;
    }
}


class Storage {
    constructor() {
        this.city;
        this.defaultCity = "london";
    }

    getLocationData() {
        if (localStorage.getItem("city") === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem("city");
        }

        return {
            city: this.city
        };
    }

    setLocationData(city) {
        localStorage.setItem("city", city);
    }
}


class UI {
    constructor() {
        this.name = document.querySelector('.title');
        this.icon = document.querySelector('.icon');
        this.desc = document.querySelector('.clouds');
        this.temp = document.querySelector('.temp');
    }

    paint(data) {
        this.name.innerHTML = data.name;
        this.icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="Облачность">`;
        this.desc.innerHTML = data.weather[0]['description'];
        this.temp.innerHTML = Math.round(data.main.temp) + '&deg;';
    }

    pa(data) {
        let container = document.querySelector('.weather .weather__list');
        data.list.forEach(element => {
            container.insertAdjacentHTML('beforeend', `
                <div class="weather__item">
                    <div class="title">${element['dt_txt']}</div>
                    <div class="icon"><img src="http://openweathermap.org/img/wn/${element.weather[0]['icon']}@2x.png" alt="Облачность"></div>
                    <div class="clouds">${element.weather[0]['description']}</div>
                    <div class="temp">${Math.round(element.main.temp)}&deg;</div>
                    <div class="extremum">Макс. <span class="max">11°</span>, мин. <span class="min">9°</span></div>
                </div>
                `);
        })
    }
}


const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();


document.querySelector('.searcher__btn').addEventListener("click", () => {
    const city = document.querySelector('.searcher__input').value;

    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();
    getWeatherForecast()

});

function getWeather() {
    weather
        .getWeather()
        .then((data) => {
            ui.paint(data);
        })
        .catch((err) => alert(err.message));
}

function getWeatherForecast() {
    weather
        .getWeatherForecast()
        .then((data) => {
            ui.pa(data)
        })
        .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", getWeather);
document.addEventListener("DOMContentLoaded", getWeatherForecast);
/*

//https://api.openweathermap.org/data/2.5/forecast?q=%D1%81%D0%B0%D0%BC%D0%B0%D1%80%D0%B0&appid=577b3bd2eec54e5a84a1ae825e746783
//https://api.openweathermap.org/data/2.5/weather?q=samara&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru
//https://api.openweathermap.org/data/2.5/weather?q=samara&units=metric&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=самара&units=metric&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru';

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send()
    })
}

/!*sendRequest('GET', requestURL)
    .then(data => {
        console.log(data);
        document.querySelector('.title').innerHTML = data.name;
        document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="Облачность">`;
        document.querySelector('.clouds').innerHTML = data.weather[0]['description']
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;'
    })
    .catch(err => console.log(err))*!/

const btnSearch = document.querySelector('.searcher__btn')
btnSearch.addEventListener('click', () => {
    let cityName = document.querySelector('.searcher__input').value;

    let weatherNowURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru`;
    sendRequest('GET', weatherNowURL)
        .then(data => {
            console.log(data);
            document.querySelector('.title').innerHTML = data.name;
            document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="Облачность">`;
            document.querySelector('.clouds').innerHTML = data.weather[0]['description']
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;'
        })
        .catch(err => console.log(err))

    let weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=577b3bd2eec54e5a84a1ae825e746783&lang=ru`;
    sendRequest('GET', weatherForecastURL)
        .then(data => {
            console.log(data)
            let container = document.querySelector('.weather .weather__list');
            data.list.forEach(element => {
                container.insertAdjacentHTML('beforeend', `
                <div class="weather__item">
                    <div class="title">${element['dt_txt']}</div>
                    <div class="icon"><img src="http://openweathermap.org/img/wn/${element.weather[0]['icon']}@2x.png" alt="Облачность"></div>
                    <div class="clouds">${element.weather[0]['description']}</div>
                    <div class="temp">${Math.round(element.main.temp)}&deg;</div>
                    <div class="extremum">Макс. <span class="max">11°</span>, мин. <span class="min">9°</span></div>
                </div>
                `);
            })
        })
});
*/

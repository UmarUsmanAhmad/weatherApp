const ApiKey = '356b86c22c96497c89b1fbae3b6b989e';
const form =  document.querySelector('form');

let city = document.querySelector('.cityName');


const getweather = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const main = data.main;
    const weatherType = data.weather[0].main;
    const output = document.querySelector('#output');  
    output.innerHTML=Math.round(main.temp)+"°C"+" "+weatherType;
}

form.addEventListener(
    "submit", function(event){
        getweather(city.value);
        event.preventDefault();
})



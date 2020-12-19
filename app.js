let inputValue = document.getElementById("input-value")
document.getElementById("submit-weather").addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b99ab2a2bcd60124faa390a297691697&units=metric')
        .then(response => response.json())
        .then(data => {
            document.getElementById("country-name").innerText = data.name;
           document.getElementById("temperature").innerText = data.main.temp;
           document.getElementById("weather-des").innerText = data.weather[0].main;
           // document.getElementById("weather-image").src = data.weather[0].icon;
            //console.log(data.main[temp])
        })
})

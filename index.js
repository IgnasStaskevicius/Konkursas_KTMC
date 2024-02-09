document.addEventListener("DOMContentLoaded", function() {
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }



  const miestoVardas = getQueryParam('city');

 pavadinimas=document.getElementById("miestas")
 pavadinimas.innerHTML = "<h4>" +
 miestoVardas + ` miesto informacija</h4>`;


    function fetchWeatherInfo(cityName) {
      const cityWeather = {
        'vilniaus': {
          day: { temperature: '1°C', description: './assets/yellow-sun-16526.png', wind: '5 M/S', humidity: '70%'},
          night: { temperature: '3°C', description: './assets/rainy-night-and-clouds-with-moon-16539.png', wind: '4 M/S', humidity: '99%'}
        },
        'kauno': {
          day: { temperature: '-2°C', description: './assets/blue-cloud-and-weather-16527.png', wind: '7 M/S', humidity: '87%'},
          night: { temperature: '-4°C', description: './assets/blue-moon-and-snowy-night-16543.png', wind: '7 M/S', humidity: '89%'}
        },
        'klaipedos': {
          day: { temperature: '-4°C', description: './assets/snow-and-blue-cloud-16540.png', wind: '10 M/S', humidity: '97%'},
          night: { temperature: '2°C', description: './assets/blue-clouds-and-blue-moon-16538 (1).png', wind: '3 M/S', humidity: '60%'}
        }
      };

      const weatherData = cityWeather[cityName];

      const dayCard = document.getElementById('day-card');
      dayCard.innerHTML = `
        <h2>Daytime</h2>
        <img src="${weatherData.day.description}" alt=""></img>        
        <p>Temperature: ${weatherData.day.temperature}</p>
        <p>Vejas: ${weatherData.day.wind}</p>
        <p>Oro Dregnumas: ${weatherData.day.humidity}</p>

      `;

      const nightCard = document.getElementById('night-card');
      nightCard.innerHTML = `
        <h2>Nighttime</h2>
        <img src="${weatherData.night.description}" alt=""></img>
        <p>Temperatura: ${weatherData.night.temperature}</p>
        <p>Vejas: ${weatherData.night.wind}</p>
        <p>Oro Dregnumas: ${weatherData.night.humidity}</p>

      `;

    linija();
  }

  function linija() {
    const forecastBar = document.getElementById('linija');

    let forecastBarHTML = '';

    for (let i = 0; i < 24; i++) {
      let temperature = Math.floor(Math.random() * 30) - 10;
      let barColor = 'FFFFFF';

      if (i >= 8 && i <= 16) {
        temperature = '☀️ ' + temperature + '°C';
      } else if (i >= 17 || i <= 7) {
        temperature = '🌙 ' + temperature + '°C';
      } else {
        temperature = temperature + '°C';
      }

      forecastBarHTML += `<div class="brick" style="background-color: #${barColor};">${i}:00<br>${temperature}</div>`;
    }

    forecastBar.innerHTML = forecastBarHTML;
  }

  if (miestoVardas) {
    fetchWeatherInfo(miestoVardas);
  } else {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "<p>City not specified.</p>";
  }
});
const apiKey = 'c0b9970c1f3f2d62de95d1e5a6bf6be5'; // Replace with your actual key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateUI(data) {
    const display = document.getElementById('weatherDisplay');
    display.classList.remove('display-hidden');

    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = Math.round(data.main.temp);
}

searchBtn.addEventListener('click', () => {
    if (cityInput.value) fetchWeather(cityInput.value);
});

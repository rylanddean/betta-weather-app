function init() {
    async function initWeather() {
        try {
            const weatherData = await getWeatherData();
            alert(weatherData);
        } catch (err) {
            alert('Error!!!');
        }
    }
}

function getWeatherData()
{
    const fetchPromise = fetch('https://api.darksky.net/forecast/d8a9f6d83305c8cc16d85b67aa65dae9/37.8267,-122.4233');
    fetchPromise.then(response => {
        alert(response);
        return response.json();
    }).then(people => {
        const names = people.map(person => person.name).join("\n");
        alert(names);
    });
}

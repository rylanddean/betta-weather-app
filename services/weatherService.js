function getWeatherData()
{
    const fetchPromise = fetch('https://api.darksky.net/forecast/d8a9f6d83305c8cc16d85b67aa65dae9/37.8267,-122.4233');
    fetchPromise.then(response => {
        alert(response);
    });
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://api.darksky.net/forecast/d8a9f6d83305c8cc16d85b67aa65dae9/37.8267,-122.4233', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

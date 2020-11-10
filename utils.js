function geoMunged(geoLocationData) {
    try {
        const geoItem = geoLocationData[0];
        return {
            formatted_query: geoItem.display_name,
            latitude: geoItem.lat,
            longitude: geoItem.lon
        };
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// function weatherMunged(weatherData) {
//     try {
//         const weatherItem = weatherData[0];
//         return {
//             forcast: weatherItem.weather.description,
//             time: weatherItem.ts,
//         };
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// }
function weatherMunged(weather) {
    return weather.data.map(weatherItem => {
        return {
            forecast: weatherItem.weather.description,
            time: weatherItem.datetime,
        };
    }).slice(0, 8);
}

module.exports = {
    geoMunged, weatherMunged
};

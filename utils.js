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

function weatherMunged(weather) {
    return weather.data.map(weatherItem => {
        return {
            forecast: weatherItem.weather.description,
            time: weatherItem.datetime,
        };
    }).slice(0, 8);
}

function yelpMunged(reviews) {

    return reviews.businesses.map(item => {
        return {
            name: item.name,
            image_url: item.image_url,
            price: item.price,
            rating: item.rating,
            url: item.url
        };
    }).slice(0, 20);

}

function trailsMunged(trails) {
    return trails.trails.map(trailItem => {
        return {
            name: trailItem.name,
            location: trailItem.location,
            length: trailItem.length,
            stars: trailItem.stars,
            star_votes: trailItem.starVotes,
            summary: trailItem.summary,
            trail_url: trailItem.url,
            conditions: trailItem.conditionStatus,
            condition_date: trailItem.conditionDate.split(' ')[0],
            condition_time: trailItem.conditionDate.split(' ')[1],
        };
    }).slice(0, 10);
}

module.exports = {
    geoMunged, weatherMunged, yelpMunged, trailsMunged
};

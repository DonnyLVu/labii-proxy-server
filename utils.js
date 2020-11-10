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
};

module.exports = {
    geoMunged
};

module.exports = (num, places = 2) => +(+num || 0).toFixed(places) || 0;

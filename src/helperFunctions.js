const showLocalTime = (unixTime) => {

    let currentDate = new Date(unixTime * 1000);
    let currentHours = "0" + currentDate.getHours();
    let currentMinutes = "0" + currentDate.getMinutes();
    let currentTime = `${currentHours.substr(-2)}:${currentMinutes.substr(-2)}`;
    return currentTime;

};

const showLocalDate = (unixTime) => {

    let currentDate = new Date(unixTime * 1000);
    let dateFormated = currentDate.toDateString();
    return dateFormated;
};


module.exports = {
    showLocalTime,
    showLocalDate

};
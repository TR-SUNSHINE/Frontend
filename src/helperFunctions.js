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

const formatReminderTime = (unixTime) => {
    let reminderDate = new Date(unixTime * 1000);
    let minutes = "0" + reminderDate.getMinutes();
    let hours = "0" + reminderDate.getHours();
    let day = "0" + reminderDate.getDate();
    let month = reminderDate.getMonth() + 1;
    month = "0" + month;
    let year = reminderDate.getFullYear();
    let formattedReminder = `${year}-${month.substr(-2)}-${day.substr(-2)}T${hours.substr(-2)}:${minutes.substr(-2)}`;
    return formattedReminder;
};

const dayTime = (time, sunrise, sunset) => {

    return time > sunrise && time < sunset;

};

const substituteIconsDay = (id) => {

    let replacementIcon;

    // daytime icons
    switch (id) {
        case 200:
        case 210:
        case 211:
        case 212:
        case 221:
            replacementIcon = "thunder";
            break;
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
            replacementIcon = "rain_thunder";
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 520:
        case 521:
        case 522:
        case 531:
            replacementIcon = "rain";
            break;
        case 511:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            replacementIcon = "sleet";
            break;
        case 600:
        case 601:
        case 602:
            replacementIcon = "snow";
            break;
        case 701:
        case 721:
            replacementIcon = "mist";
            break;
        case 741:
            replacementIcon = "fog";
            break;
        case 771:
            replacementIcon = "wind";
            break;
        case 781:
            replacementIcon = "tornado";
            break;
        case 800:
            replacementIcon = "day_clear";
            break;
        case 801:
        case 802:
            replacementIcon = "day_partial_cloud";
            break;
        case 803:
            replacementIcon = "overcast";
            break;
        case 804:
            replacementIcon = "cloudy";
            break;
        default:
            replacementIcon = "50d";

    }
    return replacementIcon;
};

const substituteIconsNight = (id) => {

    let replacementIcon;

    // nightime icons
    switch (id) {
        case 200:
        case 210:
        case 211:
        case 212:
        case 221:
            replacementIcon = "thunder";
            break;
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
            replacementIcon = "night_rain_thunder";
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 520:
        case 521:
        case 522:
        case 531:
            replacementIcon = "night_rain";
            break;
        case 511:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            replacementIcon = "night_sleet";
            break;
        case 600:
        case 601:
        case 602:
            replacementIcon = "night_snow";
            break;
        case 701:
        case 721:
            replacementIcon = "mist";
            break;
        case 741:
            replacementIcon = "fog";
            break;
        case 771:
            replacementIcon = "wind";
            break;
        case 781:
            replacementIcon = "tornado";
            break;
        case 800:
            replacementIcon = "night_clear";
            break;
        case 801:
        case 802:
            replacementIcon = "night_partial_cloud";
            break;
        case 803:
            replacementIcon = "overcast";
            break;
        case 804:
            replacementIcon = "cloudy";
            break;
        default:
            replacementIcon = "50d";

    }

    return replacementIcon;
};

const replaceIcons = (array, sunrise, sunset) => {

    const substitutedIcons = array.map(elem => {

        if (dayTime(elem.dt, sunrise, sunset)) {

            elem.weather[0].icon = substituteIconsDay(elem.weather[0].id);
        } else {
            elem.weather[0].icon = substituteIconsNight(elem.weather[0].id);
        }

        return elem;

    });

    return substitutedIcons;

};


module.exports = {
    showLocalTime,
    showLocalDate,
    formatReminderTime,
    dayTime,
    substituteIconsDay,
    substituteIconsNight,
    replaceIcons
};
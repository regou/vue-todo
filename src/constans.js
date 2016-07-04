export function getWeatherIconClass(condid) {

    switch(condid) {
        case '0': var icon  = 'wi-tornado';
            break;
        case '1': var icon  = 'wi-storm-showers';
            break;
        case '2': var icon  = 'wi-tornado';
            break;
        case '3': var icon  = 'wi-thunderstorm';
            break;
        case '4': var icon  = 'wi-thunderstorm';
            break;
        case '5': var icon  = 'wi-snow';
            break;
        case '6': var icon  = 'wi-rain-mix';
            break;
        case '7': var icon  = 'wi-rain-mix';
            break;
        case '8': var icon  = 'wi-sprinkle';
            break;
        case '9': var icon  = 'wi-sprinkle';
            break;
        case '10': var icon  = 'wi-hail';
            break;
        case '11': var icon  = 'wi-showers';
            break;
        case '12': var icon  = 'wi-showers';
            break;
        case '13': var icon  = 'wi-snow';
            break;
        case '14': var icon  = 'wi-storm-showers';
            break;
        case '15': var icon  = 'wi-snow';
            break;
        case '16': var icon  = 'wi-snow';
            break;
        case '17': var icon  = 'wi-hail';
            break;
        case '18': var icon  = 'wi-hail';
            break;
        case '19': var icon  = 'wi-cloudy-gusts';
            break;
        case '20': var icon  = 'wi-fog';
            break;
        case '21': var icon  = 'wi-fog';
            break;
        case '22': var icon  = 'wi-fog';
            break;
        case '23': var icon  = 'wi-cloudy-gusts';
            break;
        case '24': var icon  = 'wi-cloudy-windy';
            break;
        case '25': var icon  = 'wi-thermometer';
            break;
        case '26': var icon  = 'wi-cloudy';
            break;
        case '27': var icon  = 'wi-night-cloudy';
            break;
        case '28': var icon  = 'wi-day-cloudy';
            break;
        case '29': var icon  = 'wi-night-cloudy';
            break;
        case '30': var icon  = 'wi-day-cloudy';
            break;
        case '31': var icon  = 'wi-night-clear';
            break;
        case '32': var icon  = 'wi-day-sunny';
            break;
        case '33': var icon  = 'wi-night-clear';
            break;
        case '34': var icon  = 'wi-day-sunny-overcast';
            break;
        case '35': var icon  = 'wi-hail';
            break;
        case '36': var icon  = 'wi-day-sunny';
            break;
        case '37': var icon  = 'wi-thunderstorm';
            break;
        case '38': var icon  = 'wi-thunderstorm';
            break;
        case '39': var icon  = 'wi-thunderstorm';
            break;
        case '40': var icon  = 'wi-storm-showers';
            break;
        case '41': var icon  = 'wi-snow';
            break;
        case '42': var icon  = 'wi-snow';
            break;
        case '43': var icon  = 'wi-snow';
            break;
        case '44': var icon  = 'wi-cloudy';
            break;
        case '45': var icon  = 'wi-lightning';
            break;
        case '46': var icon  = 'wi-snow';
            break;
        case '47': var icon  = 'wi-thunderstorm';
            break;
        case '3200': var icon  =  'wi-cloud';
            break;
        default: var icon  =  'wi-cloud';
            break;
    }

    return icon;

}


export var testForecast = [
    {
        "code": "32",
        "date": "4 July 2016",
        "day": "Mon",
        "high": "87",
        "low": "75",
        "text": "Sunny"
    },
    {
        "code": "11",
        "date": "25 Jun 2016",
        "day": "Sat",
        "high": "75",
        "low": "68",
        "text": "Showers"
    },
    {
        "code": "26",
        "date": "26 Jun 2016",
        "day": "Sun",
        "high": "73",
        "low": "65",
        "text": "Cloudy"
    },
    {
        "code": "47",
        "date": "27 Jun 2016",
        "day": "Mon",
        "high": "76",
        "low": "70",
        "text": "Scattered Thunderstorms"
    },
    {
        "code": "4",
        "date": "28 Jun 2016",
        "day": "Tue",
        "high": "79",
        "low": "73",
        "text": "Thunderstorms"
    },
    {
        "code": "4",
        "date": "29 Jun 2016",
        "day": "Wed",
        "high": "81",
        "low": "75",
        "text": "Thunderstorms"
    },
    {
        "code": "4",
        "date": "30 Jun 2016",
        "day": "Thu",
        "high": "82",
        "low": "74",
        "text": "Thunderstorms"
    },
    {
        "code": "4",
        "date": "01 Jul 2016",
        "day": "Fri",
        "high": "87",
        "low": "77",
        "text": "Thunderstorms"
    },
    {
        "code": "4",
        "date": "02 Jul 2016",
        "day": "Sat",
        "high": "92",
        "low": "81",
        "text": "Thunderstorms"
    },
    {
        "code": "4",
        "date": "03 Jul 2016",
        "day": "Sun",
        "high": "89",
        "low": "79",
        "text": "Thunderstorms"
    }
];




function getTime(item){
    return item.timeStamp || item.createTime;
}

function byAll(item) {
    return true;
}
function byUrgent(item) {
    return item.label == "urgent";
}
function byNormal(item) {
    return item.label == "normal";
}
function byWhatever(item) {
    return item.label == "other";
}

function byOneHour(item) {
    let now = Date.now();
//        console.log(now,now - 60*60*1000)
    return Math.abs(getTime(item) - now) < 60*60*1000;

}
function byOneDay(item) {
    let now = Date.now();
//        console.log(now,now - 60*60*1000*24)
    return Math.abs(getTime(item)- now) < 60*60*1000*24;
}


export var filterFuncs = {
    byAll,
    byUrgent,
    byNormal,
    byWhatever,
    byOneHour,
    byOneDay
}

export var filterRelations = new Map();
filterRelations.set(byAll,'normal');
filterRelations.set(byUrgent,'urgent');
filterRelations.set(byWhatever,'other');



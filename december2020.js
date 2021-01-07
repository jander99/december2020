const millisInDay = 1000 * 3600 * 24

function daysSinceDate(date1, date2) {
    return Math.floor((date2.getTime() - date1.getTime()) / millisInDay)
}

function getFakeDecemberCalendarDate() {
    return daysSinceDate(new Date("12/31/2020"), new Date()) + 31
}

function printFakeDecemberDate() {
    return "December " + getFakeDecemberCalendarDate() + ", 2020"
}
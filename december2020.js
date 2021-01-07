function daysSinceDate(date1, date2) {
    // var dec31 = new Date("12/31/2020")
    // var current = new Date()

    console.log("Determine days since Dec 31")
    const millisInDay = 1000 * 3600 * 24
    var diffInDays = (date2.getTime() - date1.getTime()) / millisInDay
    console.log("There have been " + diffInDays + " days since 12/31") 
    return Math.floor(diffInDays)
}

function getFakeDecemberCalendarDate() {
    console.log("Hello, fakeDate")
    var daysSince = daysSinceDate(new Date("12/31/2020"), new Date()) + 31
    console.log("Returning " + daysSince)
    return daysSince
}

function printFakeDecemberDate() {
    var dateString = "December " + getFakeDecemberCalendarDate() + ", 2020"
    console.log("Today's date: " + dateString)
    document.write(dateString)
}
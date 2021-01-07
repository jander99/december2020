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

function openGraphMetaKeywords() {

    var metaOGTitle = document.createElement('meta')
    metaOGTitle.setAttribute('property', 'og:title')
    metaOGTitle.content = printFakeDecemberDate()
    document.getElementsByTagName('head')[0].appendChild(metaOGTitle)

    var metaOGDesc = document.createElement('meta')
    metaOGDesc.setAttribute('property', 'og:description')
    metaOGDesc.content = "December 2020 just keeps going"
    document.getElementsByTagName('head')[0].appendChild(metaOGDesc)

    var metaOGurl = document.createElement('meta')
    metaOGurl.setAttribute('property', 'og:url')
    metaOGurl.content = document.location
    document.getElementsByTagName('head')[0].appendChild(metaOGurl)

    var metaOGType = document.createElement('meta')
    metaOGType.setAttribute('property', 'og:type')
    metaOGType.content = 'website'
    document.getElementsByTagName('head')[0].appendChild(metaOGType)
}
import data from '../data';


let day = new Date().getDate()
console.log("Day: ", day)
let month = new Date().getMonth()
console.log("Month: ", month)
let year = new Date().getFullYear()
console.log("Year: ", year)


let latestDate;
for (let i = 0; i < data.keys(data.uploadDate).length; i++) {

    let targetDayCount = ((data.uploadDate[i].month) * 30) + Math.floor((data.uploadDate[i].month) / 2) + data.uploadDate[i].day;
    console.log("targetDayCount: ", targetDayCount);

    let currentDayCount = ((month + 1) * 30) + Math.floor((month + 1) / 2) + day;
    console.log("currentDayCount: ", currentDayCount);

    if (targetDayCount === currentDayCount) {
        latestDate = `uploaded today`
    }
    else if (data.uploadDate[i].year === year) {
        let daysAgo = (currentDayCount - targetDayCount);
        console.log("currentDayCount - targetDayCount: ", daysAgo);
        latestDate = `uploaded ${daysAgo} days ago`
    }
    else {
        let daysAgo = Math.abs(365 - (currentDayCount - targetDayCount) + ((data.uploadDate[i].year - year) - 1) * 365);
        console.log("currentDayCount - targetDayCount: ", daysAgo);
        latestDate = `uploaded ${daysAgo} days ago`
    }
}

function Countdown() {
    return latestDate;
};

export default Countdown;
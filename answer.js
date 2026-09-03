// question - 1
function describeValue(value) {
    const valueType = typeof value
    let truthyOrFalsy;
    if (!!value) {
        truthyOrFalsy = "truthy";
    } else {
        truthyOrFalsy = "falsy";
    }
    return `${valueType} | ${truthyOrFalsy}`;
}

// question - 2
function getDayType(day) {
    day = day.toLowerCase();
    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
            break;
    }
}

// question - 3

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available"
    }
}

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let distanceCharge = 50;
    if (distance > 2) {
        distanceCharge += (distance - 2) * 15;
    }

    const waitingCharge = waitingMinutes * 2;

    let totalFare = distanceCharge + waitingCharge;


    if (isNight) {
        totalFare *= 1.2;
    }

    return totalFare;
}

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    } else {
        const requiredRate = (runsNeeded / ballsLeft) * 6;
        let verdict = ""
        if (requiredRate <= 6) {
            verdict = "Comfortable";
        } else if (requiredRate <= 12) {
            verdict = "Tough";
        } else {
            verdict = "Almost Impossible";
        }
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }
}

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));

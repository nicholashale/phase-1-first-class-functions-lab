const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    const fareMultiplier = (fare) => fare * multiplier;
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLastTwo) {
    return firstOrLastTwo(drivers);
}
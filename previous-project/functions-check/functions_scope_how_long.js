let makeUp = [ "cleaner", "tonifier", "cosmetic base", "contour" ]
let prices = [ 30000, 60000, -90000, 120000]

function meeterMeter(makeUp,prices) {
        return makeUp.length + prices.length
}

function searchItem(makeUp, prices) {
        return makeUp.indexOf("contour") + " " + prices.indexOf(60000)
}

function sayItem2(makeUp, prices) {
    return makeUp[0] + " " + (prices[1].toFixed(1))
}

function wordsMix(makeUp, prices) {
    return makeUp.toString().split('').sort()
}

function numOrganizer1(makeUp, prices) {
    return prices.sort().join()
}
function numOrganizer(makeUp, prices) {
    return Math.sign(prices[2])
}

console.log(numOrganizer(makeUp, prices));

if (makeUp === "")

/*
[ ]


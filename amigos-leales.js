arr = [ 1, 2, 3, 4, 5]
let mayor = 0;
let minimum = 0;

for (let i=0; i<4; i++) {
    minimum += arr[i];
}

for (let i=arr.length; i>(arr.length-4); i--) {
    mayor += arr[i-1];
}

console.log(mayor, minimum)

//console.log(Math.max(7,30,255,3563))
//console.log(Math.min(7,30,255,3563))

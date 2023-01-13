arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    if(!arr) {
        return;
    }
    let naturePos = 0;
    let natureNeg = 0;
    let zeroNat = 0;
    const dimension = arr.length;
    
    arr.forEach((m) => {
        if ( m > 0) {
            naturePos++;
        } else if ( m < 0) {
            natureNeg++;
        } else {
            zeroNat++;
        }
    });
    console.log((naturePos/dimension).toFixed(6));
    console.log((natureNeg/dimension).toFixed(6));
    console.log((zeroNat/dimension).toFixed(6));

}
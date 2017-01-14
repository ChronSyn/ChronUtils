// Allows you to calculate interest per year
// Returns an array of total value for each year
// ARGS: Start value of investment <integer>, number of years to calculate for <integer>, rate of interest per annum <float>
function calcInterest(startVal, yrs, rpa){
    var outArr = [startVal];
    for (i = 1; i<yrs-1; i++){
        var currVal = outArr[i-1];
        outArr.push(currVal * rpa);
    };
    return outArr;
}
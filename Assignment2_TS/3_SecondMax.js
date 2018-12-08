function Second_Maximum(array) {
    var max1 = 0;
    var max2 = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max1) {
            max2 = max1;
            max1 = array[i];
        }
        else if ((array[i] > max2) && (array[i] < max1)) {
            max2 = array[i];
        }
    }
    return max2;
}
var iRet = null;
var array = [29, 89, 6, 29, 56, 45, 77, 32, 78];
iRet = Second_Maximum(array);
console.log("Addition of  Element is :" + iRet);

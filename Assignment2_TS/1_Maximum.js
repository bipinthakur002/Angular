function Maximum(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var iRet = null;
var array = [29, 89, 6, 29, 56, 45, 77, 32];
iRet = Maximum(array);
console.log("Maximum Element is :" + iRet);

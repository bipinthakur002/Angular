function Maximum(val1, val2, val3) {
    if ((val1 > val2) && (val1 > val3)) {
        return val1;
    }
    else if ((val2 > val1) && (val2 > val3)) {
        return val2;
    }
    else {
        return val3;
    }
}
var iRet = null;
iRet = Maximum(12, 13, 14);
console.log("Maximum Among Given Number is:" + iRet);

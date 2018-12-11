function Armstrong1(value) {
    var ans = 0;
    var temp = Math.floor(value);
    var rem = 0;
    while (temp > 0) {
        rem = Math.floor(temp % 10);
        ans += (rem * rem * rem);
        temp /= 10;
    }
    return ans;
}
var iRet = 0;
var value = 371;
iRet = Armstrong1(value);
if (iRet == value) {
    console.log("It is armstrong number");
}
else {
    console.log("It is not an armstrong number");
}

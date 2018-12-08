function Armstrong1(value) {
    var ans = 0;
    var temp = value;
    var rem = 0;
    while (~~value != 0) {
        rem = value % 10;
        ans += (rem * rem * rem);
        value /= 10;
    }
    console.log(~~ans);
    if (ans == temp) {
        return 1;
    }
    else {
        return 0;
    }
}
var iRet = 0;
var value = 153;
iRet = Armstrong1(~~value);
if (iRet == 1) {
    console.log("It is armstrong number");
}
else {
    console.log("It is not an armstrong number");
}

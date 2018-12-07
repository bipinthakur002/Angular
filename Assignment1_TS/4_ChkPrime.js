function ChkPrime(value) {
    var flag = true;
    var i = null;
    if (value == 1) {
        console.log("1 is neither prime nor composite number");
    }
    for (i = 2; i <= value / 2; i++) {
        if (value % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        return true;
    }
    else {
        return false;
    }
    return;
}
var Result;
Result = ChkPrime(79);
if (Result == true) {
    console.log("It is prime number");
}
else {
    console.log("It is not Prime Number");
}

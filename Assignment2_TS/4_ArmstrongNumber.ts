function Armstrong1(value: number): number {
    var ans: number = 0
    var temp: number = Math.floor(value) 
    var rem: number = 0

    

    while ( temp > 0) {
        rem = Math.floor(temp % 10)
        ans += (rem * rem * rem)
        temp /= 10
    }
    
    return ans
}
var iRet: number = 0
var value: number = 371
iRet = Armstrong1(value)
if (iRet == value) {
    console.log("It is armstrong number")
}
else {
    console.log("It is not an armstrong number")
}

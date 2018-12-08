function ChkString(str) {
    if (str.search(input) == -1) {
        return false;
    }
    else {
        return true;
    }
}
var input = "Marvellous123";
var str = "Pune Kothrud Marvellous Infosystems";
var iRet1 = ChkString(str);
if (iRet1 == true) {
    console.log("Succesfully found record!");
}
else {
    console.log("Does not Found ");
}

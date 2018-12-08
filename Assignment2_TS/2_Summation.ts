function Addition(array:number[]) : number
{
    var max:number = 0

    for(var  i = 0; i < array.length ; i++)
    {
            max += array[i]
    }
    return max
}
var iRet:number = null
var array:number[] = [29,89,6,29,56,45,77,32]
iRet = Addition(array)
console.log("Addition of  Element is :"+iRet)
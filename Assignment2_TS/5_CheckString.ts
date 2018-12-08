
function ChkString(str:string):boolean
{
    if (str.search(input) == -1 )
     { 
   return false
    } 
 else { 
    return true
 } 

}
var input:string = "Marvellous123"
var str:string = "Pune Kothrud Marvellous Infosystems"
var iRet1:boolean = ChkString(str)
if(iRet1 == true)
{
    console.log("Succesfully found record!")
}
else
{
    console.log("Does not Found ")
}
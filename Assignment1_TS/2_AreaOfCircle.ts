function Area(radius:number,PI?:number):number
{   radius 
    var area:number = null;
    if(PI == undefined)
    {
        PI = 3.14
    }
    area = PI * radius * radius;
    return area;
}

var iRet = null
iRet=Area(5)
console.log("Area of Circle is:"+iRet)
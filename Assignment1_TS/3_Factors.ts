function DisplayFactors(val1:number)
{
    var i:number = null
    console.log("Factors of "+ val1 + " are")
   for (i = 1; i <= val1/2 ; i++)
   {
       
       if( val1 % i == 0)
       {
           console.log(i)
       }

   }
  
}
DisplayFactors(14)

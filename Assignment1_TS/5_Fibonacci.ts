function Fibonacci(val1:number)
{
    var i:number = null
    var n1 = 0 , n2 = 1 , n3 = 0;
    console.log("Fibonacci series for "+ val1 + " is\n")
    console.log(n1)
    console.log(n2)
   for (i = 0; i <= val1 ; i++)
   {
     if(n3 < val1)
    {

        
       n3 = n1 + n2
       console.log(n3)
       n1= n2 
       n2= n3
    
    }
    else{
        break;
    }
   }
  
}
Fibonacci(21)

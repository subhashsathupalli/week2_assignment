function factorial(i)
{
 if(i<=0)
 {
  console.log("not an integer");
    return 1;
 }
 else
 {
    while( i>=1)
    {
        z= i* z;  // z *= i;
         i--;
    }
     console.log(z);
 }
}
let i=7;
let z=1;
factorial(i);

//function fact(n) using recursion
//{
  //  if(n===0)
  //      return 1;
    
  //  else
  //  {
  //      n= n * fact(n-1);
   // }
   // return n;
//}

//let n=8;
//console.log(fact(n));
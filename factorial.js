function factorial(i)
{
 let z=1;

 if(i<=0)
 {
  console.log("not an integer");
    return;
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
let i=4;
factorial(i);

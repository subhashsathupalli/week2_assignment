let reverse = (string) =>
{
    
let a= string.length;
console.log(a);
let output = '';

//by using method
//let rev= string.split('').reverse().join('');
//console.log(rev);

for(let i=a-1; i>=0; i--)
{
    output += string[i];
}
return output;

}

let string = "i am learning js";
console.log(reverse(string));


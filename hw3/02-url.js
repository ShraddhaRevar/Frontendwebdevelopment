// Enter your code here

//console.log('Enter your code here');

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no


function getParameters(){ 

const url = new URL(document.getElementById("comments").value);
var root = url.host;
document.getElementById("Uhost").innerHTML= root;

const paramsString = document.getElementById("comments").value;
let searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

searchParams.has('name') === true;      
document.getElementById("Uname").innerHTML= url.searchParams.get('name');

searchParams.has('email') === true;  
document.getElementById("Uemail").innerHTML= searchParams.get('email'); 

searchParams.has('human') === true;      
document.getElementById("Uhuman").innerHTML= searchParams.get('human');           
}

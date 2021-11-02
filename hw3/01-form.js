

console.log('==========Form Submission========');


console.group("Name");

  let input = document.getElementById('name');
  let copy = document.querySelector('#bt1');
  copy.addEventListener('click', Handleclick);

  function Handleclick(event){
    console.log("Name:")
    console.log(input.value);    
  }

console.group("Email");

  let input1 = document.getElementById('email');
  let copy1 = document.querySelector('#bt1');
  copy1.addEventListener('click', Handleclick1);

  function Handleclick1(event){
    console.log("Email:")
    console.log(input1.value);    
  }

console.group('Class registration');

  let input2 = document.querySelector(".RegStatdropdown select");
  let copy2 = document.querySelector('#bt1');
  copy2.addEventListener('click', Handleclick2);
  
  function Handleclick2(event){
    console.log("Class registration:");
    console.log(input2.value);    
  }

console.group('Class selection');

  let cs11 = document.getElementById("cs1");
  let cs12 = document.getElementById("cs2");
  
  let copy3 = document.querySelector('#bt1');
  copy3.addEventListener('click', Handleclick3);
  
  function Handleclick3(event){
    console.log("Class selection:");
    if(document.getElementById('cs1').checked == true) {   
         console.log(document.getElementById('cs1').value);   
} else {  
         console.log(document.getElementById('cs2').value); 
       }     
}


console.group('Courses Taken');

let ct = document.getElementById('course');
  let copy4 = document.querySelector('#bt1');
  copy4.addEventListener('click', getCheckedValues);

function getCheckedValues(element){
  console.log("Courses Taken:");
  var a = document.getElementById("PL");  
  var b = document.getElementById("OS"); 
  var c = document.getElementById("Fullstack");
  
  if (a.checked == true){  
    var a = document.getElementById("PL").value; 
    console.log(a);

  }   
  if (b.checked == true){  
    var b = document.getElementById("OS").value;  
    console.log(b);  
  } 
  if (c.checked == true){  
    var c = document.getElementById("Fullstack").value;  
    console.log(c);  
  } 
}

console.group('Suggestions');

let input5 = document.getElementById('suggestions');
let copy5 = document.querySelector('#bt1');
  copy5.addEventListener('click', Handleclick5);
function Handleclick5() {
      console.log("Suggestions:");
      var text = document.getElementById("textarea").value;
      console.log(text);
      return false;
    }



  console.groupEnd();



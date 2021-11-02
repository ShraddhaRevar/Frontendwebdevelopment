  let n = document.getElementById('interval').value;
  let a= parseInt(n)*1000;
  let b= setInterval(changeColor, a);

  function changeColor(){
    var a = Math.floor(Math.random() * 255); 
    var b = Math.floor(Math.random() * 255); 
    var c = Math.floor(Math.random() * 255); 
    var bgColor = "rgb(" + a + "," + b + "," + c + ")";
  console.log(bgColor);
    document.body.style.background = bgColor;
  }

  

  function stopColor(){
    clearInterval(b)
  }
  
  
  
  
  
  
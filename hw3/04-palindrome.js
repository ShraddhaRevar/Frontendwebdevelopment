// Enter your code here

function checkPalindrome() {

    {
		var Num = document.getElementById("number").value;
		if(isNaN(Num))
		{
			document.getElementById("result").innerHTML= "<span style='color: red;'>'Wrong Input!' </span>";
		}
		else
		{
		var startNum = Num;
		var reverseNum;
		var rem = 0;
		for(;Num != 0;)
		{
		reverseNum = parseInt(Num % 10) ;
		Num = parseInt(Num / 10) ;
		rem = rem * 10 + reverseNum ;
		reverseNum = rem ;
	 	} 
	 	if(startNum == reverseNum)
	 	document.getElementById("result").innerHTML= "<span style='color: green;'>'Yes, This is Palindrome!' </span>";
	 	else
	 	document.getElementById("result").innerHTML= "<span style='color: red;'>'No, Try again' </span>";
	 	}
	}
}



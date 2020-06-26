function CheckNums(num1,num2) { 
	var isGreater = "false";
	// if num2 is greater than num1
	if(num2 > num1)
		isGreater = "true";
    else if(num1==num2)
        isGreater = -1
    else
      isGreater = "false";
	return isGreater;
}


function validate(){
	
	
		if (document.myForm.Name.value == " ")
		{
			alert("Please provide your Name");
			document.myForm.Name.focus();
			return false;
		}
		
		else if (document.myForm.Surname.value == " ")
		{
			alert("Please provide your Surname");
			document.myForm.Surname.focus();
			return false;
		}
		
		else if (document.myForm.Email.value == " ")
		{
			alert("Please provide your Email");
			document.myForm.Email.focus();
			return false;
		}
		
		else if (document.myForm.Username.value == " ")
		{
			alert("Please provide your Username");
			document.myForm.Username.focus();
			return false;
		}
		
		else if (document.myForm.Password.value == " ")
		{
			alert("Please provide your Password");
			document.myForm.Password.focus();
			return false;
		}
		
		else 
		{
			alert("You have successully signed up!");
		}
		
}
var contact = new function()
{
	this.init = function()
	{			
		var name = document.contactForm.name;
		var email = document.contactForm.email;
		var comments = document.contactForm.comments;
		var submitButton = document.contactForm.submitButton;
		
		submitButton.onclick = function()
		{
			if(name.value == "" &&
				email.value == "" &&
				comments.value == "")
			{
				//do nothing.
			}
			else
			{
				document.contactForm.submit();
			}			
		}		
	}
}

document.onload = contact.init();
var contact = 
{	
	init: function()
	{
		if (!document.contactForm){ return; }			
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
				//document.contactForm.submit();
				//keep the form disabled for now.
			}			
		}		
	}
}

document.onload = contact.init();
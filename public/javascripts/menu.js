var menu = new function()
{
	var toppingsArray = [];
		
	this.init = function()
	{
		setEventHandlers();
		updateResults();
	}

	function setEventHandlers()
	{		
		var orderForm = document.getElementById('orderForm');
		var formInputs = orderForm.getElementsByTagName('input');								
		for (var i = 0; i < formInputs.length; i ++){ formInputs[i].onclick = updateResults; }
		setCrustEventHandlers();
		setQuantityEventHandlers();
		setToppingsEventHandlers();	
		setToppingsValues();
		setResetHandler();
		setSubmitHandler();
		
	}

	function setToppingsValues()
	{
		var toppings = document.orderForm.topping;
		for (var i = 0; i < toppings.length; i++)
		{
			toppings[i].value =  getLabelText(toppings[i].id);
		}		
	}
	
	function formIsValid()
	{
		var formIsValid = false;
		if (!crustHasBeenSelected() && !sizeHasBeenSelected()){ alert('Please choose a crust and a size.'); }
		else if (!crustHasBeenSelected()){ alert('Please choose a crust.'); }		
		else if (!sizeHasBeenSelected()){ alert('Please select a size.'); }
		else{ formIsValid = true; }
		return formIsValid;
	}
	
	function sizeHasBeenSelected()
	{
		var sizeHasBeenSelected = false;
		var size = document.orderForm.size;
		for (var i = 0; i < size.length; i++){ if (size[i].checked){ sizeHasBeenSelected = true; } }
		return sizeHasBeenSelected;
	}
	
	function crustHasBeenSelected()
	{
		var crustHasBeenSelected = false;
		var crustDropdown = document.orderForm.crust;
		if (crustDropdown.selectedIndex != 0){ crustHasBeenSelected = true; }
		return crustHasBeenSelected;
	}
	
	function setSubmitHandler()
	{
		var submitButton = document.getElementById('submitButton');
		submitButton.onclick = function()
		{
			if (formIsValid())
			{				
				displayConfirmationMessage();
			}
		}
	}
	
	function displayConfirmationMessage()
	{
		var message = replaceBrWithNewline(getOrderMessage()) + "\n" + "Is your order correct?";
		var response = confirm(message);
		if (response == true)
		{ 
			document.orderForm.submit();
		}
		else { /* do nothing */ }
	}
	
	function replaceBrWithNewline(inputMessage)
	{
		var message = inputMessage.split("<br/>").join("\n");
		return message;
	}
	
	function setResetHandler()
	{
		var resetButton = document.getElementById('resetButton');
		resetButton.onclick = function()
		{ 
			document.orderForm.reset();
			toppingsArray = [];
			updateResults();
		}
	}
	
	function setCrustEventHandlers()
	{
		var crustDropdown = document.getElementById('crustDropdown');
		crustDropdown.onchange = function()
		{ 
			showCrustPrice();
			updateResults();
		}
	}
	
	function showCrustPrice()
	{
		var crustPriceDiv = document.getElementById('crustPrice');
		crustPriceDiv.innerHTML = "&nbsp;+ " + "$" + getCrustPrice();
	}
	
	function setToppingsEventHandlers()
	{
		var toppings = document.orderForm.topping;
		for (var i = 0; i < toppings.length; i++)
		{
			toppings[i].onclick = (function(toppingsCheckbox)
			{
				return function()
				{
					handleToppingClick(toppingsCheckbox);
					updateResults();
				}				
			})(toppings[i]);
		}
	}
	
	function handleToppingClick(toppingsCheckbox)
	{
		var labelText = getLabelText(toppingsCheckbox.id);
		if (toppingsCheckbox.checked){ addToppingToToppingArray(labelText); }
		else { removeToppingFromToppingArray(labelText); }
	}
	
	function addToppingToToppingArray(labelText)
	{
		toppingsArray.push(labelText);
	}
	
	function removeToppingFromToppingArray(labelText)
	{
		var labelTextIndex = toppingsArray.indexOf(labelText);
		if ( labelTextIndex > -1)
		{
			toppingsArray.splice(labelTextIndex, 1);
		}
	}
	
	function setQuantityEventHandlers()
	{
		var increaseQuantityButton = document.getElementById('buttonRight');
		increaseQuantityButton.onclick = function(){ increaseQuantity(); updateResults(); }
		var decreaseQuantityButton = document.getElementById('buttonLeft');
		decreaseQuantityButton.onclick = function(){ decreaseQuantity(); updateResults(); }
	}

	function updateResults()
	{
		var resultsDiv = document.getElementById("resultsDiv");
		resultsDiv.innerHTML = getOrderMessage();
		var totalPriceHiddenInput = document.orderForm.totalPrice;
		totalPriceHiddenInput.value = getTotalPrice();
		var resultsInput = document.orderForm.resultsInput;
		resultsInput.value = convertQuotesToHTMLEntities(getOrderMessage());
	}
	
	function convertQuotesToHTMLEntities(inputText)
	{
		var message = inputText.split('"').join("&quot;");
		return message;
	}
	
	function getOrderMessage()
	{
		var orderMessage = "Your order is: <br/>" +
		"<br/>" +
		getCrust() + "<br/>" +
		getSizeMessage() + "<br/>" +
		getQuantityMessage() + "<br/>" +
		getIngredients() + "<br/>" +
		"<br/>" +
		"<br/>" +		
		getPrice();
		return orderMessage;
	}

	function getCrust()
	{
		var message = "";
		var crustDropdown = document.getElementById("crustDropdown");
		if (crustDropdown.selectedIndex == 0){ message = "Please select your crust." }
		else { message = "Crust: " + crustDropdown.options[crustDropdown.selectedIndex].value; }
		return message;
	}

	function getSize()
	{
		var sizeRadioButtons = document.orderForm.size;
		var size = "";
		for(var i = 0; i < sizeRadioButtons.length; i++)
		{ 
			if (sizeRadioButtons[i].checked)
			{ 
				size = sizeRadioButtons[i].value;
				break;
			} 
		}
		return size;
	}
	
	function getSizeMessage()
	{
		var message = "Please select your size.";
		var sizeRadioButtons = document.orderForm.size;
		for(var i = 0; i < sizeRadioButtons.length; i++)
		{ 
			if (sizeRadioButtons[i].checked)
			{ 
				message = "Size: " + getLabelText(sizeRadioButtons[i].id); 
			} 
		}
		return message;
	}

	function getLabelText(id)
	{
		var labelText = "";
		var labels = document.getElementsByTagName('label');
		for( var i = 0; i < labels.length; i++ ){ if( labels[i].htmlFor == id){ labelText = labels[i].firstChild.data; } }
		return labelText;
	}

	function getQuantityMessage()
	{
		var quantity = document.getElementById('quantityDiv-text');
		return "Quantity: " + getQuantity();	
	}

	function increaseQuantity()
	{
		var quantity = document.getElementById('quantityDiv-text');
		quantity.value++;
	}

	function decreaseQuantity()
	{
		var quantity = document.getElementById('quantityDiv-text');
		if (quantity.value > 1){ quantity.value--; }	
	}

	function getIngredients()
	{
		var potentialComma = "";
		if (toppingsArray.length > 0){ potentialComma = ", " }
		return "Ingredients: Cheese" + potentialComma + toppingsArray.join(", ");	
	}

	function getPrice()
	{		
		return "Price: $" + getTotalPrice();
	}
	
	function getTotalPrice()
	{
		var totalPrice = (parseFloat(getQuantity()) * (parseFloat(getCrustPrice()) + parseFloat(getSizePrice()) + parseFloat(getToppingsPrice()))).toFixed(2);
		return totalPrice;
	}
	
	function getQuantity()
	{
		var quantity = document.orderForm.quantity;
		return quantity.value;
	}
	
	function getCrustPrice()
	{
		var crustDropdown = document.orderForm.crust;
		var selectedCrust = crustDropdown.options[crustDropdown.selectedIndex].firstChild.data;
		var crustPrice = (0.00).toFixed(2);
		if ( selectedCrust == "Hand-Tossed Style Pizza"){ crustPrice = (0.00).toFixed(2); }
		else if ( selectedCrust == "Stuffed Crust Pizza"){ crustPrice = (1.50).toFixed(2); }
		else /*if ( selectedCrust == "Thin Crust Pizza")*/{ crustPrice = (0.00).toFixed(2); }
		return crustPrice;
	}
		
	function getSizePrice()
	{
		var price = (0.00).toFixed(2);
		var smallSize = document.orderForm.size[0];
		var mediumSize = document.orderForm.size[1];
		var largeSize = document.orderForm.size[2];
		if (smallSize.checked){ price = (3.95).toFixed(2); }
		else if (mediumSize.checked){ price = (7.95).toFixed(2); }
		else if (largeSize.checked){ price = (9.50).toFixed(2); }
		else /*if nothing is checked */{ price = (0.00).toFixed(2); }
		return price;
	}
	
	function getToppingsPrice()
	{
		var price = (0.00).toFixed(2);
		var toppings = document.orderForm.topping;
		var toppingsCounter = 0;
		for (var i = 0; i < toppings.length; i++){ if (toppings[i].checked){ toppingsCounter++; } }
		if (getSize() == "small")
		{
			if (toppingsCounter == 0){ price = (0.00).toFixed(2); }
			else if (toppingsCounter == 1){ price = (1.00).toFixed(2); }
			else if (toppingsCounter == 2){ price = (1.50).toFixed(2); }
			else /*if (toppingsCounter >= 3)*/{ price = (1.50 + ((toppingsCounter - 2) * 0.75)).toFixed(2); }
		}
		else if (getSize() == "medium")
		{
			if (toppingsCounter == 0){ price = (0.00).toFixed(2); }
			else if (toppingsCounter == 1){ price = (1.00).toFixed(2); }
			else if (toppingsCounter == 2){ price = (2.00).toFixed(2); }
			else /* if (toppingsCounter >= 3)*/{ price = (2.00 + ((toppingsCounter - 2) * 0.75)).toFixed(2); }
		}
		else if (getSize() == "large")
		{
			if (toppingsCounter == 0){ price = (0.00).toFixed(2); }
			else if (toppingsCounter == 1){ price = (0.45).toFixed(2); }
			else if (toppingsCounter == 2){ price = (1.45).toFixed(2); }
			else /* if (toppingsCounter >= 3)*/{ price = (1.45 + ((toppingsCounter - 2) * 0.75)).toFixed(2); }
		}
		else /* if (getSize() = "")*/{ price = (0.00).toFixed(2); }
		return price;
	}
}

document.onload = menu.init();
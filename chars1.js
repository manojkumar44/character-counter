	function getTarget(e) {
	
	if (!e) {
		e = window.event;
	} 
		return e.target || e.srcElement;
}

	function displayChars(e) {
		
		var el, elLength, elMsg;
		el = getTarget(e);
		elLength = el.value.length;
		elMsg = document.getElementById('showText');
		elMsg.innerHTML = el.value;
		
		countChars(e, elLength);
	}
	
	function countChars(e,elLength) {
		
		var maxCharsAllowed = 240;
		var elMsg3 = document.getElementById('counter');
		elMsg3.innerHTML = elLength;
		elMsg3.innerHTML += " Characters entered";
		if	(elLength > 0)	{
			elMsg3.style.display="block";
		}	else	{
			elMsg3.style.display="none";
		}
		
		var elMsg4 = document.getElementById('charsRemaining');
		var charsLeft = maxCharsAllowed - elLength;
		elMsg4.innerHTML = charsLeft;
		elMsg4.innerHTML += " characters remaining";
		if	(elLength > 0)	{
			elMsg4.style.display="block";
		}	else	{
			elMsg4.style.display="none";
		}
		
		if (elLength > maxCharsAllowed) {
			elMsg4.innerHTML.slice(0,240);
			elMsg4.innerHTML = "Your message is has exceeded 240 characters! <br>";
			elMsg4.innerHTML += charsLeft;
			elMsg4.innerHTML += " characters remaining"
	
		}
		
	
	}


var field = document.getElementById('test');
field.addEventListener('keyup', function(e) {

displayChars(e);

},false);
var myButton = document.getElementById('button');
var count = 0;
var myBlock = document.getElementById('block');

myButton.addEventListener('click', function() {
	count += 1;
		switch(count) {
			case 1 :
			myBlock.className = "red";
			myBlock.innerHTML = "stop";
			myButton.innerHTML = "Make green";
			break;

			case 2 :
			myBlock.className = "green";
			myBlock.innerHTML = "go";
			myButton.innerHTML = "Make red";
			count = 0;
			break;
		}		
});
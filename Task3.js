 var redbutton = document.getElementById('redButton');
	  redButton.addEventListener('click', function () {
      var block = document.getElementById('block');
      block.innerHTML = "stop";
	  block.className = "red"; 	
	  });

	  var greenbutton = document.getElementById('greenButton');
	  greenButton.addEventListener('click', function () {
	  var block = document.getElementById('block');
	  block.innerHTML = "go"; 
	  block.className = "green"; 	
	 
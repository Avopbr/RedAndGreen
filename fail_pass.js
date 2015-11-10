var SetTestStatus = function(testresult) {
	var fp = new SetTestStatus("testresult");

fp.testFailed();
// `#testresult` should have the HTML class "failing" now
if (className === "failing") {
	myBlock.className = "Success" ;
}
else{
	myBlock.className = "Failure";
}
// set the text in the block to 'Failed'
if (innerHTML === "Failed") {
	myBlock.innerHTML = "Success";
}
else{
	myBlock.innerHTML = "Failure";
}

fp.testPassed();
// ``#testresult` should have the HTML class "passing" now
if (className === "passing") {
	myBlock.className = "Success";
}
else {
	myBlock.className = "Failure";
}
// set the text in the block to 'Passed'
if (myBlock.innerHTML === "Passed") {
	myBlock.innerHTML = "Success";
}
else {
	myBlock.innerHTML = "Failure";
}

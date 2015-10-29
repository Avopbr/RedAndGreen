//Check that the div with id testresult doesn't have the class failing or passing. 
//Use console.log to display a message that tells you what the result of the check was.
console.log('>>>>>>>My Start<<<<<<');
var testresult = document.getElementById("testresult")

if (testresult.className === "grey") {
 console.log("The testresult class fails because it is : " + testresult.className);
}
else {
 console.log("The testresult class passes");
}
//Check that the button has the text 'Make failing'. 
//Use console.log to display a message that tells you what the result of the check was.. 
var myButton = document.getElementById("button")

if (myButton.innerHTML === "Make failing") {
 console.log("The button text passes because the text is = " + myButton.innerHTML);
}
else {
 console.log("The button text fails beacause is not what expected");
}

//Call setTestStatus('testresult', 'testbutton', 'failing');
console.log('>>>>setTestStatus was called for the failing part<<<<'); 
 setTestStatus('testresult', 'testbutton', 'failing');

//Check that #testresult has the class failing. 
//The CSS should give it a red background.
 if (testresult.className === "failing") {
  console.log("The testresult class passes because the class is : " + testresult.className);
 }
 else {
  console.log("The testresult class fails because the class is : " + testresult.className);
 }

//Check that the button has the text 'Make passing'. 
//Use console.log to display a message that tells you what the result of the check was.
 if (myButton.innerHTML === "Make passing") {
  console.log("The button text passes because as expected its written : " + myButton.innerHTML);
 }
 else {
  console.log("The button text fails because it is not Make passing as expected");
 }


//Call setTestStatus('testresult', 'testbutton', 'passing');.
console.log('>>>>setTestStatus was called for the Passing part<<<<');
 setTestStatus('testresult', 'testbutton', 'passing');

//Check that #testresult has the class passing. 
//The CSS should give it a green background.
 if (testresult.className === "passing") {
  console.log("The testresult class passes because the class is : " + testresult.className);
 }
else{
  console.log("The testresult class fails its not what expected");
 }
//Check that the button has the text 'Make failing'.
if (myButton.innerHTML === "Make failing") {
  console.log("The button text passes because as expected it is : " + myButton.innerHTML);
 }
else {
  console.log("The button text fails its not what expected");
 }

//Display 'success' if testresult has the class passing, otherwise display 'failure'.

if (testresult.className === "passing" ) {
	console.log("success");
}
else {
	console.log("failure");
}
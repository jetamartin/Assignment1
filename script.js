"use strict";
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 1 - Convert to camel case
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var someMonth;              // "var some_month;" 
//function currentMonth() { } // "function theMonth" - function to return current month
//const CURRENTMONTH = 1;         // "current-month - "a constant (Note for some reason this is throwing a JSLint error: "Expected an identifier and instead saw 'const'")
//var summerMonths;           // "var summer_month" - an array of summer months
//function myLibrary() { }    // "MyLibrary-afunction" - a function

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 2 - Simple literal expressions - Assuming that all you want is the literal expression without assignment. This of course generates JSLint errors
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Literal expressions
//1;                     //numeric literal expression
//"Jet Martin";          //string literal expression
//true;                  //Boolean literal expression
//null;                  // Null literal expression    

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 3 - Complex / variable expressions
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var myFullName = "Jet" + " " + "Martin";
//var myWeightInLbs = 160, myHeightInInches = 72;
//var myBmi = (myWeightInLbs * 0.45) / Math.pow((myHeightInInches * 0.025), 2);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 4 - Declare but do not assign
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var firstName, strLastName, strAddress, strCity, strState, strZipCode, numYourAge, strReferralSource, blnContacMe;

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 5:
/*----------------------------------------------------------------------------------------------------------------------------------*/

// Method 1:

//var strFirstName, strLastName, strAddress, strCity, strState, strZipCode, numYourAge, strReferralSource, blnContacMe;
//strFirstName = "Jet";
//strLastName = "Martin";
//strAddress = "123 Easy Street";
//strCity = "Shangrala";
//strState = "California";
//strZipCode = "92126";
//numYourAge = 195;
//strReferralSource = "Genious Keepers";
//blnContacMe = true;

// Method 2:

//var strFirstName = "Jet";
//var strLastName = "Martin";
//var strAddress = "123 Easy Street";
//var strCity = "Shangrala";
//var strState = "California";
//var strZipCode = "92126";
//var numYourAge = 195;
//var strReferralSource = "Genious Keepers";
//var blnContacMe = true;
    
// Method 3:

//var strFirstName = "Jet", strLastName = "Martin", strAddress = "123 Easy Street", strCity = "Shangrala", strState = "California", strZipCode = "92126", numYourAge = 195, strReferralSource = "Genious Keepers", lnContacMe = true;

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 6 - Create 3 variables
/*----------------------------------------------------------------------------------------------------------------------------------*/
    
// Part 1 - Add a number and a string - If you add a number and a string, the number is coerced to a string

//var drivingAge = "16";
//var drinkingAge = 21;
//var combinedAge;
//combinedAge = drinkingAge + drivingAge;
//window.console.log(combinedAge);
    
// Part 2 - Add a boolean and a string - If you add a Boolean and a string, the Boolean is coerced to a string

//var isOldEnough = true;
//var drivingAge = "16";
//var resultingAge;
//resultingAge = isOldEnough + drivingAge;
//window.console.log(resultingAge);
    
// Part 3 - Add a number and a Boolean - If you add a number and a Boolean, the Boolean is coerced to a number

//var drinkingAge = 21;
//var isOldEnough = true;
//var resultingAge;
//resultingAge = drinkingAge + isOldEnough;
//window.console.log(resultingAge);

// Extra credit :-) - Discovered if you subtract a string from a number it appears to coerce the string to a number (e.g., 21 - "16" = 5)
//var drinkingAge = 21;
//var drivingAge = "16";
//var resultingAge;
//resultingAge = drinkingAge - drivingAge;
//window.console.log(resultingAge);

/*----------------------------------------------------------------------------------------------------------------------------------*/
//Step 7 - Demonstrate your knowledge of hoisting (drivingAge is undefined)
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var drinkingAge = 21;
//window.console.log("The drinking age " + drinkingAge + " and the driving age is " + drivingAge);
//var drivingAge = "16";

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 8 - Is the following string a valid literal?
// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Answer is NO. You must use the escape character "\" to make it a valid literal as noted below:
//var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
//window.console.log(someString);
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 9 - Produce Null value and Undefined values
/*----------------------------------------------------------------------------------------------------------------------------------*/
// Part 1 - Null value

//var aNullValue = null;
//window.console.log(aNullValue);

// Part 2 - Undefined value

//var undefinedValue;
//window.console.log("The value of undefinedlValue variable is " + undefinedValue);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 10 - use of typeOf operator for string, number, Boolean, object, and undefined
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var aString = "String", aNumber = 1, aBoolean = true, anObject = {firstName: "Jet", lastName: "Martin"}, itsUndefined;
//window.console.log(typeof aString, typeof aNumber, typeof aBoolean, typeof anObject, typeof itsUndefined);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 11 - Using alert box, use the concatenation operator (+) to display text in the alert box box that appears as follows: "Hello Zak Ruvalcaba, welcome to the JavaScript class!"
//Substitute my name for your name. Although not necessary, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var studentName = "Jet Martin";
//var classSubject = "Javascript";
//window.alert("Hello " + studentName + ", welcome to the " + classSubject + " class!");

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 12 - Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var name = "Jet Martin";
//var welcomeMessage = "Hello Zak Ruvalcaba, welcome to the Javascript class!";
//var classSubject = "JavaScript";
//window.alert(welcomeMessage.replace("Zak Ruvalcaba", name));

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 13 - Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var name = "Jet Martin";
//var studentName = "Zak Ruvalcaba";
//var classSubject = "JavaScript";
//window.alert("Hello " + studentName.replace("Zak Ruvalcaba", name) + ", welcome to the " + classSubject + " class!");

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 14 - Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var name = "Jet Martin";
//var studentName = "Zak Ruvalcaba";
//var classSubject = "JavaScript";
//window.alert("Hello " + studentName.replace("Zak Ruvalcaba", name) + ".\nWelcome to the " + classSubject + " class!");

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 15 - Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var name = window.prompt("Please enter your full name here: ");
//var classSubject = "JavaScript";
//window.alert("Hello " + name + ".\nWelcome to the " + classSubject + " class!");

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 16 - Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var name = window.prompt("Please enter your full name here: ");
//var course = window.prompt("What course are you interested in taking: ");
//window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 17 - Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var x = 10;
//var y = 20;
//window.console.log("The sum of x and y is: " + (x + y));

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 18 - Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var x = 20;
//x += 20;
//window.console.log("The value of x = ", x);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 19 - Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var x = 20;
//x *= 5;
//window.console.log("The value of x = ", x);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 20 - Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var x = 20 % 3;
//x /= 1;
//window.console.log("The value of x = ", x);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 21 - Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//function compareXandY() {
//    var x = 1, y = 2;
//    window.console.log((y > x) || (x === 100));
//}
//compareXandY();

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 22 - Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//function compareXandY() {
//    var x = 1, y = 2;
//    window.console.log((y > x) && (x === 100));
//}
//compareXandY();

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 23 - Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var widget = {};
//window.console.log(typeof widget);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 24 - Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var widget = {};
//window.console.log(widget instanceof Object);

/*----------------------------------------------------------------------------------------------------------------------------------*/
// Step 25 - Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.
/*----------------------------------------------------------------------------------------------------------------------------------*/
//var widget = {};
//window.console.log(widget instanceof String);
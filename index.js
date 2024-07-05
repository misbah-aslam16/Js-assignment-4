//---------------QUESTION NO 01---------------//
var names = [];

//---------------QUESTION NO 02---------------//
var fruitNames = new Array();

//---------------QUESTION NO 03---------------//
var boysNames = ["Ali", "Bilal", "Ahmed", "Daniyal"];

//---------------QUESTION NO 04---------------//
var numbers = [1, 2, 3, 4, 5];

//---------------QUESTION NO 05---------------//
var booleanArray = [true, false];

//---------------QUESTION NO 06---------------//
var mixedArray = [1, "hello", true, null];

//---------------QUESTION NO 07---------------//

document.write('<h1>' + "QUALIFICATIONS" + '</h1>');
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for(i=0; i<=7; i++){
    document.write('<li><ol>' + educationQualifications[i] +'</ol></li>');
}
//---------------QUESTION NO 08---------------//
var studentsNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var total = 500;
 for(i=0; i<3; i++){
        document.write("Score of " + studentsNames[i] + " is " + scores[i] + "<br>");
 }


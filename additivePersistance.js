/*
Using the JavaScript language, have the function AdditivePersistence(num)
take the num parameter being passed which will always be a positive integer and
return its additive persistence which is the number of times you must add the digits 
in num until you reach a single digit. For example: if 
num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
*/


function AdditivePersistence(num){

	var str = num.toString();
	//console.log(str);
	if (str.length === 1){
		return 0;
	}
	result = 0;
	for (var i = 0; i < str.length; i++){
		result += parseInt(str[i]);
	}
	return 1 + AdditivePersistence(result);
}

console.log(AdditivePersistence(2718))
console.log(AdditivePersistence(4))
console.log(AdditivePersistence(19))
/*Challenge
Using the JavaScript language, 
have the function FirstFactorial(num)
 take the num parameter being passed and return the factorial of it
  (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases,
   the range will be between 1 and 18 and the input will always be an integer.
Sample Test Cases

Input:4

Output:24

Input:8

Output:40320


step. 
1. buat result
2. buat loop dari num ke 1


*/

function FirstFactorial(num) { 

  // var total = 1;
  // for (var i = 2; i <= num; i++) {
  //   total *= i;
  // }
	
	if (num == 1) {
		return num;
	}
	return num * FirstFactorial(num-1);

}

console.log(FirstFactorial(4));

console.log(FirstFactorial(11));
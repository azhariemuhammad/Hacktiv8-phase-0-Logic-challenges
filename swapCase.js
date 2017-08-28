/*

Using the JavaScript language,
have the function SwapCase(str) 
take the str parameter and swap the case
of each character. For example: 
if str is "Hello World" the output should 
be hELLO wORLD. Let numbers and symbols
stay the way they are. 

"Hello - LOL" === "hELLO-lol"
*/

function swapCase(str){

	// 1. ubah str ke array
	
	var result = '';
	var newString = [];
	// 2. loop untuk akses tiap element.
	for (var i = 0; i < str.length; i++){

	// 3. buat var upper = convert [i] toUppercase
	var upper = str[i]
	var kapital = upper.toUpperCase();
			
	// 4. buat kondisi jika upper  === str
	//if (kapital === upper){
	if(kapital === str[i]){
		 newString.push(kapital.toLowerCase());
	}
	
	  else {
		
		newString.push(kapital);
	  }
	  
	}
	
	return newString.join("");
	// 5. upper toLowerCase
	// 6. jika beda return upperCase

}

console.log(swapCase("Hello-LOL"));


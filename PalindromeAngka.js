/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima
 satu parameter angka. Function akan me-return angka selanjutnya 
 yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, 
maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.

1. loop  untuk penambahan angka num dengan 1
2. cek kondisi didalam loop. 
2.a jika direverse sama
3. return angkanya
*/
function angkaPalindrome(num) {
  // you can only write your code here!
  
  	
	for (var i = num+1; i < 999999; i++){
		var iString = i.toString();
		var kebalikan = iString.split('').reverse().join('');
		
		if (iString === kebalikan){
			return parseInt(iString);
		}

	} 
   
  
}

// TEST CASES
 console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
 console.log(angkaPalindrome(117)); // 121
 console.log(angkaPalindrome(175)); // 181
 console.log(angkaPalindrome(1000)); // 1001
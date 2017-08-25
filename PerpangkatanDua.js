/*Logic Challenge - Perpangkatan Dua
Problem

Diberikan sebuah function perpangkatanDua(angka) yang 
menerima satu parameter berupa angka. Function akan me-return n jika angka tersebut merupakan 
hasil dari dua pangkat n. jika tidak, return -1. Contoh, jika angka adalah 16, dan karena 2^4 
adalah 16, maka function akan me-return
 4. Contoh kedua, jika angka adalah 17, karena 17 bukan merupakan hasil perpangkatan angka 2, 
 maka function akan me-return -1.
Code*/

function perpangkatanDua(str) {
  // you can only write your code here!
  
  
    for (var i = 0; i < 10; i++){
  	//console.log(pangkat[i]);
  	var exponent = Math.pow(2,i);
  	if (exponent === str){
  		return i;
  	}
  	
	
  }
  return -1
}

// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
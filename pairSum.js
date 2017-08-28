/*
HACKTIV8 Practice

Nama:

==========
Soal Array 3 - Pair Sum
==========

[INSTRUKSI]
Diberikan 2 input: array dan targetSum
Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
targetSum, sepasang nilai tidak boleh memiliki indeks yang sama

[CONTOH]
1)	[1 ,2, 3, 4, 5], targetSum = 8		-->		1

[DOKUMENTASI SOLUSI / STEP]
1...
2..
3..

*/

function pairSum(arr, targetSum){
	// start code here
	var jumlah = 0;
	// loop pertama
	for (var i = 0; i < arr.length; i++ ){
		// buat loop kedua untuk tapi di mulai dari i
		for( var j = i; j < arr.length; j++){
		if (arr[i] + arr[j] === targetSum && i != j){
			jumlah++;
		}
		}
	}
	return jumlah;
	
}


console.log(pairSum([1, 2, 3, 4, 5], 8));	// 1
console.log(pairSum([3, 2, 1, 5, 2], 4));	// 2
console.log(pairSum([1, 1, 1], 2));			// 3
console.log(pairSum([1, 2, 3], 6));			// 0

/*
HACKTIV8 Practice

Nama:

==========
Soal String 1 - Vowel
==========

[INSTRUKSI]
Tersedia 1 input string, str.
Output: ada berapa vowel (a, e, i, o, u) dalam string input

[CONTOH]
1) str = 'hello world!'     -->     3

[DOKUMENTASI SOLUSI / STEP]
1...
2..
3..


*/

function vowel(str) {
	//start code here
	// initial arr Vowel & result
	var vowel = ['a','i','u','e','o']
	var result = 0;
	// loop 1 untuk akses element vowel
	for (var i = 0; i < vowel.length; i++){
		// loop 2 untuk akse element str
		for(var j =0; j < str.length; j++){
			// cek kondisi jika ada element vowel yang sama dengan str[j]
			if (vowel[i] == str[j]){
				// maka result ditambahkan
				result++
			}
		}
	}
	console.log(result);
}

console.log(vowel('hello world!')); // 3
console.log(vowel('aeiou'));        // 5
console.log(vowel('psst'));         // 0
console.log(vowel('yolo'));         // 2


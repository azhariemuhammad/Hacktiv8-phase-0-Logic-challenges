/*
HACKTIV8 Online Live Coding 3

Nama:

===============
Angka Terbilang
===============

[Perintah]

Buatlah sebuah function yang mengubah kata didalam kalimat menjadi kata bilangan (TWO, FOUR) berdasarkan jumlah huruf yang ada didalam kata dan diurutkan berdasarkan jumlah huruf yang terbesar.
jika dalam 1 kata memiliki:

1 huruf = One
2 huruf = Two
3 huruf = Three
4 huruf = Four
5 huruf = Five
6 huruf = Six
7 huruf = Seven
8 huruf = Eight
9 huruf = Nine

[Hint]
1. ubah kata menjadi angka

2. lakukan pengurutan dari yang terbesar ke terkecil

3. ubah angka menjadi bilangan angka


[Contoh]
input : 'Aku Budi'
output = ['Four', 'Three']


*/



function strtoNum(sen){
  //start code here
  

  
  var word = sen.split(' ')
  var jumlah = [];
  //console.log(word)
  for (var i = 0;i < word.length;i++){
  	jumlah.push(word[i].length)
   
  }
  // sorting dari yang besar ==> kecil
    jumlah.sort(function(value1, value2) { return value1 < value2 });
    
    // inital bilanganAngka
    var bilanganAngka = 'One Two Three Four Five Six Seven Eight Nine'
    var terbilang = bilanganAngka.split(' ')
    
    // buat looping untuk menyamakan antara jumlah dengan terbilang
    var arrTemp = []
    for (var j = 0; j <jumlah.length;j++){
    	for (var k = 0; k < terbilang.length; k++){
    		if (jumlah[j] == (k+1)){
    			arrTemp.push(terbilang[k]);
    		}
    	}
    	
    }
    return arrTemp;

}



console.log(strtoNum('Gray Fox')); //[ 'Four', 'Three' ]
console.log(strtoNum('Budi Learning JS')); //[ 'Eight', 'Four', 'Two' ]
console.log(strtoNum('Web Developer')); //[ 'Nine', 'Three' ]
console.log(strtoNum('I Become Developer')); //[ 'Nine', 'Six', 'One' ]

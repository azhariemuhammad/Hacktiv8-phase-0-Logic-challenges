/*
2. Initial Grouping
Disediakan sebuah function initialGrouping yang
 bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. 
Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf 
depannya dan dipisahkan ke dalam
array dua dimensi.
Ex:
Input: ["Budi", "Badu", "Joni", "Jono"]
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. 
Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ “Budi”, “Badu” ],
[ “Joni”, “Jono” ],
]
Setiap array dimensi kedua diawali dengan huruf depan
 yang mengelompokkan nama tersebut.

step 

1. sort arr.
2. buar kondisi jika arr[i] === 
3. push 


 */




 function initialGrouping(arr) {
 	
 	// cari unik 
 	var hurufUnik = [];
 	var result =[];
 	// cari huruf unik
 	for (var i = 0; i < arr.length; i++){
 		var hurufDepan = arr[i][0]
 		if(hurufUnik.indexOf(hurufDepan) === -1){
 		hurufUnik.push(hurufDepan);

 	  }
 	}
 	//console.log(hurufUnik);
 	for (var j = 0; j < hurufUnik.length; j++){
 		var arrKecil = [];
 		for (var k = 0; k < arr.length; k++){
 			if (arr[k][0] === hurufUnik[j]){
 				arrKecil.push(arr[k])
 			}
 		}
 		result.push(arrKecil);
 		console.log(result);
 	}
 	return result
}


 	
 

 console.log(initialGrouping(["Budi", "Badu",'amri', 'cica', "Joni", "Jono"]));
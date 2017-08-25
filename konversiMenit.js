/*
Problem

Diberikan sebuah function konversiMenit(menit) 
yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
Contoh, jika menit adalah 63, maka function akan me-return "1:03".
Code
*/

function konversiMenit(menit) {
  // you can only write your code here!
  // cari jam
  var hour = Math.floor(menit/60);
  if (hour < 10) {
  	hour =  hour.toString();
  }else {
  	hour = hour.toString();
  }

  // cari menit
  var minuteReminder = menit - (hour * 60);
  if (minuteReminder < 10) {
  	minuteReminder = '0' + minuteReminder.toString();
  }
  else {
  	minuteReminder = minuteReminder.toString();
  }
  return hour + ':' + minuteReminder;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 2:28
console.log(konversiMenit(120)); // 2:00
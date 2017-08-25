
function xo(str) {
  // you can only write your code here!
  var tempO = 0;
  var tempX = 0;
  for (var i = 0; i < str.length; i ++){
  	if (str[i] == 'x') {
  		tempO++;
  	}
  	else if (str[i] == 'o'){
  		tempX++
  	}
  }
  if (tempO === tempX){
  	return true;
  }
  else {
  	return false;
  }

  
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
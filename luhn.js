function luhn(number){ //var string = number.toString();
  var array = number.toString().split('');
  var sum = 0;
  var checkDigit = 0;
  for (var i = array.length - 2; i > 0; i -= 2 ){
    array[i] = array[i] * 2;
  }
  var newArray = array.toString().split(',').join('').split('');

  checkDigit = newArray.pop();
  newArray.forEach(function(element){
    sum = sum + Number(element);
  });
  return ((sum * 9) % 10 === Number(checkDigit));


}


module.exports = luhn;

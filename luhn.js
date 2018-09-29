function luhn(number){
  //var string = number.toString();
  var array = number.toString().split('');
//  var times = parseInt(array.length / 2)


  for (var i = array.length - 2; i > 0; i -= 2 ){
    array[i] = array[i] * 2;
  }


  console.log(array);

}







luhn(79927398713);

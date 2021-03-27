function evenNumbers(array, number) {
    let even = array.filter( num => num % 2 == 0 ).slice(-number);
   return even;
   }
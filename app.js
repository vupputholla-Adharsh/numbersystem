const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  function isPrime (num){
    if(num<=1) return false;
    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
  }
  const primeArray = numbers.filter(isPrime);
  const maxPrime = math.max(...primeArray);
  const minPrime = math.min (...primeArray);
  const sumPrime = primeArray.reduce((acc,num) => acc + num,0);

  console.log(primeArray);
  console.log(maxPrime);
  console.log(minPrime);
  console.log(sumPrime);
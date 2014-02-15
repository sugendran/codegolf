function isPrime(val) {
  var len = val.length;
  var primes = ["22"];
  function _isPrime(str) {

    for(i=0; i<primes.length; i++) {
      tsr = prime = primes[i];
      if(str.length < prime.length) return false;
      if(prime.length == str.length) return true;
      while(tsr.length < str.length) {
        tsr += prime;
      }
      if(tsr.length == str.length) return false;
    }
    return true;
  }
  var nstr = "0";
  while(nstr.length.toString() !== val) {
    if(_isPrime(nstr)) {
      primes.push(nstr);
    }
    nstr += "x";
  }
console.log(primes);
  return _isPrime(nstr) ? "Prime" : "Not!!";
}

for(var x=1; x<10;x++)
  console.log("checking: %j and result: %j", x, isPrime(x.toString()));
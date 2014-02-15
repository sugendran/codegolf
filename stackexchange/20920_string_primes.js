// http://codegolf.stackexchange.com/questions/20920/is-it-a-prime-w-o-math

/*
function isPrime(val) {
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
  return _isPrime(nstr) ? "Prime" : "Not!!";
}
*/

// by hand

/*
 A=spacer
 P=primes
 Q=isPrime Function
 i=some number
 j=some number
 k=some number
 n=some string
 p=some prime number
 q=some number to test
 t=tempory number
 */

// A="0",P=[A+A],j=0;
// function N(v){
//   function Q(q) {
//     i=0
//     while(p=P[i++]) {
//       t=p,k=p.length
//       if(q<=k)return q==k;
//       while(t.length<q)t+=p
//       if(t.length==q)return;
//     }
//     return 1
//   }
//   n=A
//   if(v!=A)
//   while(j=n.length,j+""!==v){
//     Q(j)&&P.push(n)
//     n+=A
//   }
//   console.log(Q(j)?"Prime":"Not!!")
// }

// uglifyjs
function N(a){function b(a){for(i=0;p=P[i++];){if(t=p,k=p.length,k>=a)return a==k;for(;t.length<a;)t+=p;if(t.length==a)return}return 1}if(n=A,a!=A)for(;j=n.length,j+""!==a;)b(j)&&P.push(n),n+=A;console.log(b(j)?"Prime":"Not!!")}A="0",P=[A+A],j=0

for(var X=0;X<10;X++) {
  console.log('checking: ' + X);
  N(X.toString());
}
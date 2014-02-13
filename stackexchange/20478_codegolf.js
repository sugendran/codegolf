// 166
//function s(a,i,j,l){(!l)&&(i=0,j=1,l=a.length);if(i==l) return a;(n=a[i],m=a[j],1)&&(m<n)&&(a[i]=m,a[j]=n);return (j < l) ? s(a, i, j + 1, l) : s(a, i + 1, i + 2, l)}

// 147
function s(a,i,j,l){(!l)&&(i=0,j=1,l=a.length);if(i<l){(n=a[i],m=a[j],1)&&(m<n)&&(a[i]=m,a[j]=n);return (j<l)?s(a,i,j+1,l):s(a,i+1,i+2,l)}return a}

console.log(s([7, 3, 2, 1, 4, 5]));
console.log(s([7, 1, 4, 0, 5]));
console.log(s([1, 1, 2, 3]));

//[7,1,4,5]
//[1,7,4,5]

// function s(a,i,j,l) {
//   (!l) && (i=0,j=1,l=a.length)
//   if(i<l) {
//     if(j<l) {
//       if(a[j] < a[i]) {
//         var t = a[i];
//         a[i] = a[j];
//         a[j] = t;
//       }
//       return s(a,i,j+1,l);
//     }
//     return s(a,i+1,i+2,l);
//   }
//   return a;
// }
module.exports = function multiply(first, second) {
  // your solution  
  let a = first.split('').reverse();
  let b = second.split('').reverse();
  let arr = [];
  for (var i = 0; i < a.length; i++) {
    let mem = 0;
    for (var j = 0; j < b.length; j++) {
      let res1 = a[i]*b[j]+mem;      
      if (arr[i+j]) {
        let res2 = arr[i+j] + res1
        arr[i+j] = res2 % 10;
        mem = Math.floor(res2 / 10);
      }
      else {        
        arr[i+j] = res1 % 10;
        mem = Math.floor(res1 / 10);
      }
      if (j == b.length-1 && mem > 0) {
        arr[i+j+1] = mem;
      }     
    }
  }  
  return arr.reverse().join('');
}

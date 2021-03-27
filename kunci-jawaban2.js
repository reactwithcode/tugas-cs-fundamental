
function solve(a,b){
    let arrResult = [];
    let count = 0;
    for (let i = 0; i < b.length; i++){
      for (let j = 0; j < a.length; j++){
        if (b[i] === a [j]){
          count++;
        }
      }
      arrResult.push(count);
      count = 0;
    }
    
    return arrResult;
  }
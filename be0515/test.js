function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    let result;

    for(let j = 0; j < arr.length; j++){
        if(Array.isArray(arr[j])){
            for(let k = 0; k < arr[j].length; k++){
                if(arr[j][k] == 'B')
                {

                     return result = [j,k];                   
                }
            }
        }
    }

    return [];
    
}


//let output = findBugInApples([['A'], ['B']]);
//console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]
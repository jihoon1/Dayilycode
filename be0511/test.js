function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    if(arr.length === 0)
     return []
  
    const [head, ...tail] = arr
    console.log("arr : " +arr);

    if(Array.isArray(head) === true )
      return flattenArr(flattenArr(head).concat(tail));
    else
      return [head].concat(flattenArr(tail));
  
  }
  
let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]
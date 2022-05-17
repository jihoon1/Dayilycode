function readVertically(arr) {
    // code goes here
  
    let result = "";
  
    const Maxlength = arr.reduce( (add, cur) =>{
      return add > cur.length ? add : cur. length;
    }, 0 )
    console.log(Maxlength);
  
    for(let k = 0; k < Maxlength; k++){
      for( let i = 0; i < arr.length; i++){
          
          if(arr[i][k])
          result += arr[i][k];
          console.log(result);
      }
    }
  
    return result;
  }

  let input = ['YCDt', 'oao', 'unI']
  ;
  let output = readVertically(input);
  console.log(output); // --> 'hweolllrod'
  
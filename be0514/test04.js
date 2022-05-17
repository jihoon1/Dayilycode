function paveBox(boxes) {
    // TODO: 여기에 코드를 작성합니다.
    
    let havebox = 0;
    let maxtimes = 0;

    for( let el of boxes)
    {  
        //console.log(el);
        if(havebox === 0){ 
            havebox = el;
            maxtimes ++;
            continue;
        }   

        if(el > havebox ){
            break;
        }

        maxtimes ++;

    }
    return maxtimes;
  }
  
  //const boxes = [5, 1, 4, 6];
  //const output = paveBox(boxes);
  //console.log(output); // 3
  
  const boxes2 = [95, 90, 99, 99, 80, 99];
  const output2 = paveBox(boxes2);
  console.log(output2); // 10
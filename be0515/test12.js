function connectedVertices(edges) {
    // TODO: 여기에 코드를 작성합니다.
    
  if(edges.length === 1) return 1;

      let haveVerticList = [];
      let count = 0;
      for(let k=0; k< edges.length; k++){
    

        if(haveVerticList.length === 0){
            haveVerticList = haveVerticList.concat(edges[k]);
          continue;
        }
    
        for(let l=0; l<haveVerticList.length; l++){

          if(edges[k][0] === haveVerticList[l] || 
            edges[k][1] === haveVerticList[l]){
            count++;
            break;
            }
        }
        haveVerticList = haveVerticList.concat(edges[k]);
        console.log(edges[k]);
        console.log(haveVerticList);
        console.log(count);

      }
        
      return edges.length - count;    
    }
    
    
    const result = connectedVertices([
        [0, 1],
        [5, 6],
        [6, 4],
        [2, 3],
        [4, 1],
        [3, 4],
    ]);
    console.log(result); // 1
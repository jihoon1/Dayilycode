function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    let minlength = arr[0].length;
    let maxlength = arr[0].length;

    let saveminidx = -1
    let savemaxidx = -1

    for( let i = 0; i< arr.length; i++)
    { 
        if(arr[i].length <= minlength){
            saveminidx = i;  
            minlength = arr[i].length;            
        } 

        if(arr[i].length >= maxlength){
            savemaxidx = i;
            maxlength = arr[i].length;
        }
    }
    
    if( savemaxidx < saveminidx )    { 
        console.log("saveminidx "+saveminidx+" savemaxidx "+savemaxidx); 
        (saveminidx !== -1)&&arr.splice(saveminidx,1);
        (savemaxidx !== -1)&&arr.splice(savemaxidx,1);
    }else{
        console.log("saveminidx "+saveminidx+" savemaxidx "+savemaxidx); 
        (savemaxidx !== -1)&&arr.splice(savemaxidx,1);
        (saveminidx !== -1)&&arr.splice(saveminidx,1);
    }      

    return arr;
  }
  
  
  
  let output = removeExtremes( ['where', 'is', 'the', 'longest', 'word']);
  console.log(output); // --> [ ['where', 'the', 'word']
  
  output = removeExtremes( ['iAmLongest', 'iAmNotShortest', 'iAmLongest', 'long']);
  console.log(output); // --> [''iAmLongest', 'iAmLongest',]
function paveBox(boxes) {
    class Queue {
        constructor() {
          this._arr = [];
        }
        
        getSize(){
            return this._arr.length;
        }
    
        printthis(){
            console.log(this._arr);
        }
    
        enqueue(item) {
          this._arr.push(item);
        }
        dequeue() {
          return this._arr.shift();
        }
      }
    
      let havebox = 0;
      let maxtimes = 0;
  
      for( let el of boxes)
      {  
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


//const result = paveBox([5, 1, 4, 6]);//expect(result).to.equal(3);
//const result2 = paveBox([1, 5, 7, 9]);//expect(result2).to.equal(1);
const result3 = paveBox([80, 30, 40, 55, 66, 21, 8, 25, 44, 77, 92]);
//expect(result3).to.equal(10);
//const result4 = paveBox([95, 90, 99, 99, 80, 99]);
//expect(result4).to.equal(4);
console.log(result3);
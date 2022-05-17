
function queuePrinter(bufferSize, capacities, documents) {
    
    //큐를 만들음
    class Queue {
    constructor() {
      this._arr = [];
    }

    getTotal(){
       return this._arr.reduce( (add, cur)=>{
        return add + cur;
    },0)
    }

    getSize(){
        return this._arr.length;
    }

    makeBuffer(bufsize){
        if(this._arr.length < bufferSize){
            this.enqueue(0);
            this.makeBuffer(bufferSize);
        }        
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

  const myPrint = new Queue; //프린트 대기열 생성
  let totalCapa = 0;
  let totaltime = 0;

  //처음리셋 
  myPrint.makeBuffer(bufferSize);
  /////

  //메인 시작
  for(let k=0; k< documents.length;){    

    myPrint.dequeue();
    if( (myPrint.getTotal() + documents[k]) <= capacities){
        myPrint.enqueue(documents[k++]);
    }

    totaltime++;
    myPrint.makeBuffer(bufferSize);
    myPrint.printthis();
  }

  console.log(totaltime);
  return totaltime + myPrint.getSize();
}

const result = queuePrinter(2, 10, [7, 4, 5, 6]);
//const result2 = queuePrinter(10, 15, [14, 2, 3, 7, 10, 13, 12, 4, 11, 2, 9, 4]);
//const result3 = queuePrinter(32, 50, [18, 2, 15, 15, 20, 20, 30, 32, 45, 50, 23, 26, 29, 33]);
//const result4 = queuePrinter(78, 100, [30, 32, 40, 15, 22, 50, 60, 32, 49, 19, 28, 46, 77, 71, 46, 34, 27]);
console.log( result ); // 8

/*expect(result).to.equal(8);
expect(result2).to.equal(75);
expect(result3).to.equal(291);
expect(result4).to.equal(781);*/
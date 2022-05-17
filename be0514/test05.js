
function queuePrinter(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.

    //인쇄작업목록 기준
    //bufferSize //대기열 갯수
    //capacities //대기열당 최대 크기
    //documents // 인쇄 크기 별 문서 목록

    let nextIdx = 0;
    let printbuf = new Array(bufferSize).fill(0);

    let totalTime = 0;

    console.log("length: "+documents.length);

    while(1){
        let totalcap = 0;
        const last = bufferSize-1;
        const worktotal = printbuf.reduce( (acc,cur)=>{
            return acc+cur;    } );

        //인쇄물 출력 ( 작업중인게 있다면 배열 앞으로 한칸씩 정리 )
        if(worktotal > 0)        {
            printbuf = printbuf.slice(1).concat([0]);
            console.log(printbuf);
        }

        console.log("worktotal : "+worktotal);
        //빠져나가기 위한 조건 => 추가할 문서가 없으면서 print버퍼에도 데이터가없어야 함 
        if( nextIdx >= documents.length && 0 === worktotal){
            break;
        }

        //들어갈 상황인지 체크해서 추가
        for(let i=0;i<bufferSize;i++){
            totalcap += printbuf[i];
        }
        console.log("totalcap = "+totalcap);
        if(totalcap + documents[nextIdx] < capacities &&
            nextIdx < documents.length){
            printbuf[last]=documents[nextIdx];
            nextIdx += 1;
            console.log("nextIdx = "+nextIdx);
        }

        console.log(printbuf);

        //시간+
        totalTime++;
        console.log("totalTime : "+totalTime);
    }

    return totalTime;

  }


let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8
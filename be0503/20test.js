function square(number) {

    return number * number;
 }
 
 function getSquaredElementsAtProperty(obj, property) {
   // TODO: 여기에 코드를 작성합니다.
 
   let mkArr = obj[property]
   let ArrResult = []


   if(Array.isArray(ArrResult) == false){
       console.log("문자라서 걸러짐?")
       return []
   }

 
 
 return mkArr.map( square )
 
 
 }
 
 const obj = {
   key: [2, 1, 5],
   test: ["sdfdf", "sdfdsf", "test2"],
 };
 
 let output = getSquaredElementsAtProperty(obj, 'test');
 console.log(output); // --> [4, 1, 25]
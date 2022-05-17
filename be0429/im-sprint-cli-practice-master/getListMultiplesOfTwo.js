const { range } = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO

 /* var myArry =[0];
  for(var i=1,index=0; i <= upTo; i++)
  {
    if(i % 2 === 0)
    {
      myArry[index] = "";
      myArry[index] += i;
      index++;
    }

  }
  return myArry;*/
  return range(2, upTo +1,2);

}

module.exports = getListMultiplesOfTwo;
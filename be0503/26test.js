function calculateScore(records, value) {
    const sum = records.reduce(function (acc, cur) {
      if (cur.animal === value) {
          console.log(" 111 "+acc)
          console.log(" 222 " +cur)
        return acc + cur.score;
      } else {
        console.log(" else " + acc)
        return acc;
      }
    }, 0);
  
    return sum;
  }
  const records = [
    {
      score: 63,
      animal: 'dog',
    },
    {
      score: 75,
      animal: 'dog',
    },
    {
      score: 87,
      animal: 'cat',
    },
    {
      score: 98,
      animal: 'cat',
    },
    {
      score: 24,
      animal: 'dog',
    },
  ];
  
  //let output = calculateScore(records, 'cat');
  //console.log(output); // --> 185
  
  output = calculateScore(records, 'dog');
  console.log(output); // --> 162
  
  //output = calculateScore([], 'dog');
  //console.log(output); // --> 0
  
  //output = calculateScore(records, 'mouse');
  //console.log(output); // --> 0
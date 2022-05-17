function barcode(len) {
    // TODO: 여기에 코드를 작성하세요.
  
    const isValid = (str) => {
        const reversed = str.split('').reverse().join('');
        const halfLen = Math.floor(str.length / 2);
        for (let i = 1; i <= halfLen; i++) {
            console.log("a "+reversed.slice(0, i));
            console.log("b "+reversed.slice(i, i + i));

            if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
                return false;
            }
        }

       //console.log(halfLen);
        //console.log(reversed);
        console.log(str);
        return true;   
    }
  
    const chr = '123';
    const aux = (str) => {
        if (str.length === len) return str;
        
        for (let i = 0; i < chr.length; i++) {
            if(isValid(str + chr[i])) {
                const founded = aux(str + chr[i]);
                if (founded !== null) return founded;
            }  
        }
        return null
    }
    return aux('');
  }
  
  
  let output;// = barcode(3);
  //console.log(output); // "121"
  
  //output = barcode(7);
  //console.log(output); // "1213121"
  
  output = barcode(20);
  console.log(output); // "12131231321231213123"
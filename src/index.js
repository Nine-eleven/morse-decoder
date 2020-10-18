const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];

    for (let i = 0; i+9 <= (expr.length - 1); i += 10) {
       ((i+9) !== (expr.length - 1)) ? array.push(expr.slice (i, i+10)) : array.push(expr.slice (i));
    }

    let newArray = array.map ((item) => {
        let resultNewArray = "";
        for (let i = 0 ; i < (item.length - 1); i += 2) {
            if (item[i] === "0") { continue
            } else if (item[i] === "1" && item[i+1] === "0") { resultNewArray += "."
            } else if (item[i] === "*") { 
                resultNewArray = " ";
                break;
            } else {resultNewArray += "-"}
        }

        return resultNewArray; 
    })

    let resultString = "";
    newArray.forEach( (item) => {
        if (item === " ") {resultString += " "
         } else resultString += MORSE_TABLE[item];
} )


   return resultString;

}

module.exports = {
    decode
}


// способ выдаёт ошибку на join!!!!
//  let array = [];

//    for (let i = 0; i+9 <= (expr.length - 1); i += 10) {
//       ((i+9) !== (expr.length - 1)) ? array.push(expr.slice (i, i+10)) : array.push(expr.slice (i));
//    }

//    let newArray = array.map ((item) => {
//        item.replace(/10/g, ".");
//        item.replace(/11/g, "-");
//        item.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
//        return item.match(/\D/g).join(""); 
//    })

/*    let keysArray = Object.keys(MORSE_TABLE);

    let result = newArray.map ( (item) => {
        let  valueResult = "";
        if (keysArray.includes(item)) { valueResult = MORSE_TABLE.item};
        return  valueResult;
    })

   return result.join(""); 
   
*/
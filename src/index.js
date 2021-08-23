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
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
      let symbol = '';
      const letter = expr.slice(i, i + 10);
  
      if (letter === '**********') {
        result += ' ';
      } else {
        for (let j = 0; j < letter.length; j+=2) {
          const subchar = letter.slice(-j - 2, letter.length - j);
          if (subchar === '11') {symbol += '-'}
          if (subchar === '10') {symbol += '.'}
          else symbol += '';
        }
  
        symbol = symbol.split('').reverse().join('');
        result += MORSE_TABLE[symbol];
      }
    }
  
    return result;
}

module.exports = {
    decode
}
const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let firstArr = expr.split('')
  let index = 0
  let arr = []

  for (let a = 0; a < firstArr.length; a += 10) {
    arr[index] = ''
    for (let i = 0; i < 9; i++) {
      if (firstArr[i + a] === '1' && firstArr[i + a + 1] === '0') {
        arr[index] = arr[index] + '.'
        i++
      } else if (firstArr[i + a] === '1' && firstArr[i + a + 1] === '1') {
        arr[index] = arr[index] + '-'
        i++
      } else if (firstArr[i + a] === '*' && firstArr[i + a + 1] === '*') {
        arr[index] = arr[index] + ' '
        i = +10
      }
    }
    index++
  }

  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      result += ' '
    }
    for (key in MORSE_TABLE) {
      if (arr[i] == key) {
        result += MORSE_TABLE[key]
      }
    }
  }
  return result
}

module.exports = {
  decode,
}

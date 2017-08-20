const readline = require('readline')
const { flatIt } = require('./array-flater')

const ENCODING = 'utf-8'
const FIRST_POSITION_FOR_COMMAND_LINE_ARGUMENT = 2

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function outputResults (arrayToFlat, flattedArray) {
  console.info()
  console.info('The provided Array to be flatted was: ', arrayToFlat)
  console.info()
  console.info('The resultant array is: ', flattedArray)
  console.info()
}

// Main
if (process.argv[FIRST_POSITION_FOR_COMMAND_LINE_ARGUMENT]) {
  let providedArguments = ''
  providedArguments = new Buffer(
    process.argv[FIRST_POSITION_FOR_COMMAND_LINE_ARGUMENT] || '',
    ENCODING)
  const arrayToFlat = providedArguments.toString()
  outputResults(arrayToFlat, flatIt(arrayToFlat))
  input.close()
} else {
  input.question('Please enter the array that you want to make flat :', (arrayToFlat) => {
    outputResults(arrayToFlat, flatIt(arrayToFlat))
    input.close()
  })
}

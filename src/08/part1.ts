import input from './input.js'

const tests: [string, any][] = [[String.raw`""
"abc"
"aaa\"aaa"
"\x27"`, 12]]

tests.forEach(([testData, expected]) => {
    const result = solve(testData)
    console.log(`Example Input Solution - Expected: ${expected}, Got: ${result}, ${result === expected ? 'PASS' : 'FAIL'}`)
})

//console.log('Full Input Solution', solve(input))

function solve(input: string): any {
    return input.split('\n').map((line) => {
        console.log(line)
        //line = line.replace(/([a-zA-Z0-9]")(.*)/, '\\"')
        const initialLine = line
        const lineLength = line.length
        line = line.replace(/(\\\\)|(\\")|(\\x[a-zA-Z0-9]{2})/g, '/')
        //line = line.replace(/\\"/, '/')
        //line = line.replace(/\\x[a-zA-Z0-9]{2}/, '/')
        console.log(line)
        return { lineLength, outputLength: line.length - 2, initialLine, line }

    }).reduce((prev, next) => { console.log(next); return prev += next.lineLength - next.outputLength }, 0)
}

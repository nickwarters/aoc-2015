import input from './input.js'

const tests: [string, any][] = [[String.raw`""
"abc"
"aaa\"aaa"
"\x27"`, 19]]

tests.forEach(([testData, expected]) => {
    const result = solve(testData)
    console.log(`Example Input Solution - Expected: ${expected}, Got: ${result}, ${result === expected ? 'PASS' : 'FAIL'}`)
})

console.log('Full Input Solution', solve(input))

function solve(input: string): any {
    return input.split('\n').map((line) => {
        let length = line.length + 2
        length += line.match(/"|\\/g)!.length
        return { length, initialLength: line.length, line }

    }).reduce((prev, next) => { return prev += next.length - next.initialLength }, 0)
}

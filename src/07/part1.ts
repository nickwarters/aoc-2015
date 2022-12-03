import { readFileSync } from 'fs'

const tests: [string, any][] = [[``, 0]]

tests.forEach(([testData, expected]) => {
    const result = solve(testData)
    console.log(`Example Input Solution - Expected: ${expected}, Got: ${result}, ${result === expected ? 'PASS' : 'FAIL'}`)
})

console.log('Full Input Solution', solve(readFileSync('./input.txt', { encoding: 'utf-8' })))

function solve(input: string): any {
    const lines = input.split('\n')
    const wires: { [key: string | number]: number } = {}
    const operations: { [key: string]: (args: number[]) => number } = {
        AND: (args: number[]) => args[0] & args[1],
        OR: (args: number[]) => args[0] | args[1],
        LSHIFT: (args: number[]) => args[0] << args[1],
        RSHIFT: (args: number[]) => args[0] >> args[1],
        NOT: (args: number[]) => args[1] ^ 65535,
        VAL: (args: number[]) => args[1],
    }

    function value(a: string | number) {
        return wires[a] || +a
    }

    function shouldSetVal(a: string | number) {
        return !a || a in wires || /\d+/.test(`${a}`)
    }

    while (lines.length) {
        const items = lines.shift()?.match(/([a-z0-9]*)\b\s?([A-Z]+)?\s?(\S+)\s->\s(\S+)/)

        if (!items) continue

        const [o, a, op, b, c] = items

        if ([a, b].every(i => !i || i in wires || /\d+/.test(i))) {
            const res = [a, b].map(i => wires[i] || parseInt(i))
            wires[c] = wires[c] || operations[op || 'VAL'](res)
        } else {
            lines.push(o)
        }
    }

    return wires['a']
}

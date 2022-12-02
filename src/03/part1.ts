import { readFileSync } from 'fs'

const tests: [string, any][] = [
	[`^v^v^v^v^v`, 2],
	['^>v<', 4],
	['>', 2],
]

tests.forEach(([testData, expected]) => {
	const result = solution(testData)
	console.log(
		`Example Input Solution - Expected: ${expected}, Got: ${result}, ${
			result === expected ? 'PASS' : 'FAIL'
		}`
	)
})

console.log(
	'Full Input Solution',
	solution(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function solution(input: string): any {
	const seen = new Set()

	let x = 0
	let y = 0

	for (let i = 0; i < input.length; i++) {
		if (!seen.has(`${x},${y}`)) {
			seen.add(`${x},${y}`)
		}
		if (input.charAt(i) === '<') {
			x -= 1
		} else if (input.charAt(i) === '>') {
			x += 1
		} else if (input.charAt(i) === '^') {
			y += 1
		} else {
			y -= 1
		}
		if (!seen.has(`${x},${y}`)) {
			seen.add(`${x},${y}`)
		}
	}

	return seen.size
}

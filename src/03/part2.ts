import { readFileSync } from 'fs'

const tests: [string, any][] = [
	[`^v`, 3],
	['^>v<', 3],
	['^v^v^v^v^v', 11],
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

function isEven(num: number) {
	return num % 2 === 0
}

function solution(input: string): any {
	const seen = new Set()

	let xA = 0
	let yA = 0
	let xB = 0
	let yB = 0

	let current: string = '0,0'
	seen.add(current)
	for (let i = 0; i < input.length; i++) {
		if (input.charAt(i) === '<') {
			if (isEven(i)) {
				xA -= 1
			} else {
				xB -= 1
			}
		} else if (input.charAt(i) === '>') {
			if (isEven(i)) {
				xA += 1
			} else {
				xB += 1
			}
		} else if (input.charAt(i) === '^') {
			if (isEven(i)) {
				yA += 1
			} else {
				yB += 1
			}
		} else {
			if (isEven(i)) {
				yA -= 1
			} else {
				yB -= 1
			}
		}
		current = isEven(i) ? `${xA},${yA}` : `${xB},${yB}`

		if (!seen.has(current)) {
			seen.add(current)
		}
	}

	return seen.size
}

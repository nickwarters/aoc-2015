import { readFileSync } from 'fs'

const tests: [string, any][] = [
	[
		`ugknbfddgicrmopn\naaa\n
	jchzalrnumimnmhp\n
	haegwjzuvuyypxyu\n
	dvszwmarrgswjxmb`,
		2,
	],
]

const vowels = ['a', 'e', 'i', 'o', 'u']
const excludeList = ['ab', 'cd', 'pq', 'xy']
function charAppearsTwice(input: string) {
	let doubleChar = false
	let i = 0
	while (i < input.length && !doubleChar) {
		doubleChar = input.charAt(++i) === input.charAt(i - 1)
	}

	return doubleChar
}
function isNice(input: string) {
	return (
		excludeList.every((c) => !input.includes(c)) &&
		input.split('').filter((v) => vowels.includes(v)).length >= 3 &&
		charAppearsTwice(input)
	)
}

tests.forEach(([testData, expected]) => {
	const result = solve(testData)
	console.log(
		`Example Input Solution - Expected: ${expected}, Got: ${result}, ${
			result === expected ? 'PASS' : 'FAIL'
		}`
	)
})

console.log(
	'Full Input Solution',
	solve(readFileSync('./input.txt', { encoding: 'utf-8' }))
)

function solve(input: string): any {
	return input
		.split('\n')
		.map((s) => s.trim())
		.filter(isNice).length
}

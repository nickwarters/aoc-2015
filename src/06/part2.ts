import { readFileSync } from 'fs'

const tests: [string, any][] = [
	[`turn on 0,0 through 0,0`, 1],
	[`toggle 0,0 through 999,999`, 2000000],
]

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
	const grid = new Array(1000)
	for (let r = 0; r < grid.length; r++) {
		grid[r] = new Array(1000).fill(0)
	}

	input.split('\n').forEach((line) => {
		const [start, end] = line.match(/(\d{1,3},\d{1,3})/g)!
		if (line.startsWith('toggle ')) {
			apply('toggle', grid, parseCoordinates(start), parseCoordinates(end))
		} else if (line.startsWith('turn on ')) {
			apply('on', grid, parseCoordinates(start), parseCoordinates(end))
		} else {
			apply('off', grid, parseCoordinates(start), parseCoordinates(end))
		}
	})

	return grid
		.flat()
		.filter((x) => x > 0)
		.reduce((prev, next) => {
			return prev + next
		}, 0)
}

function parseCoordinates(input: string) {
	return input.split(',').map((i) => parseInt(i, 10))
}

function apply(
	type: 'toggle' | 'on' | 'off',
	grid: number[][],
	start: number[],
	end: number[]
) {
	for (let row = start[0]; row <= end[0]; row++) {
		for (let col = start[1]; col <= end[1]; col++) {
			if (type === 'off') {
				grid[row][col] -= grid[row][col] === 0 ? 0 : 1
			}
			if (type === 'on') {
				grid[row][col] = grid[row][col] + 1
			}
			if (type === 'toggle') {
				grid[row][col] = grid[row][col] + 2
			}
		}
	}
}

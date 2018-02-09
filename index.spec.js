const mdtable = require('./')

const base_table = {
  header: ['A', 'B', 'C'],
  alignment: ['L', 'L', 'L'],
  rows: [
    ['1', '2', '3']
  ]
}

test('basic table', () => {
  const settings = {
    borders: true,
    padding: 1
  }

  const expected = `
| A | B | C |
|:--|:--|:--|
| 1 | 2 | 3 |
`

  expect(mdtable(base_table, settings)).toBe(expected.trim())
})

test('table with extra padding', () => {
  const settings = {
    borders: true,
    padding: 3
  }

  const expected = `
|   A   |   B   |   C   |
|:------|:------|:------|
|   1   |   2   |   3   |
`

  expect(mdtable(base_table, settings)).toBe(expected.trim())
})

test('table without (outer) borders', () => {
  const settings = {
    borders: false,
    padding: 1
  }

  const expected =` A | B | C 
:--|:--|:--
 1 | 2 | 3 `

  expect(mdtable(base_table, settings)).toBe(expected)
})

test('table with different alignments', () => {
  const table = Object.assign({}, base_table, {
    alignment: ['L', 'C', 'R']
  })

  const settings = {
    borders: true,
    padding: 1
  }

  const expected = `
| A | B | C |
|:--|:-:|--:|
| 1 | 2 | 3 |
`

  expect(mdtable(table, settings)).toBe(expected.trim())
})

test('table with forced borders (< 2 columns)', () => {
  const table = {
    header: ['A'],
    alignment: ['L'],
    rows: [
      ['1']
    ]
  }

  const settings = {
    borders: false,
    padding: 1
  }

  const expected = `
| A |
|:--|
| 1 |
`

  expect(mdtable(table, settings)).toBe(expected.trim())
})

test('table with per-column padding', () => {
  const table = Object.assign({}, base_table, {
    header: ['AA', 'BBB', 'CCCC']
  })

  const settings = {
    borders: true,
    padding: 1
  }

  const expected = `
| AA | BBB | CCCC |
|:---|:----|:-----|
| 1  |  2  |  3   |
`

  expect(mdtable(table, settings)).toBe(expected.trim())
})

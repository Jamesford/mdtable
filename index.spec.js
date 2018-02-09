const mdtable = require('./')

test('generates a basic table', () => {
  const table = {
    header: ['A', 'BB', 'C'],
    alignment: ['L', 'L', 'L'],
    rows: [
      ['1', '2', '333']
    ]
  }

  const settings = {
    borders: true,
    padding: 1
  }

  const expected = `
| A | B | C |
|:--|:--|:--|
| 1 | 2 | 3 |
   `

  expect(mdtable(table, settings)).toBe(expected.trim())
})

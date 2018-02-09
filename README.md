# mdtable

(╯°□°）╯︵ ┻━┻ Generate markdown tables

See it in action, https://mdtables.stobbs.xyz

## Install

```bash
$ npm install mdtable
```

```bash
$ yarn add mdtable
```

## Usage

```js
const mdtable = require('mdtable')

const table = {
  header: ['A', 'B', 'C'],
  alignment: ['L', 'C', 'R'],
  rows: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ]
}

const settings = {
  borders: true, // Toggle outer borders of the table
  padding: 1     // Padding on each side of the longest string
}

mdtable(table, settings)
// -> `
| A | B | C |
|:--|:-:|--:|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 8 |
`
```

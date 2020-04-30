import Table from '../table'

import './table-extend'
import tableMixins from './table.mixins'
if (!Table.mixins) {
  Table.mixins = []
}
Table.mixins.push(tableMixins)

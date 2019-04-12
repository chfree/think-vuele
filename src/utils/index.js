export { formatDate, formatDateTime } from './date'
export {
  findComponentDownward,
  findComponentUpward,
  findComponentsUpward,
  findComponentsDownward,
  findBrothersComponents
} from './find-components'

function isNull(obj) {
  return obj == null || obj === undefined || obj === ''
}
export { isNull }

import {add} from './modules/add'
import {tap} from './modules/tap'

const rootElement = document.querySelector<HTMLDivElement>('#app')

if (!rootElement) {
  throw new Error('Element with id "app" not found')
}

const program = tap(
  add(
    () => 1,
    () => 2,
  ),
  'should log three',
)
rootElement.innerHTML = `${program()}`

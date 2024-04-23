import {add} from './modules/add'

const rootElement = document.querySelector<HTMLDivElement>('#app')

if (!rootElement) {
  throw new Error('Element with id "app" not found')
}

rootElement.innerHTML = `
  ${add(
    () => 1,
    () => 2,
  )()}
`

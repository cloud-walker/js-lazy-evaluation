import {Lazy} from './lazy'

export function tap<T>(value: Lazy<T>, message: string): Lazy<T> {
  return () => {
    const result = value()
    console.log(message, result)
    return result
  }
}

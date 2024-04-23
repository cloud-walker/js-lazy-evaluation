import {Lazy} from './lazy'

export function add(a: Lazy<number>, b: Lazy<number>): Lazy<number> {
  return () => a() + b()
}

import { describe, it, expect } from 'vitest'
import { useCounter } from '../counter'

describe('counter', () => {
  it('count initial value is zero', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('call increment value is 1', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
})

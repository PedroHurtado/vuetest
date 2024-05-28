import { useCounterStore } from '../useCounterStore'
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initial state', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    expect(counter.name).toBe('Pedro')
    expect(counter.doubleCount).toBe(0)
  })

  it('increment', () => {
    const counter = useCounterStore()
    counter.increment()

    expect(counter.count).toBe(1)
    expect(counter.doubleCount).toBe(2)
  })
})

//https://pinia.vuejs.org/cookbook/testing.html

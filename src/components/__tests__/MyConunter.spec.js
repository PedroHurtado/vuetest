import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyCounter from '../MyCounter.vue'

describe('MyContent', () => {
  it('', async () => {
    const wrapper = mount(MyCounter)

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)

    expect(button.text()).toBe('0')

    await button.trigger('click')

    expect(button.text()).toBe('1')
  })
})

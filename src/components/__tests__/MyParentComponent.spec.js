import { describe, it, expect } from 'vitest'
import { defineComponent, inject, h } from 'vue'
import { mount } from '@vue/test-utils'
import ParentComponent from '../MyParentComponent.vue'

describe('MyParentComponet', () => {
  it('provides correct data', () => {
    const TestComponent = defineComponent({
      template: '<span id="provide-test">{{value}}</span>',
      setup() {
        const value = inject('key')
        return { value }
      }
    })

    const wrapper = mount(ParentComponent, {
      slots: {
        default: () => h(TestComponent)
      }
    })

    expect(wrapper.find('#provide-test').text()).toBe('Hello')
  })
})

//https://test-utils.vuejs.org/guide/advanced/reusability-composition

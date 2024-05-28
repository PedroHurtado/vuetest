import { describe, it, expect, vi } from 'vitest'
import { defineComponent } from 'vue'
import { usePost } from '../usePost'
import { mount, flushPromises } from '@vue/test-utils'

// eslint-disable-next-line no-global-assign
fetch = vi.fn().mockResolvedValue(createFetchResponse({}))

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('usePost', () => {
  it('text user on mount', async () => {
    const TestComponent = defineComponent({
      props: {
        // Define props, to test the composable with different input arguments
        postId: {
          type: Number,
          required: true
        }
      },
      setup(props) {
        return {
          // Call the composable and expose all return values into our
          // component instance so we can access them with wrapper.vm
          ...usePost(props.postId)
        }
      }
    })
    const wrapper = mount(TestComponent, {
      props: {
        postId: 1
      }
    })
    expect(wrapper.vm.post).toBeUndefined()

    await flushPromises()

    expect(wrapper.vm.post).toEqual({})
  })
})

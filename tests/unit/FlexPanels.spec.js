import { shallowMount } from '@vue/test-utils'
import FlexPanels from '@/views/FlexPanels.vue'

describe('FlexPanels.vue', () => {
  it('renders proper title', () => {
    const title = 'Flex panels'
    const wrapper = shallowMount(FlexPanels, {
      propsData: {}
    })
    expect(wrapper.text()).toMatch(title)
  })
})

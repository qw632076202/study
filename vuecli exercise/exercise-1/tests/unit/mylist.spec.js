import { mount, shallowMount  } from '@vue/test-utils'
import mylist from '@/components/mylist'

describe('App', () => {

  it('has data', () => {
    expect(typeof mylist.data).toBe('function')
  })

  it('curIndex init val equal 0', () => {
    const wrapper = shallowMount(mylist, {
      propsData: {
        items: [1,2,3]
      }
    })
    expect(wrapper.vm.curIndex).toBe(0)
  })

  it('Down arrow key decrements quantity by 1', () => {
    const wrapper = mount(mylist, {
      propsData: {
        items: [1,2,3]
      }
    })
    console.log(wrapper.vm.curIndex)
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.curIndex).toBe(1)
    expect(wrapper.vm.func1()).toBe(1)
  })
})

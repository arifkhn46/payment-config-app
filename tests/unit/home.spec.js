import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Home', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Home, { localVue })
  })

  it('show merchant options', () => {
    expect(wrapper.text()).to.include('Floweraura')
    expect(wrapper.text()).to.include('Bakingo')
  })
})

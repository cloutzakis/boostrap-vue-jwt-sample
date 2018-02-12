import Vuex from 'vuex'
import {
  shallow,
  createLocalVue
} from '@vue/test-utils'
import register from '@/components/auth/register/register'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Register.vue', () => {
  beforeEach(() => {})

  describe('Register state', () => {
    it('should render register form', () => {
      const wrapper = shallow(register, {
        localVue
      })

      expect(wrapper.find('h3').text()).toEqual('Register')
    })
  })

  it('has a register method', () => {
    const wrapper = shallow(register, {
      localVue
    })

    expect(wrapper.vm.register()).toBeTruthy()
  })
})

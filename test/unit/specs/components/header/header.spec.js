import Vuex from 'vuex'
import {
  shallow,
  createLocalVue
} from '@vue/test-utils'
import header from '@/components/header/header'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('header.vue', () => {
  let store
  let getters
  let actions

  beforeEach(() => {
    getters = {
      isAuthenticated: () => arg => arg
    }
    actions = {
      tryAutoLogin: jest.fn(),
      getGuestToken: jest.fn(),
      logout: jest.fn()
    }
    store = new Vuex.Store({
      getters,
      actions
    })
  })

  it('should isAuthenticated return true', () => {
    const wrapper = shallow(header, {
      localVue,
      store
    })

    expect(wrapper.vm.isAuthenticated).toBeTruthy()
  })

  it('should have login option for guest', () => {
    store.hotUpdate({
      getters: {
        isAuthenticated: () => false
      }
    })

    const wrapper = shallow(header, {
      localVue,
      store
    })

    const routerLinks = wrapper.findAll('b-nav-item')

    expect(routerLinks.length).toEqual(1)
    expect(routerLinks.at(0).text()).toEqual('Login')
  })

  it('should have register option for guest', () => {
    store.hotUpdate({
      getters: {
        isAuthenticated: () => false
      }
    })

    const wrapper = shallow(header, {
      localVue,
      store
    })

    const routerLinks = wrapper.findAll('b-button')

    expect(routerLinks.length).toEqual(1)
    expect(routerLinks.at(0).text()).toEqual('REGISTER')
  })

  it('should have a logout option for user', () => {
    store.hotUpdate({
      getters: {
        isAuthenticated: () => true
      }
    })

    const wrapper = shallow(header, {
      localVue,
      store
    })

    const routerLinks = wrapper.findAll('b-nav-item')

    expect(routerLinks.length).toEqual(1)
    expect(routerLinks.at(0).text()).toEqual('Logout')
  })

  it('should dispatch logout action', () => {
    store.hotUpdate({
      getters: {
        isAuthenticated: () => true
      }
    })

    const wrapper = shallow(header, {
      localVue,
      store
    })

    wrapper.vm.logout()

    expect(actions.logout.mock.calls).toHaveLength(1)
  })
})

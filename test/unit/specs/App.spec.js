import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      tryAutoLogin: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('should get correct origin from path', () => {
    const $route = {
      fullPath: '/test/path'
    }

    const wrapper = shallow(App, {
      localVue,
      store,
      mocks: {
        $route
      }
    })

    expect(wrapper.vm.getOrigin).toEqual($route.fullPath)
  })

  it('should try to auto login on mount', () => {
    const $route = {
      fullPath: '/test/path'
    }

    shallow(App, {
      localVue,
      store,
      mocks: {
        $route
      }
    })

    expect(actions.tryAutoLogin.mock.calls).toHaveLength(1)
    expect(actions.tryAutoLogin.mock.calls[0][1]).toEqual({
      origin: $route.fullPath
    })
  })
})

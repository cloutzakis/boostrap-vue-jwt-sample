import Vuex from 'vuex'
import {
  shallow,
  createLocalVue
} from '@vue/test-utils'
import login from '@/components/auth/login/login'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('login.vue', () => {
  let store
  let actions
  beforeEach(() => {
    actions = {
      login: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  describe('login state', () => {
    it('should render login form', () => {
      const wrapper = shallow(login, {
        localVue,
        store
      })
      expect(wrapper.find('h3').text()).toEqual('Login')
    })

    it('should get correct origin from path', () => {
      const $route = {
        query: {
          redirect: '/test/path'
        }
      }

      const wrapper = shallow(login, {
        localVue,
        store,
        mocks: {
          $route
        }
      })

      expect(wrapper.vm.getOrigin).toEqual($route.query.redirect)
    })

    it('should dispatch login action with correct data and origin', () => {
      const $route = {
        query: {
          redirect: '/test/path'
        }
      }

      const wrapper = shallow(login, {
        localVue,
        store,
        mocks: {
          $route
        },
        data: {
          user: {
            username: 'user',
            password: 'password'
          }
        }
      })

      wrapper.vm.login()

      expect(actions.login.mock.calls).toHaveLength(1)
      expect(actions.login.mock.calls[0][1]).toEqual({
        user: {
          username: 'user',
          password: 'password'
        },
        origin: $route.query.redirect
      })
    })
  })

  it('should dispatch login action with correct data and no origin', () => {
    const $route = {}

    const wrapper = shallow(login, {
      localVue,
      store,
      mocks: {
        $route
      },
      data: {
        user: {
          username: 'user',
          password: 'password'
        }
      }
    })

    wrapper.vm.login()

    expect(actions.login.mock.calls).toHaveLength(1)
    expect(actions.login.mock.calls[0][1]).toEqual({
      user: {
        username: 'user',
        password: 'password'
      },
      origin: null
    })
  })
})

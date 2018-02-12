import Vuex from 'vuex'
import {
  shallow,
  createLocalVue
} from '@vue/test-utils'
import home from '@/components/home/home'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('home.vue', () => {
  let store
  let getters

  beforeEach(() => {
    getters = {
      isAuthenticated: () => true
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('should render correct content', () => {
    const wrapper = shallow(home, {
      localVue,
      store
    })

    expect(wrapper.find('h1').text()).toBe('Lets do it!!!')
  })
})

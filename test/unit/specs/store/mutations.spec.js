import mutations from '@/store/mutations'

describe('Store mutations.js', () => {
  it('should store guest token', () => {
    const state = { guestToken: null }

    mutations.setGuestToken(state, { id_token: 'sampleToken' })

    expect(state.guestToken).toEqual('sampleToken')
  })

  it('should login user', () => {
    const state = {
      user: {
        token: null
      }
    }

    mutations.loginUser(state, { token: 'sampleToken' })

    expect(state.user.token).toEqual('sampleToken')
  })

  it('should remove user data', () => {
    const state = {
      user: {
        token: 'sampleToken'
      }
    }

    mutations.logoutUser(state)

    expect(state.user.token).toEqual(null)
  })
})

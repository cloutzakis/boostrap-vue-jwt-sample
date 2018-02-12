import getters from '@/store/getters'

describe('Store getters.js', () => {
  it('user should be authorized', () => {
    const state = {
      user: {
        token: 'sampleToken'
      }
    }
    const result = getters.isAuthenticated(state)

    expect(result).toEqual(true)
  })
})

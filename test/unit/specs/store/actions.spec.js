import actions from '@/store/actions'
import axios from '@/axios/axios'
import router from '@/router/router'
import ls from 'store'

describe('Store actions.js', () => {
  let commitCounter
  let commitData = []
  let routerPushCounter
  let routerPushData

  let commit = (state, payload) => {
    commitData.push(payload)
    commitCounter += 1
  }

  router.replace = path => {
    routerPushData = path
    routerPushCounter += 1
  }

  beforeEach(() => {
    commitCounter = 0
    commitData = []
    routerPushCounter = 0
    routerPushData = ''
    ls.clearAll()
  })

  it('should try to login user from server request with no origin', () => {
    const user = {
      username: 'user',
      password: 'user@localhost'
    }

    actions.login({
      commit
    }, user).then(() => {
      expect(commitCounter).toBe(1)
      expect(commitData).toEqual([{
        token: 'mock_token'
      } // (commiting data from post request)
      ])

      expect(ls.get('id_token')).toEqual('mock_token')
      expect(axios.defaults.headers.common.Authorization).toEqual(
        'Bearer mock_token'
      )

      expect(routerPushCounter).toEqual(1)
      expect(routerPushData).toEqual('/home')
    })
  })

  it('should try to login user from server request with origin', () => {
    const user = {
      username: 'user',
      password: 'user@localhost'
    }

    actions
      .login({
        commit
      }, {
        user: user,
        origin: '/some/path'
      })
      .then(() => {
        expect(commitCounter).toBe(1)
        expect(commitData).toEqual([{
          token: 'mock_token'
        } // (commiting data from post request)
        ])

        expect(ls.get('id_token')).toEqual('mock_token')
        expect(axios.defaults.headers.common.Authorization).toEqual(
          'Bearer mock_token'
        )

        expect(routerPushCounter).toEqual(1)
        expect(routerPushData).toEqual('/some/path')
      })
  })

  it('should try to login user from store token with origin /some/path and no query.redirect', () => {
    ls.set('id_token', 'test_token')

    actions.tryAutoLogin({
      commit
    }, {
      origin: '/some/path'
    })

    expect(commitCounter).toBe(1)
    expect(commitData).toEqual([{
      token: 'test_token'
    } // (commiting data from post request)
    ])

    expect(routerPushCounter).toEqual(1)
    expect(routerPushData).toEqual('/some/path')
  })

  it('should try to login user from store token with origin /auth/login and no query.redirect', () => {
    ls.set('id_token', 'test_token')

    actions.tryAutoLogin({
      commit
    }, {
      origin: '/auth/login'
    })

    expect(commitCounter).toBe(1)
    expect(commitData).toEqual([{
      token: 'test_token'
    } // (commiting data from post request)
    ])

    expect(routerPushCounter).toEqual(1)
    expect(routerPushData).toEqual('/home')
  })

  it('should try to login user from store token with origin /auth/login and query.redirect', () => {
    ls.set('id_token', 'test_token')

    actions.tryAutoLogin({
      commit
    }, {
      origin: '/auth/login',
      query: {
        redirect: '/some/path'
      }
    })

    expect(commitCounter).toBe(1)
    expect(commitData).toEqual([{
      token: 'test_token'
    } // (commiting data from post request)
    ])

    expect(routerPushCounter).toEqual(1)
    expect(routerPushData).toEqual('/some/path')
  })

  it('should try to login user from store token without a valid token', () => {
    const result = actions.tryAutoLogin({
      commit
    })

    expect(result).toBe(false)

    // Verify no commits & dispatches were proceessed
    expect(commitCounter).toBe(0)
  })

  it('should logout the user', () => {
    ls.set('id_token', 'test_token')

    axios.defaults.headers.common.Authorization = 'test_token'

    actions.logout({
      commit
    })

    expect(commitCounter).toBe(1)
    // Validate commits occur without data parameters
    expect(commitData).toEqual([undefined])

    expect(ls.get('id_token')).toEqual(undefined)
    expect(axios.defaults.headers.common.Authorization).toEqual(undefined)

    expect(routerPushCounter).toEqual(1)
    expect(routerPushData).toEqual('/')
  })
})

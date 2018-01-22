import React, {Component} from 'react'
import Main from './Main'

import {connect} from 'react-redux'
import {setCurrentUser} from '../redux/actions/authAction'

import axios from 'axios'
import jwtDecode from 'jwt-decode'


class App extends Component {
  componentDidMount() {
    function setAuthorizationToken(token) {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`
      } else {
        delete axios.defaults.headers.common['Authorization']
      }
    }
    const jwtToken = sessionStorage.jwtToken

    if (jwtToken) {
      setAuthorizationToken(jwtToken)
      this.props.setCurrentUser(jwtDecode(jwtToken))
    }
  }
  
  render() {
    return (
        <Main {...this.props} />
    )
  }
}

export default connect(null, {setCurrentUser})(App)

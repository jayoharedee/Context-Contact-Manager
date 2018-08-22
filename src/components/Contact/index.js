import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

import { Consumer } from '../../context'

import Contacts from './Contacts'

class Contact extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          return (
            <Container>
              <Contacts contacts={state.contacts} />
            </Container>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {}

export default Contact

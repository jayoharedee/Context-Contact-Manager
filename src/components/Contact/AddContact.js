import React, { Component } from 'react'
import {
  Header,
  Segment,
  Container,
  Grid,
  Form,
  Button,
} from 'semantic-ui-react'
import axios from 'axios'

import UID from '../../common/UID'
import { Field } from '../FormFields/'
import isEmpty from '../../common/IsEmpty'

import { Consumer } from '../../context'

class AddContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      color: 'purple',
      name: '',
      phone: '',
      email: '',
      src:
        'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
      hideInfo: false,
      errors: {},
    }

    this.addContact = this.addContact.bind(this)
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value })

  addContact = async (payload, dispatch) => {
    const { name, email, phone, id } = this.state

    let errors = {
      name: isEmpty(name) ? 'Name field is required' : '',
      email: isEmpty(email) ? 'Name field is required' : '',
      phone: isEmpty(phone) ? 'Name field is required' : '',
    }

    const noErrors =
      isEmpty(errors.name) &&
      isEmpty(errors.email) &&
      isEmpty(errors.phone)

    if (!noErrors) {
      this.setState({ errors })
      return undefined
    }

    errors = {}

    const newContact = { name, email, phone }

    const addUser = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    )

    dispatch({
      type: 'ADD_CONTACT',
      payload: addUser.data,
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <Consumer>
        {state => {
          const { dispatch } = state
          const { name, email, phone, errors } = this.state

          return (
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2" attached="top">
                    Add a contact
                  </Header>
                  <Segment attached>
                    <Form>
                      <Field
                        label="Your Name"
                        placeholder="Enter your name..."
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        error={errors.name}
                      />
                      <Field
                        label="Your Email"
                        placeholder="Enter your email..."
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        error={errors.email}
                      />
                      <Field
                        label="Your Phone"
                        placeholder="Enter your number..."
                        name="phone"
                        value={phone}
                        type={'phone'}
                        onChange={this.handleChange}
                        error={errors.phone}
                      />
                      <Form.Field />
                      <Button
                        type="submit"
                        onClick={this.addContact.bind(
                          this,
                          state,
                          dispatch
                        )}
                      >
                        Submit
                      </Button>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
